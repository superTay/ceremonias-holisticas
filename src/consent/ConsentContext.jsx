import { createContext, useContext, useState, useCallback, useEffect } from 'react'

// Gestión de consentimiento de cookies conforme a la Guía AEPD:
//   · No se carga ningún tercero (Cal.eu) hasta acción afirmativa del usuario.
//   · Categorías: "necesarias" (siempre activas, técnicas) y "thirdParty"
//     (funcionales/terceros = el embed de reservas Cal.eu).
//   · La decisión se persiste en localStorage; mientras no exista, el banner
//     se muestra y `calAllowed` es false (rechazo por defecto, sin precasillas).
//
// Estado persistido: { v, thirdParty: boolean, ts: ISO }. `decided` = existe registro.
const STORAGE_KEY = 'blanca-consent'
const VERSION = 1

const ConsentContext = createContext(null)

function readStored() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data?.v !== VERSION) return null
    return { thirdParty: Boolean(data.thirdParty), decided: true }
  } catch {
    return null
  }
}

function persist(thirdParty) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      // ts: sello de la decisión, exigible como prueba del consentimiento (RGPD).
      JSON.stringify({ v: VERSION, thirdParty, ts: new Date().toISOString() })
    )
  } catch {
    /* almacenamiento no disponible: el banner reaparecerá en la próxima visita */
  }
}

export function ConsentProvider({ children }) {
  const stored = readStored()
  const [thirdParty, setThirdParty] = useState(stored?.thirdParty ?? false)
  const [decided, setDecided] = useState(stored?.decided ?? false)
  // Panel "Configurar": reabrible desde el banner y desde el footer.
  const [settingsOpen, setSettingsOpen] = useState(false)

  const commit = useCallback((value) => {
    setThirdParty(value)
    setDecided(true)
    setSettingsOpen(false)
    persist(value)
  }, [])

  const acceptAll = useCallback(() => commit(true), [commit])
  const rejectAll = useCallback(() => commit(false), [commit])
  // Click-to-load: el usuario pide explícitamente cargar el calendario → consentimiento válido.
  const allowCal = useCallback(() => commit(true), [commit])
  const openSettings = useCallback(() => setSettingsOpen(true), [])
  const closeSettings = useCallback(() => setSettingsOpen(false), [])

  // El banner inferior se muestra mientras no haya decisión y el panel esté cerrado.
  const bannerVisible = !decided && !settingsOpen

  const value = {
    thirdParty,
    calAllowed: thirdParty,
    decided,
    bannerVisible,
    settingsOpen,
    acceptAll,
    rejectAll,
    allowCal,
    savePreferences: commit,
    openSettings,
    closeSettings,
  }

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsent debe usarse dentro de <ConsentProvider>')
  return ctx
}

// Efecto utilitario: ejecuta `onAllowed` una sola vez cuando se concede el
// consentimiento de terceros (para inicializar el embed de Cal.eu).
export function useWhenCalAllowed(onAllowed) {
  const { calAllowed } = useConsent()
  useEffect(() => {
    if (calAllowed) onAllowed?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calAllowed])
}

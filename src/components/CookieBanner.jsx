import { useState, useEffect } from 'react'
import { LangLink as Link } from './LangLink'
import { Cookie, X } from 'lucide-react'
import { useConsent } from '../consent/ConsentContext'
import { useContent } from '../i18n/useContent'

// Banner de consentimiento conforme a la Guía AEPD:
//   · "Aceptar" y "Rechazar" con el MISMO peso visual (nada de resaltar solo aceptar).
//   · "Configurar" como enlace secundario que abre el panel de categorías.
//   · Sin casillas premarcadas: la categoría de terceros arranca desactivada.
//   · No hay muro de cookies: el sitio funciona se acepte o se rechace.
export default function CookieBanner() {
  const {
    bannerVisible,
    settingsOpen,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
    thirdParty,
  } = useConsent()
  const { consent } = useContent()

  if (!bannerVisible && !settingsOpen) return null

  return (
    <>
      {bannerVisible && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label={consent.banner.title}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-border-subtle bg-surface-primary/95 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="container-page flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <Cookie size={20} className="mt-0.5 flex-none text-accent-cacao" />
              <p className="max-w-2xl text-sm leading-relaxed text-foreground-secondary">
                {consent.banner.body}{' '}
                <Link
                  to="/legal/cookies"
                  className="link-underline font-medium text-accent-cacao"
                >
                  {consent.banner.policyLink}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {/* Aceptar y Rechazar: mismo estilo = mismo peso (exigencia AEPD). */}
              <button type="button" onClick={rejectAll} className="btn-cookie">
                {consent.banner.reject}
              </button>
              <button type="button" onClick={acceptAll} className="btn-cookie">
                {consent.banner.accept}
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="link-underline text-sm font-medium text-foreground-muted"
              >
                {consent.banner.configure}
              </button>
            </div>
          </div>
        </div>
      )}

      {settingsOpen && (
        <SettingsPanel
          consent={consent}
          initialThirdParty={thirdParty}
          onSave={savePreferences}
          onClose={closeSettings}
        />
      )}
    </>
  )
}

function SettingsPanel({ consent, initialThirdParty, onSave, onClose }) {
  const s = consent.settings
  const [thirdParty, setThirdParty] = useState(initialThirdParty)

  // Cerrar con Escape.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-foreground-primary/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        className="w-full max-w-lg overflow-hidden rounded-t-token-xl bg-surface-primary shadow-2xl sm:rounded-token-xl"
      >
        <div className="flex items-center justify-between border-b border-border-subtle px-6 py-4">
          <h2
            id="cookie-settings-title"
            className="heading-display text-xl text-foreground-primary"
          >
            {s.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={s.close}
            className="rounded-full p-1.5 text-foreground-muted transition-colors hover:bg-surface-secondary hover:text-foreground-primary"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto px-6 py-5">
          <p className="text-sm leading-relaxed text-foreground-secondary">{s.intro}</p>

          {/* Necesarias: siempre activas, no desactivables. */}
          <Category
            title={s.necessaryTitle}
            desc={s.necessaryDesc}
            checked
            disabled
            badge={s.alwaysOn}
          />
          {/* Terceros (Cal.eu): desactivada por defecto. */}
          <Category
            title={s.thirdPartyTitle}
            desc={s.thirdPartyDesc}
            checked={thirdParty}
            onChange={() => setThirdParty((v) => !v)}
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-border-subtle px-6 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => onSave(false)}
            className="btn-cookie"
          >
            {s.rejectAll}
          </button>
          <button
            type="button"
            onClick={() => onSave(thirdParty)}
            className="btn-primary"
          >
            {s.save}
          </button>
        </div>
      </div>
    </div>
  )
}

function Category({ title, desc, checked, disabled, onChange, badge }) {
  return (
    <div className="mt-5 flex items-start justify-between gap-4 border-t border-border-subtle pt-5">
      <div>
        <h3 className="text-sm font-semibold text-foreground-primary">{title}</h3>
        <p className="mt-1 text-[13px] leading-relaxed text-foreground-secondary">
          {desc}
        </p>
      </div>
      {badge ? (
        <span className="flex-none rounded-full bg-accent-cacao/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-cacao">
          {badge}
        </span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={title}
          disabled={disabled}
          onClick={onChange}
          className={`relative h-6 w-11 flex-none rounded-full transition-colors ${
            checked ? 'bg-accent-cacao' : 'bg-foreground-muted'
          } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-surface-primary shadow transition-transform ${
              checked ? 'translate-x-[22px]' : 'translate-x-0.5'
            }`}
          />
        </button>
      )}
    </div>
  )
}

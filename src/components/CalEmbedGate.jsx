import { CalendarCheck, Lock } from 'lucide-react'
import { useConsent } from '../consent/ConsentContext'
import { useContent } from '../i18n/useContent'

// Envuelve un embed de Cal.eu. Hasta que el usuario consiente (banner) o pulsa
// "Cargar calendario" (click-to-load), NO se renderiza el embed ni se carga
// app.cal.eu/embed/embed.js → ninguna cookie de terceros antes del consentimiento
// (art. 22.2 LSSI-CE). `children` es el embed real, que solo se monta tras consentir.
export default function CalEmbedGate({ children, className = '' }) {
  const { calAllowed, allowCal } = useConsent()
  const { consent } = useContent()
  const g = consent.gate

  if (calAllowed) return children

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 px-6 py-16 text-center ${className}`}
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-cacao/10">
        <Lock size={26} className="text-accent-cacao" />
      </span>
      <h3 className="heading-display text-xl text-foreground-primary">{g.title}</h3>
      <p className="max-w-md text-[15px] leading-relaxed text-foreground-secondary">
        {g.body}
      </p>
      <button type="button" onClick={allowCal} className="btn-primary mt-2">
        <CalendarCheck size={18} />
        {g.load}
      </button>
      <p className="max-w-sm text-[11px] leading-snug text-foreground-muted">
        {g.privacyNote}
      </p>
    </div>
  )
}

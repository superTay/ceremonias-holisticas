import { useLocation } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'
import { LangLink } from './LangLink'
import { useContent } from '../i18n/useContent'

// Ribbon global del evento especial. Vive en la tira superior del Navbar y solo
// se monta cuando `event.active` (shared.js); si no, el Navbar muestra el anuncio
// genérico de siempre. En Home hace scroll suave a la sección del evento
// (#corazon-abundancia); en el resto de páginas navega a Home, donde la sección
// aparece justo bajo el hero. Mismo look que el announcement (bg-accent-secondary).
export default function EventRibbon() {
  const { event } = useContent()
  const { pathname } = useLocation()
  const isHome = pathname === '/' || pathname === '/en'

  const inner = (
    <span className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[13px] font-medium tracking-wide text-foreground-on-deep">
      <Sparkles size={14} className="flex-none opacity-80" aria-hidden />
      <span>{event.ribbon.text}</span>
      <span className="inline-flex items-center gap-1 font-semibold underline decoration-foreground-on-deep/40 underline-offset-4 transition-colors group-hover:decoration-foreground-on-deep">
        {event.ribbon.cta}
        <ArrowRight size={13} className="flex-none" aria-hidden />
      </span>
    </span>
  )

  const className =
    'group block bg-accent-secondary px-5 py-3 text-center transition-colors hover:bg-accent-secondary/90'

  if (isHome) {
    return (
      <a href="#corazon-abundancia" className={className}>
        {inner}
      </a>
    )
  }

  return (
    <LangLink to="/" className={className}>
      {inner}
    </LangLink>
  )
}

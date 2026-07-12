import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import { contact as contactData } from '../data/shared'
import Reveal from './Reveal'

// Página de contacto: WhatsApp como vía principal (no hay reserva de llamada).
// Para cualquier ceremonia a medida, la persona escribe a Blanca por WhatsApp.
export default function ContactCTA() {
  const { contact } = useContent()

  return (
    <section id="contacto" className="bg-surface-primary py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-prose text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-accent-cacao/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-cacao-text">
              {contact.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-display mt-5 text-[clamp(2rem,4vw,3.4rem)] text-foreground-primary">
              {contact.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-foreground-secondary">
              {contact.sub}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-9 text-base"
            >
              <MessageCircle size={20} />
              {contact.whatsappCta}
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm text-foreground-muted">
              {contact.responseNote}
            </p>
          </Reveal>

          {/* Vías secundarias — el teléfono es el propio WhatsApp de arriba */}
          <Reveal delay={0.25}>
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                {contact.orLabel}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-foreground-secondary">
                <a
                  href={`mailto:${contactData.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent-cacao-text"
                >
                  <Mail size={15} className="flex-none text-accent-clay" />
                  {contactData.email}
                </a>
                <a
                  href={contactData.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent-cacao-text"
                >
                  <Instagram size={15} className="flex-none text-accent-clay" />
                  {contactData.instagram.handle}
                </a>
              </div>
            </div>
          </Reveal>

          {contact.locationNote && (
            <Reveal delay={0.3}>
              <p className="mx-auto mt-10 flex max-w-xl items-start gap-2 rounded-token-lg bg-surface-secondary/60 px-4 py-3 text-left text-sm leading-relaxed text-foreground-secondary">
                <MapPin size={16} className="mt-0.5 flex-none text-accent-cacao" />
                <span>{contact.locationNote}</span>
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

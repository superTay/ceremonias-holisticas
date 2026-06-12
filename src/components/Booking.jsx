import { useEffect, useState } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useTranslation } from 'react-i18next'
import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import { useConsent } from '../consent/ConsentContext'
import CalEmbedGate from './CalEmbedGate'
import Reveal from './Reveal'

const NS = 'reserva'

export default function Booking() {
  const { booking } = useContent()
  const { i18n } = useTranslation('content')
  const lang = i18n.resolvedLanguage || i18n.language
  const { calAllowed } = useConsent()
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    // Sin consentimiento de terceros no tocamos Cal.eu: getCalApi descargaría
    // embed.js de app.cal.eu y fijaría cookies antes de la acción del usuario.
    if (!calAllowed) return
    let active = true
    ;(async () => {
      // embedJsUrl fuerza la región europea (cal.eu); sin esto el embed va a cal.com y da 404.
      const cal = await getCalApi({ namespace: NS, embedJsUrl: booking.embedJsUrl })
      if (!active) return
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: booking.brandColor } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
      cal('on', {
        action: 'bookingSuccessful',
        callback: () => setConfirmed(true),
      })
    })()
    return () => {
      active = false
    }
    // brandColor es estable (shared.js); reinit solo si cambia el consentimiento.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calAllowed])

  return (
    <section id="reservar" className="bg-surface-primary py-24 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-prose text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-accent-cacao/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-cacao">
              {booking.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-display mt-5 text-[clamp(2rem,4vw,3.4rem)] text-foreground-primary">
              {booking.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-foreground-secondary">
              {booking.sub}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-token-xl border border-border-subtle bg-surface-primary shadow-lg">
            {confirmed ? (
              <div className="flex flex-col items-center px-6 py-16 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-cacao/10">
                  <CheckCircle2 size={30} className="text-accent-cacao" />
                </span>
                <h3 className="heading-display mt-6 text-2xl text-foreground-primary">
                  {booking.success.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground-secondary">
                  {booking.success.body}
                </p>
                <a
                  href={booking.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8"
                >
                  <MessageCircle size={18} />
                  {booking.success.whatsappCta}
                </a>
              </div>
            ) : (
              <CalEmbedGate className="min-h-[420px]">
                <div className="h-[640px] w-full">
                  <Cal
                    namespace={NS}
                    calLink={booking.calLink}
                    calOrigin={booking.calOrigin}
                    config={{ layout: 'month_view', locale: lang }}
                    style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                  />
                </div>
              </CalEmbedGate>
            )}
          </div>
        </Reveal>

        {!confirmed && (
          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-sm text-foreground-muted">
              {booking.altPrefix}{' '}
              <a
                href={booking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-accent-cacao"
              >
                {booking.altCta}
              </a>
              .
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}

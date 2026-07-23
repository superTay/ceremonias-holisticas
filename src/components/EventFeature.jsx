import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  BadgeEuro,
  Shirt,
  Check,
  ArrowRight,
} from 'lucide-react'
import Reveal from './Reveal'
import { useContent } from '../i18n/useContent'

// Sección destacada del evento especial «Corazón en Abundancia».
// Se monta en Home (tras el hero) solo si `event.active` (shared.js). Banda oscura
// (surface-deep) a propósito: rompe el crema de la página para que el evento se lea
// como un momento único, sin gritar. El CTA apunta a `event.ctaUrl` (hoy WhatsApp
// pre-rellenado; mañana el event-type de Cal.eu, cambiando solo shared.js).
export default function EventFeature() {
  const { event } = useContent()
  if (!event.active) return null

  const details = [
    { icon: CalendarDays, label: event.dateLabel, value: event.dateText },
    { icon: Clock, label: event.timeLabel, value: event.timeText },
    { icon: MapPin, label: event.locationLabel, value: event.locationText },
    { icon: BadgeEuro, label: event.priceLabel, value: event.price },
    { icon: Users, label: event.seatsLabel, value: event.seatsText },
    { icon: Shirt, label: event.dressCodeLabel, value: event.dressCodeText },
  ]

  return (
    <section
      id="corazon-abundancia"
      className="scroll-mt-28 bg-surface-deep py-24 text-foreground-on-deep lg:py-28"
    >
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Columna de contenido */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-clay">
              {event.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-display mt-5 text-foreground-on-deep text-[clamp(2rem,4.2vw,3.2rem)]">
              {event.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-heading text-lg italic text-accent-clay">
              {event.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-foreground-on-deep/75">
              {event.lead}
            </p>
          </Reveal>

          {/* Programa */}
          <Reveal delay={0.15}>
            <p className="eyebrow mt-10 text-accent-clay">{event.programTitle}</p>
            <ul className="mt-5 space-y-3">
              {event.program.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-clay/15">
                    <Check size={12} className="text-accent-clay" aria-hidden />
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground-on-deep/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* CTA + nota de depósito */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={event.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {event.cta}
                <ArrowRight size={16} />
              </a>
              <p className="max-w-xs text-[13px] leading-snug text-foreground-on-deep/55">
                {event.depositNote}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Columna visual — imagen + panel de detalles */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1} blur={6}>
            <div className="relative overflow-hidden rounded-token-xl border border-white/10 shadow-2xl">
              <div className="aspect-[4/5]">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-surface-deep/80 to-transparent"
              />
              <span className="absolute left-4 top-4 rounded-full bg-accent-cacao-action px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground-on-deep">
                {event.seatsText}
              </span>
            </div>
          </Reveal>

          {/* Panel de detalles */}
          <Reveal delay={0.15}>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 rounded-token-xl border border-white/10 bg-white/[0.03] p-6">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={16} className="mt-0.5 flex-none text-accent-clay" aria-hidden />
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-on-deep/50">
                      {label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-foreground-on-deep">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

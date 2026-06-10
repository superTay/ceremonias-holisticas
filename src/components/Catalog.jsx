import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getCalApi } from '@calcom/embed-react'
import { useTranslation } from 'react-i18next'
import { Check, CalendarCheck, MessageCircle } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import Reveal from './Reveal'

// Namespace propio del catálogo (independiente del embed inline de la llamada de
// diseño en Booking, que usa 'reserva'). Aquí solo abrimos popups de ceremonias.
const NS = 'ceremonias'

export default function Catalog() {
  const { catalog, booking } = useContent()
  const { i18n } = useTranslation('content')
  const lang = i18n.resolvedLanguage || i18n.language
  // Filtro por índice (no por etiqueta): así sobrevive al cambio de idioma sin quedarse vacío.
  const [activeIdx, setActiveIdx] = useState(0)

  // Inicializa el embed de Cal.eu una vez. Forzamos la región europea con
  // embedJsUrl (en getCalApi) y calOrigin (en cada botón data-cal-origin),
  // o el popup devolvería 404 contra cal.com. El brandColor hereda la marca.
  useEffect(() => {
    let active = true
    ;(async () => {
      const cal = await getCalApi({
        namespace: NS,
        embedJsUrl: booking.embedJsUrl,
      })
      if (!active) return
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: booking.brandColor } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
    return () => {
      active = false
    }
    // embedJsUrl/brandColor son estables (shared.js); inicializamos una sola vez.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Config serializada para los botones data-cal-config (locale = idioma activo).
  const calConfig = useMemo(
    () => JSON.stringify({ layout: 'month_view', locale: lang }),
    [lang]
  )

  const cards = useMemo(() => {
    if (activeIdx === 0) return catalog.cards
    return catalog.cards.filter((c) => c.category === catalog.filters[activeIdx])
  }, [activeIdx, catalog])

  return (
    <section
      id="ceremonias"
      className="relative bg-surface-primary py-24 lg:py-32"
    >
      <div className="container-page">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <span className="inline-block rounded-full border border-border-subtle bg-surface-secondary/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-primary">
            {catalog.caption}
          </span>
          <h2 className="heading-display mt-6 text-[clamp(2rem,4vw,3.4rem)]">
            {catalog.headline}
          </h2>
          <p className="mt-5 text-lg text-foreground-secondary">
            {catalog.sub}
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap gap-2">
            {catalog.filters.map((f, idx) => {
              const isActive = activeIdx === idx
              return (
                <button
                  key={f}
                  onClick={() => setActiveIdx(idx)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-cacao-action text-foreground-on-deep shadow-md'
                      : 'border border-border-subtle bg-surface-primary text-foreground-secondary hover:border-accent-primary hover:text-foreground-primary'
                  }`}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {cards.map((card, i) => (
              <motion.article
                key={card.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-token-xl border border-border-subtle bg-surface-primary transition-all duration-500 hover:-translate-y-1 hover:border-accent-clay/60 hover:shadow-2xl"
              >
                {/* Image block — uses real photo if available, otherwise gradient placeholder */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    card.image ? '' : `bg-gradient-to-br ${card.hue}`
                  }`}
                >
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.imageAlt || card.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <CardOrnament />
                  )}
                  <div className="absolute left-4 top-4 rounded-full bg-accent-cacao-action px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground-on-deep">
                    {card.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-heading text-2xl text-foreground-primary">
                    {card.title}
                  </h3>
                  {card.claim && (
                    <p className="mt-3 font-heading italic text-base text-foreground-primary">
                      {card.claim}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {card.body}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {card.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[13px] text-foreground-secondary"
                      >
                        <Check
                          size={14}
                          className="mt-0.5 flex-none text-accent-primary"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="my-5 h-px w-full bg-border-subtle" />

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[13px] font-medium text-foreground-primary">
                      {card.price}
                    </span>
                    {card.bookable ? (
                      // Reservable: popup de Cal.eu (data-cal-*). Botón sólido = acción primaria.
                      <button
                        type="button"
                        data-cal-namespace={NS}
                        data-cal-link={card.calLink}
                        data-cal-origin={booking.calOrigin}
                        data-cal-config={calConfig}
                        className="inline-flex flex-none items-center gap-1.5 rounded-token-lg bg-accent-cacao-action px-4 py-2 text-xs font-semibold text-foreground-on-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-secondary"
                      >
                        <CalendarCheck size={14} />
                        {catalog.bookCta}
                      </button>
                    ) : (
                      // A medida (bodas/lazo/ixchel): WhatsApp pre-rellenado. Botón outline = "hablemos antes".
                      <a
                        href={card.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-none items-center gap-1.5 rounded-token-lg border border-accent-cacao px-4 py-2 text-xs font-semibold text-accent-cacao-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-cacao-action hover:text-foreground-on-deep"
                      >
                        <MessageCircle size={14} />
                        {catalog.bespokeCta}
                      </a>
                    )}
                  </div>
                  <p className="mt-3 text-[11px] leading-snug text-foreground-muted">
                    {card.bookable ? catalog.depositNote : catalog.bespokeNote}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Disclaimer anti-presión */}
        {catalog.disclaimer && (
          <Reveal delay={0.15}>
            <p className="mt-10 text-center text-sm italic text-foreground-muted">
              {catalog.disclaimer}
            </p>
          </Reveal>
        )}

        {/* CTA banner */}
        <Reveal delay={0.2} className="mt-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-token-xl border border-border-subtle bg-surface-secondary/60 p-8 sm:flex-row sm:items-center lg:p-10">
            <div>
              <h3 className="font-heading text-2xl text-foreground-primary lg:text-3xl">
                {catalog.ctaTitle}
              </h3>
              <p className="mt-2 max-w-xl text-foreground-secondary">
                {catalog.ctaSub}
              </p>
            </div>
            <Link to="/contact" className="btn-primary flex-none">
              {catalog.ctaBtn}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CardOrnament() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full opacity-25 transition-opacity duration-700 group-hover:opacity-40"
      aria-hidden
    >
      {[120, 90, 60].map((r, i) => (
        <circle
          key={i}
          cx="320"
          cy="80"
          r={r}
          fill="none"
          stroke="#F5F2E9"
          strokeWidth="0.6"
          strokeDasharray={i ? '2 6' : '0'}
        />
      ))}
      <path
        d="M0 250 Q100 220 200 240 T400 230"
        fill="none"
        stroke="#F5F2E9"
        strokeWidth="0.7"
        opacity="0.5"
      />
    </svg>
  )
}

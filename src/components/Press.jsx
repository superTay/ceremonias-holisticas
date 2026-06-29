import { useRef } from 'react'
import { Newspaper, ChevronLeft, ChevronRight } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import Reveal from './Reveal'

// Prensa en carrusel horizontal (scroll-snap, sin dependencias). Más compacto que el
// stack vertical anterior: cards de ancho fijo que se deslizan, escalable a N recortes.
// Las flechas hacen scrollBy del ancho de una card; en móvil basta el swipe nativo.
export default function Press() {
  const { press } = useContent()
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-press-card]')
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const items = press.items ?? []
  const showNav = items.length > 1

  return (
    <section id="prensa" className="relative bg-surface-secondary py-20 lg:py-24">
      <div className="container-page">
        {/* Header + nav */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">{press.eyebrow}</span>
            <h2 className="heading-display mt-4 text-[clamp(1.6rem,3vw,2.4rem)]">
              {press.headline}
            </h2>
            <p className="mt-4 text-base text-foreground-secondary">{press.sub}</p>
          </div>

          {showNav && (
            <div className="flex flex-none gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label={press.prevLabel || 'Anterior'}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-surface-primary text-foreground-primary transition-all duration-300 hover:border-accent-cacao hover:text-accent-cacao-text"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label={press.nextLabel || 'Siguiente'}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-surface-primary text-foreground-primary transition-all duration-300 hover:border-accent-cacao hover:text-accent-cacao-text"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </Reveal>

        {/* Carrusel */}
        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => (
              <article
                key={i}
                data-press-card
                className="flex w-[85%] flex-none snap-start flex-col overflow-hidden rounded-token-xl border border-border-subtle bg-surface-primary sm:w-[420px]"
              >
                {/* Recorte de prensa */}
                <div className="aspect-[3/2] overflow-hidden border-b border-border-subtle bg-surface-secondary">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Cita y medio */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-accent-cacao">
                    <Newspaper size={16} className="flex-none" />
                    <span className="font-heading text-lg">{item.outlet}</span>
                  </div>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                    {item.context}
                  </p>

                  {item.quote ? (
                    <>
                      <p className="mt-4 font-heading text-lg leading-snug text-foreground-primary">
                        “{item.quote}”
                      </p>
                      {item.author && (
                        <p className="mt-3 text-sm font-medium text-foreground-secondary">
                          — {item.author}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="mt-4 text-base leading-relaxed text-foreground-secondary">
                      {item.summary}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

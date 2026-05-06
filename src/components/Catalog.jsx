import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { catalog } from '../data/content'
import Reveal from './Reveal'

export default function Catalog() {
  const [active, setActive] = useState('Todas')

  const cards = useMemo(() => {
    if (active === 'Todas') return catalog.cards
    return catalog.cards.filter((c) => c.title === active)
  }, [active])

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
            {catalog.filters.map((f) => {
              const isActive = active === f
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-cacao text-foreground-on-deep shadow-md'
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
                {/* Image placeholder block */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${card.hue}`}
                >
                  <CardOrnament />
                  <div className="absolute left-4 top-4 rounded-full bg-accent-cacao px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground-on-deep">
                    {card.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-heading text-2xl text-foreground-primary">
                    {card.title}
                  </h3>
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

                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-foreground-primary">
                      {card.price}
                    </span>
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent-primary transition-all duration-300 group-hover:gap-2"
                    >
                      Consultar Disponibilidad
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

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
            <a href="#contacto" className="btn-primary flex-none">
              {catalog.ctaBtn}
            </a>
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

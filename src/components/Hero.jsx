import { ArrowRight, Calendar, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { hero, categories } from '../data/content'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-surface-primary"
    >
      {/* Decorative organic ornament behind hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-accent-clay/20 via-accent-primary/10 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-accent-cacao/15 to-transparent blur-3xl"
      />

      <div className="container-page relative grid grid-cols-1 gap-14 pb-24 pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-28">
        {/* Left column — copy */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="heading-display mt-6 text-[clamp(2.4rem,5.4vw,4.4rem)]"
          >
            {hero.headline.split('umbral').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="italic text-accent-cacao">umbral</span>
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-prose text-lg leading-relaxed text-foreground-secondary"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contacto" className="btn-primary">
              {hero.primaryCta}
              <ArrowRight size={16} />
            </a>
            <a
              href="#ceremonias"
              className="link-underline text-sm font-medium text-foreground-primary"
            >
              {hero.secondaryCta} →
            </a>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground-secondary">
            {hero.badges.map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-clay" />
                {b}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right column — visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          {/* Photo placeholder — gradient + ornamental SVG to evoke ritual */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-token-xl bg-gradient-to-br from-[#7D6B3D] via-[#5C3A21] to-[#2D2926] shadow-2xl">
            <RitualOrnament />
            {/* Next ceremony chip */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-surface-primary/95 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-accent-cacao" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-cacao">
                {hero.nextCeremony.label}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-token-lg bg-surface-primary/95 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <Calendar size={18} className="mt-0.5 text-accent-cacao" />
                <div>
                  <p className="font-heading text-xl text-foreground-primary">
                    {hero.nextCeremony.date}
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    {hero.nextCeremony.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating proof quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute -bottom-6 -left-6 hidden max-w-[260px] rounded-token-xl border border-border-subtle bg-surface-primary p-4 shadow-xl sm:block"
          >
            <Quote size={18} className="text-accent-clay" />
            <p className="mt-2 text-sm italic text-foreground-secondary">
              {hero.proof}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Categories strip */}
      <CategoriesStrip />
    </section>
  )
}

function CategoriesStrip() {
  return (
    <div className="border-y border-border-subtle bg-surface-secondary/40 py-5">
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...categories, ...categories, ...categories].map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-foreground-secondary"
            >
              <span className="text-accent-clay">✦</span>
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function RitualOrnament() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full opacity-30"
      aria-hidden
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F5F2E9" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F5F2E9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#glow)" />
      {/* Concentric mandala-like circles */}
      {[180, 140, 100, 60].map((r, i) => (
        <circle
          key={i}
          cx="200"
          cy="220"
          r={r}
          fill="none"
          stroke="#F5F2E9"
          strokeWidth="0.8"
          strokeDasharray={i % 2 ? '2 6' : '0'}
          opacity={0.55 - i * 0.08}
        />
      ))}
      {/* Cross axis */}
      <line
        x1="20"
        y1="220"
        x2="380"
        y2="220"
        stroke="#F5F2E9"
        strokeWidth="0.6"
        opacity="0.4"
      />
      <line
        x1="200"
        y1="40"
        x2="200"
        y2="400"
        stroke="#F5F2E9"
        strokeWidth="0.6"
        opacity="0.4"
      />
      {/* Sun rays */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12
        const x1 = 200 + Math.cos(a) * 195
        const y1 = 220 + Math.sin(a) * 195
        const x2 = 200 + Math.cos(a) * 215
        const y2 = 220 + Math.sin(a) * 215
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#F5F2E9"
            strokeWidth="1.4"
            opacity="0.5"
          />
        )
      })}
    </svg>
  )
}

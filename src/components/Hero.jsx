import { ArrowRight, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useContent } from '../i18n/useContent'

export default function Hero() {
  const { hero, categories } = useContent()

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
            {hero.headline.split(hero.headlineHighlight).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="italic text-accent-cacao">
                    {hero.headlineHighlight}
                  </span>
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
            <Link to="/contact" className="btn-primary">
              {hero.primaryCta}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/ceremonies"
              className="link-underline text-sm font-medium text-foreground-primary"
            >
              {hero.secondaryCta} →
            </Link>
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-token-xl bg-[#2D2926] shadow-2xl">
            <img
              src="/hero-entrada.webp"
              alt="Blanca Coutiño sostiene en el cuenco de las manos una ofrenda dorada del mar, vestido de lino con bordado, frente a las olas turquesa del Caribe"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
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
      <CategoriesStrip categories={categories} />
    </section>
  )
}

function CategoriesStrip({ categories }) {
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


import { useRef } from 'react'
import { ArrowRight, Quote } from 'lucide-react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { LangLink as Link } from './LangLink'
import { useContent } from '../i18n/useContent'
import { EASE, wordContainer, wordChild } from '../lib/motion'

export default function Hero() {
  const { hero, categories } = useContent()
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()

  // Parallax sutil: al hacer scroll, la imagen "se queda atrás" (baja un 5%,
  // dentro del margen que deja el settle de escala 1.1) y los blobs suben.
  // Solo transforms → compositor; con reduced-motion no se aplican.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface-primary"
    >
      {/* Decorative organic ornament behind hero */}
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: blobY }}
        className="pointer-events-none absolute -right-32 top-10 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-accent-clay/20 via-accent-primary/10 to-transparent blur-3xl"
      />
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: blobY }}
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-accent-cacao/15 to-transparent blur-3xl"
      />

      <div className="container-page relative grid grid-cols-1 gap-14 pb-24 pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-28">
        {/* Left column — copy */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow"
          >
            {hero.eyebrow}
          </motion.p>

          <HeroHeadline
            headline={hero.headline}
            highlight={hero.headlineHighlight}
            reduced={reduced}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="mt-7 max-w-prose text-lg leading-relaxed text-foreground-secondary"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
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
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-clay" />
                {b}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right column — visual card.
            La imagen pinta visible desde el primer frame (LCP): el efecto de
            entrada lo hace una cortina crema que se retira hacia arriba +
            un settle de escala one-shot. Nada de opacity 0 sobre el LCP. */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-[340px] overflow-hidden rounded-token-xl bg-surface-deep shadow-2xl lg:ml-auto">
            <motion.img
              src="/hero-entrada.webp"
              alt="Blanca Coutiño sostiene en el cuenco de las manos una ofrenda dorada del mar, vestido de lino con bordado, frente a las olas turquesa del Caribe"
              className="absolute inset-0 h-full w-full object-cover"
              style={reduced ? undefined : { y: imgY }}
              initial={reduced ? false : { scale: 1.18 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 2.2, ease: EASE }}
              loading="eager"
              fetchpriority="high"
            />
            {!reduced && (
              <motion.div
                aria-hidden
                className="absolute inset-0 origin-top bg-surface-secondary"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
              />
            )}
          </div>

          {/* Floating proof quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="absolute -bottom-6 -left-6 hidden max-w-[260px] rounded-token-xl border border-border-subtle bg-surface-primary p-4 shadow-xl sm:block"
          >
            <Quote size={18} className="text-accent-clay" />
            <p className="mt-2 text-sm italic text-foreground-secondary">
              {hero.proof}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories strip */}
      <CategoriesStrip categories={categories} />
    </section>
  )
}

// Headline palabra a palabra (blur → nítido), preservando el highlight en
// italic cacao. Tokeniza por palabras — funciona con cualquier idioma del
// bundle (ES/EN) y con highlights de varias palabras. Con reduced-motion
// renderiza el markup plano de siempre.
function HeroHeadline({ headline, highlight, reduced }) {
  const className = 'heading-display mt-6 text-[clamp(2.4rem,5.4vw,4.4rem)]'

  if (reduced) {
    return (
      <h1 className={className}>
        {splitSegments(headline, highlight).map((seg, i) =>
          seg.hl ? (
            <span key={i} className="italic text-accent-cacao">
              {seg.text}
            </span>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </h1>
    )
  }

  // Clusters: palabras pegadas a su puntuación aunque cambie el estilo en
  // medio ("raíces," = highlight + coma plana) — animan como una unidad y
  // no se separan al hacer wrap.
  const clusters = []
  let open = false
  splitSegments(headline, highlight).forEach((seg) => {
    seg.text.split(/(\s+)/).forEach((piece) => {
      if (!piece) return
      if (/^\s+$/.test(piece)) {
        open = false
        return
      }
      if (open && clusters.length) {
        clusters[clusters.length - 1].push({ text: piece, hl: seg.hl })
      } else {
        clusters.push([{ text: piece, hl: seg.hl }])
        open = true
      }
    })
  })

  return (
    <motion.h1
      className={className}
      variants={wordContainer}
      initial="hidden"
      animate="visible"
    >
      {clusters.map((parts, i) => (
        <span key={i}>
          <motion.span variants={wordChild} className="inline-block">
            {parts.map((p, j) =>
              p.hl ? (
                <span key={j} className="italic text-accent-cacao">
                  {p.text}
                </span>
              ) : (
                <span key={j}>{p.text}</span>
              )
            )}
          </motion.span>{' '}
        </span>
      ))}
    </motion.h1>
  )
}

function splitSegments(headline, highlight) {
  if (!highlight) return [{ text: headline, hl: false }]
  const segments = []
  headline.split(highlight).forEach((part, i, arr) => {
    if (part) segments.push({ text: part, hl: false })
    if (i < arr.length - 1) segments.push({ text: highlight, hl: true })
  })
  return segments
}

function CategoriesStrip({ categories }) {
  // Duplicado exactamente ×2: el keyframe marquee traslada -50%, así el loop
  // es seamless (con ×3 había un salto visible al reiniciar el ciclo).
  return (
    <div className="border-y border-border-subtle bg-surface-secondary/40 py-5">
      <div className="marquee-track overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap pr-12">
          {[...categories, ...categories].map((c, i) => (
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

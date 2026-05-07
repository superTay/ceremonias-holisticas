import { ArrowRight, Download } from 'lucide-react'
import { about } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-surface-secondary py-24 lg:py-32"
    >
      {/* Decorative gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent-clay/15 to-transparent blur-3xl"
      />

      <div className="container-page relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Portrait column */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            {/* Portrait — Blanca in her atelier */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-token-xl bg-[#2D2926] shadow-2xl">
              <img
                src="/blanca-portrait.webp"
                alt="Blanca Coutiño en el interior de su atelier-finca de Mallorca, con su mesa-altar de cuenco de cacao, copal, libros y flores secas"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating credential badges */}
            <div className="absolute -bottom-4 right-0 flex max-w-[280px] flex-col gap-2 sm:right-4">
              {about.badges.map((b, i) => (
                <span
                  key={i}
                  className="rounded-full bg-surface-primary px-4 py-2 text-xs font-medium text-foreground-primary shadow-lg"
                  style={{ transform: `translateX(${i * -8}px)` }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Text column */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="heading-display mt-5 text-[clamp(1.85rem,3.6vw,3.1rem)]">
              {about.headline}
            </h2>
          </Reveal>

          <div className="mt-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-lg leading-relaxed text-foreground-secondary">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <blockquote className="mt-10 border-l-2 border-accent-cacao pl-6 font-heading text-2xl italic leading-snug text-foreground-primary lg:text-3xl">
              "{about.pullQuote}"
              <footer className="mt-3 not-italic font-body text-sm font-medium text-accent-primary">
                — Blanca
              </footer>
            </blockquote>
          </Reveal>

          {/* Pillars */}
          <Reveal delay={0.4}>
            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {about.pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-token-lg border border-border-subtle bg-surface-primary p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent-clay/60 hover:shadow-lg"
                >
                  <h4 className="font-heading text-lg text-foreground-primary">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground-secondary">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#sobre" className="btn-primary">
                {about.primaryCta}
                <ArrowRight size={16} />
              </a>
              <a href="#" className="btn-ghost">
                <Download size={16} />
                {about.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


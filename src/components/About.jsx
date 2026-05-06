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
            {/* Frame card */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-token-xl bg-gradient-to-br from-[#A98A6F] via-[#7D6B3D] to-[#4A3F24] shadow-2xl">
              <PortraitOrnament />
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

function PortraitOrnament() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full opacity-30"
      aria-hidden
    >
      <defs>
        <radialGradient id="portrait-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F5F2E9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F5F2E9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#portrait-glow)" />
      {/* Triangle / mountain motif */}
      <path
        d="M200 120 L280 320 L120 320 Z"
        fill="none"
        stroke="#F5F2E9"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M200 160 L260 300 L140 300 Z"
        fill="none"
        stroke="#F5F2E9"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <circle
        cx="200"
        cy="90"
        r="22"
        fill="none"
        stroke="#F5F2E9"
        strokeWidth="0.8"
        opacity="0.7"
      />
      {/* Wave below */}
      <path
        d="M0 380 Q100 360 200 380 T400 380"
        fill="none"
        stroke="#F5F2E9"
        strokeWidth="0.7"
        opacity="0.5"
      />
      <path
        d="M0 410 Q100 390 200 410 T400 410"
        fill="none"
        stroke="#F5F2E9"
        strokeWidth="0.5"
        opacity="0.35"
      />
    </svg>
  )
}

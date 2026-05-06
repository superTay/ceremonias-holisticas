import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative bg-surface-primary py-24 lg:py-32"
    >
      <div className="container-page">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 className="heading-display mt-5 text-[clamp(2rem,4vw,3.4rem)]">
            {testimonials.headline}
          </h2>
          <p className="mt-5 text-lg text-foreground-secondary">
            {testimonials.sub}
          </p>
        </Reveal>

        {/* Metrics */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-token-xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
            {testimonials.metrics.map((m, i) => (
              <div
                key={i}
                className="bg-surface-primary p-8 transition-colors duration-300 hover:bg-surface-secondary/50"
              >
                <p className="font-heading text-5xl text-accent-cacao lg:text-6xl">
                  {m.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonial cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.cards.map((t, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <article className="group h-full rounded-token-xl border border-border-subtle bg-surface-primary p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent-clay/60 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        fill="currentColor"
                        className="text-accent-primary"
                      />
                    ))}
                  </div>
                  <Quote
                    size={28}
                    className="text-accent-clay/60 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent-clay"
                  />
                </div>

                <p className="mt-5 font-heading text-xl leading-snug text-foreground-primary">
                  "{t.quote}"
                </p>

                <div className="my-5 h-px w-full bg-border-subtle" />

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent-clay/40 to-accent-cacao/40">
                    <span className="font-heading text-base text-accent-cacao">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground-primary">
                      {t.name}
                    </p>
                    <p className="text-xs text-foreground-muted">
                      {t.context}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Press logos */}
        <Reveal delay={0.2} className="mt-20 text-center">
          <p className="eyebrow">{testimonials.press}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-foreground-muted">
            {testimonials.outlets.map((o, i) => (
              <span
                key={i}
                className="font-heading text-xl italic transition-colors duration-300 hover:text-accent-cacao"
              >
                {o}
              </span>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <a href="#contacto" className="btn-primary">
              {testimonials.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

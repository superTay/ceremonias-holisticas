import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Quote } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import WhatIsOol from '../components/WhatIsOol'
import OolSymbol from '../components/OolSymbol'
import { useContent } from '../i18n/useContent'

// Home = Hero + "Qué es OOL" + "El símbolo" + preview de 3 ceremonias
// + un testimonio + tira de prensa + CTA cierre. Las páginas dedicadas
// (Ceremonias, Sobre, Galería, Contacto) cargan los bloques completos.
//
// Si los bloques de marca (whatIsOol, symbol) faltan en el bundle del
// idioma activo, sus componentes no renderizan nada (defensivo).

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsOol />
      <OolSymbol />
      <FeaturedCeremonies />
      <SocialProofStrip />
      <HomeCTA />
    </>
  )
}

function FeaturedCeremonies() {
  const { catalog } = useContent()
  const featured = catalog.cards.slice(0, 3)

  return (
    <section className="relative bg-surface-secondary/40 py-24 lg:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">{catalog.caption}</span>
            <h2 className="heading-display mt-5 text-[clamp(1.8rem,3.4vw,2.8rem)]">
              {catalog.headline}
            </h2>
          </div>
          <Link
            to="/ceremonies"
            className="link-underline text-sm font-medium text-foreground-primary"
          >
            {catalog.allFilter} →
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-token-xl border border-border-subtle bg-surface-primary transition-all duration-500 hover:-translate-y-1 hover:border-accent-clay/60 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.imageAlt || card.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.hue}`}
                  />
                )}
                <div className="absolute left-4 top-4 rounded-full bg-accent-cacao px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground-on-deep">
                  {card.tag}
                </div>
              </div>
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
                <Link
                  to="/ceremonies"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cacao"
                >
                  {catalog.cardCta}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProofStrip() {
  const { testimonials, press } = useContent()
  const quote = testimonials.cards?.[0]
  const items = press.items ?? []

  return (
    <section className="bg-surface-primary py-24 lg:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {quote && (
          <Reveal className="lg:col-span-7">
            <Quote size={28} className="text-accent-clay" />
            <p className="mt-5 font-heading text-2xl italic leading-snug text-foreground-primary">
              “{quote.quote}”
            </p>
            <p className="mt-6 text-sm text-foreground-secondary">
              <span className="font-medium text-foreground-primary">
                {quote.name}
              </span>
              {quote.context ? ` · ${quote.context}` : ''}
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-cacao link-underline"
            >
              {testimonials.eyebrow} →
            </Link>
          </Reveal>
        )}

        <Reveal delay={0.1} className="lg:col-span-5">
          <span className="eyebrow">{press.eyebrow}</span>
          <ul className="mt-6 space-y-5 border-l border-border-subtle pl-6">
            {items.slice(0, 3).map((item) => (
              <li key={item.outlet}>
                <p className="font-heading text-base text-foreground-primary">
                  {item.outlet}
                </p>
                <p className="mt-1 text-sm text-foreground-secondary">
                  {item.context}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-8 inline-block link-underline text-sm font-medium text-foreground-primary"
          >
            {press.headline} →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function HomeCTA() {
  const { whatsapp } = useContent()
  return (
    <section className="bg-surface-deep py-24 text-foreground-on-deep lg:py-32">
      <div className="container-page max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow text-accent-clay">{whatsapp.eyebrow}</span>
          <h2 className="heading-display mt-5 text-[clamp(2rem,3.8vw,3rem)] text-foreground-on-deep">
            {whatsapp.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-on-deep/80">
            {whatsapp.sub}
          </p>
          <a
            href={whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-token-lg bg-accent-cacao px-7 py-3.5 text-sm font-medium text-foreground-on-deep transition-all duration-300 hover:bg-accent-clay hover:-translate-y-0.5"
          >
            {whatsapp.cta}
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

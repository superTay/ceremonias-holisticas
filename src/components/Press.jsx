import { Newspaper } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import Reveal from './Reveal'

export default function Press() {
  const { press } = useContent()

  return (
    <section
      id="prensa"
      className="relative bg-surface-secondary py-24 lg:py-32"
    >
      <div className="container-page">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{press.eyebrow}</span>
          <h2 className="heading-display mt-5 text-[clamp(2rem,4vw,3.4rem)]">
            {press.headline}
          </h2>
          <p className="mt-5 text-lg text-foreground-secondary">{press.sub}</p>
        </Reveal>

        {/* Clippings */}
        <div className="mt-14 space-y-8">
          {press.items.map((item, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <article className="grid grid-cols-1 gap-8 rounded-token-xl border border-border-subtle bg-surface-primary p-6 lg:grid-cols-12 lg:gap-12 lg:p-8">
                {/* Recorte de prensa */}
                <div className="lg:col-span-5">
                  <div className="overflow-hidden rounded-token-lg border border-border-subtle bg-surface-secondary shadow-lg">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Cita y medio */}
                <div className="flex flex-col justify-center lg:col-span-7">
                  <div className="flex items-center gap-2 text-accent-cacao">
                    <Newspaper size={18} className="flex-none" />
                    <span className="font-heading text-2xl">{item.outlet}</span>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                    {item.context}
                  </p>

                  {item.quote ? (
                    <>
                      <p className="mt-6 font-heading text-2xl leading-snug text-foreground-primary lg:text-3xl">
                        “{item.quote}”
                      </p>
                      {item.author && (
                        <p className="mt-5 text-sm font-medium text-foreground-secondary">
                          — {item.author}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="mt-6 text-lg leading-relaxed text-foreground-secondary">
                      {item.summary}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useContent } from '../i18n/useContent'
import Reveal from './Reveal'

// Bloque "El símbolo OOL" (Home). Storytelling del logo en cuatro partes.
// Defensivo: si no hay `symbol` en el bundle, no renderiza nada.
export default function OolSymbol() {
  const { symbol } = useContent()
  if (!symbol) return null

  return (
    <section className="relative bg-surface-secondary/40 py-24 lg:py-32">
      <div className="container-page grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <span className="eyebrow">{symbol.eyebrow}</span>
          <h2 className="heading-display mt-5 text-[clamp(1.8rem,3.6vw,2.9rem)]">
            {symbol.headline}
          </h2>
          <div className="mt-8 overflow-hidden rounded-token-xl border border-border-subtle bg-surface-primary p-6">
            {/* Logotipo OOL real (corazón maya + wordmark + tagline). */}
            <img
              src="/logo-full.webp"
              alt="Logotipo de OOL Experiences: un corazón maya con greca, espirales y un glifo central en turquesa"
              className="mx-auto w-full max-w-[280px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          {symbol.intro && (
            <Reveal delay={0.05}>
              <p
                className="max-w-prose text-lg leading-relaxed text-foreground-secondary"
                dangerouslySetInnerHTML={{ __html: emphasize(symbol.intro) }}
              />
            </Reveal>
          )}

          {symbol.parts?.length > 0 && (
            <ul className="mt-10 space-y-6">
              {symbol.parts.map((p, i) => (
                <Reveal key={p.part} delay={0.1 + i * 0.05} as="li">
                  <p className="text-base leading-relaxed text-foreground-secondary">
                    <span className="font-heading text-lg italic text-foreground-primary">
                      {p.part}
                    </span>{' '}
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

function emphasize(text) {
  return String(text).replace(
    /\*([^*]+)\*/g,
    '<em class="not-italic font-medium text-foreground-primary">$1</em>'
  )
}

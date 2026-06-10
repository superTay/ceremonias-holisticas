import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useContent } from '../i18n/useContent'
import Reveal from './Reveal'

// Bloque "Qué es OOL" (Home). Defensivo: si el bundle no tiene la clave
// (EN aún sin transcrear), no renderiza nada y la página sigue cuajando.
// Los asteriscos *Ool* en el copy se renderizan como italics simples
// (el copy ES los usa para resaltar el término maya).
export default function WhatIsOol() {
  const { whatIsOol } = useContent()
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()

  // Parallax suave: la imagen deriva ±7% mientras la sección cruza el
  // viewport. El scale 1.16 da margen para que nunca asomen los bordes.
  // Es la única sección de la Home con parallax además del hero — a
  // propósito: dos seguidas ya serían feria. Transform sobre la <img>
  // interna, no sobre el contenedor sticky (no hay conflicto).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  if (!whatIsOol) return null

  return (
    <section ref={sectionRef} className="relative bg-surface-primary py-24 lg:py-32">
      <div className="container-page grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal blur={6} className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <span className="eyebrow">{whatIsOol.eyebrow}</span>
          <h2 className="heading-display mt-5 text-[clamp(1.8rem,3.6vw,2.9rem)]">
            {whatIsOol.headline}
          </h2>
          <div className="mt-8 overflow-hidden rounded-token-xl">
            <motion.img
              src="/album-06-corazon-cuarzo.webp"
              alt="Dos manos forman un corazón alrededor de un cuarzo verde, sobre un vestido de lino claro"
              className="w-full object-cover"
              style={reduced ? undefined : { y: imgY, scale: 1.16 }}
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={0.05}>
            <div className="space-y-5 max-w-prose text-lg leading-relaxed text-foreground-secondary">
              {whatIsOol.paragraphs?.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: emphasize(p) }} />
              ))}
            </div>
          </Reveal>

          {whatIsOol.whyMaya && (
            <Reveal delay={0.15} className="mt-12 rounded-token-xl bg-surface-secondary/50 p-7">
              <h3 className="font-heading text-xl text-foreground-primary">
                {whatIsOol.whyMaya.title}
              </h3>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-foreground-secondary">
                {whatIsOol.whyMaya.body}
              </p>
            </Reveal>
          )}

          {whatIsOol.takeaways?.items?.length > 0 && (
            <Reveal delay={0.2} className="mt-12">
              <h3 className="font-heading text-xl text-foreground-primary">
                {whatIsOol.takeaways.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {whatIsOol.takeaways.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-foreground-secondary"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

// Convierte *palabra* en <em>palabra</em>. Escape ligero: solo el copy de
// content.js pasa por aquí (autor de confianza), así que no quemamos un
// sanitizer completo.
function emphasize(text) {
  return String(text).replace(
    /\*([^*]+)\*/g,
    '<em class="not-italic font-medium text-foreground-primary">$1</em>'
  )
}

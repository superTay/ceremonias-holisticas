import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faq } from '../data/content'
import Reveal from './Reveal'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section
      id="faq"
      className="relative bg-surface-secondary py-24 lg:py-32"
    >
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Left intro */}
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="heading-display mt-5 text-[clamp(1.85rem,3.6vw,3rem)]">
            {faq.headline}
          </h2>
          <p className="mt-5 text-lg text-foreground-secondary">{faq.sub}</p>
        </Reveal>

        {/* Right accordion */}
        <div className="lg:col-span-7">
          <ul className="divide-y divide-border-subtle border-y border-border-subtle">
            {faq.items.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-accent-cacao"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg leading-snug text-foreground-primary lg:text-xl">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-none text-accent-primary transition-transform duration-500 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { height: 'auto', opacity: 1 },
                          collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-base leading-relaxed text-foreground-secondary">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>

          <Reveal delay={0.1}>
            <p className="mt-10 text-sm text-foreground-secondary">
              {faq.footerText}{' '}
              <span className="text-foreground-muted">·</span>{' '}
              <a
                href="#contacto"
                className="link-underline font-medium text-accent-cacao"
              >
                {faq.footerLink} →
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

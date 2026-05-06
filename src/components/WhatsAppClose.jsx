import { Phone, Check, MessageCircle } from 'lucide-react'
import { whatsapp } from '../data/content'
import Reveal from './Reveal'

export default function WhatsAppClose() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-surface-deep py-24 text-foreground-on-deep lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent-cacao/40 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-accent-primary/30 to-transparent blur-3xl"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-accent-cacao/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-clay">
              {whatsapp.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="heading-display mt-5 text-[clamp(2rem,4vw,3.4rem)] text-foreground-on-deep">
              {whatsapp.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-on-deep/80">
              {whatsapp.sub}
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {whatsapp.features.map((f, i) => (
              <Reveal key={i} delay={0.15 + i * 0.06}>
                <li className="flex items-start gap-3 text-foreground-on-deep/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-clay/30">
                    <Check size={12} className="text-accent-clay" />
                  </span>
                  <span className="text-[15px]">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="https://wa.me/34678312884"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-token-lg bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A] hover:shadow-xl"
              >
                <MessageCircle size={18} />
                {whatsapp.cta}
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-foreground-on-deep/70">
                <Phone size={14} className="text-accent-clay" />
                {whatsapp.secondary}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Chat mockup */}
        <Reveal delay={0.2}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0E1418] shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/10 bg-[#1F2C33] px-4 py-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-clay to-accent-cacao font-heading text-base text-foreground-on-deep">
                  B
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">
                    {whatsapp.chat.headerName}
                  </p>
                  <p className="text-xs text-emerald-400">
                    {whatsapp.chat.headerStatus}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3 bg-[#0B141A] p-4">
                <div className="my-3 flex justify-center">
                  <span className="rounded-md bg-[#182229] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white/50">
                    {whatsapp.chat.dateChip}
                  </span>
                </div>
                {whatsapp.chat.messages.map((m, i) => {
                  const mine = m.from === 'me'
                  return (
                    <div
                      key={i}
                      className={`flex ${
                        mine ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-[13.5px] leading-snug shadow-sm ${
                          mine
                            ? 'rounded-br-sm bg-[#005C4B] text-white'
                            : 'rounded-bl-sm bg-[#202C33] text-white/90'
                        }`}
                      >
                        <p>{m.text}</p>
                        <p
                          className={`mt-1 text-[10px] ${
                            mine ? 'text-emerald-200/70' : 'text-white/40'
                          }`}
                        >
                          {m.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 border-t border-white/10 bg-[#1F2C33] p-3">
                <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2 text-sm text-white/40">
                  Mensaje
                </div>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500"
                  aria-label="Enviar"
                >
                  <MessageCircle size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { gallery } from '../data/content'
import Reveal from './Reveal'

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)
  const isOpen = openIndex !== null
  const triggerRefs = useRef([])
  const total = gallery.items.length

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () => setOpenIndex((i) => (i + 1) % total),
    [total],
  )
  const prev = useCallback(
    () => setOpenIndex((i) => (i - 1 + total) % total),
    [total],
  )

  return (
    <section id="galeria" className="relative bg-surface-primary py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{gallery.eyebrow}</span>
          <h2 className="heading-display mt-5 text-[clamp(2rem,4vw,3.4rem)]">
            {gallery.headline}
          </h2>
          <p className="mt-5 text-lg text-foreground-secondary">{gallery.sub}</p>
        </Reveal>

        {/* Rejilla masonry (multi-columna). Cada thumb es un botón → abre el lightbox. */}
        <Reveal delay={0.1} className="mt-14 [column-fill:balance] [column-gap:1rem] sm:columns-2 lg:columns-3">
          {gallery.items.map((item, i) => (
            <button
              key={item.src}
              ref={(el) => (triggerRefs.current[i] = el)}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Ampliar foto: ${item.alt}`}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-token-lg border border-border-subtle bg-surface-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cacao focus-visible:ring-offset-2"
            >
              <img
                src={item.thumb}
                alt={item.alt}
                width={item.w}
                height={item.h}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: `${item.w} / ${item.h}` }}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </Reveal>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Lightbox
            item={gallery.items[openIndex]}
            index={openIndex}
            total={total}
            onClose={close}
            onNext={next}
            onPrev={prev}
            returnFocusTo={() => triggerRefs.current[openIndex]?.focus()}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function Lightbox({ item, index, total, onClose, onNext, onPrev, returnFocusTo }) {
  const dialogRef = useRef(null)

  // Bloquear scroll del body mientras está abierto; devolver foco al thumb al cerrar.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
      returnFocusTo()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Foco inicial dentro del diálogo.
  useEffect(() => {
    dialogRef.current?.focus()
  }, [])

  // Teclado: Esc cierra, ←/→ navegan, Tab atrapado dentro del diálogo.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        onNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onPrev()
      } else if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, onNext, onPrev])

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de imágenes ampliada"
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-surface-deep/95 p-4 backdrop-blur-sm focus:outline-none sm:p-8"
    >
      {/* Cerrar */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar galería"
        className="absolute right-4 top-4 rounded-full p-2 text-foreground-on-deep/80 transition-colors hover:bg-white/10 hover:text-foreground-on-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-6 sm:top-6"
      >
        <X size={28} />
      </button>

      {/* Anterior */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-foreground-on-deep/80 transition-colors hover:bg-white/10 hover:text-foreground-on-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:left-6"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Imagen + caption */}
      <motion.figure
        key={item.src}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full max-w-5xl flex-col items-center"
      >
        <img
          src={item.src}
          alt={item.alt}
          width={item.w}
          height={item.h}
          className="max-h-[78vh] w-auto rounded-token-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-4 max-w-2xl px-4 text-center text-sm text-foreground-on-deep/70">
          {item.alt}
          <span className="ml-2 text-foreground-on-deep/40">
            {index + 1} / {total}
          </span>
        </figcaption>
      </motion.figure>

      {/* Siguiente */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Foto siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-foreground-on-deep/80 transition-colors hover:bg-white/10 hover:text-foreground-on-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-6"
      >
        <ChevronRight size={40} />
      </button>
    </motion.div>
  )
}

// Única fuente de verdad del motion de la casa (dirección "El Umbral").
// Lema: nada se mueve dos veces — una entrada por elemento, cero loops decorativos.

export const EASE = [0.22, 1, 0.36, 1]

// Transición de página (RootLayout). Exit más corto que enter a propósito:
// la salida debe sentirse como soltar, no como otra animación.
export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22, ease: 'easeIn' } },
}

// Stagger por palabras del headline del hero (blur → nítido).
// El stagger corto (45ms) mantiene el headline completo < 1s en pantalla,
// para no empeorar el LCP cuando el candidato es el h1 (móvil).
export const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
}

export const wordChild = {
  hidden: { opacity: 0, y: '0.35em', filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
}

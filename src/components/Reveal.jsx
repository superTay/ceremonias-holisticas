import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../lib/motion'

/**
 * Reveal — fade & slide up when the element enters the viewport.
 * Stagger children by passing `delay` (seconds).
 *
 * Props opcionales (retrocompatibles):
 * - `blur` (px): entrada blur→nítido además del fade+slide. One-shot.
 * - `once`: por defecto true (revela una sola vez).
 * Con prefers-reduced-motion renderiza el contenido plano, sin wrapper animado.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  blur = 0,
  once = true,
  className = '',
  as: Tag = 'div',
}) {
  const MotionTag = motion[Tag] || motion.div
  const reduced = useReducedMotion()

  if (reduced) {
    return <Tag className={className}>{children}</Tag>
  }

  const from = { opacity: 0, y }
  const to = { opacity: 1, y: 0 }
  if (blur > 0) {
    from.filter = `blur(${blur}px)`
    to.filter = 'blur(0px)'
  }

  return (
    <MotionTag
      initial={from}
      whileInView={to}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

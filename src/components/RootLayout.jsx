import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import AnimatedOutlet from './AnimatedOutlet'
import useDocumentMeta from '../i18n/useDocumentMeta'
import { pageVariants } from '../lib/motion'

// Navbar y Footer viven FUERA de AnimatePresence: persisten entre rutas y no
// parpadean. El scroll-to-top ocurre en onExitComplete — con la página
// saliente ya a opacidad 0 — para que el salto sea invisible (sustituye al
// antiguo ScrollToTop, que corría en cuanto cambiaba el pathname y hacía
// scroll con la página vieja aún visible). behavior: 'instant' a propósito:
// 'auto' heredaría el scroll-behavior: smooth del CSS.
export default function RootLayout() {
  useDocumentMeta()
  const location = useLocation()
  const mainRef = useRef(null)
  const reduced = useReducedMotion()

  const settleRoute = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Foco al contenido nuevo: los lectores de pantalla anuncian la página.
    mainRef.current?.focus({ preventScroll: true })
  }

  // Con reduced-motion no hay exit animation de la que colgarse: scroll directo.
  useEffect(() => {
    if (reduced) settleRoute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <div className="relative">
      <Navbar />
      <main ref={mainRef} tabIndex={-1} className="outline-none">
        <AnimatePresence mode="wait" initial={false} onExitComplete={settleRoute}>
          <motion.div
            key={location.pathname}
            initial={reduced ? false : pageVariants.initial}
            animate={reduced ? {} : pageVariants.enter}
            exit={reduced ? {} : pageVariants.exit}
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

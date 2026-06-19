import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import WhatsAppFab from './WhatsAppFab'
import useDocumentMeta from '../i18n/useDocumentMeta'
import { EASE } from '../lib/motion'

// Transición de página "enter-only": al cambiar de ruta, la página nueva
// remonta (key=pathname) y entra con fade+lift a través del crema de fondo.
// Deliberadamente NO hay animación de salida: AnimatePresence mode="wait"
// + frozen outlet resultó frágil con esta combinación de framer-motion 11.3,
// StrictMode y createBrowserRouter (el hijo nuevo no llegaba a montar en
// navegaciones consecutivas). El fade-through-cream es robusto, instantáneo
// al tacto y encaja con la dirección "El Umbral".
//
// El scroll-to-top va en useLayoutEffect (antes del paint del contenido
// nuevo → sin flash de la posición anterior). behavior 'instant' a
// propósito: 'auto' heredaría el scroll-behavior smooth del CSS, que es
// justo lo que rompía reduced-motion en el antiguo ScrollToTop.
export default function RootLayout() {
  useDocumentMeta()
  const location = useLocation()
  const mainRef = useRef(null)
  const reduced = useReducedMotion()
  // lastPath hace el efecto idempotente (StrictMode) y distingue la carga
  // inicial de una navegación real.
  const lastPath = useRef(location.pathname)

  // En la primera carga el hero ya orquesta su entrada — y un wrapper en
  // opacity 0 retrasaría el LCP. La transición solo aplica entre rutas.
  // (Se evalúa en render, antes de que el efecto actualice lastPath.)
  const animateEntrance = !reduced && lastPath.current !== location.pathname

  useLayoutEffect(() => {
    if (lastPath.current === location.pathname) return
    lastPath.current = location.pathname
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Foco al contenido nuevo: los lectores de pantalla anuncian la página.
    mainRef.current?.focus({ preventScroll: true })
  }, [location.pathname])

  return (
    <div className="relative">
      <Navbar />
      <main ref={mainRef} tabIndex={-1} className="outline-none">
        <motion.div
          key={location.pathname}
          initial={animateEntrance ? { opacity: 0, y: 12 } : false}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: EASE },
          }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <WhatsAppFab />
      <CookieBanner />
    </div>
  )
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Al cambiar de ruta, vuelve arriba. Instantáneo si el usuario tiene
// `prefers-reduced-motion`; suave si no.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    window.scrollTo({ top: 0, left: 0, behavior: reduced ? 'auto' : 'smooth' })
  }, [pathname])

  return null
}

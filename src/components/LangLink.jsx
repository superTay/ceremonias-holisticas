import { forwardRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { langFromPath } from '../i18n'

// Enlaces internos conscientes del idioma. Los componentes siguen escribiendo
// `to="/ceremonies"` (ruta canónica ES); cuando el idioma activo es EN, el wrapper
// antepone el prefijo /en → "/en/ceremonies". Así el prerender genera árboles ES y
// EN sin tocar cada Link a mano: basta cambiar el import en cada componente.

export function useLang() {
  const { pathname } = useLocation()
  return langFromPath(pathname)
}

// Convierte una ruta canónica (ES, con '/') a su variante del idioma dado.
export function localizedTo(to, lang) {
  if (lang !== 'en' || typeof to !== 'string' || !to.startsWith('/')) return to
  return to === '/' ? '/en' : `/en${to}`
}

// Quita el prefijo /en de un pathname → ruta canónica ES (para el gemelo de idioma).
export function basePath(pathname) {
  if (pathname === '/en') return '/'
  if (pathname.startsWith('/en/')) return pathname.slice(3)
  return pathname
}

export const LangLink = forwardRef(function LangLink({ to, ...props }, ref) {
  const lang = useLang()
  return <Link ref={ref} to={localizedTo(to, lang)} {...props} />
})

export const LangNavLink = forwardRef(function LangNavLink({ to, ...props }, ref) {
  const lang = useLang()
  return <NavLink ref={ref} to={localizedTo(to, lang)} {...props} />
})

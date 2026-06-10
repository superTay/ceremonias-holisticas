import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useContent } from '../i18n/useContent'
import { EASE } from '../lib/motion'
import Logo from './Logo'

export default function Navbar() {
  const { announcement, nav, whatsapp } = useContent()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el drawer al cambiar de ruta.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40">
      {/* Announcement strip */}
      <div className="bg-accent-secondary py-3.5 px-5 text-center">
        <p className="text-[13px] font-medium tracking-wide text-foreground-on-deep">
          {announcement}
        </p>
      </div>

      {/* Navigation bar */}
      <nav
        className={`relative bg-surface-primary/80 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.04)]' : ''
        }`}
      >
        <div className="container-page flex items-center justify-between py-5">
          {/* Brand — corazón maya real + wordmark, sin tagline para no apretar el menú */}
          <Link to="/" className="group" aria-label={nav.brandAria}>
            <Logo
              variant="full"
              tone="dark"
              showTagline={false}
              markSrc="/logo-mark.webp"
            />
          </Link>

          {/* Desktop links — el subrayado del link activo desliza entre rutas
              (layoutId compartido). Los inactivos conservan el subrayado de
              hover de la casa. py-2 amplía el objetivo táctil/clic. */}
          <ul className="hidden items-center gap-7 lg:flex">
            {nav.links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative inline-block py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-foreground-primary'
                        : 'link-underline text-foreground-secondary hover:text-foreground-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          aria-hidden
                          className="absolute inset-x-0 bottom-0.5 h-px bg-accent-cacao-text"
                          transition={{ duration: 0.35, ease: EASE }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <LangToggle label={nav.langLabel} />
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              {nav.cta}
            </a>
          </div>

          {/* Mobile toggle — padding negativo-compensado: icono de 24px con
              objetivo táctil de 44px sin mover el layout */}
          <button
            className="-m-2.5 p-2.5 lg:hidden"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden border-t border-border-subtle bg-surface-primary lg:hidden"
            >
              <ul className="container-page flex flex-col gap-1 py-4">
                {nav.links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block rounded-token-md px-3 py-3 text-sm font-medium hover:bg-surface-secondary ${
                          isActive
                            ? 'bg-surface-secondary text-foreground-primary'
                            : 'text-foreground-secondary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    {nav.cta}
                  </a>
                </li>
                <li className="px-3 pt-3">
                  <LangToggle label={nav.langLabel} />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

function LangToggle({ label }) {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage || i18n.language
  const langs = [
    ['es', 'ES'],
    ['en', 'EN'],
  ]
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-3 text-sm font-medium"
    >
      {langs.map(([code, short]) => {
        const active = current === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={active}
            className={`flex items-center gap-1.5 px-1.5 py-2 transition-colors ${
              active
                ? 'text-accent-cacao-text'
                : 'text-foreground-secondary hover:text-foreground-primary'
            }`}
          >
            <Flag code={code} active={active} />
            {short}
          </button>
        )
      })}
    </div>
  )
}

function Flag({ code, active }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-4 w-4 flex-none overflow-hidden rounded-full ring-1 ring-black/10 transition-opacity ${
        active ? 'opacity-100' : 'opacity-50'
      }`}
    >
      {code === 'es' ? <FlagES /> : <FlagGB />}
    </span>
  )
}

function FlagES() {
  return (
    <svg viewBox="0 0 60 60" className="h-full w-full">
      <rect width="60" height="60" fill="#AA151B" />
      <rect y="15" width="60" height="30" fill="#F1BF00" />
    </svg>
  )
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 60" className="h-full w-full">
      <rect width="60" height="60" fill="#012169" />
      <path d="M0 0 L60 60 M60 0 L0 60" stroke="#fff" strokeWidth="12" />
      <path d="M0 0 L60 60 M60 0 L0 60" stroke="#C8102E" strokeWidth="6" />
      <path d="M30 0 V60 M0 30 H60" stroke="#fff" strokeWidth="20" />
      <path d="M30 0 V60 M0 30 H60" stroke="#C8102E" strokeWidth="12" />
    </svg>
  )
}

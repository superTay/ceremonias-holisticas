import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useContent } from '../i18n/useContent'

export default function Navbar() {
  const { announcement, nav } = useContent()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          {/* Brand */}
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label={nav.brandAria}
          >
            <BrandMark />
            <span className="font-heading text-lg italic tracking-tight text-foreground-primary">
              {nav.brand}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <LangToggle label={nav.langLabel} />
            <a href="#reservar" className="btn-primary">
              {nav.cta}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="border-t border-border-subtle bg-surface-primary lg:hidden">
            <ul className="container-page flex flex-col gap-1 py-4">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-token-md px-3 py-3 text-sm font-medium text-foreground-secondary hover:bg-surface-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#reservar"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  {nav.cta}
                </a>
              </li>
              <li className="px-3 pt-3">
                <LangToggle label={nav.langLabel} />
              </li>
            </ul>
          </div>
        )}
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
            className={`flex items-center gap-1.5 transition-colors ${
              active
                ? 'text-accent-cacao'
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

function BrandMark() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className="transition-transform duration-700 group-hover:rotate-180"
    >
      <circle cx="20" cy="20" r="18" stroke="#5C3A21" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="9" stroke="#5C3A21" strokeWidth="1.4" />
      <path d="M20 2 L20 38 M2 20 L38 20" stroke="#5C3A21" strokeWidth="1.4" />
    </svg>
  )
}

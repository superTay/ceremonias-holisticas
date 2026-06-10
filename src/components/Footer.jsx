import { Mail, Phone, MapPin, Shield, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContent } from '../i18n/useContent'
import Logo from './Logo'

const contactIcons = [Mail, Phone, MapPin]

export default function Footer() {
  const { footer } = useContent()

  return (
    <footer className="bg-surface-primary pt-20 pb-10">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo variant="full" tone="dark" markSrc="/logo-mark.webp" />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground-secondary">
              {footer.desc}
            </p>

            <ul className="mt-7 space-y-2.5">
              {footer.contact.map((c, i) => {
                const Icon = contactIcons[i]
                return (
                  <li
                    key={c}
                    className="flex items-center gap-2.5 text-sm text-foreground-secondary"
                  >
                    {Icon && (
                      <Icon size={14} className="flex-none text-accent-clay" />
                    )}
                    {c}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-heading text-base text-foreground-primary">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => {
                    // Soporta dos formas:
                    //   - string                → enlace inerte (legal pendiente)
                    //   - { label, to }         → ruta interna
                    const isObject = typeof l === 'object' && l !== null
                    const label = isObject ? l.label : l
                    const to = isObject ? l.to : null
                    const className =
                      'text-sm text-foreground-secondary transition-colors hover:text-accent-cacao-text'
                    return (
                      <li key={label}>
                        {to ? (
                          <Link to={to} className={className}>
                            {label}
                          </Link>
                        ) : (
                          <span className={`${className} cursor-default`}>
                            {label}
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5 text-xs text-foreground-muted">
            <span className="inline-flex items-center gap-1.5">
              <Shield size={12} className="text-accent-clay" />
              {footer.gdpr}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe size={12} className="text-accent-clay" />
              {footer.lang}
            </span>
          </div>
          <p className="text-xs text-foreground-muted">{footer.copy}</p>
        </div>
      </div>
    </footer>
  )
}

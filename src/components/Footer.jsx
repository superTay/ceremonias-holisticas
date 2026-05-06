import { Mail, Phone, MapPin, Shield, Globe } from 'lucide-react'
import { footer } from '../data/content'

const contactIcons = [Mail, Phone, MapPin]

export default function Footer() {
  return (
    <footer className="bg-surface-primary pt-20 pb-10">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="#5C3A21"
                  strokeWidth="1.4"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="9"
                  stroke="#5C3A21"
                  strokeWidth="1.4"
                />
                <path
                  d="M20 2 L20 38 M2 20 L38 20"
                  stroke="#5C3A21"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="font-heading text-xl italic text-foreground-primary">
                {footer.brand}
              </span>
            </div>

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
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-foreground-secondary transition-colors hover:text-accent-cacao"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
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

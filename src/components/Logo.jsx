// Logo de OOL Experiences. Placeholder tipográfico hasta que aterrice el archivo final
// (cuando llegue, sustituir el render interno por <img src="/logo/<archivo>.svg" />
// o un <svg> en línea; el resto del sitio no se entera porque consume este componente).
//
// Props
// - variant: "full"     → glifo + wordmark + tagline (Navbar grande / Hero)
//            "mark"     → solo el glifo circular (favicons, avatars)
//            "wordmark" → solo el wordmark (Footer, lugares estrechos)
// - tone:    "dark"     → para fondos claros (default)
//            "light"    → para fondos oscuros (footer en surface.deep)
//
// El glifo del placeholder es un círculo concéntrico con una cruz cardinal — un nodo
// neutro que evoca el corazón maya central del logo real sin imitarlo.

export default function Logo({
  variant = 'full',
  tone = 'dark',
  showTagline = true,
  markSrc = null,
  className = '',
}) {
  const stroke = tone === 'light' ? 'currentColor' : 'currentColor'
  const colorClass =
    tone === 'light' ? 'text-foreground-on-deep' : 'text-foreground-primary'

  return (
    <span
      className={`inline-flex items-center gap-3 ${colorClass} ${className}`}
      aria-label="OOL Experiences"
    >
      {variant !== 'wordmark' &&
        (markSrc ? (
          // Corazón maya real (JPEG sobre crema → encaja en fondos claros).
          <img
            src={markSrc}
            alt=""
            aria-hidden
            className="h-9 w-9 flex-none object-contain"
          />
        ) : (
          <Mark stroke={stroke} />
        ))}
      {variant !== 'mark' && (
        <span className="leading-none">
          <span className="block font-heading text-lg italic tracking-tight">
            OOL Experiences
          </span>
          {variant === 'full' && showTagline && (
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.24em] text-accent-cacao">
              Ceremonias de Corazón
            </span>
          )}
        </span>
      )}
    </span>
  )
}

function Mark({ stroke }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className="flex-none"
    >
      <circle cx="20" cy="20" r="18" stroke={stroke} strokeWidth="1.4" />
      <circle cx="20" cy="20" r="9" stroke={stroke} strokeWidth="1.4" />
      <path
        d="M20 2 L20 38 M2 20 L38 20"
        stroke={stroke}
        strokeWidth="1.4"
      />
    </svg>
  )
}

# Fase 1 · Auditoría Impeccable — OOL Experiences

> Auditoría técnica (audit) sobre la Home + capa global, previa a la capa wow.
> Verificada con: lectura de código, navegador de preview (desktop 1280×720 y móvil 375×812),
> medición de contraste WCAG calculada y bounding boxes reales. Fecha: 2026-06-10.

## Audit Health Score

| # | Dimensión | Score | Hallazgo clave |
|---|-----------|-------|----------------|
| 1 | Accesibilidad | 2/4 | Eyebrows a 3.12:1 y enlaces cacao a 3.66:1 (AA exige 4.5:1); reduced-motion sin cubrir |
| 2 | Performance | 2/4 | El hero retrasa su propio LCP ~1s (contenedor en opacity:0 + delay 0.3s) |
| 3 | Responsive | 3/4 | Sin overflow horizontal; burger de 24×24px (mínimo táctil 44×44) |
| 4 | Theming | 3/4 | Tokens consistentes; un `#2D2926` hardcodeado de la paleta antigua en Hero |
| 5 | Anti-patterns | 2/4 | Eyebrow uppercase en TODAS las secciones + reveal idéntico en TODAS las secciones |
| **Total** | | **12/20** | **Acceptable — base sólida, necesita la pasada de craft** |

## Veredicto anti-slop

**Aprueba con condiciones.** La fotografía real, la paleta tierra comprometida y el copy con voz
salvan la web del montón. Pero dos tics de gramática-IA delatan plantilla:
1. **El eyebrow uppercase tracked sobre cada sección** (QUÉ ES OOL / EL SÍMBOLO / PRENSA…) — el
   kicker 2023 que aparece en el 55-95% de generaciones IA.
2. **El mismo reveal (fade + y:24) aplicado uniformemente a toda sección** — el "reflejo uniforme"
   es el tell, no el motion en sí.
Playfair+Inter y el fondo crema están en las listas de saturación IA, pero aquí son identidad ya
comprometida y en producción → se preservan (identity-preservation wins).

## Hallazgos por severidad

### P1 — antes de release

**[P1] El hero sabotea su propio LCP** · Performance
- `src/components/Hero.jsx:111-114`: el contenedor de la imagen anima `opacity: 0→1, scale: 0.95→1`
  con delay 0.3s + duración 1.2s. Chrome no registra LCP de elementos con opacidad 0 → el LCP real
  llega ~1-1.5s más tarde de lo que la red permite. Verificado: captura de carga muestra el hero vacío.
- Fix: la imagen pinta visible desde frame 1; el efecto de entrada se hace con overlay que se retira
  (scaleY 1→0) + settle de escala de la imagen. (Ya contemplado en el plan wow.)

**[P1] Contrastes por debajo de WCAG AA** · Accesibilidad — medidos:
| Par | Ratio | Requisito | Dónde |
|---|---|---|---|
| Eyebrow salvia `#7A8B5F` / crema | **3.12** | 4.5 (11px) | `.eyebrow` — todas las secciones |
| Eyebrow / crema-secundaria | **2.72** | 4.5 | secciones con fondo `surface-secondary` |
| Enlaces cacao `#B8623F` / crema | **3.66** | 4.5 (14px) | CTAs de cards, "Ver experiencias", links |
| Texto crema / botón cacao | **3.66** | 4.5 (14px) | `.btn-primary`, badge tag de cards |
| `foreground-muted` / crema | **3.22** | 4.5 | metadatos pequeños |
- Fix recomendado (sin romper la paleta): oscurecer el rol de texto-sobre-crema de salvia y cacao
  (p.ej. eyebrow → `accent-secondary #4F5A3A` = 6.2:1; enlaces cacao → un `cacao-text ≈ #8F4526`),
  y subir `.btn-primary` a 15-16px medium o oscurecer su fondo un paso. Los tokens de superficie no cambian.

**[P1] `prefers-reduced-motion` sin cubrir** · Accesibilidad
- `src/index.css:11`: `scroll-behavior: smooth` sin media query de reduced-motion.
- `src/components/ScrollToTop.jsx:13`: `behavior: 'auto'` **hereda el smooth del CSS** — los usuarios
  con reduced-motion reciben scroll animado igualmente.
- Ninguna animación framer está gateada (no hay `MotionConfig` ni `useReducedMotion`); marquee y
  breathe corren siempre.
- Fix: `MotionConfig reducedMotion="user"` + media query CSS + `behavior: 'instant'`. (En el plan.)

### P2 — siguiente pasada

**[P2] Visibilidad de contenido gateada por animación JS** · Anti-pattern/Robustez
- Todo el contenido bajo el fold arranca en `opacity: 0` (Reveal/whileInView). Verificado en vivo:
  renderizadores headless (generadores de preview social, herramientas de captura, print) muestran
  la página **en blanco crema** bajo el fold. Al ser SPA ya requiere JS, pero el efecto agrava la
  degradación. Mitigación práctica dentro del alcance: reveals más cortos y por-sección con respeto
  reduced-motion (la capa wow lo reformula); largo plazo: SSR/prerender.

**[P2] Marquee con salto de loop** · Craft
- `Hero.jsx:153`: categorías ×3 con keyframe `-50%` → el ciclo (40s) reinicia con salto visible.
  Fix: duplicar ×2. Bonus: pause-on-hover.

**[P2] Objetivos táctiles pequeños** · Responsive/A11y — público móvil prioritario:
- Burger menú: **24×24px** (`Navbar.jsx:86-92`). Links nav desktop 36×17, lang toggle 39×20.
  El drawer móvil sí cumple (~44px). Fix: padding p-2.5/-m-2.5 en burger; py en nav links.

**[P2] Eyebrow-en-toda-sección + reveal uniforme** · Anti-pattern
- Gramática IA reconocible. Dentro del alcance wow: diferenciar el reveal por tipo de contenido
  (headline ≠ card ≠ imagen) ya rompe la mitad del patrón. El sistema de kickers es decisión de
  marca → se mantiene, pero se recomienda variar la apertura en 1-2 secciones clave a futuro.

### P3 — si hay tiempo

- **[P3] `bg-[#2D2926]` hardcodeado** (`Hero.jsx:117`): resto de la paleta antigua; debería ser
  `bg-surface-deep` (#1F1B17).
- **[P3] Announcement bar a 2 líneas en móvil** (~131px de cromo fijo entre announcement+navbar
  en 375px): valorar acortar el copy del announcement en móvil.
- **[P3] Falta transición de página** (cambio de ruta seco) y profundidad en hero (blobs estáticos)
  — no son defectos, son las oportunidades que cubre la capa wow.

## Lo que ya está bien (mantener)

- **Alt texts con voz de marca** ("Blanca sostiene en el cuenco de las manos una ofrenda dorada…") — raro de ver, excelente.
- Tokens semánticos usados consistentemente; casi cero colores hardcodeados.
- Imágenes 100% WebP, lazy + eager/fetchpriority correcto en hero, thumbs para masonry, aspect ratios declarados (CLS 0).
- Lightbox con keyboard nav y focus management; `aria-pressed` en toggle de idioma; `aria-label` en burger.
- Ease de casa `[0.22,1,0.36,1]` coherente en todo; base framer bien estructurada (Reveal reutilizable, AnimatePresence en catálogo/FAQ).
- i18n defensivo, copy centralizado.

## Acciones recomendadas (orden)

1. **[P1]** Fixes de LCP + reduced-motion + marquee → van DENTRO de los commits wow ya planificados.
2. **[P1]** Contrastes AA (eyebrow/enlaces/btn) → añadir como commit propio de a11y.
3. **[P2]** Touch targets (burger/nav) → mismo commit a11y.
4. **[P3]** `#2D2926` → `surface-deep` → una línea, mismo commit.
5. Re-auditar tras implementación (objetivo: 17-18/20).

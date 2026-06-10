# Design

> Sistema visual real, capturado del código (`tailwind.config.js`, `src/index.css`).
> Los tokens viven en código; este archivo los documenta para herramientas de diseño.

## Theme

Lujo editorial cálido: crema arena como lienzo, acentos tierra (salvia, terracota,
arcilla), carbón profundo para momentos de contraste. Grano orgánico sutil
(`body::before`, opacity 0.035) sobre toda la página. Luz mediterránea, calma de spa.

## Color Palette

| Token | Valor | Uso |
|---|---|---|
| `surface-primary` | `#F1ECDB` | Fondo principal (crema arena) |
| `surface-secondary` | `#E5DDC6` | Fondos alternos, strips |
| `surface-deep` | `#1F1B17` | Secciones oscuras (CTA final), carbón |
| `foreground-primary` | `#23201C` | Texto principal |
| `foreground-secondary` | `#5C5448` | Texto secundario |
| `foreground-muted` | `#8A8273` | Metadatos (vigilar contraste AA) |
| `foreground-on-deep` | `#F1ECDB` | Texto sobre carbón |
| `accent-primary` | `#7A8B5F` | Salvia — eyebrows, acentos |
| `accent-secondary` | `#4F5A3A` | Salvia profundo — hover de CTA |
| `accent-cacao` | `#B8623F` | Terracota — CTAs, highlights, selection |
| `accent-clay` | `#D49574` | Arcilla — decorativo cálido |
| `accent-turquoise` | `#2E8C8C` | Turquesa — acentos puntuales (agua/glifo) |
| `border-subtle` | `#D8CFB8` | Bordes |

Estrategia: **restrained-committed** — crema dominante, terracota como única acción.
No introducir azules ni colores nuevos.

## Typography

- **Headings:** Playfair Display (400–700 + italic), `heading-display`:
  leading 1.05, tracking -0.01em. Highlights en italic `accent-cacao`.
- **Body:** Inter (400–700), feature settings `ss01, cv01, cv11`.
- Eyebrow: 11px, semibold, uppercase, tracking 0.22em, `accent-primary`.
- Identidad comprometida: no sustituir familias.

## Layout

- Contenedor `container-page`: max-w 1440px, padding 6/10/16.
- `max-w-prose`: 720px para texto largo.
- Radios token: 6 / 8 / 12px (`token-md/lg/xl`).
- Sticky split-layouts para storytelling (WhatIsOol, OolSymbol, FAQ).
- Fotografía real WebP a sangre dentro de marcos redondeados `token-xl` + shadow.

## Motion

- Ease de la casa: `cubic-bezier(0.22, 1, 0.36, 1)` — exponencial, sin rebote.
- Patrón base: `Reveal` (fade + y 24px, 0.9s, whileInView once, margin -80px).
- Keyframes Tailwind: `soft-fade` (0.8s), `marquee` (40s), `breathe` (6s).
- Micro: `.btn-primary` hover lift -0.5, `.link-underline` scale-x origin-left.
- Regla: una coreografía protagonista por momento; `prefers-reduced-motion` siempre.

## Components

- `Reveal` (wrapper de entrada), `Logo` (full/mark/wordmark), `.btn-primary`,
  `.btn-ghost`, `.link-underline`, `.eyebrow`, `.heading-display`, `.container-page`.
- Cards de ceremonia: imagen 4:3 + tag + título + claim + bullets + precio + CTA
  (Cal.eu popup o WhatsApp según `bookable`).

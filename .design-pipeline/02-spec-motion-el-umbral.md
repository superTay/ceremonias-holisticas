# Fase 2 · Spec de motion — Dirección A "El Umbral"

> Aprobada en Checkpoint 2. Escuela: minimalismo silencioso (Kenya Hara / Aman).
> Lema: **"nada se mueve dos veces"** — cada elemento tiene UNA entrada, ningún loop perpetuo
> (excepto el marquee existente, que es ambient). Preview: `02 Direcciones de Motion — OOL.html` (celda A).

## Lenguaje

- **Ease único:** `cubic-bezier(0.22, 1, 0.36, 1)` (el de la casa) para entradas; `easeIn` corto solo para exits.
- **Materiales:** opacity, transform (y/scale), blur de entrada (one-shot), cortinas de color de marca.
- **Prohibido:** bounce/elastic, loops decorativos, ken burns infinito, cursor custom, parallax en >1 sección.
- **Reduced-motion:** `MotionConfig reducedMotion="user"` + media query CSS + bindings de scroll condicionados
  por `useReducedMotion()`. Scroll restore con `behavior: 'instant'`.

## Coreografía por momento

### 1. Hero (entrada, una sola vez)
| Elemento | Efecto | Timing |
|---|---|---|
| Imagen | Pinta visible frame 1 (fix LCP). Cortina `surface-secondary` se retira `scaleY 1→0` origin **top** | delay 0.25s · 1.1s |
| Imagen | Settle de escala `1.12 → 1` (one-shot, luego quieta) | 2.2s |
| Eyebrow | fade + y 10px | 0.7s · delay 0 |
| Headline | **Palabra a palabra**: `opacity 0→1, y 0.35em→0, blur 6→0px`, stagger 0.045s, highlight italic cacao preservado | 0.7s/palabra · delay base 0.15s |
| Sub | fade + y | 0.9s · delay 0.45s |
| CTAs | fade + y | 0.9s · delay 0.6s |
| Badges | fade stagger 0.1s | 0.6s · delay 0.8s |
| Blobs + imagen | Parallax scroll-linked: imagen `y 0→12%`, blobs `y 0→-80px` (`useScroll` offset `['start start','end start']`) | scroll |
| Proof card | fade + y, delay tras headline | 0.8s · delay 0.9s |

### 2. Transición de página (todas las rutas)
- `AnimatePresence mode="wait"` + frozen outlet. Enter: `opacity 0→1, y 12→0` (0.5s, ease casa).
  Exit: `opacity 1→0, y 0→-8` (0.22s, easeIn). Scroll-to-top invisible en `onExitComplete` + focus `<main>`.
- Navbar y Footer persisten fuera de la transición.

### 3. Scroll storytelling (Home)
- `Reveal` gana props opcionales `blur` y `once` (retrocompatible). Home: headlines de sección `blur={6}`,
  cards `blur={4}`. Interiores sin cambios.
- `WhatIsOol`: imagen con parallax suave `y -8%→8%` + `scale 1.16` (única sección con parallax además del hero).
- `OolSymbol` y resto: solo Reveal. El sticky existente ES el storytelling.

### 4. Micro-interacciones
- Botones: `active:scale-[0.98]` (tap físico); hover existente se mantiene.
- Cards: lift existente + gradiente inferior que se intensifica al hover + flecha con micro-desplazamiento diagonal.
- Navbar: subrayado mágico (`layoutId="nav-underline"`) que desliza entre links activos; drawer móvil
  con `AnimatePresence` height 0→auto (0.3s).
- Marquee: fix seamless (×2) + pause-on-hover.

## Fixes de auditoría incluidos (Checkpoint 1: "todos")
1. LCP hero (incluido arriba) · 2. Contraste AA: eyebrows → `accent-secondary #4F5A3A`; nuevo rol de
texto cacao oscurecido (~`#8F4526`) para enlaces/precios sobre crema; `.btn-primary` texto a 15px.
3. Reduced-motion completo · 4. Touch targets: burger ≥44px (padding), nav links con py.
5. `#2D2926` → `surface-deep`. 6. Marquee seamless.

## Criterios de aceptación
- LCP igual o mejor que `main`; CLS 0; reduced-motion = página estática funcional;
  móvil 390px sin bordes descubiertos por parallax; ES/EN sin romper tokenización del headline.

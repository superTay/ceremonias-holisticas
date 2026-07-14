# 09 · Vídeo promocional (motion reel) — guion + prompt para Cloud Design

> Objetivo: una pieza animada corta (~35 s) que resuma la marca **OoL Experiences**
> y se pueda **incrustar en la web** (y, grabando pantalla, exportar a vídeo para RRSS).
> Este doc es autónomo: contiene el prompt listo para pegar, el storyboard y el paso a paso.

---

## 0. Qué es «Cloud Design» y qué vas a obtener (lee esto primero)

«Cloud Design» = el **modo Diseño de Claude** (el del icono de paleta, con "Start with
context"). **No exporta un .mp4**: genera un **artefacto web animado** — código que se
reproduce solo (animaciones CSS/JS, zooms lentos sobre las fotos, textos que entran).

Para tu caso eso es una **ventaja**, no una limitación:

- **Para la web** → se incrusta como sección/animación nativa. Más ligero que un vídeo,
  nítido en cualquier pantalla, responsive, y **reutiliza las fotos que ya están en la web**.
- **Para Instagram/Reels** → cuando esté como te gusta, **grabas la pantalla** (QuickTime
  en Mac: `Cmd+Shift+5`) mientras se reproduce y ya tienes el .mp4.

Dos formas de integrarlo, de mejor a más simple:

| Vía | Qué es | Cuándo |
|---|---|---|
| **A. Componente React** (recomendado) | Claude Design escribe `src/components/PromoReel.jsx` y lo coloca en la Home. Usa las fotos reales de `/public`. | Es lo más limpio: la web ya es React/Vite. |
| **B. HTML autocontenido + iframe** | Un `.html` único que embebes con `<iframe>`. | Si lo quieres portátil o para pegar en otro sitio. |
| **C. Grabar a vídeo** | Reproduces A o B y grabas pantalla. | Para RRSS / WhatsApp. |

---

## 1. Concepto creativo

- **Idea ancla:** *Ool* = «corazón» en maya. La pieza es un latido: pausa, respira, vuelve
  a lo que importa. Ritmo lento, editorial, mucho aire. Referencia: teaser de un *Aman
  Resort*, no anuncio de feria.
- **Tono (regla de oro de marca):** *científica, no mística · holística, no esotérica ·
  elegante, nunca de feria.* Nada de tarot, adivinación, promesas médicas ni misticismo.
- **Duración:** ~35 s, 7 escenas. **Formato principal 16:9** (para la web). Variante
  **9:16** para Reels (mismo guion, recortado).

---

## 2. Sistema visual (tokens reales — respetarlos)

- **Superficies:** `#F5F2E9` crema · `#E8E4D8` secundaria · `#2D2926` profunda.
- **Acentos:** `#7D6B3D` oro tierra · `#5C3A21` cacao · `#B8865B` clay · `#B8623F` terracota (acción).
- **Tipografía:** **Playfair Display** (titulares) + **Inter** (texto). Ya cargadas en el sitio.
- **Textura:** grano sutil, viñeta suave, transiciones de 1–1,3 s con easing suave (nada brusco).

---

## 3. Fotos disponibles (YA servidas en `/public` — usar estas rutas)

El reel debe referenciar **solo** estos archivos (existen y se sirven desde la raíz):

```
/logo-full.webp              → glifo-corazón OoL + wordmark
/logo-mark.webp              → solo el glifo
/blanca-hero.webp            → Blanca frente al mar, huipil bordado (retrato horizontal)
/blanca-portrait.webp        → Blanca, manos ahuecadas, mirada baja (vertical)
/album-02-retrato-cuarzo.webp→ retrato con cuarzo en la mano
/album-03-recogimiento.webp  → de rodillas en la orilla, recogimiento
/album-04-espuma-cristales.webp → manos con cuarzos de chakra en la espuma del mar
/album-06-corazon-cuarzo.webp   → manos en forma de corazón sobre cuarzo verde
/album-07-espiral-arena.webp    → dedo trazando una espiral en la arena
/album-09-agua-cuarzo.webp      → cuarzo azul en la mano bajo agua cristalina
/album-10-boda-lazo.webp        → pareja recién casada, noche, lazo rojo (emoción)
/card-bodas.webp  /card-baby-blessing.webp  /card-picnic.webp
/card-despedidas.webp  /card-coaching.webp  /card-alquimia.webp  /card-parejas.webp
```

> Las fotos «crudas» de `~/Desktop/fotos_blanca/fotos/*.jpeg` NO están en la web. Si quieres
> usar alguna nueva, primero hay que optimizarla a `.webp` y meterla en `/public` (ver
> `docs/06-activos-fotos.md`). Para el reel v1, con las de arriba sobra.

---

## 4. Storyboard (7 escenas · ~35 s)

| # | t | Imagen | Texto en pantalla (ES) | Movimiento |
|---|---|---|---|---|
| 0 | 0–3 s | fondo crema | Glifo OoL se dibuja (trazo) · *«Ool — corazón, en maya»* | logo aparece por trazo/opacidad |
| 1 | 3–8 s | `/blanca-hero.webp` | **Ceremonias que honran tus raíces, tu historia y tu energía** | Ken Burns lento (zoom in 5%) |
| 2 | 8–13 s | `/album-04-espuma-cristales.webp` | *Rituales a medida en Mallorca* | paneo suave + entrada de texto |
| 3 | 13–20 s | montaje `/card-bodas` `/card-baby-blessing` `/card-picnic` `/card-despedidas` | *Bodas · Baby Blessing · Oráculo de Ángeles · Despedidas* (nombres encadenados) | corte rítmico cada ~1,4 s con crossfade |
| 4 | 20–26 s | `/blanca-portrait.webp` | **La precisión de un hotel de lujo.** \ **La profundidad de lo ancestral.** | zoom lento + texto en dos tiempos |
| 5 | 26–31 s | `/album-10-boda-lazo.webp` | *«Nuestra boda no fue un evento, fue un viaje.»* — Lucía & Marc · **+22 años · México · Francia · España** | fade + contador que sube a 22 |
| 6 | 31–35 s | fondo crema + `/logo-mark.webp` | **Diseñemos tu ceremonia** · oolexperience.com · WhatsApp +34 665 17 55 56 | logo + CTA, fundido final |

Texto alternativo de cierre (si se prefiere más directo): *«Un momento para volver a ti.»*

---

## 5. PROMPT LISTO PARA PEGAR en Cloud Design

> Pega esto tal cual en la caja de "Describe what you want to create…". Asegúrate de que
> el chip del proyecto **blanca** («Start from code») esté puesto: así Claude Design ve las
> fotos y los tokens reales.

```
Eres director de motion design. Crea una pieza web animada auto-reproducible (un
"promo reel" de ~35 segundos, 7 escenas) para la marca OoL Experiences: ceremonias
holísticas maya-contemporáneas de Blanca Coutiño en Mallorca.

ENTREGABLE
- Un único componente React autocontenido: src/components/PromoReel.jsx.
- Usa las librerías que YA existen en el repo: React + framer-motion. No añadas
  dependencias nuevas ni cargues nada por CDN.
- 16:9, responsive (que se vea bien de 360px a 1440px). Autoplay en bucle, con un
  botón discreto de "volver a reproducir" y una barra de progreso fina.
- Respeta prefers-reduced-motion: si está activo, muestra los fotogramas clave sin
  animar.
- Todo el texto en español, en constantes al inicio del archivo para poder editarlo.

MARCA Y ESTÉTICA (innegociable)
- Tono: científica no mística, holística no esotérica, elegante nunca de feria.
  Referencia visual: teaser de un Aman Resort / clínica wellness suiza. NADA de tarot,
  adivinación, promesas médicas, misticismo, gradientes chillones, emojis ni neón.
- Colores: crema #F5F2E9, secundaria #E8E4D8, profunda #2D2926; acentos oro tierra
  #7D6B3D, cacao #5C3A21, clay #B8865B, terracota #B8623F.
- Tipografía: Playfair Display para titulares, Inter para el resto (ya cargadas).
- Movimiento lento y editorial: Ken Burns (zooms del 4-6%), crossfades de 1-1.3s con
  easing suave, mucho aire, grano sutil y viñeta ligera. Nada de cortes bruscos.

IMÁGENES (usa SOLO estas rutas, ya servidas desde /public; no inventes otras)
- /logo-full.webp, /logo-mark.webp
- /blanca-hero.webp, /blanca-portrait.webp
- /album-04-espuma-cristales.webp, /album-07-espiral-arena.webp,
  /album-09-agua-cuarzo.webp, /album-10-boda-lazo.webp
- /card-bodas.webp, /card-baby-blessing.webp, /card-picnic.webp, /card-despedidas.webp

STORYBOARD (7 escenas)
1) 0-3s  · fondo crema. El glifo del logo (/logo-mark.webp) aparece suave. Texto pequeño
   centrado: "Ool — corazón, en maya".
2) 3-8s  · /blanca-hero.webp con Ken Burns. Titular Playfair grande:
   "Ceremonias que honran tus raíces, tu historia y tu energía".
3) 8-13s · /album-04-espuma-cristales.webp. Subtítulo: "Rituales a medida en Mallorca".
4) 13-20s· montaje encadenado de /card-bodas, /card-baby-blessing, /card-picnic,
   /card-despedidas (crossfade cada ~1.4s). Va apareciendo el nombre de cada una:
   "Bodas", "Baby Blessing", "Oráculo de Ángeles", "Despedidas".
5) 20-26s· /blanca-portrait.webp, zoom lento. Texto en dos tiempos:
   "La precisión de un hotel de lujo." luego "La profundidad de lo ancestral."
6) 26-31s· /album-10-boda-lazo.webp. Cita: «Nuestra boda no fue un evento, fue un viaje.»
   — Lucía & Marc. Y una línea de prueba: "+22 años · México · Francia · España".
7) 31-35s· fondo crema + /logo-mark.webp. CTA: "Diseñemos tu ceremonia",
   y debajo más pequeño: "oolexperience.com · WhatsApp +34 665 17 55 56".

Muéstrame el resultado en un preview reproducible. Después dime en 2 líneas cómo
insertar <PromoReel /> en la Home.
```

---

## 6. Paso a paso (nunca has usado Cloud Design)

1. **Contexto:** en la caja de abajo verás los chips "Start from code" y "blanca".
   Déjalos puestos — así Claude Design lee tu código, tus fotos y tus colores reales.
2. **Modelo:** el que hay (Fable 5) va bien. Si quieres el máximo de calidad, sube al
   modelo más capaz disponible en el selector.
3. **Pega** el prompt de la §5 y pulsa **Send**.
4. **Espera** a que genere. Aparecerá un **preview** que se reproduce solo. Míralo entero.
5. **Itera** con mensajes cortos y concretos, uno por cambio. Ejemplos:
   - «La escena 4 va muy rápida, dale 2 segundos más.»
   - «El titular de la escena 2 que sea más grande y suba antes.»
   - «Añade una escena entre la 3 y la 4 con /album-07-espiral-arena.webp.»
   - «Cambia el cierre por: "Un momento para volver a ti."»
   - «Hazme también la versión vertical 9:16 para Reels.»
6. **Guardar en la web (vía A):** cuando te guste, pídele:
   «Guarda el componente en `src/components/PromoReel.jsx` e insértalo en la Home,
   debajo del Hero, como una sección a ancho completo.» Revisa el resultado en local
   (`npm run dev`) antes de publicar.
7. **Exportar a vídeo (opcional):** con el preview reproduciéndose, graba pantalla
   (`Cmd+Shift+5` en Mac), recorta y ya tienes el .mp4 para Instagram/WhatsApp.

---

## 7. Checklist de marca antes de dar por bueno el reel

- [ ] Cero misticismo/tarot/adivinación; cero promesas médicas.
- [ ] Solo fotos reales de Blanca (nada de imágenes IA).
- [ ] Colores tierra/cacao (sin azules eléctricos ni gradientes AI).
- [ ] Playfair en titulares, Inter en el resto.
- [ ] Ritmo lento, con aire; se lee cómodo cada texto.
- [ ] CTA claro al final (WhatsApp / dominio).
- [ ] Se ve bien en móvil (probar 9:16 o al menos que no se corte el texto).

---

## 8. Versión Reel / redes sociales (9:16 vertical)

Mismo guion, recortado a vertical y con textos más grandes. Claves del vertical:

- **1080×1920 (9:16).** Textos más grandes y centrados.
- **Zonas seguras:** deja libres los ~250 px de arriba y ~350 px de abajo (ahí Instagram/
  TikTok ponen el usuario, la descripción y los botones). El texto importante, al centro.
- **Fotos verticales primero** (encajan sin recortar de más): `/blanca-portrait.webp`,
  `/album-02-retrato-cuarzo.webp`, `/album-05-huipil-cuarzos.webp`, `/album-09-agua-cuarzo.webp`.
  Las horizontales se muestran con `object-fit: cover`.
- **Primer fotograma = portada** (lo que se ve parado en el feed): que sea potente.
- Se ve **en silencio**: como es texto sobre imagen, ya funciona muteado (bien).

### Prompt para la versión vertical (pégalo como mensaje de seguimiento en el mismo chat)

```
Ahora hazme una segunda versión del reel en formato vertical 9:16 (1080x1920) para
Instagram/TikTok, como componente aparte src/components/PromoReelVertical.jsx.

Cambios respecto al 16:9:
- Textos más grandes y centrados verticalmente.
- Respeta zonas seguras: nada de texto clave en los 250px superiores ni en los 350px
  inferiores (los tapan los controles de la app).
- Prioriza fotos verticales: /blanca-portrait.webp, /album-02-retrato-cuarzo.webp,
  /album-05-huipil-cuarzos.webp, /album-09-agua-cuarzo.webp. Las demás con object-fit cover.
- El primer fotograma debe funcionar como portada del reel (potente y con el logo).
- Mismo tono, mismos colores y la misma estructura de 7 escenas y textos.
- Duración ~30s.

Muéstrame el preview vertical en un marco de móvil.
```

---

## 9. Compartir el reel con Blanca por WhatsApp

WhatsApp no reproduce una animación web; necesita un **archivo de vídeo**. Dos caminos:

**A. Enviarle el vídeo (mp4)** — para que lo tenga y lo pueda reenviar/subir:
1. Reproduce el reel vertical en el preview (a pantalla lo más grande posible).
2. Graba pantalla: `Cmd + Shift + 5` → «Grabar porción seleccionada» → encuadra solo el
   marco del reel → Grabar. Detén al terminar (icono en la barra de menú).
3. Recorta si hace falta (QuickTime → *Editar › Recortar*). Exporta a 1080p.
4. Envíalo por WhatsApp. Mantenlo **< 16 MB y ~30 s** (WhatsApp comprime; a 1080×1920
   H.264 y 30 s vas sobrado).

**B. Enviarle un enlace** — si solo quieres que lo vea y opine (sin descargar):
- Publica el sitio (o una *preview* de Vercel, ver §10) y mándale la URL. Verá la
  animación real en su móvil, sin instalar nada. Ideal para aprobar antes de exportar.

> Recomendación: para RRSS usa **A** (vídeo). Para que Blanca dé el visto bueno, **B** (enlace).

---

## 10. Cómo meterlo en la web desde Design (paso a paso)

Ubicación en `src/pages/Home.jsx`: **antes de `<FAQ />`**, tras el bloque de
testimonios/prensa (`<SocialProofStrip />`). Es decir, actúa como cierre emocional
que recapitula antes de la zona de preguntas y contacto (decisión de colocación:
más conversión que alcance). Historial: primero se probó justo tras `<Hero />`.

**Vía Design (recomendada, ya trabaja sobre el repo `blanca`):**
1. En el mismo chat de Design, pídele:
   ```
   Guarda el componente en src/components/PromoReel.jsx e insértalo en
   src/pages/Home.jsx justo después de <Hero />, como sección a ancho completo.
   No toques nada más de la Home.
   ```
2. Design aplicará el cambio al proyecto (verás un diff / cambio propuesto). **Revísalo.**
3. Pruébalo en local antes de publicar:
   ```
   npm install   # solo la primera vez
   npm run dev    # abre http://localhost:5173 y mira la Home
   ```
4. Si te gusta, **publica**: haz commit del cambio y súbelo (push). Vercel despliega solo
   al recibir el push a la rama conectada (deploy automático). Cada push a una rama de PR
   genera además una **URL de preview** — esa es la que puedes mandarle a Blanca (§9-B).

**Vía manual (si prefieres copiar tú el código):**
1. Copia el código que te da Design y pégalo en `src/components/PromoReel.jsx`.
2. En `src/pages/Home.jsx` añade el import y colócalo antes de `<FAQ />`:
   ```jsx
   import PromoReel from '../components/PromoReel'
   // ...
   <SocialProofStrip />
   <PromoReel />
   <FAQ />
   ```
3. `npm run dev` para revisar → commit → push → Vercel despliega.

> Nota: el reel es puramente decorativo y usa imágenes ya servidas de `/public`, así que
> **no** añade cookies ni dependencias de terceros — no afecta al banner de consentimiento.

---

*Fuente de verdad de marca: `CLAUDE.md` (§3 tono, §8 diseño) y `src/i18n/resources/es.js`
(copy). Fotos e inventario: `docs/06-activos-fotos.md`.*

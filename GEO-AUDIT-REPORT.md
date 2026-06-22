# GEO + SEO Audit Report — OOL Experiences · Ceremonias Holísticas (Blanca Coutiño)

**Fecha:** 2026-06-18
**URL producción:** https://ceremonias-holisticas.vercel.app/
**Fuente local:** repo `blanca` (worktree `vibrant-solomon-ae4b3d`)
**Stack:** React 18 + Vite 5 SPA · React Router 6 (`createBrowserRouter`) · i18next ES/EN · Framer Motion · Deploy Vercel
**Tipo de negocio:** Local Business / Agency de servicios (ceremonias holísticas, bodas, eventos) — mercado turismo de lujo Mallorca
**Modo de auditoría:** código local + verificación en vivo (HTML servido, headers, robots/sitemap/llms, acceso crawlers)

---

## Resumen ejecutivo

**GEO Score global: 25/100 — CRÍTICO**

La web es bonita y el copy tiene buena materia prima de autoridad (22 años, prensa, pionera LGBT, testimonios, páginas legales). **Pero hoy es prácticamente invisible para buscadores y para motores de IA.** La causa raíz es una sola y es estructural: es una **SPA 100% client-side sin SSR ni prerender**, por lo que el HTML que llega a cualquier crawler que no ejecute JavaScript es un `<div id="root"></div>` vacío. Como los crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) **no ejecutan JS**, no ven ni una palabra del contenido. A eso se suma que `robots.txt`, `sitemap.xml` y `llms.txt` devuelven 200 pero **sirven el HTML de la app** (no existen), no hay **ningún schema JSON-LD**, no hay **canonical**, **hreflang** ni **og:image**, y todas las rutas comparten el mismo `<title>`.

**Lo bueno:** casi todo es arreglable antes de entregar, y varios fixes son de 1 archivo. La materia prima de contenido (E-E-A-T) ya existe; el problema es que no es *visible* ni *estructurada*. Una vez resueltos los 4 bloqueantes P0, el score sube con facilidad por encima de 70.

### Desglose por categoría

| Categoría | Score | Peso | Ponderado | Lectura |
|---|---|---|---|---|
| AI Citability | 20/100 | 25% | 5.0 | Contenido citable, pero invisible (CSR) |
| Brand Authority | 25/100 | 20% | 5.0 | Marca nueva, sin entidad, inconsistencia OOL vs Blanca |
| Content E-E-A-T | 45/100 | 20% | 9.0 | Señales fuertes pero no estructuradas ni visibles a crawler |
| Technical GEO | 25/100 | 15% | 3.75 | CSR, robots/sitemap/llms rotos, headers, sin canonical |
| Schema & Structured Data | 5/100 | 10% | 0.5 | Cero JSON-LD |
| Platform Optimization | 20/100 | 10% | 2.0 | Sin presencia en plataformas que la IA cita |
| **GEO Score global** | | | **≈25/100** | **Crítico** |

### Distinción clave: SEO clásico vs GEO (IA)

| | SEO clásico (Google/Bing) | GEO (ChatGPT, Claude, Perplexity, Gemini, AI Overviews) |
|---|---|---|
| ¿Ejecuta JS? | Googlebot sí (con retraso/coste), Bing parcial | **No** — la mayoría de crawlers de IA leen HTML crudo |
| Impacto del CSR actual | Indexación lenta y frágil, render diferido | **Invisibilidad casi total** |
| Por eso… | El SSR/prerender ayuda | El SSR/prerender es **innegociable** |

---

## P0 — Bloqueantes (arreglar ANTES de entregar)

### P0-1 · SPA client-side sin SSR/prerender → contenido invisible
- **Qué pasa:** `curl https://ceremonias-holisticas.vercel.app/` devuelve `<body><div id="root"></div></body>`. Todo el contenido (Hero, Catálogo, Sobre Blanca, Testimonios, FAQ) se inyecta con JS en el cliente.
- **Impacto SEO:** Alto. Googlebot puede renderizar JS pero lo hace en una segunda pasada, con retraso y peor que con HTML directo; el resto de buscadores, peor.
- **Impacto GEO:** **Crítico/total.** GPTBot, ClaudeBot, PerplexityBot, Google-Extended y Bing-AI **no ejecutan JS**. Hoy ven una página vacía → cero posibilidad de ser citada o recomendada por IA.
- **Fix (elige uno):**
  - **(A) Prerender estático en build (recomendado para este caso).** El sitio es casi estático (pocas rutas, sin login). Añade prerender a rutas conocidas con `vite-plugin-prerender-spa` / `vite-react-ssg`, o migra a un meta-framework con SSG. Resultado: cada ruta (`/`, `/ceremonies`, `/about`, `/gallery`, `/contact`, `/legal/*`) se sirve como HTML completo con su contenido y su meta.
  - **(B) Migrar a Next.js / Astro** (más trabajo, mejor a futuro para blog + SEO local del roadmap).
  - **(C) Prerendering vía servicio** (Prerender.io) — parche, no recomendado como solución final.
- **Archivos:** `vite.config.js`, `package.json`, `src/router.jsx` (las rutas a prerenderizar ya están aquí).

### P0-2 · `robots.txt`, `sitemap.xml`, `llms.txt` NO existen (el rewrite sirve el HTML)
- **Qué pasa:** `vercel.json` tiene `"rewrites": [{ "source": "/(.*)", "destination": "/" }]`. Cualquier ruta — incluida `/robots.txt` — devuelve `200` con el **HTML de la app**, no el fichero real. Verificado en vivo: `/robots.txt`, `/sitemap.xml` y `/llms.txt` devuelven el doctype HTML.
- **Impacto SEO:** Alto. Un `robots.txt` que devuelve HTML es inválido; el `sitemap.xml` no es parseable → los buscadores no tienen mapa del sitio.
- **Impacto GEO:** Alto. Sin `llms.txt` no das a los motores de IA un índice curado de tu contenido; sin sitemap válido, peor descubrimiento.
- **Fix:**
  1. Crea ficheros reales en `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` (Vite los copia tal cual a `dist/`).
  2. **Ajusta el rewrite** para que NO capture ficheros estáticos. Excluye extensiones/paths conocidos para que `/robots.txt` sirva el fichero y solo las rutas de la SPA caigan al `index.html`:
     ```json
     {
       "rewrites": [
         { "source": "/((?!.*\\.).*)", "destination": "/" }
       ]
     }
     ```
     (regex: solo reescribe paths sin punto → las rutas SPA van a `/`, pero `/robots.txt`, `/sitemap.xml`, `/assets/*` se sirven tal cual). Verifica tras desplegar que `curl .../robots.txt` devuelve texto plano, no HTML.
- **`robots.txt` modelo:**
  ```
  User-agent: *
  Allow: /

  # Crawlers de IA — permitir explícitamente
  User-agent: GPTBot
  Allow: /
  User-agent: OAI-SearchBot
  Allow: /
  User-agent: ChatGPT-User
  Allow: /
  User-agent: ClaudeBot
  Allow: /
  User-agent: Claude-Web
  Allow: /
  User-agent: PerplexityBot
  Allow: /
  User-agent: Google-Extended
  Allow: /

  Sitemap: https://ceremonias-holisticas.vercel.app/sitemap.xml
  ```
  > Nota: confirmar con el cliente si quiere permitir entrenamiento de modelos (`GPTBot`, `Google-Extended`). Para visibilidad en IA conviene permitir al menos los de *búsqueda* (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`).

### P0-3 · Cero schema estructurado (JSON-LD)
- **Qué pasa:** No hay ningún `application/ld+json` en el repo ni en el HTML servido.
- **Impacto SEO:** Alto. Sin `LocalBusiness`/`Organization` no hay rich results, knowledge panel ni señales de entidad.
- **Impacto GEO:** **Crítico.** El JSON-LD es la forma nº1 en que la IA reconoce una *entidad* (quién es, dónde, qué ofrece, cómo contactar). Es lo que se lee aunque el resto sea CSR — si lo inyectas en el HTML estático.
- **Fix:** Añadir JSON-LD **en el `index.html` estático** (no solo client-side) para que sobreviva al CSR. Mínimo: `LocalBusiness` + `Person` (Blanca) + `FAQPage` (ya hay FAQ) + `BreadcrumbList`. Esqueleto inicial:
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ceremonias-holisticas.vercel.app/#business",
    "name": "OOL Experiences — Ceremonias Holísticas",
    "description": "Ceremonias holísticas maya-contemporáneas en Mallorca: bodas, renovación de votos, baby blessing, despedidas y coaching.",
    "url": "https://ceremonias-holisticas.vercel.app/",
    "image": "https://ceremonias-holisticas.vercel.app/blanca-hero.webp",
    "areaServed": { "@type": "Place", "name": "Mallorca, Islas Baleares, España" },
    "founder": {
      "@type": "Person",
      "name": "Blanca Coutiño",
      "jobTitle": "Facilitadora de ceremonias holísticas, terapeuta y wedding planner",
      "description": "+22 años de trayectoria entre México, Francia y España. Pionera en bodas legales LGBT en la Riviera Maya."
    },
    "knowsLanguage": ["es", "en"],
    "sameAs": []
  }
  </script>
  ```
  > Rellenar `sameAs` con Instagram/Google Business/LinkedIn cuando existan (clave para reconocimiento de entidad). Generar `Service` por cada una de las 7 ceremonias y `FAQPage` desde el contenido de `FAQ.jsx`.

### P0-4 · Meta por ruta solo en client-side → todas las URLs son iguales para un crawler
- **Qué pasa:** `useDocumentMeta.js` actualiza `<title>`, `description` y `og:*` con `useEffect` (client-side). El HTML estático de `/ceremonies`, `/about`, `/gallery`, `/contact` es **idéntico** al de `/` (verificado en vivo). Falta además **`og:image`** y **canonical** en todas.
- **Impacto SEO:** Alto. Títulos/descripluciones duplicados entre páginas → canibalización, snippets pobres, sin canonical.
- **Impacto GEO:** Alto. La IA no distingue de qué va cada URL; sin `og:image` las tarjetas de preview salen vacías.
- **Fix:** Se resuelve de raíz con **P0-1 (SSR/prerender)**: al prerenderizar, inyecta el `<title>`/meta correcto por ruta en el HTML. Mientras tanto, añade ya a `index.html`:
  ```html
  <link rel="canonical" href="https://ceremonias-holisticas.vercel.app/" />
  <meta property="og:image" content="https://ceremonias-holisticas.vercel.app/blanca-hero.webp" />
  <meta property="og:url" content="https://ceremonias-holisticas.vercel.app/" />
  <meta name="twitter:card" content="summary_large_image" />
  ```
  Y en el prerender, sobreescribe `canonical`/`og:url`/`og:image`/`title` por ruta.

---

## P1 — Alta prioridad (esta semana)

### P1-1 · Sin `hreflang` para ES/EN
- **Qué pasa:** Bilingüe ES/EN, pero el idioma se cambia client-side (i18next browser detector) sin URLs separadas ni anotaciones `hreflang`. Un crawler solo ve la versión ES.
- **SEO:** Medio-alto (pierdes el tráfico EN, que es tu mercado: DE/UK/CH). **GEO:** Medio.
- **Fix:** Decisión de arquitectura: rutas por idioma (`/en/...`) o `?lang=` indexable, y añadir `<link rel="alternate" hreflang="es" .../>` + `hreflang="en"` + `x-default`. Encaja con el prerender de P0-1.

### P1-2 · Headers de seguridad ausentes
- **Qué pasa:** En vivo solo aparece `strict-transport-security`. Faltan `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`.
- **SEO/GEO:** Bajo-medio directo, pero es señal de *trust* y lo revisa cualquier auditoría de seguridad pre-entrega.
- **Fix:** Añadir `headers` en `vercel.json`:
  ```json
  "headers": [
    { "source": "/(.*)", "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
      { "key": "Permissions-Policy", "value": "geolocation=(), microphone=(), camera=()" }
    ]}
  ]
  ```

### P1-3 · Inconsistencia de marca: "OOL Experiences" vs "Ceremonias Holísticas · Blanca Coutiño"
- **Qué pasa:** El sitio usa "OOL Experiences" como marca (`index.html`, `nav.brand`), pero CLAUDE.md (ground-truth) define la marca pública como "Ceremonias Holísticas · Blanca Coutiño", y el dominio es `ceremonias-holisticas`. Esto **fragmenta la entidad** que la IA debe reconocer.
- **SEO/GEO:** Alto para *Brand Authority*: la IA necesita un nombre de entidad consistente y reforzado por `sameAs`. Dos nombres compitiendo diluyen la señal.
- **Fix:** **Decisión de negocio (no la resuelvo yo).** Hay que fijar UN nombre de marca primario y usarlo de forma consistente en `<title>`, JSON-LD `name`, OG, dominio, perfiles sociales y prensa. Recomendación a validar con Blanca: usar "Ceremonias Holísticas · Blanca Coutiño" como entidad y "OOL Experiences" como sub-marca/línea, o al revés — pero elegir y unificar.

### P1-4 · `<html lang>` fijo y meta no negocian idioma para crawlers
- Relacionado con P1-1. El baseline es `lang="es"`; sin versión EN servible, pierdes el segmento internacional. Resolver junto con hreflang.

---

## P2 — Media prioridad (este mes)

- **P2-1 · `FAQPage` schema:** Ya existe `FAQ.jsx`. Generar JSON-LD `FAQPage` desde ese contenido → alta probabilidad de aparecer en AI Overviews y de ser citado (formato Q&A es el más "citable").
- **P2-2 · `Service` schema por ceremonia:** 7 ceremonias en `content.js`. Un `Service` (o `Offer`) por cada una refuerza descubrimiento y citabilidad por intención ("boda holística Mallorca", "baby blessing Mallorca").
- **P2-3 · Citabilidad del copy:** Estructura editorial elegante pero poco "extraíble". Añadir bloques de respuesta directa (definiciones cortas: "Una ceremonia holística es…", "¿Cuánto dura una boda holística?") que la IA pueda citar literalmente, **sin romper la voz de marca** (científica, no mística — respetar CLAUDE.md §3/§4).
- **P2-4 · `alt` e imágenes:** Verificar que todas las `.webp` (`card-*`, `album-*`, `blanca-*`) tienen `alt` descriptivo en voz de marca (ya es convención del proyecto; auditar cumplimiento). Bien para SEO de imágenes y accesibilidad.
- **P2-5 · `og:image` por página y dimensiones:** Imagen social dedicada 1200×630 (hoy ni existe og:image). Mejora CTR en social y previews de IA.

---

## P3 — Mejoras / a futuro

- **P3-1 · `llms.txt` rico:** Más allá de existir, curar un `llms.txt` con enlaces a las páginas clave y una descripción de la entidad (encaja con el roadmap de blog/SEO local).
- **P3-2 · Brand Authority off-site:** La IA cita entidades con presencia en Google Business Profile, Instagram, prensa indexable, reseñas. Crear/enlazar (`sameAs`) y conseguir menciones. Es lo que más mueve *Brand Authority* a medio plazo.
- **P3-3 · Blog/SEO local:** Roadmap ya previsto. Contenido tipo "guía de bodas holísticas en Mallorca" alimenta tanto SEO como GEO.
- **P3-4 · Datos de negocio en `LocalBusiness`:** teléfono, horario, `geo`, rango de precios cuando se confirmen (CLAUDE.md §12 los tiene abiertos).

---

## Checks PENDIENTES (requieren más datos o decisión)

- **Core Web Vitals reales (INP/LCP/CLS):** medibles ahora que hay URL, pero requieren PageSpeed/CrUX; pendiente de pasada con herramienta de campo. La SPA con Framer Motion y hero `.webp` parte bien, pero el LCP depende del render client-side (lo mejora P0-1).
- **Permitir o no entrenamiento de IA** (GPTBot / Google-Extended): decisión del cliente (ver nota en P0-2).
- **Arquitectura de idioma EN** (rutas vs query): decisión técnica para P1-1.
- **Nombre de marca definitivo:** decisión de negocio (P1-3).
- **Datos de `LocalBusiness`** (tel, horario, precios): pendientes en CLAUDE.md §12.

---

## Quick wins (de hoy, alto impacto / bajo esfuerzo)

1. **Crear `public/robots.txt` + `public/sitemap.xml` reales** y **arreglar el rewrite** de `vercel.json` (P0-2). 1 archivo + 1 línea.
2. **Inyectar JSON-LD `LocalBusiness` + `Person` en `index.html`** estático (P0-3). Sobrevive al CSR, mueve la aguja en GEO de inmediato.
3. **Añadir `canonical`, `og:image`, `og:url`, `twitter:card` a `index.html`** (P0-4).
4. **Añadir bloque `headers` de seguridad en `vercel.json`** (P1-2).
5. **Decidir y unificar el nombre de marca** (P1-3) — barato y desbloquea toda la coherencia de entidad.

> El gran trabajo (y el que de verdad cambia el score) es **P0-1: prerender/SSR**. Sin eso, los demás fixes ayudan pero el contenido sigue invisible para la IA. Con P0-1 + P0-2 + P0-3 hechos, el GEO Score realista pasa de ~25 a 70+.

## Plan de acción

### Fase 1 — Bloqueantes pre-entrega
- [ ] P0-1 · Implementar prerender estático de las rutas (o migrar a SSG)
- [ ] P0-2 · `robots.txt` + `sitemap.xml` + `llms.txt` reales y arreglar rewrite
- [ ] P0-3 · JSON-LD `LocalBusiness` + `Person` (+ `FAQPage`) en HTML estático
- [ ] P0-4 · `canonical` + `og:image` + meta por ruta (vía prerender)

### Fase 2 — Quick wins / alta prioridad
- [ ] P1-2 · Headers de seguridad en `vercel.json`
- [ ] P1-3 · Fijar y unificar nombre de marca (decisión cliente)
- [ ] P1-1 / P1-4 · Arquitectura EN + `hreflang`

### Fase 3 — Mejoras a futuro
- [ ] P2 · `FAQPage` + `Service` schema, citabilidad del copy, `alt`, og:image dedicada
- [ ] P3 · `llms.txt` rico, Brand Authority off-site, blog SEO local, datos `LocalBusiness`

---

## Apéndice — Evidencia recogida

| Check | Resultado |
|---|---|
| HTML servido `/` | `<body><div id="root"></div></body>` — CSR puro, sin contenido |
| `/ceremonies` meta | Idéntico a `/` (sin meta por ruta en estático) |
| `/robots.txt` | 200 pero devuelve **HTML** (no existe el fichero) |
| `/sitemap.xml` | 200 pero devuelve **HTML** (no existe) |
| `/llms.txt` | 200 pero devuelve **HTML** (no existe) |
| JSON-LD en repo/HTML | **Ninguno** |
| `canonical` / `hreflang` | **Ausentes** |
| `og:image` | **Ausente** |
| Headers seguridad | Solo `strict-transport-security`; faltan X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, CSP |
| `<html lang>` | `es` fijo |
| Gestión meta | `src/i18n/useDocumentMeta.js` — client-side (`useEffect`) |
| Rewrite | `vercel.json` → `/(.*)` a `/` (causa robots/sitemap rotos) |

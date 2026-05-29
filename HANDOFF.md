# HANDOFF — Sesión de build del MVP (Blanca · Ceremonias Holísticas)

> **Cómo usar este archivo:** copia el bloque "PROMPT PARA PEGAR" en una sesión nueva de Claude Code (o pásaselo al dev). Es autosuficiente: asume cero contexto previo.

---

## PROMPT PARA PEGAR

```
Eres el dev/agente que retoma el proyecto web "Ceremonias Holísticas · Blanca Coutiño"
(cliente real de pago; ceremonias holísticas en Mallorca).

Repo: /Users/christianmarzaldellarovere/Desktop/Claude Code/blanca  (rama main)

PASO 0 — Contexto (léelo ANTES de tocar nada):
1. Lee CLAUDE.md (raíz) — es el ground truth de marca.
2. Lee toda la carpeta /docs (empieza por docs/00-indice.md). En especial:
   - docs/02-posicionamiento-voz.md (reglas de tono; lectura obligatoria antes de escribir copy)
   - docs/04-ceremonias.md (las 7 ceremonias y su naming)
   - docs/06-activos-fotos.md (las fotos reales y su curación)
   - docs/07-roadmap-mvp.md (el plan técnico que vas a ejecutar)
NO leas portfolio-ceremonias-holisticas.md ni handoff-sesion-portfolio.md: son del
portfolio de empleo del dueño, no de la marca.

OBJETIVO: pasar el prototipo actual a un MVP entregable, de forma INCREMENTAL (sobre el
layout actual de React + Vite + Tailwind + Framer Motion), BILINGÜE ES + EN.

TAREAS (orden sugerido; detalle en docs/07-roadmap-mvp.md):
1) Fotos: haz un "pase de visión" sobre public/fotos/ (39 JPEG sin nombres). Ábrelas,
   clasifícalas en blanca / eventos / prensa, deduplica, renómbralas con sentido y
   OPTIMÍZALAS a WebP redimensionadas. Elige las más potentes para la home y agrupa el
   resto en un álbum. Registra el mapeo (original → nombre nuevo → uso).
2) Contenido: actualiza src/data/content.js para reflejar las 7 ceremonias con su naming
   (docs/04), reescribe el copy en la voz de marca (docs/02), corrige credenciales y
   trayectoria (docs/01), revisa precios.
3) Imágenes: sustituye las 8 imágenes IA de public/ por las reales optimizadas.
4) Álbum: añade una sección/pestaña de galería que "cuente la historia de Blanca",
   más un bloque de prensa ("En los medios") con los recortes de Playa del Carmen.
5) i18n ES/EN: añade selector de idioma y estructura el copy por idioma (evalúa enfoque
   sin librería vs react-i18next; ver docs/07). Transcrea, no traduzcas literal.
6) Conecta el WhatsApp real y revisa CTAs y metadatos por idioma.

RESTRICCIONES DE MARCA (innegociables):
- Tono: científica, no mística · holística, no esotérica · elegante, NUNCA "de feria".
  Cita de Blanca: "fusión maya, moderna, elegante, holística, profesional… no quiero que
  se vea de una loca más terapéutica/holística".
- Líneas rojas: nada de adivinación/predicción del futuro (el Oráculo Angelical NO es
  predictivo), nada de consultas amorosas, nada de promesas médicas (las terapias
  complementan, no sustituyen).
- Diseño: mantén la paleta tierra/cacao y la tipografía Playfair + Inter; respeta los
  tokens de tailwind.config.js; NO introduzcas azules.
- TODO el copy entra por src/data/content.js (nunca hardcodeado en componentes).

ARCHIVOS CLAVE:
- src/data/content.js (copy, fuente única de verdad)
- src/components/* (Navbar, Hero, Catalog, About, Testimonials, FAQ, WhatsAppClose, Footer)
- tailwind.config.js (tokens) · index.html (fuentes/meta) · public/ y public/fotos/

DECISIONES A CONFIRMAR CON EL CLIENTE (no inventes; pregunta si bloquean):
- Naming final de cada ceremonia (hay opciones ⭐ en docs/04).
- Precio/formato del Oráculo Angelical y del Taller Alquímico.
- WhatsApp/teléfono/email definitivos (hay datos contradictorios; ver docs/07).
- Coaching: ¿3 o 6 sesiones? (docs/04 vs prototipo).
- Cuáles de las fotos son recortes de prensa y permisos de imagen de terceros.

Antes de empezar a programar, valida el plan con el dueño (Christian) y confirma las
decisiones bloqueantes. Trabaja en pasos revisables, no todo de golpe.
```

---

## Notas para Christian (no forman parte del prompt)

- **Dónde está todo:** la base de conocimiento es `CLAUDE.md` + `/docs/00..07`. Está pensada para crecer: cuando Blanca te pase más info, métela en el doc temático que toque y actualiza el índice (`docs/00-indice.md`).
- **Worktree obsoleto:** esta base se consolidó en `main`. El worktree `.claude/worktrees/jolly-proskuriakova-fb6f8a` ya no hace falta; puedes limpiarlo cuando quieras.
- **Antes del build conviene cerrar con Blanca** las decisiones bloqueantes listadas arriba (sobre todo naming, precios y datos de contacto), para no rehacer trabajo.
- **Git/fotos:** decide la política de versionado de imágenes antes de commitear (ver `docs/06` — recomendado: versionar solo las WebP optimizadas, guardar los originales aparte).
- **Idiomas:** hoy ES + EN. Si el mercado alemán pesa, DE queda como fase 2.

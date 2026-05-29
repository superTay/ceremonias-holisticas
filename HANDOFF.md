# HANDOFF — Build del MVP (Blanca · Ceremonias Holísticas)

> **Cómo usar este archivo:** copia el bloque **"PROMPT PARA PEGAR — FASE ACTUAL"** en una sesión nueva de Claude Code (o pásaselo al dev). Es autosuficiente: asume cero contexto previo. La sección "Estado del proyecto" te dice qué está hecho y qué falta.

---

## Estado del proyecto (actualizado 2026-05-29)

El MVP se construye de forma **incremental, en fases revisables** sobre el layout actual (React + Vite + Tailwind + Framer Motion). Decisiones ya cerradas con Christian:

- **i18n = `react-i18next`** (decidido), pero **diferido** a su fase. Hasta entonces `src/data/content.js` se mantiene como **fuente ES única** (no se parte en `{es,en}` todavía, para no refactorizar dos veces).
- **Para lo que depende de Blanca:** avanzar con los **defaults documentados en `/docs`** y marcar **TBD**; nada bloquea.
- **Coaching = 3 sesiones** (no 6). **Contacto:** placeholder coherente `+34 665 17 55 56` → `wa.me/34665175556` (a confirmar).

### ✅ Fase 1 — Contenido + voz de marca (HECHA)

- `src/data/content.js` reescrito: catálogo **6 → 7 ceremonias** con el naming ⭐ de `docs/04` (Unión de Almas Mayas · Tramuntana Baby Soul Ritual · El Festín de las Alas · El Lazo del Destino · El Círculo de Ixchel · El Retorno a la Luz · Alquimia de las 3 Aguas).
- Coaching corregido a **3 sesiones**; trayectoria reconciliada a **+22 años**; eliminada la afirmación no documentada "Psicología Organizacional" y sustituida por el diferenciador de **dos columnas** (`docs/01`); pionera LGBT integrada.
- **Líneas rojas barridas:** Oráculo encuadrado como guía/autoconocimiento (no predicción), disclaimer médico en FAQ, sin magia/milagro.
- **Contacto centralizado** en `content.js` (`whatsapp.url`).
- Componentes tocados: `Catalog.jsx` (filtra por `category`), `WhatsAppClose.jsx` (lee `whatsapp.url`), `About.jsx` (eliminado enlace muerto "Descargar CV" + icono).
- **Verificado:** build de producción **verde** (1891 módulos). ⚠️ El repaso visual en navegador queda pendiente de correr en local (`npm run dev`) — ver Notas.
- **TBD para Blanca** (no bloquean): naming final, precio/formato Taller y Oráculo, cifras reales de testimonios, datos de contacto de producción.

### ⏳ Fases pendientes (orden recomendado)

- **Fase 2 — Fotos: pase de visión + WebP** ← **SIGUIENTE** (prompt abajo). Clasificar/deduplicar/renombrar/optimizar las 39 fotos y sustituir las 8 imágenes IA de `public/`.
- **Fase 3 — Álbum/Galería + bloque Prensa.** Nueva sección que "cuente la historia de Blanca" (eventos, retratos) + bloque "En los medios" con recortes de Playa del Carmen. Depende de la Fase 2.
- **Fase 4 — i18n ES/EN con `react-i18next`.** Migrar `content.js` → bundles de recursos `es`/`en`, **transcrear** (no traducir literal) a un inglés premium, selector de idioma en `Navbar`, `<html lang>` y OG por idioma.
- **Fase 5 — Pulido final.** Conectar WhatsApp/contacto de producción definitivos, metadatos/OG por idioma, SEO básico, rendimiento (Lighthouse), revisión de CTAs.
- **Post-MVP (fase 2 de negocio):** chatbot de reservas · blog + automatización de contenido para SEO local · páginas dedicadas (Bodas, **Eventos de Villa de lujo**) · dossier B2B para aliados · **alemán (DE)**.

---

## PROMPT PARA PEGAR — FASE 2: FOTOS (pase de visión + WebP)

```
Eres el dev/agente que retoma el proyecto web "Ceremonias Holísticas · Blanca Coutiño"
(cliente real de pago; ceremonias holísticas en Mallorca).

Repo: /Users/christianmarzaldellarovere/Desktop/Claude Code/blanca  (rama main)

PASO 0 — Contexto (léelo ANTES de tocar nada):
1. Lee CLAUDE.md (raíz) — ground truth de marca.
2. Lee docs/06-activos-fotos.md (inventario y plan de curación de fotos: ES TU GUION).
   También docs/02-posicionamiento-voz.md (voz para los textos `alt`) y docs/04-ceremonias.md
   (a qué ceremonia corresponde cada card del catálogo).
3. Lee HANDOFF.md (sección "Estado del proyecto"): la Fase 1 (contenido/voz) YA está hecha;
   el copy de las 7 ceremonias ya vive en src/data/content.js. NO reescribas copy.
NO leas portfolio-ceremonias-holisticas.md ni handoff-sesion-portfolio.md (son del portfolio
de empleo del dueño, no de la marca).

OBJETIVO DE ESTA FASE: sustituir las imágenes IA por FOTOS REALES optimizadas. Es un cambio
visual fuerte, así que trabaja en pasos revisables y enseña el plan antes de convertir/borrar.

ESTADO DE LAS FOTOS:
- public/fotos/ tiene 39 JPEG (~169 MB) con nombres genéricos tipo Image_AAAAMMDD_HHMMSS_xxx.jpeg,
  pesados y sin curar. Hay duplicados conocidos (p. ej. "..._685 (1).jpeg" y "..._699 (1).jpeg").
- public/ tiene 8 imágenes IA en uso que hay que reemplazar:
  blanca-hero.webp, blanca-portrait.webp, card-bodas.webp, card-baby-blessing.webp,
  card-picnic.webp, card-parejas.webp, card-coaching.webp, card-despedidas.webp.
  (La 7ª ceremonia, "Alquimia de las 3 Aguas", NO tiene imagen: hoy usa un fallback de
  gradiente en Catalog.jsx. Si hay una foto que encaje, dale imagen.)

TAREAS:
1) Pase de visión: ABRE/inspecciona cada JPEG. Clasifícalas en blanca / eventos / prensa
   (recortes de prensa de Playa del Carmen), deduplica, descarta las de baja calidad y
   anota cuáles son las más potentes.
2) Optimización: redimensiona y convierte a WebP. Recomendado instalar `sharp` como
   devDependency (npm i -D sharp) para conversión por lotes fiable; alternativa sin
   dependencias: `sips` (nativo de macOS, soporta WebP). Tamaños orientativos:
   hero ~1400–1600 px de alto, cards ~1000–1200 px de ancho, álbum ~800 px, miniaturas
   ~400 px. Objetivo < 200 KB por imagen cuando se pueda. Mantén un script reproducible.
3) Sustitución en la home: reemplaza las 8 imágenes IA por las reales. Lo más simple es
   conservar los MISMOS nombres de archivo (drop-in); si cambias nombres, actualiza las
   rutas `image` y reescribe los `imageAlt` (en voz de marca) en src/data/content.js.
   Quita los `?v=3` o súbelos para cache-busting.
4) Mapeo: registra original → nombre nuevo → uso (home / álbum / prensa) en docs/06 (o un
   archivo de mapeo). Deja claro qué foto va a qué sitio.

POLÍTICA DE GIT (decidir y aplicar; ver docs/06):
- Versionar SOLO las WebP optimizadas. Los 39 originales (~169 MB) NO deben acabar en el
  repo público: añade public/fotos/ a .gitignore (o mueve los originales fuera del repo) y
  guárdalos aparte como backup del cliente.

LÍNEAS ROJAS Y PERMISOS (innegociables):
- Tono visual: maya boho chic, elegante y premium; estética = trust signal. Nada "de feria".
- PERMISOS DE TERCEROS: las fotos de bodas/eventos con caras de clientes NO se publican sin
  consentimiento. Marca cuáles tienen terceros identificables y NO las pongas online hasta
  que Blanca confirme permisos. Para la home, prioriza retratos de Blanca y tomas "seguras".
- Identifica cuáles son recortes de PRENSA (Playa del Carmen) y sus medios/fechas, para el
  futuro bloque "En los medios" (Fase 3).
- `alt` descriptivos en voz de marca (ES por ahora; el inglés llega en la fase de i18n).

DECISIONES A CONFIRMAR CON CHRISTIAN/BLANCA (no inventes; pregunta si bloquean):
- Pipeline de optimización: ¿`sharp` (instalar dep) o `sips` (nativo)?
- Qué fotos son prensa y permisos de imagen de terceros.
- ¿Hay sesión de fotos profesional nueva en Mallorca prevista? (las actuales son de México).

VERIFICACIÓN:
- npx vite build debe seguir verde. Repaso visual con `npm run dev` EN LOCAL (ojo: en algunos
  sandboxes el dev server no es alcanzable desde el navegador de preview; verifícalo en la
  máquina de Christian). Comprueba que las 7 cards, el hero y el retrato cargan, que no hay
  imágenes rotas y que los pesos son razonables.

Antes de convertir o borrar nada, enseña a Christian el plan de curación (qué foto va a qué
sitio, qué se descarta, qué necesita permiso). Trabaja en pasos revisables.
```

---

## Decisiones que siguen pendientes con Blanca (TBD — no bloquean)

- Naming final de cada una de las 7 ceremonias (se usan los ⭐ de `docs/04`).
- Precio/formato del **Oráculo Angelical** y del **Taller Alquímico** ("a consultar").
- Cifras reales para testimonios (nº de ceremonias/bodas).
- **WhatsApp/teléfono/email** de producción (hoy placeholder coherente; el prototipo antiguo
  tenía `wa.me/34678312884` desalineado con el número mostrado).
- Permisos de imagen de terceros y cuáles de las 39 fotos son recortes de prensa.

---

## Notas para Christian (no forman parte del prompt)

- **Verificación visual / entorno:** en esta sesión el dev server de Vite arrancó pero quedó en
  un namespace de red del sandbox que ni el navegador de preview ni la shell alcanzaron, así que
  el repaso de píxeles quedó pendiente — **córrelo en local con `npm run dev`**. Además, `vite build`
  va lentísimo aquí (esbuild tardó ~8 min); en tu máquina será normal. El build SÍ pasó verde.
- **Dónde está todo:** la base de conocimiento es `CLAUDE.md` + `/docs/00..07`. Cuando Blanca te
  pase más info, métela en el doc temático que toque y actualiza el índice (`docs/00-indice.md`).
- **Worktree obsoleto:** `.claude/worktrees/jolly-proskuriakova-fb6f8a` ya no hace falta; límpialo cuando quieras.
- **Git/fotos:** decide la política de versionado de imágenes antes de commitear (ver `docs/06` —
  recomendado: versionar solo las WebP optimizadas, guardar los originales aparte).
- **Idiomas:** ES + EN en el MVP (con `react-i18next`, Fase 4). Si pesa el mercado alemán, DE queda como fase posterior.
- **Skills útiles para el copy/CRO:** `/marketing-psychology` · `/page-cro` · `/copywriting`.

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

### ✅ Fase 2 — Fotos reales + WebP (HECHA · commit `daed4cc`)

- **Pase de visión** de las 39 JPEG → 5 duplicados exactos (MD5) → **34 únicas**, clasificadas (Blanca / eventos / prensa).
- **Pipeline reproducible:** `scripts/optimize-photos.mjs` (sharp). Recorte exacto al layout (hero/retrato 4:5, cards 4:3). **~169 MB de originales → ~0,7 MB servidos**; todas < 200 KB.
- **Sustituidas las 8 imágenes IA** por fotos reales + **imagen nueva para la 7ª card** (Alquimia, antes gradiente). `alt` reescritos en voz de marca y **neutros de ubicación**; quitados los `?v=`.
- **Card de Bodas** con detalle ritual nítido (manos sobre huipil); la toma de boda borrosa se descartó de la home.
- **Bloque "En los medios" adelantado de Fase 3:** `Press.jsx` con el recorte de *The Playa Times* (entre Sobre Blanca y Testimonios).
- **Política git aplicada:** `public/fotos/` gitignorado; 39 originales respaldados fuera del repo en `../blanca-fotos-originales-backup/`. Solo se versionan las WebP. Mapeo completo en `docs/06`.
- **Decisiones cerradas:** pipeline = `sharp`; hero = foto del mar sereno; mazo del Oráculo = **propio** (confirmado por Blanca, ya sin caveat de IP).
- **Verificado:** build de producción **verde** (1892 módulos). El repaso visual se hace en local con `npm run dev` (en este sandbox el dev server no es alcanzable desde el navegador de preview).
- ✅ **Decisiones de Christian/Blanca (2026-05-29), ya cerradas:** (1) **se permiten caras de
  terceros** → `..._794`/`..._784` usables (álbum); (2) **confirmado** que aparece nombrada en
  *Novedades* (`..._755`) → entra en prensa; (3) para Bodas/Compromiso/Despedida se usan **imágenes
  con licencia** como puente y Blanca irá aportando fotos reales propias con el tiempo.

### ✅ Fase 3 — Álbum/Galería (+ completar Prensa) (HECHA · 2026-05-29)

- **Galería:** `src/components/Gallery.jsx` (nuevo) — rejilla masonry responsive (`columns` 1/2/3) con
  thumbs lazy + `width/height` (cero layout shift) y **lightbox accesible** (Esc/←/→, focus trap,
  scroll lock, `role="dialog"`, foco devuelto al thumb). Insertada en `App.jsx` tras `Press`.
- **Selección curada de 10** (3 retratos/figura · 6 detalles · 1 boda); mapeo completo en `docs/06`.
- **Pipeline:** bloque `ALBUM` en `scripts/optimize-photos.mjs` → full (~1200 px, lightbox) + thumb
  (~480 px, rejilla) por foto, `fit:'inside'`, todas < 150 KB. Datos en `export const gallery` de
  `content.js`. Enlace **"Galería" (`#galeria`)** añadido a `nav.links`.
- **Prensa ampliada:** *Novedades* (`_755`) → `prensa-novedades.webp` en vivo. Sin cita textual de
  Blanca en la página → **fuente citada sin cita inventada**: item con `summary` (no `quote`);
  `Press.jsx` ahora soporta items sin `quote` (párrafo sobrio). The Playa Times intacto.
- **Verificado:** build de producción **verde** (1893 módulos). El repaso visual se hace en local
  con `npm run dev` (el navegador de preview del sandbox no alcanza el dev server).

### ⏳ Fases pendientes (orden recomendado)

- **Fase 4 — i18n ES/EN con `react-i18next`.** ← **SIGUIENTE** Migrar `content.js` → bundles de recursos `es`/`en`, **transcrear** (no traducir literal) a un inglés premium, selector de idioma en `Navbar`, `<html lang>` y OG por idioma.
- **Fase 5 — Pulido final.** Conectar WhatsApp/contacto de producción definitivos, metadatos/OG por idioma, SEO básico, rendimiento (Lighthouse), revisión de CTAs.
- **Post-MVP (fase 2 de negocio):** chatbot de reservas · blog + automatización de contenido para SEO local · páginas dedicadas (Bodas, **Eventos de Villa de lujo**) · dossier B2B para aliados · **alemán (DE)**.

---

## PROMPT PARA PEGAR — FASE 3: ÁLBUM/GALERÍA (+ completar prensa)

```
Eres el dev/agente que retoma el proyecto web "Ceremonias Holísticas · Blanca Coutiño"
(cliente real de pago; ceremonias holísticas en Mallorca).

Repo: /Users/christianmarzaldellarovere/Desktop/Claude Code/blanca  (rama main)

PASO 0 — Contexto (léelo ANTES de tocar nada):
1. Lee CLAUDE.md (raíz) — ground truth de marca.
2. Lee docs/06-activos-fotos.md — inventario, MAPEO de fotos ya ejecutado (Fase 2) y la lista de
   ~18 CANDIDATAS A ÁLBUM. También docs/02-posicionamiento-voz.md (voz para alt/copy) y
   docs/03-publico-mercado.md (estrategia: la web "cuenta su historia" y construye autoridad).
3. Lee HANDOFF.md (sección "Estado del proyecto"): Fases 1 y 2 HECHAS. NO reescribas el copy de
   las ceremonias ni re-optimices la home.
NO leas portfolio-ceremonias-holisticas.md ni handoff-sesion-portfolio.md (portfolio de empleo).

SKILLS RECOMENDADAS (ya instaladas en el proyecto; invócalas al diseñar):
- `frontend-design` — para que la galería sea distintiva y premium, no "AI genérica". PRINCIPAL.
- `ui-ux-pro-max` — patrones de rejilla/lightbox, spacing, hover, alineación con la paleta tierra/cacao.
- `react-best-practices` — galería con muchas imágenes: lazy-load, evitar layout shift (width/height),
  no romper el LCP del hero. Úsala en la revisión de rendimiento.

OBJETIVO DE ESTA FASE: añadir una sección de ÁLBUM/GALERÍA que "cuente la historia de Blanca"
(retratos + detalles de ceremonia + algún evento) y completar el bloque de PRENSA. El bloque
"En los medios" (src/components/Press.jsx) YA existe con el recorte de The Playa Times; aquí se amplía.

ESTADO:
- Las fotos reales ya están curadas y optimizadas (Fase 2). Pipeline: scripts/optimize-photos.mjs
  (sharp). Los originales están gitignorados en public/fotos/ y respaldados en
  ../blanca-fotos-originales-backup/.
- docs/06 lista las candidatas fuertes para el álbum (retratos de Blanca + detalles cristales/manos).
- La home usa hero, retrato y 7 cards; NO tocar salvo que se pida.

TAREAS:
1) Galería/Álbum: nueva sección (p. ej. Gallery.jsx) con una rejilla elegante (maya boho chic,
   premium) de las candidatas de álbum. Añade jobs al script para optimizarlas a WebP (álbum
   ~1000–1200 px lado largo, thumbs ~400 px; lazy-load; objetivo < 150 KB). alt en voz de marca.
   Valora un lightbox accesible (teclado + focus trap) o, como mínimo, rejilla con buen object-fit.
2) Prensa: *Novedades* (..._755) está CONFIRMADA (Blanca aparece nombrada) → optimízala y añádela a
   `press.items` en content.js. Marco sobrio, mismo estilo que The Playa Times.
3) Inserta la galería en App.jsx donde mejor narre (p. ej. tras Press o tras About). Si procede,
   añade enlace en Navbar/Footer (#galeria / #prensa).
4) (Opcional, requiere a Christian) Cards de Bodas/Compromiso/Despedida: hoy usan detalles simbólicos.
   Se aprobó usar **imágenes con licencia** como puente. Si Christian aporta/aprueba stock premium
   on-brand, sustituye esas 3 imágenes; si no, déjalas como están. (Blanca irá dando fotos reales.)

LÍNEAS ROJAS Y PERMISOS:
- Estética = trust signal; nada "de feria". Prioriza calidad: retratos de Blanca y detalles nítidos.
- **Caras de terceros PERMITIDAS** (decisión de Christian/Blanca 2026-05-29): `..._794`/`..._784`
  (boda) son usables en el álbum. Aun así, cuida la calidad (794 es oscura/grano → tamaño contenido).
- alt descriptivos en voz de marca (ES; el inglés llega en Fase 4 de i18n).

VERIFICACIÓN:
- npx vite build verde. npm run dev en local para el repaso visual (en este sandbox el dev server
  no es alcanzable desde el navegador de preview; verifícalo en la máquina de Christian).
- Pesos razonables; sin imágenes rotas; rejilla responsive.
- ⚠️ En este entorno esbuild se rompía a veces; si el build falla con ERR_MODULE_NOT_FOUND de
  esbuild, un `npm install` lo arregla (Vercel hace install limpio y no se ve afectado).

Trabaja en pasos revisables y enseña el plan (qué fotos, qué layout) antes de construir.
```

---

## Decisiones que siguen pendientes con Blanca (TBD — no bloquean)

- Naming final de cada una de las 7 ceremonias (se usan los ⭐ de `docs/04`).
- Precio/formato del **Oráculo Angelical** y del **Taller Alquímico** ("a consultar").
- Cifras reales para testimonios (nº de ceremonias/bodas).
- **WhatsApp/teléfono/email** de producción (hoy placeholder coherente; el prototipo antiguo
  tenía `wa.me/34678312884` desalineado con el número mostrado).
- **Fotos (Fase 2/3):** consentimiento de la boda con caras de terceros (`..._794`, OFFLINE);
  confirmar que Blanca aparece nombrada en *Novedades* (`..._755`) antes de publicarla; y
  **fotos reales propias de Bodas/Compromiso/Despedida** (hoy detalles simbólicos) o imágenes con licencia.
- ✅ *Resueltas en Fase 2:* mazo del Oráculo = propio; prensa identificada (*The Playa Times* en vivo).

---

## Notas para Christian (no forman parte del prompt)

- **Verificación visual / entorno:** el repaso de píxeles se hace **en local con `npm run dev`**
  (en el sandbox el dev server queda en un namespace de red inalcanzable por el navegador de preview).
  El build de producción pasa verde.
- ⚠️ **esbuild flaky en este entorno:** durante la Fase 2, `node_modules/esbuild` se quedaba a
  medias de forma recurrente y `vite build` fallaba con `ERR_MODULE_NOT_FOUND`. Solución: `npm install`.
  **Vercel no se ve afectado** (hace install limpio en cada deploy).
- **Git/fotos (aplicado):** `public/fotos/` está gitignorado; los 39 originales se respaldan fuera
  del repo en `../blanca-fotos-originales-backup/`. Solo se versionan las WebP. La conversión es
  reproducible con `node scripts/optimize-photos.mjs` (requiere `sharp`, ya en devDependencies).
- **Dónde está todo:** la base de conocimiento es `CLAUDE.md` + `/docs/00..07`. Cuando Blanca te
  pase más info, métela en el doc temático que toque y actualiza el índice (`docs/00-indice.md`).
- **Idiomas:** ES + EN en el MVP (con `react-i18next`, Fase 4). Si pesa el mercado alemán, DE queda como fase posterior.
- **Skills útiles para el copy/CRO:** `/marketing-psychology` · `/page-cro` · `/copywriting`.

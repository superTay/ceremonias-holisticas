# 07 · Roadmap: del prototipo al MVP

> **Propósito:** el plan técnico para pasar el sitio actual (prototipo) a un **MVP entregable**, con el enfoque **incremental** acordado. Es el guion de la(s) próxima(s) sesión(es) de desarrollo. Complementa a `HANDOFF.md`.

---

## Enfoque acordado

- **Incremental**, no rediseño desde cero: trabajar **sobre el layout actual** (React + Vite + Tailwind + Framer Motion).
- **Bilingüe ES + EN** desde el MVP.
- Sustituir las **fotos IA por reales**.
- Reflejar las **7 ceremonias** con su naming.
- Mantener la regla de oro de marca y los tokens de diseño existentes.

## Estado de partida (qué ya funciona)

- One-page con 8 secciones: `Navbar → Hero → Catalog → About → Testimonials → FAQ → WhatsAppClose → Footer`.
- Copy centralizado en `src/data/content.js` (fuente única de verdad).
- Design system por tokens en `tailwind.config.js` (paleta tierra/cacao, Playfair + Inter).
- Animaciones (scroll reveal, marquee, filtro animado del catálogo, acordeón FAQ).
- Deploy en Vercel. Conversión por deep-link a WhatsApp.

## Estado de ejecución (actualizado 2026-05-29)

- **Fase 1 (Contenido + voz): ✅ HECHA.** 7 ceremonias con naming ⭐, Coaching = 3 sesiones, +22 años, líneas rojas barridas, contacto centralizado en `content.js` (`whatsapp.url`). Build de producción verde; repaso visual pendiente en local.
- **Fase 2 (Fotos): siguiente.** Ver `HANDOFF.md` (prompt de la fase) y `docs/06`.
- **Fase 3 (Álbum/Prensa), Fase 4 (i18n `react-i18next`), Fase 5 (pulido): pendientes.**

## Tareas del MVP (orden sugerido)

### 1. Contenido — actualizar `src/data/content.js` — ✅ HECHO (2026-05-29)
- Pasar el catálogo de **6 a 7 ceremonias** (añadir **Compromiso** y **Taller Alquímico**; unir **Pícnic + Oráculo**). Datos en `docs/04-ceremonias.md`.
- Aplicar el **naming** elegido (o las recomendaciones marcadas con ⭐ hasta que Blanca decida).
- Reescribir todo el copy en **voz de marca** (`docs/02`): hero, sub, about, testimonios, FAQ, WhatsApp.
- Actualizar **credenciales** y trayectoria reales (`docs/01`): reconciliar "+10 años" → "+22 años de trayectoria" (decisión en `00-indice.md`).
- Revisar **precios** (mantener visibles salvo indicación). Confirmar Compromiso, Oráculo y Taller.
- Corregir datos de contacto (ver "Decisiones técnicas" abajo).

### 2. Fotos — sustituir IA por reales
- Ejecutar el **pase de visión** de `docs/06`: clasificar, deduplicar, renombrar, optimizar a WebP.
- Reemplazar las 8 imágenes IA de `public/` por las reales optimizadas (hero, retrato, 7 cards).
- Mantener `alt` descriptivos en voz de marca.

### 3. Álbum / Galería (nueva sección)
- Añadir una **sección o pestaña de álbum** que cuente la historia de Blanca (eventos, ceremonias, retratos).
- Incluir un bloque de **prensa** ("En los medios") con los recortes de Playa del Carmen.
- Patrón técnico: nuevo componente (p. ej. `Gallery.jsx` / `Album.jsx`) consumiendo datos de `content.js`; respetar tokens y animaciones existentes.

### 4. i18n ES / EN
- Estrategia ligera para sitio Vite estático. Opciones a evaluar:
  - **Sin librería:** estructurar `content.js` con claves por idioma (`{ es: {...}, en: {...} }`) + un estado/contexto de idioma y un toggle en el `Navbar`. Bajo coste, suficiente para un MVP one-page.
  - **Con librería:** `react-i18next` si se prevé crecer (blog multipágina, rutas por idioma).
- Añadir **selector de idioma** (ES/EN) en la navegación.
- Transcrear (no traducir literal) a un inglés igual de premium. (DE como fase futura.)
- Ajustar `<html lang>` y metadatos por idioma para SEO.

### 5. Conversión y contacto
- Conectar el **WhatsApp real** y revisar todos los CTAs.
- Revisar metadatos / OG por idioma.

## Decisiones técnicas a resolver
- **Número/canal de WhatsApp definitivo:** ⏳ TBD. El prototipo usaba `wa.me/34678312884` desalineado con el número mostrado; ya unificado a un placeholder coherente `+34 665 17 55 56` → `wa.me/34665175556` en `content.js` (`whatsapp.url`). **Confirmar el de producción** (y el email) con Blanca antes de publicar.
- **i18n:** ✅ decidido = **`react-i18next`**, diferido a la Fase 4. Hasta entonces `content.js` se mantiene como fuente ES única.
- **Imágenes:** ⏳ Fase 2. Pipeline a elegir (`sharp` recomendado vs `sips` nativo) y política de versionado (solo WebP optimizadas; ver `docs/06`).
- **Coaching:** ✅ resuelto = **3 sesiones** (cierre/transición/renacimiento), ya reflejado en `content.js`.

## Roadmap posterior al MVP (fase 2)
- **Páginas dedicadas por servicio** (sobre todo Bodas y **Eventos de Villa de lujo**, el segmento premium).
- **Blog** + automatización de contenido para SEO local (semilla en `docs/05` y descripciones de ceremonias).
- **Chatbot de reservas / agendamiento**.
- **Dossier B2B** para aliados (villas, wedding planners, hoteles boutique) — `docs/03`.
- **Alemán (DE)** como tercer idioma.
- Analítica + Lighthouse para medir.

## Criterio de "MVP entregable"
- 7 ceremonias con copy de marca y naming.
- Fotos reales optimizadas en home + álbum + prensa.
- Bilingüe ES/EN funcional con selector.
- WhatsApp real conectado.
- Sin contradicciones con `CLAUDE.md` ni líneas rojas; rendimiento web razonable (imágenes optimizadas).

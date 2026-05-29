# 06 · Activos visuales y estrategia de fotos

> **Propósito:** qué fotos tenemos, cómo curarlas y cómo usarlas para que la web "cuente la historia de Blanca" y genere confianza. La fotografía real es un **trust signal** central: el cliente necesita sentir que está en buenas manos.

---

## Inventario actual

### Imágenes generadas por IA (en `public/`, en uso por el prototipo)
8 archivos WebP optimizados (~30–145 KB):
`blanca-hero.webp`, `blanca-portrait.webp`, `card-bodas.webp`, `card-baby-blessing.webp`, `card-picnic.webp`, `card-parejas.webp`, `card-despedidas.webp`, `card-coaching.webp`.

> Son **provisionales**. El objetivo del MVP es sustituirlas por **fotos reales de Blanca**.

### Fotos reales del cliente (en `public/fotos/`)
- **39 archivos JPEG**, nombres genéricos (`Image_2026MMDD_HHMMSS_xxx.jpeg`), pesos de **~0,4 a 9 MB** (sin optimizar para web).
- Hay **duplicados** detectados (p. ej. `Image_20260514_233103_685.jpeg` y `...685 (1).jpeg`; `..._699` y `..._699 (1)`). Deduplicar.
- Por timestamp se agrupan en ~4 tandas (14 may, 15 may, 21 may) — útil como pista, pero el contenido real solo se sabe **abriéndolas**.
- Según el cliente, el conjunto incluye **3 tipos**: (a) fotos personales de Blanca (su lado humano), (b) **fotos de eventos/bodas** que organizó en Playa del Carmen (prueba de experiencia), y (c) **recortes de periódicos locales de México** que la mencionan (autoridad/prensa). *Confirmar cuáles son los recortes.*

## Decisión de curación: pase de visión por IA

En la **sesión de build**, el agente debe:
1. **Abrir y mirar** cada una de las 39 fotos (tool de lectura de imágenes).
2. **Clasificarlas** en categorías: `blanca/` (retratos/personales), `eventos/` (bodas y ceremonias pasadas), `prensa/` (recortes), y descartar duplicados/baja calidad.
3. **Renombrar** semánticamente (p. ej. `blanca-retrato-altar.webp`, `evento-boda-playa-01.webp`, `prensa-playa-del-carmen-01.webp`).
4. **Seleccionar las más potentes** para la **home** (las que mejor transmiten autoridad, calidez y estética premium) y agrupar el resto en un **álbum**.
5. **Optimizar** (ver abajo) antes de integrarlas o commitearlas.

> Nota: son imágenes pesadas; procesarlas consume recursos. Hacerlo por tandas y registrar el mapeo (foto original → nombre nuevo → uso) en una tabla.

## Estrategia de uso en la web

- **Home:** las fotos más fuertes, integradas en hero, "Sobre Blanca", catálogo y testimonios. Sustituyen a las imágenes IA. Objetivo: que el visitante **conecte con Blanca** y perciba profesionalidad.
- **Álbum / Galería:** pestaña o sección aparte que agrupa el resto de fotos buenas (eventos, ceremonias, retratos) para **contar su historia** y demostrar trayectoria.
- **Prensa:** los recortes de Playa del Carmen → sección de **autoridad / "en los medios"** (refuerzan credibilidad). Mostrarlos con elegancia (marco sobrio, cita del medio si se conoce).
- **Eventos/bodas pasadas:** funcionan como **prueba social** (porfolio de experiencia) — especialmente valiosos para el objetivo de escalar a bodas y eventos de villa.

## Optimización (técnico — importante)

- Las JPEG originales (4–9 MB) **no se sirven en producción tal cual**: matarían el rendimiento (LCP) y el peso de página.
- **Convertir a WebP** (o AVIF) redimensionando a tamaños web (p. ej. hero ~1600px, cards ~800px, thumbs de álbum ~400px). Apuntar a < 200 KB por imagen siempre que se pueda.
- Mantener `loading="lazy"` (y `fetchpriority="high"` solo en el hero), como ya hace el prototipo.
- `alt` descriptivos y en voz de marca (es el estándar del repo).

## Control de versiones (decisión pendiente del usuario)

- 39 JPEG en crudo ≈ **~195 MB**. Commitearlas en crudo en un repo público no es ideal.
- Opciones: (a) **commitear solo las versiones optimizadas** (WebP redimensionadas) y guardar los originales fuera del repo; (b) usar **Git LFS** para los originales; (c) mantener originales en `public/fotos/` pero **gitignorar** y versionar solo las optimizadas en `public/`.
- Recomendación: **(a)** — versionar solo lo que sirve la web; guardar originales aparte (backup del cliente).

## Pendiente / confirmar con Blanca
- Cuáles de las 39 son **recortes de prensa** y de qué **medios/fechas** (para citarlos). → Identificados 2 (ver mapeo).
- Permisos/derechos de imagen de las **bodas de clientes** (mostrar caras de terceros requiere consentimiento).
- Si quiere **sesión de fotos profesional nueva** en Mallorca a futuro (las actuales son de México).

---

## Mapeo de curación — Fase 2 (ejecutado 2026-05-29)

Pase de visión sobre 39 JPEG → **5 pares duplicados exactos (MD5)** → **34 imágenes únicas**.
Pipeline: `sharp` vía `scripts/optimize-photos.mjs` (reproducible; recorte exacto al aspect del layout).
`public/fotos/` está **gitignorado**; los 39 originales se respaldan **fuera del repo** en
`../blanca-fotos-originales-backup/` (backup del cliente). Solo se versionan las WebP de `public/`.

### Hallazgos relevantes
- **Dos sesiones:** 14 may (huipil + cristales, mar **turquesa caribeño = México**) y 21 may
  (cristales sobre roca, costa con pinos = **parece Mallorca**). Decisión: usar las actuales ahora
  con `alt` evocador-neutro (sin afirmar "Mallorca" donde la imagen lo contradiga).
- **Caras de terceros:** hay dos fotos de boda con invitados/novios identificables. **Decisión de
  Christian/Blanca (2026-05-29): se permite usar caras de terceros** → ya no requieren reserva.

### Home (9 imágenes — sustituyen las IA)
| Original (`Image_*.jpeg`) | Archivo nuevo | Uso | Recorte | Nota |
|---|---|---|---|---|
| `20260514_233159_933` | `blanca-hero.webp` | Hero | 1080×1350 (4:5) | figura pequeña/baja — encaje editorial |
| `20260514_233232_310` | `blanca-portrait.webp` | Retrato "Sobre Blanca" | 1000×1250 (4:5) | mejor retrato de rostro |
| `20260514_233232_335` | `card-bodas.webp` | Card Bodas | 1200×900 (4:3) | manos en gesto ritual sobre huipil (nítida) |
| `20260514_233232_356` | `card-baby-blessing.webp` | Card Baby Blessing | 1200×900 | manos en corazón |
| `20260514_233103_703` | `card-picnic.webp` | Card Pícnic & Oráculo | 1200×900 | mazo del Oráculo propio (confirmado por Blanca) |
| `20260514_233103_685` | `card-parejas.webp` | Card Compromiso | 1200×900 | amatista (detalle simbólico) |
| `20260514_233159_989` | `card-despedidas.webp` | Card Despedida | 1200×900 | cristales chakras (detalle) |
| `20260514_233232_378` | `card-coaching.webp` | Card Coaching | 1200×900 | de espaldas al mar (umbral) |
| `20260514_233159_974` | `card-alquimia.webp` | Card Taller (NUEVA) | 1200×900 | producto "Brisa Áurica" |

> Bodas/Compromiso/Despedida son **detalles simbólicos**, no documentación real de ceremonia.
> **Decisión (2026-05-29):** por ahora se usan **imágenes con licencia** (stock premium, on-brand)
> como puente; luego Blanca irá aportando fotos reales propias a medida que celebre ceremonias y
> se van añadiendo/sustituyendo. (La home actual ya funciona con detalles simbólicos.)

### Prensa — bloque "En los medios"
- `20260515_000820_731` → `prensa-the-playa-times.webp` (1100×1400, fit inside). **En vivo** en la
  sección `Press.jsx` (#prensa). *The Playa Times* (thePlayaTimes.com), entrevista FR "Pour Votre
  Grand Jour · TPT Rencontre Blanca Coutiño"; menciona su marca **Coucou Mexikoo** y "depuis 2013".
- `20260515_000820_755` — *Novedades* (Quintana Roo), "5 recomendaciones para pedir matrimonio".
  **Confirmado por Christian que Blanca aparece nombrada** → optimizar y **añadir a `press.items`** en Fase 3.

### Fotos de boda/evento (caras de terceros) — PERMITIDAS
> Permiso concedido por Christian/Blanca (2026-05-29). Ya **no** hay reserva por privacidad.
- `20260515_000820_794` — boda nocturna, novios identificables, emotiva (lazo rojo). Calidad media
  (oscura/grano) → mejor para **álbum** a tamaño contenido que como flagship.
- `20260515_000820_784` — decoración de boda al atardecer (velas/flores), invitados desenfocados.
  Baja resolución → candidata a **álbum** a tamaño pequeño.

### Duplicados exactos borrados/ignorados (MD5)
`233103_685 (1)`=`_685` · `233103_699 (1)`=`_699` · `233232_348`=`233159_979` · `233232_366`=`233159_999` · `233232_382`=`233159_989`.

### Descartes para web
- `20260514_233040_618` — fondo de resort/tobogán, débil (no premium).

### Álbum / Galería (Fase 3 — candidatas fuertes restantes)
**Retratos/detalles (México, huipil + cristales):** `233040_598`, `233040_628`, `233103_654`,
`233103_676`, `233103_692`, `233103_699`, `233159_979`, `233159_985`, `233159_994`, `233159_999`,
`233232_335`, `233232_361`, `233232_372`.
**Cristales sobre roca (parece Mallorca):** `222117_494`/`_800` (una), `222117_580`, `222117_682`,
`222117_763`, `222117_833`, `222117_902`.
**Boda/evento (caras permitidas):** `000820_794` (novios, lazo rojo), `000820_784` (decoración).
> Total ~20 candidatas seguras. Seleccionar 9–15 para la galería, equilibrando retratos / detalles
> / evento, y evitar near-duplicados (ver clusters anotados en el pase de visión).

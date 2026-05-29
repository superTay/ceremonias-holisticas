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
- Cuáles de las 39 son **recortes de prensa** y de qué **medios/fechas** (para citarlos).
- Permisos/derechos de imagen de las **bodas de clientes** (mostrar caras de terceros requiere consentimiento).
- Si quiere **sesión de fotos profesional nueva** en Mallorca a futuro (las actuales son de México).

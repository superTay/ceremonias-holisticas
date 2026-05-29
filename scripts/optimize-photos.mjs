// Optimización de fotos reales → WebP para la home (Fase 2).
// Origen: public/fotos/ (originales del cliente, gitignored). Salida: public/.
// Recorte exacto al aspect ratio que usa el layout (hero/retrato 4:5, cards 4:3),
// para que coincida con el CSS (object-cover) y los pesos sean mínimos.
// Reproducible: `node scripts/optimize-photos.mjs`. El mapeo vive en docs/06-activos-fotos.md.

import sharp from 'sharp'
import { stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'public', 'fotos')
const OUT = path.join(ROOT, 'public')
const QUALITY = 80

// origen → destino → recorte (px). fit 'cover' recorta al aspect; 'inside' encaja sin recortar.
// Ver mapeo y razón de cada elección en docs/06.
const JOBS = [
  { src: 'Image_20260514_233159_933.jpeg', out: 'blanca-hero.webp',        w: 1080, h: 1350 }, // 4:5 hero
  { src: 'Image_20260514_233232_310.jpeg', out: 'blanca-portrait.webp',    w: 1000, h: 1250 }, // 4:5 retrato
  { src: 'Image_20260514_233232_335.jpeg', out: 'card-bodas.webp',         w: 1200, h: 900 },  // 4:3 · manos/gesto ritual sobre huipil (nítida)
  { src: 'Image_20260514_233232_356.jpeg', out: 'card-baby-blessing.webp', w: 1200, h: 900 },
  { src: 'Image_20260514_233103_703.jpeg', out: 'card-picnic.webp',        w: 1200, h: 900, q: 72 }, // detalle alto → q menor
  { src: 'Image_20260514_233103_685.jpeg', out: 'card-parejas.webp',       w: 1200, h: 900 },
  { src: 'Image_20260514_233159_989.jpeg', out: 'card-despedidas.webp',    w: 1200, h: 900 },
  { src: 'Image_20260514_233232_378.jpeg', out: 'card-coaching.webp',      w: 1200, h: 900 },
  { src: 'Image_20260514_233159_974.jpeg', out: 'card-alquimia.webp',      w: 1200, h: 900 },
  // Prensa (bloque "En los medios"). fit 'inside' = no recortar el recorte de periódico.
  { src: 'Image_20260515_000820_731.jpeg', out: 'prensa-the-playa-times.webp', w: 1100, h: 1400, q: 82, fit: 'inside' },
  { src: 'Image_20260515_000820_755.jpeg', out: 'prensa-novedades.webp',        w: 1100, h: 1500, q: 82, fit: 'inside' },
]

// Álbum/Galería (Fase 3). Cada foto → dos WebP: full (lightbox) y thumb (rejilla).
// fit 'inside' preserva el aspect (no recorta composiciones editoriales) → orientación mixta.
// Selección curada en docs/06 / plan de Fase 3. alt en content.js (gallery.items).
const ALBUM = [
  { src: 'Image_20260514_233040_598.jpeg', slug: 'album-01-orilla' },
  { src: 'Image_20260514_233040_628.jpeg', slug: 'album-02-retrato-cuarzo' },
  { src: 'Image_20260514_233159_979.jpeg', slug: 'album-03-recogimiento' },
  { src: 'Image_20260514_233103_654.jpeg', slug: 'album-04-espuma-cristales' },
  { src: 'Image_20260514_233103_692.jpeg', slug: 'album-05-huipil-cuarzos' },
  { src: 'Image_20260514_233159_985.jpeg', slug: 'album-06-corazon-cuarzo' },
  { src: 'Image_20260514_233232_372.jpeg', slug: 'album-07-espiral-arena', q: 66 }, // arena = textura de alta frecuencia → q menor
  { src: 'Image_20260521_222117_763.jpeg', slug: 'album-08-roca-mediterraneo' },
  { src: 'Image_20260521_222117_494.jpeg', slug: 'album-09-agua-cuarzo' },
  { src: 'Image_20260515_000820_794.jpeg', slug: 'album-10-boda-lazo' },
]
const FULL = { w: 1200, h: 1200, q: 78 } // lado largo ~1200 px (lightbox)
const THUMB = { w: 480, h: 480, q: 74 }  // lado largo ~480 px (rejilla)

let totalKb = 0

for (const job of JOBS) {
  const inPath = path.join(SRC, job.src)
  const outPath = path.join(OUT, job.out)
  await sharp(inPath)
    .rotate() // respeta orientación EXIF
    .resize(job.w, job.h, { fit: job.fit ?? 'cover', position: 'centre' })
    .webp({ quality: job.q ?? QUALITY, effort: 5 })
    .toFile(outPath)
  const { size } = await stat(outPath)
  const kb = size / 1024
  totalKb += kb
  console.log(`${job.out.padEnd(30)} ${kb.toFixed(0).padStart(4)} KB  ${job.w}x${job.h}  ← ${job.src}`)
}

console.log('\n— Álbum/Galería (full + thumb, dimensiones reales) —')
for (const item of ALBUM) {
  const inPath = path.join(SRC, item.src)
  for (const [suffix, opt] of [['', FULL], ['-thumb', THUMB]]) {
    const out = `${item.slug}${suffix}.webp`
    const outPath = path.join(OUT, out)
    const info = await sharp(inPath)
      .rotate()
      .resize(opt.w, opt.h, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: item.q ?? opt.q, effort: 5 })
      .toFile(outPath)
    const { size } = await stat(outPath)
    const kb = size / 1024
    totalKb += kb
    // info.width/height = dimensiones reales de salida → volcar en content.js (gallery.items) para evitar layout shift.
    console.log(`${out.padEnd(30)} ${kb.toFixed(0).padStart(4)} KB  ${info.width}x${info.height}  ← ${item.src}`)
  }
}

console.log(`\nTotal: ${(totalKb / 1024).toFixed(2)} MB en ${JOBS.length + ALBUM.length * 2} imágenes`)

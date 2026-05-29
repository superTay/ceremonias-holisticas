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
]

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
  console.log(`${job.out.padEnd(26)} ${kb.toFixed(0).padStart(4)} KB  ${job.w}x${job.h}  ← ${job.src}`)
}
console.log(`\nTotal: ${(totalKb / 1024).toFixed(2)} MB en ${JOBS.length} imágenes`)

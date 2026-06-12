// One-off: descarga los woff2 de Inter + Playfair Display (subsets latin y
// latin-ext, los únicos que usa un sitio ES/EN) a public/fonts/ y genera
// src/fonts.css con @font-face locales. Auto-hospedaje → sin terceros Google,
// sin transferencia de IP (RGPD/Schrems II). Ejecutar: node scripts/fetch-fonts.mjs
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const fontsDir = resolve(root, 'public/fonts')

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'
const CSS_URL =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'

const KEEP_SUBSETS = new Set(['latin', 'latin-ext'])

const css = await (await fetch(CSS_URL, { headers: { 'User-Agent': UA } })).text()

// Cada @font-face va precedido por un comentario /* subset */.
const blocks = css.split('@font-face').slice(1)
let subsetTag = 'latin'
// Reconstruimos pares (comentario previo, bloque) recorriendo el css linealmente.
const faceRe = /\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g
const out = []
const downloads = []
let m
while ((m = faceRe.exec(css))) {
  const subset = m[1]
  if (!KEEP_SUBSETS.has(subset)) continue
  const body = m[2]
  const family = /font-family:\s*'([^']+)'/.exec(body)[1]
  const style = /font-style:\s*(\w+)/.exec(body)[1]
  const weight = /font-weight:\s*(\d+)/.exec(body)[1]
  const url = /url\(([^)]+)\)/.exec(body)[1]
  const unicode = /unicode-range:\s*([^;]+);/.exec(body)?.[1]?.trim()
  const slug = `${family.toLowerCase().replace(/\s+/g, '-')}-${weight}-${style}-${subset}`
  const file = `${slug}.woff2`
  downloads.push({ url, file })
  out.push(
    `@font-face {\n` +
      `  font-family: '${family}';\n` +
      `  font-style: ${style};\n` +
      `  font-weight: ${weight};\n` +
      `  font-display: swap;\n` +
      `  src: url('/fonts/${file}') format('woff2');\n` +
      (unicode ? `  unicode-range: ${unicode};\n` : '') +
      `}`
  )
}

await mkdir(fontsDir, { recursive: true })
for (const d of downloads) {
  const buf = Buffer.from(await (await fetch(d.url, { headers: { 'User-Agent': UA } })).arrayBuffer())
  await writeFile(resolve(fontsDir, d.file), buf)
  console.log('saved', d.file, buf.length, 'bytes')
}

const header =
  '/* Fuentes auto-hospedadas (generado por scripts/fetch-fonts.mjs).\n' +
  '   Inter + Playfair Display, subsets latin y latin-ext. NO editar a mano. */\n\n'
await writeFile(resolve(root, 'src/fonts.css'), header + out.join('\n\n') + '\n')
console.log(`\n${downloads.length} woff2 · src/fonts.css generado`)

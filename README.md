# Ceremonias Holísticas · Landing

Landing page de **Blanca Coutinho** generada a partir del diseño `blanca.pen`.
Stack: **React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion + Lucide**.

## ✦ Sobre el archivo `.pen`

El archivo `.pen` es el formato del editor de diseño **Pen** y, por dentro, es JSON.
Si quieres inspeccionarlo manualmente, basta con renombrarlo a `.json` o abrirlo con cualquier editor de texto. En este proyecto lo usé como _fuente de verdad_ para extraer:

- Los **tokens de diseño** (colores, tipografías, radios) → `tailwind.config.js`
- Toda la **copy** del sitio → `src/data/content.js`
- La **estructura** de las 5 secciones → `src/components/*`

Si actualizas el diseño en Pen, vuelve a exportar el `.pen`, regenera el contenido y lo único que necesitas tocar es `src/data/content.js`.

## ⚡ Quick start

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # genera /dist
npm run preview      # sirve /dist localmente
```

Requiere Node 18+.

## 🏗 Estructura

```
src/
├── App.jsx                     # composición de secciones
├── main.jsx                    # entrypoint
├── index.css                   # Tailwind + base + grain overlay
├── data/
│   └── content.js              # toda la copy extraída del .pen
└── components/
    ├── Navbar.jsx              # announcement strip + nav sticky
    ├── Hero.jsx                # 01 hero + categories marquee
    ├── Catalog.jsx             # 02 catálogo filtrable
    ├── About.jsx               # 03 sobre Blanca
    ├── Testimonials.jsx        # 04 testimonios + métricas + prensa
    ├── FAQ.jsx                 # 05a accordion
    ├── WhatsAppClose.jsx       # 05b chat mockup + cta
    ├── Footer.jsx              # footer
    └── Reveal.jsx              # helper de scroll reveal
```

## 🎨 Sistema de diseño

Todos los tokens del archivo Pen viven como utilidades de Tailwind:

| Token Pen              | Clase Tailwind                |
| ---------------------- | ----------------------------- |
| `$surface-primary`     | `bg-surface-primary`          |
| `$surface-secondary`   | `bg-surface-secondary`        |
| `$surface-deep`        | `bg-surface-deep`             |
| `$accent-primary`      | `text-accent-primary`         |
| `$accent-secondary`    | `bg-accent-secondary`         |
| `$accent-cacao`        | `bg-accent-cacao`             |
| `$accent-clay`         | `text-accent-clay`            |
| `$foreground-primary`  | `text-foreground-primary`     |
| `$foreground-muted`    | `text-foreground-muted`       |
| `$border-subtle`       | `border-border-subtle`        |
| `$font-heading`        | `font-heading` (Playfair)     |
| `$font-body`           | `font-body` (Inter)           |
| `$radius-md/lg/xl`     | `rounded-token-md/lg/xl`      |

## ✨ Animaciones e interactividad

- **Scroll reveal** en cada bloque (Framer Motion con `whileInView`)
- **Marquee infinito** en la franja de categorías
- **Hover lift** + sombra en tarjetas de ceremonia y testimonios
- **Underline animado** en links de navegación
- **Filtro animado** del catálogo (`AnimatePresence` + `layout`)
- **Acordeón fluido** en FAQ
- **Logo que rota** 180° al hover sobre la marca
- **Grain overlay** sutil en todo el sitio para calidez orgánica

Todo respeta `prefers-reduced-motion` por defecto en Framer Motion.

## 🚀 Deploy en Vercel (≈30 segundos)

1. Sube el repo a GitHub:
   ```bash
   git init && git add . && git commit -m "init"
   git branch -M main
   git remote add origin git@github.com:<tu-usuario>/ceremonias-holisticas.git
   git push -u origin main
   ```
2. Entra a [vercel.com/new](https://vercel.com/new), importa el repo.
3. Vercel detecta Vite automáticamente (`vercel.json` ya está incluido).
4. Click en **Deploy**. URL pública en menos de un minuto.

## 📝 Para personalizar

- **Cambiar copy** → edita `src/data/content.js`
- **Cambiar paleta** → edita `tailwind.config.js` → `colors`
- **Reemplazar imágenes** → los placeholders viven en `<Hero>`, `<Catalog>`, `<About>`. Sustituye los gradientes con `<img>` reales o un componente `Image` optimizado.
- **Conectar el WhatsApp real** → cambia el `href` en `WhatsAppClose.jsx` (`https://wa.me/34678312884`).

## 📄 Licencia

Privado · Blanca Coutinho 2026.

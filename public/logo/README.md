# Logo de OoL Experiences

Coloca aquí los archivos definitivos del logo (SVG preferido; PNG @2x como respaldo). Mientras este directorio no contenga ningún archivo, el sitio usa un placeholder tipográfico definido en `src/components/Logo.jsx`.

Convención propuesta:

- `logo-full.svg` — glifo + wordmark (uso en hero / navbar grande)
- `logo-mark.svg` — solo el glifo (favicon, avatares)
- `logo-wordmark.svg` — solo el wordmark (lugares estrechos)
- `logo-mark-light.svg` / `logo-wordmark-light.svg` — variantes para fondos oscuros (footer)

Al pegar los archivos: editar el render interno de `src/components/Logo.jsx` para sustituir el placeholder por `<img src="/logo/<archivo>.svg" alt="OoL Experiences" />` (o un `<svg>` en línea). El resto del sitio consume `<Logo />` y no se entera del cambio.

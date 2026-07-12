// Datos NO textuales — fuente única, idénticos en todos los idiomas.
// Regla de marca (Fase 4): el contacto y los precios JAMÁS deben divergir entre ES/EN,
// por eso viven aquí y no en los bundles de i18n. Las palabras traducibles del precio
// (desde / a consultar / por persona) están en cada bundle; aquí solo el dato duro.

// URL base canónica — ÚNICA fuente de verdad para canonicals, og:url, hreflang,
// sitemap y JSON-LD. El dominio actual de Vercel es provisional; el definitivo es
// oolexperience.com. Cambiar de dominio = cambiar solo esta línea (o VITE_SITE_URL).
// Sin barra final: las rutas se concatenan ya con '/'.
export const SITE_URL = (
  import.meta.env?.VITE_SITE_URL || 'https://oolexperience.com'
).replace(/\/$/, '')

export const contact = {
  url: 'https://wa.me/34665175556',
  phone: '+34 665 17 55 56',
  email: 'oolexperiencesinfo@gmail.com',
  location: 'Santa Ponça · Mallorca · ES',
  instagram: {
    handle: '@oolexperiences',
    url: 'https://www.instagram.com/oolexperiences',
  },
}

// Reservas (Cal.com) — datos no textuales, idénticos en todos los idiomas.
// La cuenta de Blanca (cal.com/oolexperiences) sincroniza con su Google Calendar
// (oolexperiencesinfo@gmail.com) y envía las confirmaciones por email.
//
// ─────────────────────────────────────────────────────────────────────────────
// CAMBIAR DE CUENTA CAL.COM = cambiar SOLO `CAL_USERNAME` (una línea).
// El usuario es el handle público de la cuenta en la URL (cal.com/<usuario>/<evento>).
// No hacen falta email ni contraseña: el embed apunta a páginas públicas de reserva.
// Se puede sobreescribir sin tocar código con la env var VITE_CAL_USERNAME en Vercel.
// Requisito: la cuenta nueva debe tener los MISMOS slugs de evento (ver EVENT_SLUGS);
// si Blanca los recrea con otros nombres, actualizar también ese mapa. Si además
// cambia de región (cal.com ↔ cal.eu), ajustar `calOrigin` y `embedJsUrl`.
// ─────────────────────────────────────────────────────────────────────────────
const CAL_USERNAME = import.meta.env?.VITE_CAL_USERNAME || 'oolexperiences'

// Slugs de los tipos de evento en Cal.com (la parte tras la '/'). El `design` es la
// llamada de diseño; el resto son las ceremonias reservables por id de código.
const EVENT_SLUGS = {
  design: 'llamada-diseno',
  baby: 'baby-blessing',
  picnic: 'picnic-oraculo',
  retorno: 'coaching',
  alquimia: 'taller-alquimico',
}

// Construye el calLink completo `usuario/evento` a partir del usuario único.
const calLink = (slug) => `${CAL_USERNAME}/${slug}`

// Modelo de reserva (decisión de Blanca):
//   · Llamada de diseño (`llamada-diseno`): gratis e instantánea.
//   · Ceremonias reservables: «Requires confirmation» + 48 h de antelación +
//     depósito del 25 % por Bizum (instrucciones en la descripción del evento Cal).
//     La reserva queda PENDIENTE hasta que Blanca aprueba (1 clic, no una llamada).
export const booking = {
  calOrigin: 'https://app.cal.com',
  embedJsUrl: 'https://app.cal.com/embed/embed.js',
  designCallLink: calLink(EVENT_SLUGS.design), // llamada gratuita, instantánea
  brandColor: '#B8623F', // accent-cacao OoL (terracota del logo) — el calendario hereda la marca
  depositPct: 25,
  bizumPhone: '', // TBD Blanca — número Bizum para el depósito (hoy vive en la descripción del evento Cal)
}

// Slugs de los eventos reservables en Cal.com, por id de ceremonia.
// OJO: los ids del código (baby/picnic/retorno/alquimia) NO coinciden con los
// slugs de Cal.com — EVENT_SLUGS es el puente. Solo las ceremonias reservables
// aparecen aquí; las de alta organización (bodas/lazo/ixchel) van a WhatsApp.
export const bookingLinks = {
  baby: calLink(EVENT_SLUGS.baby),
  picnic: calLink(EVENT_SLUGS.picnic),
  retorno: calLink(EVENT_SLUGS.retorno),
  alquimia: calLink(EVENT_SLUGS.alquimia),
}

// Precio por id de ceremonia. `amount` en formato europeo (válido en ES y EN).
// Flags (ver formatPrice en useContent.js):
//   · `per: true`       → "{amount} / persona"
//   · `from: true`      → "A partir de {amount}" (precio de partida, no cerrado)
//   · `onRequest: true` → "a consultar / on request"
//   · `toAgree: true`   → "Precio a convenir" (se acuerda 1 a 1, sin importe público)
export const prices = {
  bodas: { toAgree: true },
  baby: { amount: '120€', per: true },
  picnic: { amount: '85€', per: true },
  lazo: { amount: '350€', from: true },
  ixchel: { amount: '95€', per: true, from: true },
  retorno: { amount: '396€' },
  alquimia: { amount: '130€', per: true },
}

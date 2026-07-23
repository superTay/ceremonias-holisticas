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

// Slugs de los tipos de evento reservables en Cal.com (la parte tras la '/'),
// por id de ceremonia. La consulta general va por WhatsApp, no por Cal.
const EVENT_SLUGS = {
  baby: 'baby-blessing',
  picnic: 'picnic-oraculo',
  retorno: 'coaching',
  alquimia: 'taller-alquimico',
}

// Construye el calLink completo `usuario/evento` a partir del usuario único.
const calLink = (slug) => `${CAL_USERNAME}/${slug}`

// Modelo de reserva de ceremonias (decisión de Blanca):
//   · «Requires confirmation» + 48 h de antelación + depósito del 25 % por Bizum
//     (instrucciones en la descripción del evento Cal). La reserva queda PENDIENTE
//     hasta que Blanca aprueba (1 clic). La consulta a medida es por WhatsApp.
// Datos técnicos del embed de Cal.com (los consume el Catálogo de ceremonias).
export const booking = {
  calOrigin: 'https://app.cal.com',
  embedJsUrl: 'https://app.cal.com/embed/embed.js',
  brandColor: '#B8623F', // accent-cacao OoL (terracota del logo) — el calendario hereda la marca
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

// ── Evento especial con FECHA CERRADA ──────────────────────────────────────
// A diferencia de las 7 ceremonias (reservables a demanda), esto es un evento
// puntual que se promociona con un ribbon global + una sección destacada en Home.
// Datos duros no textuales, idénticos en ES/EN (el copy vive en los bundles i18n,
// clave `event`). Para RETIRARLO tras su celebración: `active: false` → el ribbon
// vuelve al anuncio genérico y la sección desaparece. Un solo cambio, cero deuda.
//
// La reserva definitiva se cableará después (Blanca lo decide): hoy el CTA enruta
// al concierge de WhatsApp con un mensaje pre-rellenado (ver useContent → event.ctaUrl).
// Cuando exista el event-type en Cal.eu, poner `ctaMode: 'cal'` + `calLink`.
export const event = {
  active: true,
  // Fechas ISO (la sesión abre a las 19:30). El texto legible por humanos
  // («5 y 6 de agosto de 2026» / «August 5–6, 2026») vive en los bundles i18n.
  startDate: '2026-08-05',
  endDate: '2026-08-06',
  time: '19:30',
  price: '68€',
  seats: 8,
  depositPct: 25,
  image: '/album-06-corazon-cuarzo.webp', // foto real; se cambia en una línea
  imageAlt:
    'Manos sosteniendo un cuarzo en forma de corazón sobre lino claro, en un instante de ceremonia al atardecer',
  ctaMode: 'whatsapp', // 'whatsapp' (hoy) | 'cal' (cuando exista el event-type)
  calLink: '', // TBD Blanca — slug del evento en Cal.eu cuando se cree
}

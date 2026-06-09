// Datos NO textuales — fuente única, idénticos en todos los idiomas.
// Regla de marca (Fase 4): el contacto y los precios JAMÁS deben divergir entre ES/EN,
// por eso viven aquí y no en los bundles de i18n. Las palabras traducibles del precio
// (desde / a consultar / por persona) están en cada bundle; aquí solo el dato duro.
// TBD Blanca: número/email de producción (ver HANDOFF).

export const contact = {
  url: 'https://wa.me/34665175556',
  phone: '+34 665 17 55 56',
  email: 'oolexpriences@gmail.com',
  location: 'Santa Ponça · Mallorca · ES',
}

// Reservas (Cal.eu) — datos no textuales, idénticos en todos los idiomas.
// La cuenta de Blanca vive en la región europea (cal.eu, NO cal.com): el embed
// debe forzar la instancia europea con `calOrigin` + `embedJsUrl`, o devuelve 404.
// Cal.eu sincroniza con su Google Calendar y envía las confirmaciones por email.
//
// Modelo de reserva (decisión de Blanca):
//   · Llamada de diseño (`llamada-diseno`): gratis e instantánea.
//   · Ceremonias reservables: «Requires confirmation» + 48 h de antelación +
//     depósito del 25 % por Bizum (instrucciones en la descripción del evento Cal).
//     La reserva queda PENDIENTE hasta que Blanca aprueba (1 clic, no una llamada).
export const booking = {
  calOrigin: 'https://app.cal.eu',
  embedJsUrl: 'https://app.cal.eu/embed/embed.js',
  designCallLink: 'blanca-coutino/llamada-diseno', // llamada gratuita, instantánea
  brandColor: '#B8623F', // accent-cacao OOL (terracota del logo) — el calendario hereda la marca
  depositPct: 25,
  bizumPhone: '', // TBD Blanca — número Bizum para el depósito (hoy vive en la descripción del evento Cal)
}

// Slugs de los eventos reservables en Cal.eu, por id de ceremonia.
// OJO: los ids del código (baby/picnic/retorno/alquimia) NO coinciden con los
// slugs de Cal.eu — este mapa es el puente. Solo las ceremonias reservables
// aparecen aquí; las de alta organización (bodas/lazo/ixchel) van a WhatsApp.
export const bookingLinks = {
  baby: 'blanca-coutino/baby-blessing',
  picnic: 'blanca-coutino/picnic-oraculo',
  retorno: 'blanca-coutino/coaching',
  alquimia: 'blanca-coutino/taller-alquimico',
}

// Precio por id de ceremonia. `amount` en formato europeo (válido en ES y EN).
// `per: true` → precio por persona. `onRequest: true` → "a consultar / on request".
export const prices = {
  bodas: { amount: '2.400€' },
  baby: { amount: '480€' },
  picnic: { amount: '95€', per: true },
  lazo: { amount: '380€' },
  ixchel: { amount: '75€', per: true },
  retorno: { amount: '690€' },
  alquimia: { onRequest: true },
}

// Datos NO textuales — fuente única, idénticos en todos los idiomas.
// Regla de marca (Fase 4): el contacto y los precios JAMÁS deben divergir entre ES/EN,
// por eso viven aquí y no en los bundles de i18n. Las palabras traducibles del precio
// (desde / a consultar / por persona) están en cada bundle; aquí solo el dato duro.
// TBD Blanca: número/email de producción (ver HANDOFF).

export const contact = {
  url: 'https://wa.me/34665175556',
  phone: '+34 665 17 55 56',
  email: 'etessecoutinob@yahoo.com',
  location: 'Santa Ponça · Mallorca · ES',
}

// Reservas (Cal.com) — datos no textuales, idénticos en todos los idiomas.
// El visitante reserva una "llamada de diseño" gratuita; Cal.com sincroniza con el
// Google Calendar de Blanca y envía las confirmaciones por email de forma nativa.
// TBD Blanca: crear la cuenta de Cal.com y sustituir `calLink` por el link real (ver HANDOFF).
export const booking = {
  calLink: 'rick', // DEMO temporal (calendario público de Cal.com) — sustituir por el link real de Blanca
  brandColor: '#5C3A21', // accent-cacao — el calendario hereda la marca
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

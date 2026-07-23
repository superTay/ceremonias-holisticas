import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  contact,
  prices,
  booking as bookingConfig,
  bookingLinks,
  event as eventConfig,
} from '../data/shared.js'

// Devuelve el objeto de contenido del idioma activo (mismo shape que el antiguo content.js),
// fusionando los datos no textuales single-source de shared.js (contacto y precios).
// useTranslation() suscribe el componente a 'languageChanged' → re-render al cambiar idioma.
// No mutamos el bundle del store de i18next: clonamos solo las ramas que enriquecemos.
export function useContent() {
  const { i18n: i18nInstance } = useTranslation('content')
  const lang = i18nInstance.resolvedLanguage || i18nInstance.language

  return useMemo(() => {
    const c = i18nInstance.getResourceBundle(lang, 'content')

    const formatPrice = (id) => {
      const p = prices[id]
      if (!p) return ''
      if (p.toAgree) return c.catalog.priceToAgree
      if (p.onRequest) return c.catalog.priceOnRequest
      const base = `${p.amount}${p.per ? c.catalog.pricePer : ''}`
      return p.from ? `${c.catalog.priceFrom} ${base}` : base
    }

    return {
      ...c,
      catalog: {
        ...c.catalog,
        // Cada card se enriquece según su vía de reserva:
        //   · Reservable (baby/picnic/retorno/alquimia) → `calLink` para abrir el
        //     popup de Cal.com con botón «Reservar fecha».
        //   · A medida (bodas/lazo/ixchel) → `whatsappUrl` pre-rellenado con el
        //     nombre de la ceremonia, botón «Hablemos primero».
        cards: c.catalog.cards.map((card) => {
          const calLink = bookingLinks[card.id]
          const bookable = Boolean(calLink)
          return {
            ...card,
            price: formatPrice(card.id),
            bookable,
            calLink: calLink || null,
            whatsappUrl: bookable
              ? null
              : `${contact.url}?text=${encodeURIComponent(
                  c.catalog.whatsappTemplate.replace('{title}', card.title)
                )}`,
          }
        }),
      },
      whatsapp: {
        ...c.whatsapp,
        url: contact.url,
        secondary: `${c.whatsapp.secondaryPrefix} ${contact.phone}`,
      },
      // Datos técnicos del embed de Cal.com (los consume el Catálogo de ceremonias).
      // calOrigin + embedJsUrl fijan la instancia de la cuenta (app.cal.com).
      booking: {
        calOrigin: bookingConfig.calOrigin,
        embedJsUrl: bookingConfig.embedJsUrl,
        brandColor: bookingConfig.brandColor,
      },
      // Página de contacto: WhatsApp pre-rellenado a Blanca.
      contact: {
        ...c.contact,
        whatsappUrl: `${contact.url}?text=${encodeURIComponent(
          c.contact.whatsappText
        )}`,
      },
      footer: {
        ...c.footer,
        contact: [contact.email, contact.phone, contact.location],
        instagram: contact.instagram,
      },
      // Evento especial: fusiona copy (i18n) + datos duros (shared.js) y construye
      // el destino del CTA. Hoy `ctaMode: 'whatsapp'` → concierge pre-rellenado;
      // cuando exista el event-type en Cal.eu, cambiar a 'cal' en shared.js.
      event: {
        ...c.event,
        ...eventConfig,
        ctaUrl:
          eventConfig.ctaMode === 'cal' && eventConfig.calLink
            ? `${bookingConfig.calOrigin}/${eventConfig.calLink}`
            : `${contact.url}?text=${encodeURIComponent(c.event.whatsappText)}`,
      },
    }
  }, [lang])
}

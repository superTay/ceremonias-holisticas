import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './index.js'
import {
  contact,
  prices,
  booking as bookingConfig,
  bookingLinks,
} from '../data/shared.js'

// Devuelve el objeto de contenido del idioma activo (mismo shape que el antiguo content.js),
// fusionando los datos no textuales single-source de shared.js (contacto y precios).
// useTranslation() suscribe el componente a 'languageChanged' → re-render al cambiar idioma.
// No mutamos el bundle del store de i18next: clonamos solo las ramas que enriquecemos.
export function useContent() {
  const { i18n: i18nInstance } = useTranslation('content')
  const lang = i18nInstance.resolvedLanguage || i18nInstance.language

  return useMemo(() => {
    const c = i18n.getResourceBundle(lang, 'content')

    const formatPrice = (id) => {
      const p = prices[id]
      if (!p) return ''
      if (p.onRequest) return c.catalog.priceOnRequest
      return `${c.catalog.priceFrom} ${p.amount}${p.per ? c.catalog.pricePer : ''}`
    }

    return {
      ...c,
      catalog: {
        ...c.catalog,
        // Cada card se enriquece según su vía de reserva:
        //   · Reservable (baby/picnic/retorno/alquimia) → `calLink` para abrir el
        //     popup de Cal.eu con botón «Reservar fecha».
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
      booking: {
        ...c.booking,
        // Llamada de diseño gratuita (instantánea). El embed fuerza la región
        // europea con calOrigin + embedJsUrl, o Cal.eu devolvería 404.
        calLink: bookingConfig.designCallLink,
        calOrigin: bookingConfig.calOrigin,
        embedJsUrl: bookingConfig.embedJsUrl,
        brandColor: bookingConfig.brandColor,
        depositPct: bookingConfig.depositPct,
        bizumPhone: bookingConfig.bizumPhone,
        // WhatsApp pre-rellenado para el panel de confirmación tras reservar.
        whatsappUrl: `${contact.url}?text=${encodeURIComponent(
          c.booking.success.whatsappText
        )}`,
      },
      footer: {
        ...c.footer,
        contact: [contact.email, contact.phone, contact.location],
      },
    }
  }, [lang])
}

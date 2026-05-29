import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './index.js'
import { contact, prices } from '../data/shared.js'

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
        cards: c.catalog.cards.map((card) => ({
          ...card,
          price: formatPrice(card.id),
        })),
      },
      whatsapp: {
        ...c.whatsapp,
        url: contact.url,
        secondary: `${c.whatsapp.secondaryPrefix} ${contact.phone}`,
      },
      footer: {
        ...c.footer,
        contact: [contact.email, contact.phone, contact.location],
      },
    }
  }, [lang])
}

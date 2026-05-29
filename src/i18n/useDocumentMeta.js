import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Mantiene <html lang>, <title> y los metadatos/OG sincronizados con el idioma activo.
// Los valores ES de index.html sirven de baseline (primer paint / crawlers sin JS).
function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function useDocumentMeta() {
  const { t, i18n } = useTranslation('content')
  const lang = i18n.resolvedLanguage || i18n.language

  useEffect(() => {
    const meta = t('meta', { returnObjects: true })

    document.documentElement.lang = lang
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.ogTitle)
    setMeta('meta[property="og:description"]', 'content', meta.ogDescription)
    setMeta('meta[property="og:locale"]', 'content', meta.ogLocale)
  }, [lang, t])
}

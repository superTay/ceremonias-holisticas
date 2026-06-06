import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

// Mantiene <html lang>, <title> y los metadatos/OG sincronizados con el idioma
// activo y con la ruta actual. Los valores ES de index.html sirven de baseline
// (primer paint / crawlers sin JS).
function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

// Mapa ruta → clave de label en meta.pages. La ruta '/' no añade label
// y el título queda solo con el de marca.
const ROUTE_TO_KEY = {
  '/ceremonies': 'ceremonies',
  '/about': 'about',
  '/gallery': 'gallery',
  '/contact': 'contact',
}

export function useDocumentMeta() {
  const { t, i18n } = useTranslation('content')
  const lang = i18n.resolvedLanguage || i18n.language
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = t('meta', { returnObjects: true })
    const pageKey = ROUTE_TO_KEY[pathname]
    const pageLabel = pageKey ? meta.pages?.[pageKey] : null

    document.documentElement.lang = lang
    document.title = pageLabel ? `${pageLabel} — ${meta.title}` : meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.ogTitle)
    setMeta('meta[property="og:description"]', 'content', meta.ogDescription)
    setMeta('meta[property="og:locale"]', 'content', meta.ogLocale)
  }, [lang, t, pathname])
}

export default useDocumentMeta

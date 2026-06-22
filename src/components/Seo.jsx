import { Head } from 'vite-react-ssg'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../data/shared'
import { basePath } from './LangLink'
import JsonLd from './JsonLd'

// <head> por ruta, válido en build (SSG) y en cliente. Reemplaza al antiguo
// useDocumentMeta (que era client-only y por tanto invisible para crawlers).
// Se renderiza una sola vez desde RootLayout: deriva todo de la URL, así cada
// página queda cubierta sin tocar sus componentes.

// Ruta canónica (sin prefijo de idioma) → clave de label en meta.pages.
const ROUTE_TO_KEY = {
  '/ceremonies': 'ceremonies',
  '/about': 'about',
  '/gallery': 'gallery',
  '/contact': 'contact',
}

const abs = (path) => `${SITE_URL}${path === '/' ? '' : path}`

export default function Seo({ image = '/blanca-hero.webp', type = 'website' }) {
  const { t } = useTranslation('content')
  const { pathname } = useLocation()

  const meta = t('meta', { returnObjects: true })
  const lang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
  const base = basePath(pathname) // ruta canónica ES

  const pageKey = ROUTE_TO_KEY[base]
  const pageLabel = pageKey ? meta.pages?.[pageKey] : null
  const title = pageLabel ? `${pageLabel} — ${meta.title}` : meta.title
  const description = meta.description

  // URLs gemelas para canonical + hreflang.
  const esUrl = abs(base)
  const enUrl = abs(base === '/' ? '/en' : `/en${base}`)
  const canonical = lang === 'en' ? enUrl : esUrl
  const ogImage = `${SITE_URL}${image}`

  // Breadcrumb por página (no en home): Inicio › Página actual.
  const breadcrumb =
    base === '/'
      ? null
      : {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: lang === 'en' ? 'Home' : 'Inicio',
              item: lang === 'en' ? abs('/en') : abs('/'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: pageLabel || title,
              item: canonical,
            },
          ],
        }

  return (
    <>
    <Head>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={esUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={meta.ogTitle || title} />
      <meta property="og:description" content={meta.ogDescription || description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === 'en' ? 'en_GB' : 'es_ES'} />
      <meta
        property="og:locale:alternate"
        content={lang === 'en' ? 'es_ES' : 'en_GB'}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.ogTitle || title} />
      <meta name="twitter:description" content={meta.ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
    {breadcrumb && <JsonLd data={breadcrumb} />}
    </>
  )
}

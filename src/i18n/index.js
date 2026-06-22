import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './resources/es.js'
import en from './resources/en.js'

// i18n del sitio. Todo el copy vive bajo el namespace 'content'.
// Para añadir alemán (DE): crear resources/de.js, añadirlo a `resources`,
// a `SUPPORTED_LANGS` y a `instances`. Nada más cambia.
export const SUPPORTED_LANGS = ['es', 'en']

// El idioma lo manda la URL (no localStorage/navigator): es lo que permite el
// prerender (SSG) determinista y URLs propias por idioma (/en/...).
export function langFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

const resources = {
  es: { content: es },
  en: { content: en },
}

const baseOptions = {
  resources,
  ns: ['content'],
  defaultNS: 'content',
  supportedLngs: SUPPORTED_LANGS,
  nonExplicitSupportedLngs: true,
  load: 'languageOnly',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
}

// UNA instancia por idioma, con `lng` FIJO. Cada rama de ruta usa la suya vía
// <I18nextProvider> (ver router.jsx), así no hay estado global mutable que se
// pueda cruzar entre rutas durante el render en servidor (SSG). Esto evita el
// HTML con idiomas mezclados que daba el changeLanguage global.
function makeInstance(lng) {
  const instance = i18next.createInstance()
  instance.use(initReactI18next).init({ ...baseOptions, lng, fallbackLng: 'es' })
  return instance
}

export const instances = {
  es: makeInstance('es'),
  en: makeInstance('en'),
}

// Instancia por defecto (ES) para imports directos que no dependan de la ruta.
export default instances.es

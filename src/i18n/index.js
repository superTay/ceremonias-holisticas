import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import es from './resources/es.js'
import en from './resources/en.js'

// i18n del sitio. Todo el copy vive bajo el namespace 'content'.
// Para añadir alemán (DE) en una fase futura: crear resources/de.js, importarlo,
// añadirlo a `resources` y a `supportedLngs`. Nada más cambia.
export const SUPPORTED_LANGS = ['es', 'en']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { content: es },
      en: { content: en },
    },
    ns: ['content'],
    defaultNS: 'content',
    fallbackLng: 'es',
    supportedLngs: SUPPORTED_LANGS,
    nonExplicitSupportedLngs: true, // 'en-GB', 'es-MX'… → 'en' / 'es'
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'blanca-lang',
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false }, // recursos síncronos en bundle: sin Suspense
  })

export default i18n

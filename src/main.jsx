import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './router'
import './i18n'
import './fonts.css'
import './index.css'

// Entry de vite-react-ssg: la misma definición de rutas sirve para prerenderizar
// cada página a HTML estático (build) y para hidratar en cliente. Los providers
// globales (consentimiento + MotionConfig) viven en una ruta layout sin path
// dentro de `routes` (ver router.jsx), por encima de las dos ramas de idioma.
//
// Nota: se retira React.StrictMode a propósito. Con este stack (framer-motion 11.3
// + data router) el doble montaje de StrictMode hacía frágil AnimatePresence; el
// SSG no lo necesita y evitamos reintroducir esa fragilidad en producción.
export const createRoot = ViteReactSSG({ routes })

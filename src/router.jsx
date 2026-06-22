import { Outlet } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { I18nextProvider } from 'react-i18next'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Ceremonies from './pages/Ceremonies'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import { ConsentProvider } from './consent/ConsentContext'
import { instances } from './i18n'

// Proveedores globales por encima del router (consentimiento + motion).
// Es una ruta layout sin path: envuelve las dos ramas de idioma.
function Providers() {
  return (
    <ConsentProvider>
      <MotionConfig reducedMotion="user">
        <Outlet />
      </MotionConfig>
    </ConsentProvider>
  )
}

// Hijos compartidos por ambos idiomas. Bajo '/' quedan en ES; bajo '/en' en EN.
const pageChildren = () => [
  { index: true, element: <Home /> },
  { path: 'ceremonies', element: <Ceremonies /> },
  { path: 'about', element: <About /> },
  { path: 'gallery', element: <Gallery /> },
  { path: 'contact', element: <Contact /> },
  { path: 'legal/aviso-legal', element: <Legal docKey="aviso" /> },
  { path: 'legal/privacidad', element: <Legal docKey="privacidad" /> },
  { path: 'legal/cookies', element: <Legal docKey="cookies" /> },
  { path: 'legal/terminos', element: <Legal docKey="terminos" /> },
]

// Cada rama de idioma usa su propia instancia de i18next (lng fijo), aislada vía
// I18nextProvider. Determinista en SSG y, al navegar entre idiomas, el provider
// se remonta con la instancia correcta.
function LangRoot({ lang }) {
  return (
    <I18nextProvider i18n={instances[lang]}>
      <RootLayout lang={lang} />
    </I18nextProvider>
  )
}

export const routes = [
  {
    element: <Providers />,
    children: [
      {
        path: '/',
        element: <LangRoot lang="es" />,
        children: pageChildren(),
      },
      {
        path: '/en',
        element: <LangRoot lang="en" />,
        children: pageChildren(),
      },
    ],
  },
]

export default routes

import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Ceremonies from './pages/Ceremonies'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'ceremonies', element: <Ceremonies /> },
      { path: 'about', element: <About /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'legal/aviso-legal', element: <Legal docKey="aviso" /> },
      { path: 'legal/privacidad', element: <Legal docKey="privacidad" /> },
      { path: 'legal/cookies', element: <Legal docKey="cookies" /> },
      { path: 'legal/terminos', element: <Legal docKey="terminos" /> },
    ],
  },
])

export default router

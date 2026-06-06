import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Ceremonies from './pages/Ceremonies'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

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
    ],
  },
])

export default router

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import CookieBanner from './CookieBanner'
import useDocumentMeta from '../i18n/useDocumentMeta'

export default function RootLayout() {
  useDocumentMeta()

  return (
    <div className="relative">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Press from './components/Press'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import WhatsAppClose from './components/WhatsAppClose'
import Footer from './components/Footer'
import { useDocumentMeta } from './i18n/useDocumentMeta'

export default function App() {
  useDocumentMeta()

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <About />
        <Press />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Booking />
        <WhatsAppClose />
      </main>
      <Footer />
    </div>
  )
}

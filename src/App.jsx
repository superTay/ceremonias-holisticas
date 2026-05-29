import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Press from './components/Press'
import FAQ from './components/FAQ'
import WhatsAppClose from './components/WhatsAppClose'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <About />
        <Press />
        <Testimonials />
        <FAQ />
        <WhatsAppClose />
      </main>
      <Footer />
    </div>
  )
}

import About from '../components/About'
import Press from '../components/Press'
import Testimonials from '../components/Testimonials'

// La FAQ vive ahora en la Home (acordeón). Se quitó de aquí para no duplicar el
// FAQPage schema en dos URLs.
export default function AboutPage() {
  return (
    <>
      <About />
      <Press />
      <Testimonials />
    </>
  )
}

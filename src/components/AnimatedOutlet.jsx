import { useState } from 'react'
import { useOutlet } from 'react-router-dom'

// Congela el elemento del outlet en el primer render de cada instancia.
// Necesario con createBrowserRouter: al navegar, RouterProvider intercambia
// el outlet inmediatamente, pero AnimatePresence aún está animando la salida
// de la página vieja — sin congelar, la página saliente mostraría el
// contenido de la nueva durante el exit.
//
// ⚠️ Si algún día las rutas usan loaders (useLoaderData), este patrón deja
// de ser seguro: el elemento congelado se renderizaría contra el contexto
// de la ruta nueva. Hoy ninguna ruta usa loaders.
export default function AnimatedOutlet() {
  const outlet = useOutlet()
  const [frozen] = useState(outlet)
  return frozen
}

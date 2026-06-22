// Inyecta un bloque JSON-LD en el HTML. React lo renderiza tal cual durante el
// prerender (SSG) y en cliente, así que los datos estructurados quedan en el HTML
// estático que leen buscadores y motores de IA.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

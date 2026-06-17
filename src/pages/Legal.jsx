import { useContent } from '../i18n/useContent'
import Reveal from '../components/Reveal'

// Página legal genérica. `docKey` selecciona el documento dentro de content.legal
// (aviso · privacidad · cookies · terminos). El contenido vive en i18n para mantener
// ES/EN sincronizados. Renderiza párrafos, listas y tablas de forma defensiva.
export default function Legal({ docKey }) {
  const { legal } = useContent()
  const doc = legal[docKey]

  if (!doc) return null

  return (
    <article className="bg-surface-primary">
      <div className="container-page max-w-prose py-28 lg:py-36">
        <Reveal>
          <h1 className="heading-display text-[clamp(2rem,4vw,3rem)] text-foreground-primary">
            {doc.title}
          </h1>
          <p className="mt-3 text-sm text-foreground-muted">
            {legal.updatedLabel}: {doc.updated}
          </p>
        </Reveal>

        {doc.intro && (
          <Reveal delay={0.05}>
            <p className="mt-8 text-lg leading-relaxed text-foreground-secondary">
              {doc.intro}
            </p>
          </Reveal>
        )}

        <div className="mt-10 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              {section.heading && (
                <h2 className="font-heading text-xl text-foreground-primary">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="mt-4 text-[15px] leading-relaxed text-foreground-secondary"
                >
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[15px] leading-relaxed text-foreground-secondary"
                    >
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-cacao" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[13px]">
                    <thead>
                      <tr className="border-b border-border-subtle">
                        {section.table.head.map((h) => (
                          <th
                            key={h}
                            className="py-2 pr-4 font-semibold text-foreground-primary"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-border-subtle/60">
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="py-2.5 pr-4 align-top text-foreground-secondary"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {legal.reviewNote && (
          <p className="mt-12 border-t border-border-subtle pt-6 text-xs italic leading-relaxed text-foreground-muted">
            {legal.reviewNote}
          </p>
        )}
      </div>
    </article>
  )
}

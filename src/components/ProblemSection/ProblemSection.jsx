import { useSiteData } from '../../context/SiteDataContext'

import './ProblemSection.css'

const problems = [
  {
    number: '01',
    title: 'Marketing desconectado',
    description:
      'Campanhas, conteúdo e aquisição perdem força quando não conversam com o processo comercial.',
    icon: 'marketing',
  },
  {
    number: '02',
    title: 'Vendas sem processo',
    description:
      'Leads se perdem, follow-ups dependem da memória e o crescimento deixa de ser previsível.',
    icon: 'sales',
  },
  {
    number: '03',
    title: 'Tecnologia solta',
    description:
      'Ferramentas isoladas criam retrabalho, dados dispersos e pouca visibilidade sobre a operação.',
    icon: 'technology',
  },
  {
    number: '04',
    title: 'Gestão sem visão',
    description:
      'Sem indicadores conectados, decisões importantes chegam tarde e a empresa perde clareza.',
    icon: 'management',
  },
]

function ProblemIcon({ type }) {
  if (type === 'marketing') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 17h4l11 6V9L9 15H5v2Z" />
        <path d="M9 17v8" />
        <path d="M24 12.5c1.5 1 2.5 2.1 3 3.5-0.5 1.4-1.5 2.5-3 3.5" />
      </svg>
    )
  }

  if (type === 'sales') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 24 13 17l5 4 8-10" />
        <path d="M20 11h6v6" />
        <path d="M6 8v16h20" />
      </svg>
    )
  }

  if (type === 'technology') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6" y="7" width="20" height="16" rx="2" />
        <path d="M11 27h10" />
        <path d="M16 23v4" />
        <path d="m12 16 3-3 3 3 3-3" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6 25V14" />
      <path d="M13 25V8" />
      <path d="M20 25V17" />
      <path d="M27 25V11" />
      <path d="M4 25h25" />
    </svg>
  )
}

function ProblemSection() {
  const { content } = useSiteData()
  const section = content.problem
  const lines = section.title.split('\n')

  return (
    <section className="problem-section" aria-labelledby="problem-title">
      <div className="problem-section__ambient" aria-hidden="true">
        <div className="problem-section__glow problem-section__glow--left" />
        <div className="problem-section__glow problem-section__glow--right" />
        <div className="problem-section__line problem-section__line--one" />
        <div className="problem-section__line problem-section__line--two" />
      </div>

      <div className="problem-section__inner">
        <div className="problem-section__intro">
          <p className="problem-section__eyebrow">{section.eyebrow}</p>

          <h2 id="problem-title" className="problem-section__title">
            {lines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < lines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <p className="problem-section__description">{section.description}</p>
        </div>

        <div className="problem-section__grid" aria-label="Principais problemas">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.number}>
              <div className="problem-card__topline">
                <span className="problem-card__icon">
                  <ProblemIcon type={problem.icon} />
                </span>
                <span className="problem-card__number">{problem.number}</span>
              </div>

              <h3 className="problem-card__title">{problem.title}</h3>
              <p className="problem-card__description">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="problem-section__footer-note">
        <span>O problema não é crescer.</span>
        <strong>É crescer sem integração.</strong>
      </div>
    </section>
  )
}

export default ProblemSection

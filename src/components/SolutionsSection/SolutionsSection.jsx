import './SolutionsSection.css'

const solutions = [
  {
    number: '01',
    title: 'Marketing Estratégico',
    description:
      'Posicionamento, planejamento e comunicação conectados aos objetivos reais do negócio.',
    icon: 'strategy',
  },
  {
    number: '02',
    title: 'Tráfego Pago e Orgânico',
    description:
      'Aquisição estruturada para gerar presença, demanda e oportunidades com mais previsibilidade.',
    icon: 'traffic',
  },
  {
    number: '03',
    title: 'Identidade Visual e Branding',
    description:
      'Marca, linguagem e presença visual construídas para transmitir clareza, valor e consistência.',
    icon: 'brand',
  },
  {
    number: '04',
    title: 'Desenvolvimento e Tecnologia',
    description:
      'Sites, sistemas e soluções digitais pensados para reduzir atrito e organizar a operação.',
    icon: 'development',
  },
  {
    number: '05',
    title: 'Vendas e CRM Personalizado',
    description:
      'Processos comerciais, CRM e automações desenhados para acompanhar a rotina real da equipe.',
    icon: 'sales',
  },
  {
    number: '06',
    title: 'Gestão Financeira e Benefícios',
    description:
      'Mais controle sobre números, contratos e benefícios para decisões com visão e continuidade.',
    icon: 'management',
  },
]

function SolutionIcon({ type }) {
  if (type === 'strategy') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="4" />
        <path d="m19 13 7-7" />
        <path d="M22 6h4v4" />
      </svg>
    )
  }

  if (type === 'traffic') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 24 12 17l5 4 10-12" />
        <path d="M21 9h6v6" />
        <path d="M5 27h22" />
      </svg>
    )
  }

  if (type === 'brand') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 22 18 7l7 7-15 11-4 1 1-4Z" />
        <path d="m16 10 6 6" />
        <circle cx="23.5" cy="8.5" r="2.5" />
      </svg>
    )
  }

  if (type === 'development') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m11 9-6 7 6 7" />
        <path d="m21 9 6 7-6 7" />
        <path d="m18 6-4 20" />
      </svg>
    )
  }

  if (type === 'sales') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 24V8" />
        <path d="M6 24h20" />
        <path d="m10 20 5-6 4 3 7-9" />
        <path d="M22 8h4v4" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 25h22" />
      <path d="M8 22V12" />
      <path d="M14 22V7" />
      <path d="M20 22v-6" />
      <path d="M26 22V9" />
    </svg>
  )
}

function SolutionsSection() {
  return (
    <section className="solutions-section" aria-labelledby="solutions-title">
      <div className="solutions-section__ambient" aria-hidden="true">
        <div className="solutions-section__glow solutions-section__glow--top" />
        <div className="solutions-section__glow solutions-section__glow--bottom" />
        <div className="solutions-section__orbit solutions-section__orbit--one" />
        <div className="solutions-section__orbit solutions-section__orbit--two" />
      </div>

      <div className="solutions-section__inner">
        <header className="solutions-section__intro">
          <div className="solutions-section__heading">
            <p className="solutions-section__eyebrow">Estrutura integrada</p>

            <h2 id="solutions-title" className="solutions-section__title">
              Soluções integradas
              <br />
              para crescimento
              <br />
              real e sustentável.
            </h2>
          </div>

          <div className="solutions-section__lead">
            <p>
              A Aurora conecta estratégia, aquisição, marca, tecnologia, vendas
              e gestão em uma estrutura pensada para funcionar como um único
              sistema.
            </p>

            <a href="#servicos" className="solutions-section__cta">
              Conheça todas as soluções
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <div className="solutions-section__list" aria-label="Soluções Aurora">
          {solutions.map((solution) => (
            <article className="solution-row" key={solution.number}>
              <span className="solution-row__number">{solution.number}</span>

              <span className="solution-row__icon">
                <SolutionIcon type={solution.icon} />
              </span>

              <h3 className="solution-row__title">{solution.title}</h3>

              <p className="solution-row__description">
                {solution.description}
              </p>

              <span className="solution-row__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 15 6-6" />
                  <path d="M10 9h5v5" />
                </svg>
              </span>
            </article>
          ))}
        </div>

        <div className="solutions-section__signature">
          <span>Uma operação.</span>
          <span>Várias frentes.</span>
          <strong>Uma direção.</strong>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection

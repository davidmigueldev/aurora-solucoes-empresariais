import { useEffect, useState } from 'react'

import { useSiteData } from '../../context/SiteDataContext'

import './ServicesDeepDive.css'

function ServiceIcon({ type }) {
  const icons = {
    strategy: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.6" />
        <path d="M17 7l3-3M17.5 4H20v2.5" />
      </>
    ),
    traffic: (
      <>
        <path d="M4 18V9M10 18V5M16 18v-7M3 18h17" />
        <path d="m14 7 3-3 3 3" />
      </>
    ),
    brand: (
      <>
        <path d="m12 3 7 5-7 13L5 8l7-5Z" />
        <path d="m5 8 7 4 7-4M12 12v9" />
      </>
    ),
    technology: (
      <>
        <path d="m8 5-5 7 5 7M16 5l5 7-5 7M14 3l-4 18" />
      </>
    ),
    sales: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c.5-3.4 2.2-5 4.5-5s4 1.6 4.5 5M14 18c.4-2.4 1.5-3.6 3.2-3.6 1.6 0 2.8 1 3.3 3.1" />
      </>
    ),
    management: (
      <>
        <path d="M4 19V8M10 19V12M16 19V5M3 19h18" />
        <path d="m5 6 4-3 4 2 6-3" />
      </>
    ),
  }

  return (
    <svg
      className="service-detail__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  )
}

function ServicesDeepDive() {
  const { services } = useSiteData()
  const [activeService, setActiveService] = useState(services[0]?.id || services[0]?.number || null)

  useEffect(() => {
    if (
      activeService !== null &&
      services.length &&
      !services.some(
        (service) => (service.id || service.number) === activeService,
      )
    ) {
      setActiveService(services[0].id || services[0].number)
    }
  }, [services, activeService])

  const toggleService = (id) => {
    setActiveService((current) => (current === id ? null : id))
  }

  return (
    <section id="servicos" className="services-deep-dive">
      <div className="services-deep-dive__ambient" aria-hidden="true">
        <div className="services-deep-dive__glow services-deep-dive__glow--one" />
        <div className="services-deep-dive__glow services-deep-dive__glow--two" />
        <div className="services-deep-dive__orbit services-deep-dive__orbit--one" />
        <div className="services-deep-dive__orbit services-deep-dive__orbit--two" />
      </div>

      <div className="services-deep-dive__inner">
        <header className="services-deep-dive__intro">
          <div>
            <p className="services-deep-dive__eyebrow">Serviços</p>
            <h2 className="services-deep-dive__title">
              Estrutura para cada etapa
              <br />
              do crescimento.
            </h2>
          </div>

          <div className="services-deep-dive__intro-copy">
            <p className="services-deep-dive__lead">
              A Aurora conecta estratégia, execução e tecnologia para reduzir
              fragmentação e transformar diferentes frentes do negócio em uma
              operação mais clara e coordenada.
            </p>

            <span className="services-deep-dive__hint">
              Selecione uma frente para explorar
              <span aria-hidden="true">↓</span>
            </span>
          </div>
        </header>

        <div className="services-deep-dive__accordion">
          {services.map((service) => {
            const serviceId = service.id || service.number
            const isOpen = activeService === serviceId
            const panelId = `service-panel-${serviceId}`

            return (
              <article
                className={`service-detail ${isOpen ? 'is-open' : ''}`}
                key={serviceId}
              >
                <button
                  className="service-detail__toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleService(serviceId)}
                >
                  <span className="service-detail__number">{service.number}</span>

                  <span className="service-detail__icon-wrap">
                    <ServiceIcon type={service.icon} />
                  </span>

                  <span className="service-detail__heading">
                    <strong>{service.title}</strong>
                    <span>{service.description || service.summary}</span>
                  </span>

                  <span className="service-detail__toggle-icon" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  id={panelId}
                  className="service-detail__panel"
                  aria-hidden={!isOpen}
                >
                  <div className="service-detail__panel-inner">
                    <div className="service-detail__panel-copy">
                      <span className="service-detail__panel-label">
                        Como atuamos
                      </span>
                      <p>{service.scope}</p>
                    </div>

                    <div className="service-detail__deliverables">
                      <span className="service-detail__panel-label">
                        Serviços desta frente
                      </span>

                      <ul>
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <a className="service-detail__cta" href="#formulario-contato">
                      Conversar sobre esta frente
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesDeepDive

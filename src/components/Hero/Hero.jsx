import symbol from '../../assets/brand/aurora-symbol.png'
import { useSiteData } from '../../context/SiteDataContext'
import { getPrimaryContactHref } from '../../lib/contact'

import './Hero.css'

function Hero() {
  const { contacts, content, settings } = useSiteData()
  const section = content.hero
  const lines = section.title.split('\n')
  const contactHref = getPrimaryContactHref(contacts, settings)

  return (
    <section id="top" className="hero">
      <div className="hero__art" aria-hidden="true">
        <div className="hero__glow hero__glow--symbol" />
        <div className="hero__glow hero__glow--base" />
        <div className="hero__curve hero__curve--halo" />
        <div className="hero__curve hero__curve--sweep" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{section.eyebrow}</p>

          <h1 className="hero__title">
            {lines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < lines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="hero__description">{section.description}</p>

          <div className="hero__actions">
            <a href="#servicos" className="hero__button hero__button--primary">
              {section.auxiliary || 'Conheça a Aurora'}
            </a>

            <a href={contactHref} className="hero__button hero__button--secondary">
              Fale com um especialista
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img src={symbol} alt="" className="hero__symbol" draggable="false" />
        </div>
      </div>

      <div className="hero__explore" aria-hidden="true">
        <span>Explore a Aurora</span>
        <span className="hero__explore-arrow">↓</span>
      </div>
    </section>
  )
}

export default Hero

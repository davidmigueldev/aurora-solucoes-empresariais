import { useSiteData } from '../../context/SiteDataContext'
import { getPrimaryContactHref } from '../../lib/contact'

import './FinalCtaSection.css'

function FinalCtaSection() {
  const { contacts, content, settings } = useSiteData()
  const section = content.finalCta
  const lines = section.title.split('\n')
  const contactHref = getPrimaryContactHref(contacts, settings)

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__ambient" aria-hidden="true">
        <div className="final-cta__glow final-cta__glow--one" />
        <div className="final-cta__glow final-cta__glow--two" />
        <div className="final-cta__orbit final-cta__orbit--one" />
        <div className="final-cta__orbit final-cta__orbit--two" />
      </div>

      <div className="final-cta__inner">
        <div className="final-cta__copy">
          <p className="final-cta__eyebrow">{section.eyebrow}</p>

          <h2 id="final-cta-title" className="final-cta__title">
            {lines.map((line, index) => {
              const last = index === lines.length - 1
              return (
                <span key={`${line}-${index}`}>
                  {last ? <strong>{line}</strong> : line}
                  {!last && <br />}
                </span>
              )
            })}
          </h2>

          <p className="final-cta__description">{section.description}</p>
        </div>

        <div className="final-cta__actions">
          <a className="final-cta__button final-cta__button--primary" href={contactHref}>
            {section.auxiliary || 'Fale com um especialista'}
            <span aria-hidden="true">→</span>
          </a>

          <a className="final-cta__button final-cta__button--secondary" href="#servicos">
            Rever nossos serviços
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="final-cta__signal" aria-hidden="true">
          <span />
          <p>Uma nova Aurora para sua empresa.</p>
        </div>
      </div>
    </section>
  )
}

export default FinalCtaSection

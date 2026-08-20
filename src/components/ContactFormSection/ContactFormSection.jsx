import { useState } from 'react'

import { useSiteData } from '../../context/SiteDataContext'

import './ContactFormSection.css'

function ContactFormSection() {
  const { content, services, settings } = useSiteData()
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const section = content.contact
  const titleLines = section.title.split('\n')
  const interestOptions = [
    ...services
      .filter((service) => service.active !== false)
      .map((service) => service.title),
    'Outro assunto',
  ]

  if (!settings.contactFormEnabled) {
    return null
  }

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setStatus('success')
    setMessage(
      'Demonstração do frontend concluída. O envio real está disponível no site em produção.',
    )
  }

  return (
    <section
      id="formulario-contato"
      className="contact-form-section"
      aria-labelledby="contact-form-title"
    >
      <div className="contact-form-section__ambient" aria-hidden="true">
        <div className="contact-form-section__glow contact-form-section__glow--one" />
        <div className="contact-form-section__glow contact-form-section__glow--two" />
        <div className="contact-form-section__curve contact-form-section__curve--one" />
        <div className="contact-form-section__curve contact-form-section__curve--two" />
      </div>

      <div className="contact-form-section__inner">
        <div className="contact-form-section__intro">
          <p className="contact-form-section__eyebrow">{section.eyebrow}</p>

          <h2 id="contact-form-title" className="contact-form-section__title">
            {titleLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <p className="contact-form-section__description">
            {section.description}
          </p>

          <div
            className="contact-form-section__flow"
            aria-label="Fluxo de atendimento"
          >
            <div className="contact-form-section__flow-item">
              <span>01</span>
              <p>Você envia o contexto.</p>
            </div>
            <div className="contact-form-section__flow-item">
              <span>02</span>
              <p>A Aurora recebe e organiza a demanda.</p>
            </div>
            <div className="contact-form-section__flow-item">
              <span>03</span>
              <p>O atendimento segue pelo canal mais adequado.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section__panel">
          <div className="contact-form-section__panel-head">
            <div>
              <span>Nova solicitação</span>
              <p>Preencha os campos abaixo.</p>
            </div>
            <span
              className="contact-form-section__status-dot"
              aria-hidden="true"
            />
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__grid">
              <label className="contact-form__field">
                <span>
                  Nome <strong>*</strong>
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Seu nome"
                  required
                />
              </label>

              <label className="contact-form__field">
                <span>Empresa</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Nome da empresa"
                />
              </label>

              <label className="contact-form__field">
                <span>
                  WhatsApp <strong>*</strong>
                </span>
                <input
                  type="tel"
                  name="whatsapp"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(00) 00000-0000"
                  required
                />
              </label>

              <label className="contact-form__field">
                <span>
                  E-mail <strong>*</strong>
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                  required
                />
              </label>

              <label className="contact-form__field contact-form__field--full">
                <span>
                  Interesse <strong>*</strong>
                </span>
                <div className="contact-form__select-wrap">
                  <select name="interest" defaultValue="" required>
                    <option value="" disabled>
                      Selecione uma frente
                    </option>
                    {interestOptions.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span aria-hidden="true">⌄</span>
                </div>
              </label>

              <label className="contact-form__field contact-form__field--full">
                <span>
                  Como podemos ajudar? <strong>*</strong>
                </span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Conte brevemente o cenário, objetivo ou desafio da sua empresa."
                  required
                />
              </label>
            </div>

            <div className="contact-form__footer">
              <p>
                Esta versão pública é uma demonstração do frontend. O formulário
                funcional está disponível no site em produção.
              </p>

              <button type="submit">
                {section.auxiliary || 'Enviar mensagem'}
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div
              className={`contact-form__feedback ${
                status === 'success' ? 'is-visible' : ''
              }`}
              aria-live="polite"
            >
              <span aria-hidden="true">✓</span>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection

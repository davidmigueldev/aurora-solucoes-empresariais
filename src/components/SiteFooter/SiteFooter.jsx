import logo from '../../assets/brand/aurora-logo-horizontal.png'
import { useSiteData } from '../../context/SiteDataContext'

import './SiteFooter.css'

function DiagonalArrowIcon() {
  return (
    <svg className="site-footer__arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12L12 4" />
      <path d="M6 4h6v6" />
    </svg>
  )
}

function ContactItem({ item }) {
  if (!item.enabled || !item.value) return null

  return (
    <div className="site-footer__contact-item">
      <span className="site-footer__contact-label">{item.label}</span>
      {item.href ? (
        <a href={item.href}>{item.value}</a>
      ) : (
        <span className="site-footer__contact-value">{item.value}</span>
      )}
    </div>
  )
}

function SocialItem({ item, openNewTab }) {
  if (!item.enabled || !item.href) return null

  return (
    <a
      href={item.href}
      target={openNewTab ? '_blank' : undefined}
      rel={openNewTab ? 'noreferrer' : undefined}
      data-admin-field={item.adminField}
    >
      <span>{item.label}</span>
      <DiagonalArrowIcon />
    </a>
  )
}

function SiteFooter() {
  const { contacts, settings } = useSiteData()
  const whatsappDigits = contacts.whatsapp.replace(/\D/g, '')

  const contactItems = [
    {
      label: 'WhatsApp',
      value: contacts.whatsapp,
      href: whatsappDigits ? `https://wa.me/${whatsappDigits}` : '',
      adminField: 'whatsapp',
      enabled: contacts.whatsappEnabled,
    },
    {
      label: 'E-mail',
      value: contacts.email,
      href: contacts.email ? `mailto:${contacts.email}` : '',
      adminField: 'email',
      enabled: contacts.emailEnabled,
    },
    {
      label: 'Atendimento',
      value: contacts.businessHours,
      href: '',
      adminField: 'business_hours',
      enabled: contacts.businessHoursEnabled,
    },
  ]

  const socialItems = [
    {
      label: 'Instagram',
      href: contacts.instagram,
      adminField: 'instagram',
      enabled: contacts.instagramEnabled,
    },
    {
      label: 'Facebook',
      href: contacts.facebook,
      adminField: 'facebook',
      enabled: contacts.facebookEnabled,
    },
    {
      label: 'TikTok',
      href: contacts.tiktok,
      adminField: 'tiktok',
      enabled: contacts.tiktokEnabled,
    },
  ]

  const companyLocation = [contacts.address, contacts.city].filter(Boolean).join(' — ')
  const contactAnchor = settings.contactFormEnabled ? '#formulario-contato' : '#contato'

  return (
    <footer id="contato" className="site-footer">
      <div className="site-footer__ambient" aria-hidden="true">
        <div className="site-footer__glow site-footer__glow--one" />
        <div className="site-footer__glow site-footer__glow--two" />
        <div className="site-footer__line" />
      </div>

      <div className="site-footer__top">
        <div className="site-footer__brand">
          <img src={logo} alt="Aurora Soluções Empresariais" className="site-footer__logo" />
          <p className="site-footer__brand-copy">
            Marketing, vendas, tecnologia e gestão conectadas para empresas que precisam crescer com mais clareza, processo e estrutura.
          </p>
          <p className="site-footer__signature">Uma nova Aurora para sua empresa.</p>
        </div>

        <div className="site-footer__directory">
          <div className="site-footer__group">
            <p className="site-footer__label">Explorar</p>
            <nav className="site-footer__nav" aria-label="Navegação do rodapé">
              <a href="#top">Início</a>
              <a href="#servicos">Serviços</a>
              <a href={contactAnchor}>Contato</a>
            </nav>
          </div>

          <div className="site-footer__group site-footer__group--contact">
            <p className="site-footer__label">Fale conosco</p>
            <div className="site-footer__contact-list">
              {contactItems.map((item) => <ContactItem item={item} key={item.label} />)}
            </div>
          </div>

          <div className="site-footer__group site-footer__group--social">
            <p className="site-footer__label">Redes</p>
            <div className="site-footer__social-list">
              {socialItems.map((item) => (
                <SocialItem
                  item={item}
                  openNewTab={settings.openExternalLinksNewTab}
                  key={item.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__base">
        <div className="site-footer__institutional">
          <span className="site-footer__institutional-label">Informações institucionais</span>
          <div className="site-footer__institutional-line">
            {contacts.legalName && <strong>{contacts.legalName}</strong>}
            {contacts.cnpj && (
              <span data-admin-field="cnpj">CNPJ {contacts.cnpj}</span>
            )}
            {companyLocation && (
              <span data-admin-field="address">{companyLocation}</span>
            )}
          </div>
        </div>

        <div className="site-footer__meta">
          <div className="site-footer__meta-links">
            <a className="site-footer__privacy" href="/privacidade/">Privacidade</a>
            {settings.adminLinkVisible && (
              <a className="site-footer__admin" href="/administracao">
                Administração
                <DiagonalArrowIcon />
              </a>
            )}
          </div>
          <span>© Aurora Soluções Empresariais. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter

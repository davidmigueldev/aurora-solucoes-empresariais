import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router'

import logo from '../../assets/brand/aurora-logo-horizontal.png'
import { useSiteData } from '../../context/SiteDataContext'

import './Header.css'

function WhatsAppIcon() {
  return (
    <svg
      className="site-header__whatsapp-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3.5 20.2l1.3-4.5a8.2 8.2 0 1 1 15.4-4Z" />
      <path d="M8.3 7.7c.2-.5.4-.5.8-.5h.4c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4 0 .7.5.9 1.2 1.7 2.1 2.3.8.5 1.4.7 1.7.8.3.1.5 0 .7-.2l.9-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.2-.8 1.7-.6.6-1.5.8-2.4.7-1.2-.1-2.7-.6-4.5-1.7-2.2-1.5-3.7-3.3-4.3-4.7-.6-1.2-.6-2.3-.2-3Z" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })
  const navRef = useRef(null)
  const linkRefs = useRef({})
  const { contacts, settings } = useSiteData()

  const whatsappDigits = contacts.whatsapp.replace(/\D/g, '')
  const hasWhatsapp = contacts.whatsappEnabled && Boolean(whatsappDigits)
  const fallbackContactHref = settings.contactFormEnabled
    ? '#formulario-contato'
    : '#contato'
  const contactHref = hasWhatsapp
    ? `https://wa.me/${whatsappDigits}`
    : fallbackContactHref
  const contactLabel = hasWhatsapp
    ? 'Fale pelo WhatsApp'
    : 'Fale com a Aurora'

  const closeMenu = () => setMenuOpen(false)

  function handleNavClick(section) {
    setActiveSection(section)
    closeMenu()
  }

  useEffect(() => {
    let frame = 0

    function syncActiveSection() {
      frame = 0

      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 96
      const activationLine = headerHeight + 28
      const servicesSection = document.getElementById('servicos')
      const contactSection = document.getElementById('formulario-contato')

      let nextSection = 'inicio'

      if (contactSection && contactSection.getBoundingClientRect().top <= activationLine) {
        nextSection = 'contato'
      } else if (servicesSection && servicesSection.getBoundingClientRect().top <= activationLine) {
        nextSection = 'servicos'
      }

      setActiveSection((current) =>
        current === nextSection ? current : nextSection,
      )
    }

    function requestSync() {
      if (!frame) {
        frame = window.requestAnimationFrame(syncActiveSection)
      }
    }

    requestSync()
    window.addEventListener('scroll', requestSync, { passive: true })
    window.addEventListener('resize', requestSync)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestSync)
      window.removeEventListener('resize', requestSync)
    }
  }, [])

  useEffect(() => {
    function updateIndicator() {
      const nav = navRef.current
      const activeLink = linkRefs.current[activeSection]

      if (!nav || !activeLink) return

      const navRect = nav.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()

      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        ready: true,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)

    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeSection, menuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink
          to="/"
          end
          className="site-header__brand"
          aria-label="Aurora Soluções Empresariais — Início"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Aurora Soluções Empresariais"
            className="site-header__logo"
          />
        </NavLink>

        <nav
          ref={navRef}
          id="main-navigation"
          className={`site-header__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          <a
            ref={(element) => { linkRefs.current.inicio = element }}
            href="#top"
            className={activeSection === 'inicio' ? 'active' : ''}
            onClick={() => handleNavClick('inicio')}
          >
            Início
          </a>

          <a
            ref={(element) => { linkRefs.current.servicos = element }}
            href="#servicos"
            className={activeSection === 'servicos' ? 'active' : ''}
            onClick={() => handleNavClick('servicos')}
          >
            Serviços
          </a>

          <a
            ref={(element) => { linkRefs.current.contato = element }}
            href="#formulario-contato"
            className={activeSection === 'contato' ? 'active' : ''}
            onClick={() => handleNavClick('contato')}
          >
            Contato
          </a>

          <span
            className="site-header__nav-indicator"
            aria-hidden="true"
            style={{
              width: `${indicator.width}px`,
              transform: `translateX(${indicator.left}px)`,
              opacity: indicator.ready ? 1 : 0,
            }}
          />

          <a
            href={contactHref}
            className="site-header__nav-whatsapp"
            onClick={closeMenu}
          >
            <WhatsAppIcon />
            {contactLabel}
          </a>
        </nav>

        <a href={contactHref} className="site-header__whatsapp">
          <WhatsAppIcon />
          {contactLabel}
        </a>

        <button
          type="button"
          className={`site-header__menu-button ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header

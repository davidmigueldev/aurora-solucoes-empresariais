export function getPrimaryContactHref(contacts, settings) {
  const whatsappDigits = String(contacts.whatsapp || '').replace(/\D/g, '')
  const whatsappHref =
    contacts.whatsappEnabled && whatsappDigits
      ? `https://wa.me/${whatsappDigits}`
      : ''
  const emailHref =
    contacts.emailEnabled && contacts.email
      ? `mailto:${contacts.email}`
      : ''
  const formHref = settings.contactFormEnabled
    ? '#formulario-contato'
    : ''

  const preferred = {
    whatsapp: whatsappHref,
    email: emailHref,
    form: formHref,
  }[settings.defaultContactChannel]

  return preferred || formHref || whatsappHref || emailHref || '#contato'
}

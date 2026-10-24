// src/data/business.js
// NAP (nombre, dirección, teléfono) único del negocio. Debe coincidir
// exactamente con la ficha de Google Business Profile. La calle no se publica
// en el schema porque la ficha es de área de servicio (dirección oculta).
// El domicilio fiscal de las páginas legales es independiente de este dato.

export const business = {
  name: 'Kulmen Visuals',
  email: 'hola@kulmenvisuals.com',
  phone: '+34 652 40 56 54',
  phoneHref: 'tel:+34652405654',
  whatsappNumber: '34652405654',
  locality: 'Pontevedra',
  province: 'Pontevedra',
  region: 'Galicia',
  country: 'ES',
  businessId: 'https://kulmenvisuals.com/#localbusiness',
}

export const businessAddress = {
  '@type': 'PostalAddress',
  addressLocality: business.locality,
  addressRegion: business.region,
  addressCountry: business.country,
}

// Referencia a la entidad del negocio definida en el schema de la home.
export const businessRef = {
  '@type': 'Organization',
  '@id': business.businessId,
  name: business.name,
  url: 'https://kulmenvisuals.com',
}

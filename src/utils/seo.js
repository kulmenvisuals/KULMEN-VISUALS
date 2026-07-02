import { useEffect } from 'react'
import {
  defaultOgImage,
  findBlogPostBySlug,
  findProjectBySlug,
  normalizePathname,
  routes,
  siteUrl,
  withTrailingSlash,
} from './routes.js'

export { siteUrl }

const defaultSeo = {
  title: 'Producción audiovisual y FPV en Galicia | Kulmen Visuals',
  description:
    'Productora audiovisual y piloto FPV en Galicia. Rodaje, drones FPV cinematográficos y edición para marcas, eventos y turismo. Solicita presupuesto.',
  pathname: '/',
  ogType: 'website',
  image: defaultOgImage,
  robots: 'index, follow',
}

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeAttribute(value = '') {
  return escapeHtml(value).replaceAll('"', '&quot;')
}

function absoluteUrl(value = '/') {
  if (!value) return siteUrl
  if (/^https?:\/\//.test(value)) return value
  return `${siteUrl}${value.startsWith('/') ? value : `/${value}`}`
}

function absolutePageUrl(pathname = '/') {
  return absoluteUrl(withTrailingSlash(pathname))
}

function buildSeo(overrides = {}) {
  const seo = { ...defaultSeo, ...overrides }

  return {
    ...seo,
    title: seo.title,
    description: seo.description,
    canonical: absolutePageUrl(seo.pathname),
    image: absoluteUrl(seo.image),
    ogUrl: absolutePageUrl(seo.pathname),
    ogTitle: seo.ogTitle || seo.title,
    ogDescription: seo.ogDescription || seo.description,
    ogType: seo.ogType || 'website',
    robots: seo.robots || 'index, follow',
    jsonLd: seo.jsonLd || null,
  }
}

function setMetaTag(selector, attributes) {
  if (typeof document === 'undefined') return

  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })
}

function setLinkTag(selector, attributes) {
  if (typeof document === 'undefined') return

  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })
}

export function applyPageSeo(seoInput) {
  if (typeof document === 'undefined') return

  const seo = buildSeo(seoInput)
  document.title = seo.title

  setMetaTag('meta[name="description"]', {
    name: 'description',
    content: seo.description,
  })
  setMetaTag('meta[name="robots"]', {
    name: 'robots',
    content: seo.robots,
  })
  setMetaTag('meta[property="og:title"]', {
    property: 'og:title',
    content: seo.ogTitle,
  })
  setMetaTag('meta[property="og:description"]', {
    property: 'og:description',
    content: seo.ogDescription,
  })
  setMetaTag('meta[property="og:type"]', {
    property: 'og:type',
    content: seo.ogType,
  })
  setMetaTag('meta[property="og:url"]', {
    property: 'og:url',
    content: seo.ogUrl,
  })
  setMetaTag('meta[property="og:image"]', {
    property: 'og:image',
    content: seo.image,
  })
  setMetaTag('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: 'Kulmen Visuals',
  })
  setMetaTag('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: 'summary_large_image',
  })
  setMetaTag('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: seo.ogTitle,
  })
  setMetaTag('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: seo.ogDescription,
  })
  setMetaTag('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: seo.image,
  })
  setLinkTag('link[rel="canonical"]', {
    rel: 'canonical',
    href: seo.canonical,
  })
}

export function usePageSeo(seo) {
  useEffect(() => {
    applyPageSeo(seo)
  }, [
    seo.title,
    seo.description,
    seo.pathname,
    seo.image,
    seo.ogType,
    seo.robots,
  ])
}

export function useJsonLd(schema) {
  useEffect(() => {
    if (typeof document === 'undefined' || !schema) return

    const id = 'jsonld-page'
    let el = document.getElementById(id)
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = id
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)

    return () => {
      document.getElementById(id)?.remove()
    }
  }, [schema])
}

export function renderHeadTags(seoInput) {
  const seo = buildSeo(seoInput)

  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeAttribute(seo.description)}" />`,
    `<meta name="robots" content="${escapeAttribute(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeAttribute(seo.canonical)}" />`,
    `<meta property="og:title" content="${escapeAttribute(seo.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeAttribute(seo.ogDescription)}" />`,
    `<meta property="og:type" content="${escapeAttribute(seo.ogType)}" />`,
    `<meta property="og:url" content="${escapeAttribute(seo.ogUrl)}" />`,
    `<meta property="og:image" content="${escapeAttribute(seo.image)}" />`,
    '<meta property="og:locale" content="es_ES" />',
    '<meta property="og:site_name" content="Kulmen Visuals" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttribute(seo.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(seo.ogDescription)}" />`,
    `<meta name="twitter:image" content="${escapeAttribute(seo.image)}" />`,
  ]

  if (seo.jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`)
  }

  return tags.join('\n    ')
}

export function resolveRouteSeo(pathname = '/') {
  const path = normalizePathname(pathname)

  if (path === '/') {
    return buildSeo(defaultSeo)
  }

  if (path === '/servicios') {
    return buildSeo({
      title: 'Servicios de producción audiovisual y dron FPV en Galicia | Kulmen Visuals',
      description:
        'Producción audiovisual completa en Galicia: vídeo para marcas, FPV profesional, edición y contenido para redes. Conoce todos los servicios de Kulmen Visuals.',
      pathname: path,
    })
  }

  if (path === '/proyectos') {
    return buildSeo({
      title: 'Proyectos de video, FPV y contenido de marca | Kulmen Visuals',
      description:
        'Portfolio de proyectos audiovisuales, videos de marca, eventos, FPV y contenido para redes sociales producidos por Kulmen Visuals.',
      pathname: path,
    })
  }

  if (path.startsWith('/proyectos/')) {
    const slug = path.replace('/proyectos/', '')
    const project = findProjectBySlug(slug)

    if (project) {
      const thumbnailUrl = absoluteUrl(project.thumbnail || project.images?.[0] || defaultOgImage)
      const projectDescription =
        project.description ||
        'Proyecto audiovisual producido por Kulmen Visuals para marcas, eventos y espacios.'
      const authorRef = {
        '@type': 'Person',
        name: 'io Rodríguez',
        url: absolutePageUrl(routes.sobreMi),
      }

      const videoId = project.youtubeUrl?.split('/embed/')?.[1]?.split('?')?.[0]
      const contentUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : undefined

      const jsonLd = project.youtubeUrl
        ? {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: project.title,
            description: projectDescription,
            thumbnailUrl,
            embedUrl: project.youtubeUrl,
            contentUrl,
            uploadDate: project.year ? `${project.year}-01-01` : undefined,
            author: authorRef,
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: projectDescription,
            image: thumbnailUrl,
            url: project.instagramUrl || absolutePageUrl(path),
            creator: authorRef,
          }

      return buildSeo({
        title: `${project.title} | Kulmen Visuals`,
        description: projectDescription,
        pathname: path,
        image: project.thumbnail || project.images?.[0] || defaultOgImage,
        jsonLd,
      })
    }
  }

  if (path === '/sobre-mi') {
    return buildSeo({
      title: 'Sobre mí | Producción audiovisual y drones FPV en Galicia',
      description:
        'Soy io Rodríguez, creadora audiovisual y piloto de drones FPV en Galicia. Trabajo para marcas, eventos y proyectos culturales que necesitan vídeo de verdad.',
      pathname: path,
      image: '/images/io-portrait.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'io Rodríguez',
        url: absolutePageUrl(routes.sobreMi),
        image: `${siteUrl}/images/io-portrait.jpg`,
        jobTitle: 'Realizadora audiovisual y piloto de drones FPV',
        description:
          'Creadora audiovisual y piloto de drones FPV en Galicia. Producción completa de vídeo para marcas, eventos y proyectos culturales.',
        worksFor: { '@type': 'Organization', name: 'Kulmen Visuals', url: siteUrl },
        address: { '@type': 'PostalAddress', addressRegion: 'Galicia', addressCountry: 'ES' },
        sameAs: ['https://www.instagram.com/kulmenvisuals/'],
      },
    })
  }

  if (path === '/contacto') {
    return buildSeo({
      title: 'Contacto | Presupuesto audiovisual y FPV en Galicia',
      description:
        'Solicita presupuesto para vídeo, dron FPV, eventos o contenido de marca en Galicia y resto de España.',
      pathname: path,
    })
  }

  if (path === '/contacto/gracias') {
    return buildSeo({
      title: 'Solicitud enviada | Kulmen Visuals',
      description:
        'Confirmación de envío del formulario de contacto de Kulmen Visuals.',
      pathname: path,
      robots: 'noindex, nofollow',
    })
  }

  if (path === '/blog') {
    return buildSeo({
      title: 'Blog de FPV y producción audiovisual en Galicia | Kulmen Visuals',
      description:
        'Blog de producción audiovisual y drones FPV en Galicia. Guías prácticas sobre vídeo para marcas, turismo y eventos.',
      pathname: path,
    })
  }

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '')
    const post = findBlogPostBySlug(slug)

    if (post) {
      return buildSeo({
        title: `${post.title} | Kulmen Visuals`,
        description: post.excerpt,
        pathname: path,
        ogType: 'article',
        image: post.cover || defaultOgImage,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: absoluteUrl(post.cover || defaultOgImage),
          datePublished: post.date,
          dateModified: post.date,
          url: absolutePageUrl(path),
          keywords: Array.isArray(post.tags) ? post.tags.join(', ') : undefined,
          author: {
            '@type': 'Person',
            name: 'io Rodríguez',
            url: absolutePageUrl(routes.sobreMi),
          },
          publisher: {
            '@type': 'Organization',
            name: 'Kulmen Visuals',
            url: siteUrl,
            logo: { '@type': 'ImageObject', url: `${siteUrl}/logo-kulmen-visuals.png` },
          },
        },
      })
    }
  }

  if (path === '/aviso-legal') {
    return buildSeo({
      title: 'Aviso legal | Kulmen Visuals',
      description:
        'Información legal, condiciones de uso y titularidad del sitio web de Kulmen Visuals.',
      pathname: path,
    })
  }

  if (path === '/politica-privacidad') {
    return buildSeo({
      title: 'Política de privacidad | Kulmen Visuals',
      description:
        'Información sobre el tratamiento de datos personales en la web de Kulmen Visuals.',
      pathname: path,
    })
  }

  if (path === '/cookies') {
    return buildSeo({
      title: 'Política de cookies | Kulmen Visuals',
      description:
        'Información sobre el uso de cookies en la web de Kulmen Visuals.',
      pathname: path,
    })
  }

  if (path === '/servicios-grabacion-con-drones') {
    return buildSeo({
      title: 'Servicios de grabación con drones | FPV, eventos, empresa y rodajes',
      description:
        'Grabación con drones profesionales en España: FPV, cine, vídeo corporativo, eventos e inmobiliaria. Piloto con permisos AESA. Presupuesto sin compromiso.',
      pathname: path,
    })
  }

  if (path === '/grabacion-con-drones-fpv') {
    return buildSeo({
      title: 'Grabación con drones FPV | Vuelos inmersivos para publicidad y eventos',
      description:
        'Grabación con drones FPV en España: planos dinámicos e inmersivos para publicidad, eventos y marcas. Piloto certificado, Cinewhoop para interiores. Presupuesto sin compromiso.',
      pathname: path,
    })
  }

  if (path === '/dron-para-cine-y-publicidad') {
    return buildSeo({
      title: 'Dron para cine y publicidad | Rodajes aéreos profesionales',
      description:
        'Dron para rodaje de cine y publicidad en España. Planos aéreos cinematográficos para spots, campañas y producciones. Piloto certificado con permisos.',
      pathname: path,
    })
  }

  if (path === '/video-corporativo-con-dron') {
    return buildSeo({
      title: 'Vídeo corporativo con dron | Empresas, industria e instalaciones',
      description:
        'Vídeo corporativo con dron para empresas, industria e instalaciones. Muestra tus instalaciones desde el aire con calidad profesional. Piloto certificado con permisos.',
      pathname: path,
    })
  }

  if (path === '/dron-para-eventos') {
    return buildSeo({
      title: 'Grabación con dron para eventos | Festivales, conciertos y marcas',
      description:
        'Grabación con dron para eventos en España: festivales, conciertos, activaciones de marca y conferencias. FPV y cinematográfico. Piloto certificado con permisos.',
      pathname: path,
    })
  }

  if (path === '/dron-para-inmobiliarias') {
    return buildSeo({
      title: 'Servicios de dron para inmobiliarias | Vídeo y foto aérea de propiedades',
      description:
        'Dron para inmobiliaria: foto y vídeo aéreo de propiedades, parcelas y urbanizaciones en España. Piloto certificado con permisos. Acelera la venta con imágenes únicas.',
      pathname: path,
    })
  }

  if (path === '/alquiler-drones-con-piloto') {
    return buildSeo({
      title: 'Alquiler de drones con piloto | Servicio profesional con permisos',
      description:
        'Alquiler de drones con piloto profesional en España. Dron + piloto certificado con permisos AESA incluidos para rodajes, eventos y empresas. Presupuesto sin compromiso.',
      pathname: path,
    })
  }

  if (path === '/piloto-de-drones-galicia') {
    return buildSeo({
      title: 'Piloto de drones en Galicia | Operadora FPV y estabilizado certificada',
      description:
        'Piloto de drones profesional en Galicia: FPV, estabilizado e interiores. Operadora UAS registrada en AESA, certificada EASA, con seguro y gestión de permisos. Base en Pontevedra, cobertura en toda Galicia.',
      pathname: path,
    })
  }

  if (path === '/produccion-audiovisual-galicia') {
    return buildSeo({
      title: 'Producción audiovisual en Galicia | Vídeo para marcas, empresas y eventos',
      description:
        'Servicio de producción audiovisual en Galicia: spots, vídeo corporativo, eventos y videoclips. Preproducción, rodaje con cámara de cine y dron FPV, y edición. Presupuesto cerrado sin compromiso.',
      pathname: path,
    })
  }

  if (path === '/edicion-y-postproduccion-de-video') {
    return buildSeo({
      title: 'Edición y postproducción de vídeo | Montaje, color y formatos para redes',
      description:
        'Servicio profesional de edición y postproducción de vídeo: montaje, corrección de color, audio y versiones para redes. Desde tu material o desde rodaje propio. En remoto para toda España.',
      pathname: path,
    })
  }

  if (path === '/contenido-para-redes-sociales') {
    return buildSeo({
      title: 'Contenido para redes sociales | Vídeo profesional para Reels, TikTok y Shorts',
      description:
        'Producción de contenido de vídeo para redes sociales: Reels, TikTok, Shorts y UGC para empresas. Grabación vertical, edición con gancho y packs mensuales. Base en Galicia, servicio en toda España.',
      pathname: path,
    })
  }

  if (path === '/galicia/grabacion-con-drones') {
    return buildSeo({
      title: 'Grabación con drones en Galicia | FPV, cine, eventos y corporativo',
      description:
        'Grabación con drones en Galicia: FPV, cine, eventos corporativos e inmobiliaria. Piloto certificado con base en Pontevedra. Cobertura en toda la comunidad.',
      pathname: path,
    })
  }

  if (path === '/pontevedra/grabacion-con-drones') {
    return buildSeo({
      title: 'Grabación con drones en Pontevedra | FPV, rodajes y empresa',
      description:
        'Grabación con drones en Pontevedra y provincia: FPV, vídeo corporativo, eventos e inmobiliaria. Base local, respuesta en 24 horas. Piloto certificado con permisos AESA.',
      pathname: path,
    })
  }

  return buildSeo({
    title: 'Página no encontrada | Kulmen Visuals',
    description:
      'La página solicitada no está disponible. Puedes seguir navegando por los servicios, proyectos y artículos de Kulmen Visuals.',
    pathname: path,
    robots: 'noindex, nofollow',
  })
}

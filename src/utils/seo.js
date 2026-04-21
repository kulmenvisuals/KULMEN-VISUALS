import { useEffect } from 'react'
import {
  defaultOgImage,
  findBlogPostBySlug,
  findProjectBySlug,
  normalizePathname,
  siteUrl,
} from './routes.js'

export { siteUrl }

const defaultSeo = {
  title: 'Produccion audiovisual y FPV en Galicia | Kulmen Visuals',
  description:
    'Produccion audiovisual y drones FPV en Galicia para marcas, eventos y espacios. Rodaje, edicion y contenido para web, redes y campanas publicitarias de impacto.',
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

function buildSeo(overrides = {}) {
  const seo = { ...defaultSeo, ...overrides }

  return {
    ...seo,
    title: seo.title,
    description: seo.description,
    canonical: absoluteUrl(seo.pathname),
    image: absoluteUrl(seo.image),
    ogUrl: absoluteUrl(seo.pathname),
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
      title: 'Servicios de produccion audiovisual y dron FPV en Galicia | Kulmen Visuals',
      description:
        'Servicios de video, dron FPV, grabacion y postproduccion para marcas, eventos, turismo y espacios en Galicia.',
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
      const authorRef = { '@type': 'Person', name: 'io Rodríguez', url: `${siteUrl}/sobre-mi` }

      const jsonLd = project.youtubeUrl
        ? {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: project.title,
            description: projectDescription,
            thumbnailUrl,
            embedUrl: project.youtubeUrl,
            uploadDate: project.year ? `${project.year}-01-01` : undefined,
            author: authorRef,
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: projectDescription,
            image: thumbnailUrl,
            url: absoluteUrl(path),
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
      title: 'Sobre mi | Produccion audiovisual y drones FPV en Galicia',
      description:
        'Conoce a io, creadora audiovisual y piloto de drones FPV en Galicia. Produccion completa de video para marcas, eventos y proyectos culturales.',
      pathname: path,
      image: '/images/io-portrait.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'io Rodríguez',
        url: `${siteUrl}/sobre-mi`,
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
        'Solicita presupuesto para video, dron FPV, eventos o contenido de marca en Galicia y resto de Espana.',
      pathname: path,
    })
  }

  if (path === '/contacto/gracias') {
    return buildSeo({
      title: 'Solicitud enviada | Kulmen Visuals',
      description:
        'Confirmacion de envio del formulario de contacto de Kulmen Visuals.',
      pathname: path,
      robots: 'noindex, nofollow',
    })
  }

  if (path === '/blog') {
    return buildSeo({
      title: 'Blog de FPV y produccion audiovisual en Galicia | Kulmen Visuals',
      description:
        'Articulos sobre FPV, produccion audiovisual y video para marcas en Galicia. Guias practicas, planificacion y enfoque creativo.',
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
          url: absoluteUrl(path),
          keywords: Array.isArray(post.tags) ? post.tags.join(', ') : undefined,
          author: { '@type': 'Person', name: 'io Rodríguez', url: `${siteUrl}/sobre-mi` },
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
        'Informacion legal, condiciones de uso y titularidad del sitio web de Kulmen Visuals.',
      pathname: path,
    })
  }

  if (path === '/politica-privacidad') {
    return buildSeo({
      title: 'Politica de privacidad | Kulmen Visuals',
      description:
        'Informacion sobre el tratamiento de datos personales en la web de Kulmen Visuals.',
      pathname: path,
    })
  }

  if (path === '/cookies') {
    return buildSeo({
      title: 'Politica de cookies | Kulmen Visuals',
      description:
        'Informacion sobre el uso de cookies en la web de Kulmen Visuals.',
      pathname: path,
    })
  }

  return buildSeo({
    title: 'Pagina no encontrada | Kulmen Visuals',
    description:
      'La pagina solicitada no esta disponible. Puedes seguir navegando por los servicios, proyectos y articulos de Kulmen Visuals.',
    pathname: path,
    robots: 'noindex, nofollow',
  })
}

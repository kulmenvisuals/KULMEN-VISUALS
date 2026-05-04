import { blogPosts } from '../data/blogPosts.js'
import { projects } from '../data/projects.js'
import { normalizeSlug } from './slug.js'

export const siteUrl = 'https://kulmenvisuals.com'
export const defaultOgImage = '/images/og-cover.jpg'

export const routes = {
  home: '/',
  servicios: '/servicios/',
  proyectos: '/proyectos/',
  sobreMi: '/sobre-mi/',
  blog: '/blog/',
  contacto: '/contacto/',
  contactoGracias: '/contacto/gracias/',
  avisoLegal: '/aviso-legal/',
  politicaPrivacidad: '/politica-privacidad/',
  cookies: '/cookies/',
  serviciosGrabacion: '/servicios-grabacion-con-drones/',
  grabacionFPV: '/grabacion-con-drones-fpv/',
  dronCinePublicidad: '/dron-para-cine-y-publicidad/',
  videoCorporativo: '/video-corporativo-con-dron/',
  dronEventos: '/dron-para-eventos/',
  dronInmobiliarias: '/dron-para-inmobiliarias/',
  alquilerDrones: '/alquiler-drones-con-piloto/',
  galiciaGrabacion: '/galicia/grabacion-con-drones/',
  pontevedraGrabacion: '/pontevedra/grabacion-con-drones/',
}

export const staticRoutes = [
  routes.home,
  routes.servicios,
  routes.proyectos,
  routes.sobreMi,
  routes.blog,
  routes.contacto,
  routes.contactoGracias,
  routes.avisoLegal,
  routes.politicaPrivacidad,
  routes.cookies,
  routes.serviciosGrabacion,
  routes.grabacionFPV,
  routes.dronCinePublicidad,
  routes.videoCorporativo,
  routes.dronEventos,
  routes.dronInmobiliarias,
  routes.alquilerDrones,
  routes.galiciaGrabacion,
  routes.pontevedraGrabacion,
]

export const sitemapStaticRoutes = staticRoutes.filter((route) => route !== routes.contactoGracias)

export function normalizePathname(pathname = '/') {
  const [cleanPath] = pathname.split(/[?#]/)

  if (!cleanPath || cleanPath === '/') {
    return '/'
  }

  return cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath
}

export function withTrailingSlash(pathname = '/') {
  const normalized = normalizePathname(pathname)
  return normalized === '/' ? '/' : `${normalized}/`
}

export function getProjectPath(project) {
  return withTrailingSlash(`/proyectos/${project.slug || project.id}`)
}

export function getBlogPostPath(post) {
  return withTrailingSlash(`/blog/${post.slug || post.id}`)
}

export function findProjectBySlug(slug) {
  const normalized = normalizeSlug(slug)

  return projects.find((project) => {
    return (
      normalizeSlug(project.id) === normalized ||
      normalizeSlug(project.slug) === normalized ||
      normalizeSlug(project.title) === normalized
    )
  })
}

export function findBlogPostBySlug(slug) {
  const normalized = normalizeSlug(slug)

  return blogPosts.find((post) => {
    return (
      normalizeSlug(post.id) === normalized ||
      normalizeSlug(post.slug) === normalized ||
      normalizeSlug(post.title) === normalized
    )
  })
}

export function getPrerenderRoutes() {
  return [
    ...staticRoutes,
    ...projects.map(getProjectPath),
    ...blogPosts.map(getBlogPostPath),
  ]
}

import { blogPosts } from '../data/blogPosts.js'
import { projects } from '../data/projects.js'
import { normalizeSlug } from './slug.js'

export const siteUrl = 'https://kulmenvisuals.com'
export const defaultOgImage = '/images/hero-poster.jpg'

export const staticRoutes = [
  '/',
  '/servicios',
  '/proyectos',
  '/sobre-mi',
  '/blog',
  '/contacto',
  '/aviso-legal',
  '/politica-privacidad',
  '/cookies',
]

export function normalizePathname(pathname = '/') {
  const [cleanPath] = pathname.split(/[?#]/)

  if (!cleanPath || cleanPath === '/') {
    return '/'
  }

  return cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath
}

export function getProjectPath(project) {
  return `/proyectos/${project.slug || project.id}`
}

export function getBlogPostPath(post) {
  return `/blog/${post.slug || post.id}`
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

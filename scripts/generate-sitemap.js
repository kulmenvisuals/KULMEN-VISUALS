import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { blogPosts } from "../src/data/blogPosts.js"
import { projects } from "../src/data/projects.js"
import { getBlogPostPath, getProjectPath, routes, siteUrl, sitemapStaticRoutes } from "../src/utils/routes.js"

const today = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Madrid',
}).format(new Date())

const PRIORITY = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  [routes.servicios]: { changefreq: 'monthly', priority: '0.9' },
  [routes.proyectos]: { changefreq: 'monthly', priority: '0.9' },
  [routes.sobreMi]: { changefreq: 'monthly', priority: '0.8' },
  [routes.blog]: { changefreq: 'weekly', priority: '0.9' },
  [routes.contacto]: { changefreq: 'monthly', priority: '0.8' },
  [routes.avisoLegal]: { changefreq: 'yearly', priority: '0.2' },
  [routes.politicaPrivacidad]: { changefreq: 'yearly', priority: '0.2' },
  [routes.cookies]: { changefreq: 'yearly', priority: '0.2' },
}

const blogRoutes = blogPosts.map((post) => ({
  loc: getBlogPostPath(post),
  lastmod: post.date || today,
  changefreq: 'monthly',
  priority: '0.8',
}))

const projectRoutes = projects.map((project) => ({
  loc: getProjectPath(project),
  lastmod: today,
  changefreq: 'monthly',
  priority: '0.7',
}))

const sitemapEntries = [
  ...sitemapStaticRoutes.map((loc) => ({
    loc,
    lastmod: today,
    ...(PRIORITY[loc] || { changefreq: 'monthly', priority: '0.5' }),
  })),
  ...projectRoutes,
  ...blogRoutes,
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outputPath = path.resolve(__dirname, "../public/sitemap.xml")

fs.writeFileSync(outputPath, xml, "utf-8")
console.log(`sitemap.xml generado en ${outputPath}`)

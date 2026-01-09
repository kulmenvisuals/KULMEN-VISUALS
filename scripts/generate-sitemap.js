import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { blogPosts } from "../src/data/blogPosts.js"

const siteUrl = "https://kulmenvisuals.com"

const staticRoutes = [
  "/",
  "/servicios",
  "/proyectos",
  "/sobre-mi",
  "/blog",
  "/contacto",
]

const today = new Date().toISOString().slice(0, 10)

const blogRoutes = blogPosts.map((post) => ({
  loc: `/blog/${post.slug || post.id}`,
  lastmod: post.date || today,
}))

const routes = [
  ...staticRoutes.map((loc) => ({ loc, lastmod: today })),
  ...blogRoutes,
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
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

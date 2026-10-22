import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { blogPosts } from "../src/data/blogPosts.js"
import { projects } from "../src/data/projects.js"
import { getBlogPostPath, getProjectPath, routes, siteUrl } from "../src/utils/routes.js"
import { resolveRouteSeo } from "../src/utils/seo.js"

const servicePages = [
  routes.servicios,
  routes.produccionAudiovisual,
  routes.serviciosGrabacion,
  routes.grabacionFPV,
  routes.pilotoDronesGalicia,
  routes.dronCinePublicidad,
  routes.videoCorporativo,
  routes.dronEventos,
  routes.dronInmobiliarias,
  routes.alquilerDrones,
  routes.edicionPostproduccion,
  routes.contenidoRedes,
  routes.bodasFotografiaVideo,
  routes.galiciaGrabacion,
  routes.pontevedraGrabacion,
]

const infoPages = [routes.sobreMi, routes.proyectos, routes.blog, routes.contacto]

function pageLine(route) {
  const { title, description } = resolveRouteSeo(route)
  const name = title.replace(/ \| Kulmen Visuals$/, "")
  return `- [${name}](${siteUrl}${route}): ${description}`
}

const projectLines = projects.map((project) => {
  const meta = [project.client, project.year, project.location].filter(Boolean).join(", ")
  return `- [${project.title}](${siteUrl}${getProjectPath(project)}): ${meta}. ${project.description || ""}`.trim()
})

const postLines = [...blogPosts]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((post) => `- [${post.title}](${siteUrl}${getBlogPostPath(post)}): ${post.excerpt}`)

const content = `# Kulmen Visuals

> Productora audiovisual y operadora de drones FPV con base en Pontevedra (Galicia, España). Producción completa de vídeo para marcas, empresas, eventos, turismo e inmobiliaria: preproducción, rodaje con cámara de cine y dron (FPV, estabilizado e interiores), edición y postproducción. Piloto certificada EASA y operadora UAS registrada en AESA. Trabaja en toda Galicia y se desplaza al resto de España.

Datos clave:

- Responsable: io Rodríguez, realizadora audiovisual y piloto de drones FPV.
- Contacto: hola@kulmenvisuals.com · ${siteUrl}${routes.contacto}
- Instagram: https://www.instagram.com/kulmenvisuals/
- Idioma del sitio: español.

## Servicios

${servicePages.map(pageLine).join("\n")}

## Sobre Kulmen Visuals

${infoPages.map(pageLine).join("\n")}

## Proyectos

${projectLines.join("\n")}

## Blog

${postLines.join("\n")}

## Optional

- [Sitemap XML](${siteUrl}/sitemap.xml)
- [Aviso legal](${siteUrl}${routes.avisoLegal})
- [Política de privacidad](${siteUrl}${routes.politicaPrivacidad})
`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outputPath = path.resolve(__dirname, "../public/llms.txt")

fs.writeFileSync(outputPath, content, "utf-8")
console.log(`llms.txt generado en ${outputPath}`)

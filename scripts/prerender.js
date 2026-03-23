import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { getPrerenderRoutes } from '../src/utils/routes.js'
import { renderHeadTags } from '../src/utils/seo.js'

const distDir = path.resolve('dist')
const serverEntryPath = path.resolve(distDir, 'server/entry-server.js')
const templatePath = path.resolve(distDir, 'index.html')

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
}

function routeToFilePath(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html')
  }

  return path.join(distDir, route.replace(/^\//, ''), 'index.html')
}

function injectApp(template, appHtml) {
  return template.replace(
    '<div id="root"><!--app-html--></div>',
    `<div id="root">${appHtml}</div>`,
  )
}

function injectHead(template, headTags) {
  return template.replace(
    /<!--app-head-->[\s\S]*?<!--\/app-head-->/,
    `<!--app-head-->\n    ${headTags}\n    <!--/app-head-->`,
  )
}

function extractResourceHints(appHtml) {
  const match = appHtml.match(/^((?:<link\b[^>]*\/>)+)/)

  if (!match) {
    return {
      appHtml,
      resourceHints: '',
    }
  }

  return {
    appHtml: appHtml.slice(match[1].length),
    resourceHints: match[1],
  }
}

async function prerender() {
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`No se encontro el bundle SSR en ${serverEntryPath}`)
  }

  const template = fs.readFileSync(templatePath, 'utf-8')
  const { render } = await import(pathToFileURL(serverEntryPath).href)
  const routes = getPrerenderRoutes()

  for (const route of routes) {
    const { html, seo } = render(route)
    const { appHtml, resourceHints } = extractResourceHints(html)
    let finalHtml = injectApp(injectHead(template, renderHeadTags(seo)), appHtml)

    if (resourceHints) {
      finalHtml = finalHtml.replace('</head>', `    ${resourceHints}\n  </head>`)
    }

    const outputPath = routeToFilePath(route)

    ensureDir(outputPath)
    fs.writeFileSync(outputPath, finalHtml, 'utf-8')
  }

  fs.rmSync(path.resolve(distDir, 'server'), { recursive: true, force: true })
}

prerender().catch((error) => {
  console.error(error)
  process.exit(1)
})

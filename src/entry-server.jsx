import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRouter } from './router.jsx'
import { resolveRouteSeo } from './utils/seo.js'

export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRouter />
    </StaticRouter>,
  )

  return {
    html,
    seo: resolveRouteSeo(url),
  }
}

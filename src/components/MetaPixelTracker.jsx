import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function MetaPixelTracker() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (typeof window.fbq !== 'function' || !window.fbq.callMethod) return
    if (!window.__metaPixelState?.loaded) return

    const currentPath = `${location.pathname}${location.search}${location.hash}`

    if (window.__metaPixelState.lastTrackedPath === currentPath) return

    window.fbq('track', 'PageView')
    window.__metaPixelState.lastTrackedPath = currentPath
  }, [location.hash, location.pathname, location.search])

  return null
}

export default MetaPixelTracker

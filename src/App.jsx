import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { resolveRouteSeo, usePageSeo } from './utils/seo.js'

function App() {
  const location = useLocation()
  usePageSeo(resolveRouteSeo(location.pathname))

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col">
      <ScrollToTop />
      <Header currentPath={location.pathname} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App

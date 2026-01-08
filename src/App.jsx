import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col">
      <Header currentPath={location.pathname} />

      <div className="kv-marquee">
        <div className="kv-marquee-track">
          <span className="kv-marquee-text">
            Eleva tu marca con contenido de altura · Kulmen Visuals.
          </span>
        </div>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App

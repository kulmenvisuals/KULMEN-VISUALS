import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'

// Páginas
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Servicios from './pages/Servicios.jsx'
import SobreMi from './pages/SobreMi.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Inicio */}
          <Route index element={<Home />} />

          {/* Portfolio */}
          <Route path="proyectos" element={<Portfolio />} />
          <Route path="proyectos/:slug" element={<ProjectDetail />} />

          {/* Servicios */}
          <Route path="servicios" element={<Servicios />} />

          {/* Sobre mí */}
          <Route path="sobre-mi" element={<SobreMi />} />

          {/* Contacto */}
          <Route path="contacto" element={<Contacto />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
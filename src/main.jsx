import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'

// Páginas
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Servicios from './pages/Servicios.jsx'
import SobreMi from './pages/SobreMi.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import AvisoLegal from './pages/AvisoLegal.jsx'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad.jsx'
import Cookies from './pages/Cookies.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
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

          {/* Blog */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />

          {/* Legal */}
          <Route path="aviso-legal" element={<AvisoLegal />} />
          <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="cookies" element={<Cookies />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

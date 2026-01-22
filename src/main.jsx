import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'

// Páginas
const Home = lazy(() => import('./pages/Home.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const Servicios = lazy(() => import('./pages/Servicios.jsx'))
const SobreMi = lazy(() => import('./pages/SobreMi.jsx'))
const Contacto = lazy(() => import('./pages/Contacto.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const AvisoLegal = lazy(() => import('./pages/AvisoLegal.jsx'))
const PoliticaPrivacidad = lazy(() => import('./pages/PoliticaPrivacidad.jsx'))
const Cookies = lazy(() => import('./pages/Cookies.jsx'))

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
            <p className="kv-caption tracking-[0.3em] uppercase text-zinc-500">
              Cargando
            </p>
          </div>
        }
      >
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
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)

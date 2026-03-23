import { Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import AvisoLegal from './pages/AvisoLegal.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contacto from './pages/Contacto.jsx'
import Cookies from './pages/Cookies.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Servicios from './pages/Servicios.jsx'
import SobreMi from './pages/SobreMi.jsx'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="proyectos" element={<Portfolio />} />
        <Route path="proyectos/:slug" element={<ProjectDetail />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="sobre-mi" element={<SobreMi />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="aviso-legal" element={<AvisoLegal />} />
        <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

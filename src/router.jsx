import { Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import AvisoLegal from './pages/AvisoLegal.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contacto from './pages/Contacto.jsx'
import ContactoGracias from './pages/ContactoGracias.jsx'
import Cookies from './pages/Cookies.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Servicios from './pages/Servicios.jsx'
import SobreMi from './pages/SobreMi.jsx'
import ServiciosGrabacion from './pages/ServiciosGrabacion.jsx'
import GrabacionFPV from './pages/GrabacionFPV.jsx'
import DronCinePublicidad from './pages/DronCinePublicidad.jsx'
import VideoCorporativo from './pages/VideoCorporativo.jsx'
import DronEventos from './pages/DronEventos.jsx'
import DronInmobiliarias from './pages/DronInmobiliarias.jsx'
import AlquilerDrones from './pages/AlquilerDrones.jsx'
import PilotoDronesGalicia from './pages/PilotoDronesGalicia.jsx'
import GaliciaGrabacion from './pages/GaliciaGrabacion.jsx'
import PontevedraGrabacion from './pages/PontevedraGrabacion.jsx'

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
        <Route path="contacto/gracias" element={<ContactoGracias />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="aviso-legal" element={<AvisoLegal />} />
        <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="cookies" element={<Cookies />} />
        {/* SEO landing pages — drones */}
        <Route path="servicios-grabacion-con-drones" element={<ServiciosGrabacion />} />
        <Route path="grabacion-con-drones-fpv" element={<GrabacionFPV />} />
        <Route path="dron-para-cine-y-publicidad" element={<DronCinePublicidad />} />
        <Route path="video-corporativo-con-dron" element={<VideoCorporativo />} />
        <Route path="dron-para-eventos" element={<DronEventos />} />
        <Route path="dron-para-inmobiliarias" element={<DronInmobiliarias />} />
        <Route path="alquiler-drones-con-piloto" element={<AlquilerDrones />} />
        <Route path="piloto-de-drones-galicia" element={<PilotoDronesGalicia />} />
        {/* SEO landing pages — local */}
        <Route path="galicia">
          <Route path="grabacion-con-drones" element={<GaliciaGrabacion />} />
        </Route>
        <Route path="pontevedra">
          <Route path="grabacion-con-drones" element={<PontevedraGrabacion />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

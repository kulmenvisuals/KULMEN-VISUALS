import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"

import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import MapPage from "./pages/MapPage.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"

import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      {/* 👇 Ahora App envuelve a las páginas, y <Outlet /> las dibuja DENTRO de su <main> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="proyectos/:id" element={<ProjectDetail />} />
          <Route path="mapa" element={<MapPage />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
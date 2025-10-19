import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"

import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import MapPage from "./pages/MapPage.jsx"
import Projects from "./pages/Projects.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/proyectos/:id" element={<ProjectDetail />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
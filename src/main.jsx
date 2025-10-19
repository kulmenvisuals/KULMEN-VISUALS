import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import MapPage from "./pages/MapPage.jsx"
import Projects from "./pages/Projects.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "mapa", element: <MapPage /> },
      { path: "proyectos", element: <Projects /> },
      { path: "proyectos/:id", element: <ProjectDetail /> },
      { path: "sobre-mi", element: <About /> },
      { path: "contacto", element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
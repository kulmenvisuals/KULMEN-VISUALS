// src/components/Footer.jsx
import { Instagram } from "lucide-react"
import { Link } from "react-router-dom"

const footerNav = [
  { to: "/", label: "Inicio" },
  { to: "/servicios/", label: "Servicios" },
  { to: "/proyectos/", label: "Proyectos" },
  { to: "/sobre-mi/", label: "Sobre mí" },
  { to: "/blog/", label: "Blog" },
  { to: "/contacto/", label: "Contacto" },
]

const especialidades = [
  "FPV profesional",
  "Vídeo y publicidad",
  "Eventos y deporte",
  "Turismo",
  "Edición de vídeo",
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 kv-footer">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[2fr,1fr,1.3fr]">
        {/* Marca + contacto directo */}
        <div className="space-y-5">
          <img
            src="/logo-kulmen-visuals.png"
            alt="Kulmen Visuals, productora audiovisual en Galicia"
            className="h-10 w-auto"
            width="150"
            height="40"
            loading="lazy"
          />
          <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
            Producción audiovisual con FPV cinematográfico en Galicia.
            Vídeo para marcas, eventos y espacios que necesitan comunicar
            con impacto y criterio.
          </p>

          <Link to="/contacto/" className="kv-button-primary kv-button-accent">
            Pedir presupuesto
          </Link>

          <p className="text-sm text-zinc-500">
            O escríbeme a{" "}
            <a
              href="mailto:hola@kulmenvisuals.com"
              className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4"
            >
              hola@kulmenvisuals.com
            </a>
          </p>
        </div>

        {/* Navegación */}
        <div className="space-y-4">
          <p className="kv-eyebrow text-zinc-500">Navegación</p>
          <nav className="flex flex-col gap-2 text-sm" aria-label="Pie de página">
            {footerNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-zinc-300 hover:text-amber-300 transition w-fit"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Especialidades */}
        <div className="space-y-4">
          <p className="kv-eyebrow text-zinc-500">Especialidades</p>
          <ul className="flex flex-wrap gap-2">
            {especialidades.map((item) => (
              <li key={item} className="kv-chip">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Con base en Pontevedra. Rodajes en toda Galicia y desplazamientos
            al resto de España según el proyecto.
          </p>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="kv-caption text-zinc-600">© {year} Kulmen Visuals</p>
          <div className="kv-caption text-zinc-600 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link to="/aviso-legal/" className="hover:text-amber-300 transition">
              Aviso legal
            </Link>
            <Link to="/politica-privacidad/" className="hover:text-amber-300 transition">
              Política de privacidad
            </Link>
            <Link to="/cookies/" className="hover:text-amber-300 transition">
              Cookies
            </Link>
          </div>
          <a
            href="https://www.instagram.com/kulmenvisuals/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:text-amber-200 hover:border-amber-300/50 transition"
            aria-label="Instagram de Kulmen Visuals"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

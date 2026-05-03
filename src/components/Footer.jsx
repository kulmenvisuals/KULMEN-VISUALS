// src/components/Footer.jsx
import { Instagram } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid gap-8 md:grid-cols-[2fr,1.3fr,1.3fr]">
        {/* Bloque marca + CTA */}
        <div className="space-y-4">
          <div>
            <img
              src="/logo-kulmen-visuals.png"
              alt="Kulmen Visuals — Productora audiovisual en Galicia"
              className="h-10 w-auto"
            />
            <p className="kv-caption text-zinc-500 mt-2">
              Producción audiovisual con FPV cinematográfico en Galicia.
            </p>
            <p className="kv-caption text-zinc-500 mt-2">
              Vídeo para marcas, eventos y espacios que necesitan comunicar con impacto y criterio.
            </p>
          </div>

          <Link
            to="/contacto/"
            className="kv-button-primary kv-button-accent"
          >
            Hablemos de tu proyecto
          </Link>

          <p className="kv-caption text-zinc-500">
            Escríbeme a{" "}
            <a
              href="mailto:hola@kulmenvisuals.com"
              className="text-amber-300 hover:text-amber-200"
            >
            hola@kulmenvisuals.com
            </a>
          </p>
        </div>

        {/* Navegación rápida */}
        <div className="space-y-3 text-sm">
          <h2 className="kv-eyebrow text-zinc-500">
            Navegación
          </h2>
          <nav className="flex flex-col gap-1 text-xs md:text-sm">
            <Link to="/" className="text-zinc-300 hover:text-amber-300 transition">
              Inicio
            </Link>
            <Link to="/servicios/" className="text-zinc-300 hover:text-amber-300 transition">
              Servicios
            </Link>
            <Link to="/proyectos/" className="text-zinc-300 hover:text-amber-300 transition">
              Proyectos
            </Link>
            <Link to="/sobre-mi/" className="text-zinc-300 hover:text-amber-300 transition">
              Sobre mí
            </Link>
            <Link to="/blog/" className="text-zinc-300 hover:text-amber-300 transition">
              Blog
            </Link>
            <Link to="/contacto/" className="text-zinc-300 hover:text-amber-300 transition">
              Contacto
            </Link>
          </nav>
        </div>

        {/* Servicios / especialidades */}
        <div className="space-y-3 text-sm">
          <h2 className="kv-eyebrow text-zinc-500">
            Especialidades
          </h2>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
              FPV profesional
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
              Vídeo &amp; publicidad
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
              Eventos &amp; deporte
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
              Turismo
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
              Edición de vídeo
            </span>
          </div>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="kv-caption text-zinc-600">© {year} Kulmen Visuals</p>
          <div className="kv-caption text-zinc-600 flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/aviso-legal/"
              className="hover:text-amber-300 transition"
            >
              Aviso legal
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/politica-privacidad/"
              className="hover:text-amber-300 transition"
            >
              Política de privacidad
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to="/cookies/"
              className="hover:text-amber-300 transition"
            >
              Cookies
            </Link>
          </div>
          <div className="kv-caption flex w-full items-center justify-between gap-3 text-zinc-600 md:w-auto md:justify-end">
            <a
              href="https://www.instagram.com/kulmenvisuals/"
              target="_blank"
              rel="noreferrer"
              className="kv-crystal rounded-full p-2 text-zinc-200 hover:text-amber-100 hover:border-amber-200/70 transition"
              aria-label="Instagram de Kulmen Visuals"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

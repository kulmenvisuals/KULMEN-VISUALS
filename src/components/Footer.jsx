// src/components/Footer.jsx
import { Instagram } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 kv-footer relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 h-48 w-48 rounded-full bg-amber-400/8 blur-3xl kv-float-slow" />
        <div className="absolute -bottom-24 left-6 h-56 w-56 rounded-full bg-sky-400/6 blur-3xl kv-float" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 md:py-12 grid gap-8 md:grid-cols-[2fr,1.3fr,1.3fr]">
        {/* Bloque marca + CTA */}
        <div className="space-y-4">
          <div>
            <img
              src="/logo-kulmen-visuals.png"
              alt="Kulmen Visuals"
              className="h-10 w-auto"
            />
            <p className="text-xs text-zinc-500 mt-2">
              Producción audiovisual con FPV cinematográfico en Galicia.
            </p>
            <p className="text-xs text-zinc-500 mt-2">
              Vídeo para marcas, eventos y espacios que necesitan comunicar con impacto y criterio.
            </p>
          </div>

          <Link to="/contacto" className="kv-button-primary">
            Hablemos de tu proyecto
          </Link>

          <p className="text-[11px] text-zinc-500">
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
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Navegación
          </h2>
          <nav className="flex flex-col gap-1 text-xs md:text-sm">
            <Link to="/" className="text-zinc-300 hover:text-amber-300 transition">
              Inicio
            </Link>
            <Link to="/servicios" className="text-zinc-300 hover:text-amber-300 transition">
              Servicios
            </Link>
            <Link to="/proyectos" className="text-zinc-300 hover:text-amber-300 transition">
              Proyectos
            </Link>
            <Link to="/sobre-mi" className="text-zinc-300 hover:text-amber-300 transition">
              Sobre mí
            </Link>
            <Link to="/contacto" className="text-zinc-300 hover:text-amber-300 transition">
              Contacto
            </Link>
          </nav>
        </div>

        {/* Servicios / especialidades */}
        <div className="space-y-3 text-sm">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Especialidades
          </h2>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="kv-chip bg-zinc-900/80 border-zinc-800 text-zinc-300">
              FPV profesional
            </span>
            <span className="kv-chip bg-zinc-900/80 border-zinc-800 text-zinc-300">
              Vídeo &amp; publicidad
            </span>
            <span className="kv-chip bg-zinc-900/80 border-zinc-800 text-zinc-300">
              Eventos &amp; deporte
            </span>
            <span className="kv-chip bg-zinc-900/80 border-zinc-800 text-zinc-300">
              Turismo
            </span>
            <span className="kv-chip bg-zinc-900/80 border-zinc-800 text-zinc-300">
              Edición de vídeo
            </span>
          </div>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-zinc-600">© {year} Kulmen Visuals</p>
          <p className="text-[11px] text-zinc-600">
            Aviso legal · Política de privacidad · Cookies
          </p>
          <div className="flex w-full items-center justify-between gap-3 text-[11px] text-zinc-600 md:w-auto md:justify-end">
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

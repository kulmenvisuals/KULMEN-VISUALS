// src/components/Header.jsx
import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// 👇 OJO: ya no incluimos "Contacto" aquí
const nav = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/sobre-mi", label: "Sobre mí" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 bg-zinc-950/90 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo / marca */}
        <Link to="/" className="font-semibold tracking-tight text-white text-sm md:text-base">
          Kulmen <span className="text-amber-400">Visuals</span>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-amber-300 ${
                  isActive ? "text-amber-400" : "text-zinc-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA contacto escritorio: único enlace a Contacto en el header */}
        <Link
          to="/contacto"
          className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-xs md:text-sm font-semibold bg-amber-400 text-black hover:bg-amber-300 transition shadow-sm"
        >
          Contactar
        </Link>

        {/* Botón menú móvil */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-full border border-zinc-700 text-zinc-100"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-zinc-800 bg-zinc-950"
          >
            <div className="px-4 py-4 space-y-2">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-sm ${
                      isActive ? "text-amber-400" : "text-zinc-200"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* CTA contacto móvil: también es el único enlace a Contacto en mobile */}
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="mt-3 block w-full text-center text-sm font-semibold rounded-full px-4 py-2 bg-amber-400 text-black hover:bg-amber-300 transition"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
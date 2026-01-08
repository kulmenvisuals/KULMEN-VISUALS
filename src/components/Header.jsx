import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const nav = [
  { to: "/proyectos", label: "Proyectos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-mi", label: "Sobre mí" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 kv-header">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo-kulmen-visuals.png"
            alt="Kulmen Visuals"
            className="h-10 md:h-12 w-auto"
          />
          <span className="sr-only">Kulmen Visuals</span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-amber-300 transition ${
                  isActive ? "text-amber-400" : "text-zinc-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          
          <Link to="/contacto" className="kv-button-primary ml-2">
            Hablemos
          </Link>
        </nav>

        {/* Botón menú mobile */}
        <button
          className="md:hidden text-zinc-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl"
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

              <div className="pt-2">
                <Link
                  to="/contacto"
                  onClick={() => setOpen(false)}
                  className="kv-button-primary w-full justify-center"
                >
                  Hablemos
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

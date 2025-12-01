// src/components/Header.jsx
import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 bg-zinc-950/90 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / marca */}
        <Link
          to="/"
          className="font-semibold tracking-tight text-white text-sm md:text-base"
        >
          Kulmen <span className="text-amber-400">Visuals</span>
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex gap-6 text-xs md:text-sm">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"} // para que Inicio solo se active en la home
              className={({ isActive }) =>
                [
                  "relative transition",
                  "hover:text-amber-300",
                  isActive ? "text-amber-400" : "text-zinc-300",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <span className="inline-flex items-center">
                  {item.label}
                  {isActive && (
                    <span className="ml-1 h-[2px] w-3 rounded-full bg-amber-400" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Botón móvil */}
        <button
          className="md:hidden text-zinc-100"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-zinc-800 bg-zinc-950/95"
          >
            <div className="px-4 py-4 space-y-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block py-2 text-sm",
                      isActive ? "text-amber-400" : "text-zinc-200",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
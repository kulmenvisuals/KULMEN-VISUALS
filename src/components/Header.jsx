import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion as Motion, AnimatePresence, useReducedMotion } from "framer-motion"

const nav = [
  { to: "/proyectos/", label: "Proyectos" },
  { to: "/servicios/", label: "Servicios" },
  { to: "/sobre-mi/", label: "Sobre mí" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-50 kv-header">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Kulmen Visuals, inicio">
          <img
            src="/logo-kulmen-visuals.png"
            alt="Kulmen Visuals, productora audiovisual en Galicia"
            className="h-10 md:h-12 w-auto"
            width="180"
            height="48"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium" aria-label="Principal">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative py-1 transition hover:text-amber-200 ${
                  isActive
                    ? "text-amber-400 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-amber-400/70"
                    : "text-zinc-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link to="/contacto/" className="kv-button-primary kv-button-accent ml-1">
            Pedir presupuesto
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-100 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? "text-amber-400 bg-white/5"
                        : "text-zinc-200 hover:bg-white/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-3">
                <Link
                  to="/contacto/"
                  onClick={() => setOpen(false)}
                  className="kv-button-primary kv-button-accent w-full justify-center"
                >
                  Pedir presupuesto
                </Link>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

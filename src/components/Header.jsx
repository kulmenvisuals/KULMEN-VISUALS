import { useEffect, useState } from "react"
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
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className={`kv-header ${scrolled ? "kv-header--scrolled" : ""}`}>
        <div className="kv-header-bar">
          <Link to="/" className="kv-header-logo" aria-label="Kulmen Visuals, inicio">
            <img
              src="/logo-kulmen-visuals.png"
              alt="Kulmen Visuals, productora audiovisual en Galicia"
              className="h-9 md:h-10 w-auto"
              width="180"
              height="48"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium" aria-label="Principal">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `kv-header-link ${isActive ? "kv-header-link--active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link to="/contacto/" className="kv-header-cta ml-3">
              Pedir presupuesto
            </Link>
          </nav>

          <button
            className="kv-header-menu-button md:hidden"
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
              className="md:hidden overflow-hidden"
            >
              <div className="kv-mobile-menu">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-3 text-sm font-semibold transition ${
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
                    className="kv-header-cta w-full justify-center"
                  >
                    Pedir presupuesto
                  </Link>
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function HeroServicios() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30"
           style={{ background: "radial-gradient(1200px 600px at 80% -10%, rgba(255,196,0,0.25), transparent)" }} />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Imaginamos. Rodamos. Damos vida a las ideas.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-zinc-300 mt-3 max-w-2xl"
        >
          Proyectos audiovisuales completos: de la preproducción al master final. Estética de cine, dominio técnico y narrativa con propósito.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <a href="#proceso" className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition">
            Ver cómo trabajamos
          </a>
          <Link to="/contacto" className="px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition">
            Cuéntanos tu idea
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
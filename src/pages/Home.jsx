import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  const base = import.meta.env.BASE_URL

  return (
    <div className="bg-zinc-950 text-zinc-100">

      {/* HERO */}
      <section className="relative min-h-[70svh] bg-zinc-900 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={`${base}videos/hero.mp4`} // tu vídeo en public/videos/hero.mp4
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex items-end min-h-[70svh]">
          <div className="max-w-6xl mx-auto px-4 pb-10">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Historias con alma. Estética de cine.
            </motion.h1>
            <p className="text-zinc-300 mt-2 max-w-xl">
              Productora audiovisual 360°: guion, rodaje, FPV y postproducción desde Galicia.
            </p>
            <div className="flex gap-3 mt-6">
              <Link className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold" to="/proyectos">
                Ver proyectos
              </Link>
              <Link className="px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800" to="/mapa">
                Explorar mapa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* (Aquí puedes volver a poner “Últimos trabajos” cuando verifiques el layout) */}
    </div>
  )
}
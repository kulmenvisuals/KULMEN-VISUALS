import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import projects from "../data/projects"

export default function Home() {
  const base = import.meta.env.BASE_URL

  return (
    <div className="bg-zinc-950 text-zinc-100">

      {/* HERO */}
      <section className="relative min-h-[70svh] bg-zinc-900 overflow-hidden">
        {/* Vídeo de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={`${base}videos/hero.mp4`} // 👈 aquí va tu vídeo dentro de public/videos/
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* Capa degradado para contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />

        {/* Contenido sobre el vídeo */}
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
              <Link
                className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
                to="/proyectos"
              >
                Ver proyectos
              </Link>
              <Link
                className="px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition"
                to="/mapa"
              >
                Explorar mapa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Últimos trabajos */}
      <section id="proyectos" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Últimos trabajos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.id}
              to={`/proyectos/${p.id}`}
              className="group block rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {p.type.join(" · ")} — {p.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
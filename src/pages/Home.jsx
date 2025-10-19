import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import VideoPlayer from "../components/VideoPlayer"
import projects from "../data/projects"

export default function Home() {
  return (
    <div>
      {/* HERO con vídeo */}
      <section className="relative">
        <VideoPlayer
          src="/assets/videos/reel_hero.mp4"
          poster="/assets/posters/hero.jpg"
          className="w-full h-[60svh] md:h-[70svh] object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end">
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
              <Link className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold"
                to="/proyectos">Ver proyectos</Link>
              <Link className="px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800"
                to="/mapa">Explorar mapa</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Últimos trabajos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link key={p.id} to={`/proyectos/${p.id}`} className="group">
              <div className="overflow-hidden rounded-xl border border-zinc-800">
                <img src={p.thumbnail} className="aspect-video object-cover group-hover:scale-105 transition" />
              </div>
              <div className="mt-2">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-xs text-zinc-400">{p.type.join(" · ")} — {p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import VideoPlayer from "../components/VideoPlayer"
import projects from "../data/projects"

export default function Home() {
  return (
    <div>
      {/* HERO con vídeo */}
      <section className="relative min-h-[70svh] bg-zinc-900 overflow-hidden">
  {/* Video de fondo */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-70"
    src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
    onError={(e) => e.currentTarget.style.display = 'none'}
  />

  {/* Capa oscura para mejorar el contraste */}
  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

  {/* Contenido encima */}
  <div className="relative z-10 flex flex-col justify-end min-h-[70svh] max-w-6xl mx-auto px-6 pb-12">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Historias con alma. Estética de cine.
    </h1>
    <p className="text-zinc-300 max-w-lg">
      Productora audiovisual 360°: guion, rodaje, FPV y postproducción desde Galicia.
    </p>
    <div className="flex gap-3 mt-6">
      <a href="#proyectos" className="px-6 py-3 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition">
        Ver proyectos
      </a>
      <a href="#mapa" className="px-6 py-3 rounded-lg bg-zinc-800 text-zinc-100 hover:bg-zinc-700 transition">
        Explorar mapa
      </a>
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
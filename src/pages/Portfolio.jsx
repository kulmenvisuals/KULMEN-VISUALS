// src/pages/Portfolio.jsx
import { useMemo } from "react"
import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard.jsx"
import { projects } from "../data/projects.js"

const clientLogos = [
  { name: "XGAP Fitness Center", src: "/images/logo-xgap.png" },
  { name: "Orestes Comunica", src: "/images/logo-orestes-comunica.webp" },
  { name: "Orballo", src: "/images/orballo_logo.jpg" },
  { name: "Cobre San Rafael", src: "/images/logo-cobre-san-rafael.jpg" },
  { name: "Norvento Technpower", src: "/images/logo-norvento-technpower.jpg" },
  { name: "Banca March", src: "/images/logo-banca-march.webp" },
  { name: "Grupo Country Homes", src: "/images/logo-gch.png" },
].reverse()

export default function Portfolio() {
  const filtered = useMemo(() => {
    if (!Array.isArray(projects)) return []
    return projects
  }, [])

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6 md:pt-14 md:pb-8">
        <p className="kv-eyebrow text-zinc-500 mb-3">
          Portfolio
        </p>
        <h1 className="kv-page-title mb-3">
          Proyectos de FPV, vídeo y contenido para marcas.
        </h1>
        <p className="kv-body-muted max-w-2xl">
          Una selección de trabajos para marcas y proyectos. Si te interesa
          algo similar, cuéntame tu idea y vemos cómo adaptarlo a tu objetivo.
        </p>
      </section>


      {/* Grid de proyectos */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        {filtered.length === 0 ? (
          <p className="kv-body-muted text-zinc-500">
            No hay proyectos disponibles o no coinciden con el filtro
            seleccionado.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id || project.slug}
                project={project}
                showPortfolioPlaceholder
              />
            ))}
          </div>
        )}
      </section>

      {/* Clientes */}
      <section className="py-14 md:py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="kv-eyebrow text-zinc-500 mb-2">Marcas</p>
            <h2 className="kv-section-title">Han confiado en mí</h2>
          </div>
          <p className="kv-body-muted text-zinc-500 sm:text-right max-w-xs">
            Desde startups hasta empresas consolidadas.
          </p>
        </div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />

          <div className="flex items-center gap-20 animate-marquee w-max py-4">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div key={i} className="group flex-shrink-0 h-10 flex items-center">
                <img
                  src={client.src}
                  alt={client.name}
                  title={client.name}
                  className="h-full w-auto max-w-[140px] object-contain grayscale opacity-35 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="kv-section-title mb-2">
              ¿Buscas algo similar para tu marca o evento?
            </h2>
            <p className="kv-lede max-w-md">
              Cuéntame lo que tienes en mente y te propongo la mejor
              solución visual.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

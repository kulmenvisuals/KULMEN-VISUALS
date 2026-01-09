// src/pages/Portfolio.jsx
import { useMemo } from "react"
import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard.jsx"
import { projects } from "../data/projects.js"

const clientLogos = [
  { name: "XGAP Fitness Center", src: "/images/logo-xgap.png" },
  { name: "Orestes Comunica", src: "/images/logo-orestes-comunica.webp" },
  { name: "Cobre San Rafael", src: "/images/logo-cobre-san-rafael.jpg" },
  { name: "Norvento Technpower", src: "/images/logo-norvento-technpower.jpg" },
  { name: "Banca March", src: "/images/logo-banca-march.webp" },
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
          Proyectos de FPV, cine y contenido para marcas.
        </h1>
        <p className="kv-body-muted max-w-2xl">
          Una selección de trabajos para marcas, festivales y proyectos
          culturales. Si te interesa algo similar, cuéntame tu idea y vemos
          cómo adaptarlo a tu objetivo.
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
              <ProjectCard key={project.id || project.slug} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* Clientes */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col gap-6 md:gap-10">
          <div>
            <h2 className="kv-section-title mb-3">
              Clientes con los que he trabajado
            </h2>
            <p className="kv-body-muted max-w-2xl">
              Algunas marcas con las que he trabajado.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="group rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-5 flex flex-col items-center justify-center text-center gap-3 transition hover:border-amber-300/30"
              >
                <div className="h-12 md:h-14 w-full flex items-center justify-center">
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-full w-auto max-w-[120px] md:max-w-[140px] object-contain grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
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
            <Link to="/contacto" className="kv-button-primary kv-button-accent">
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

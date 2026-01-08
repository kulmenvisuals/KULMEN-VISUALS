// src/pages/Portfolio.jsx
import { useMemo } from "react"
import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard.jsx"
import { projects } from "../data/projects.js"

export default function Portfolio() {
  const filtered = useMemo(() => {
    if (!Array.isArray(projects)) return []
    return projects
  }, [])

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6 md:pt-14 md:pb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
          Portfolio
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          Proyectos de FPV, cine y contenido para marcas.
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl">
          Una selección de trabajos para marcas, festivales y proyectos
          culturales. Si te interesa algo similar, cuéntame tu idea y vemos
          cómo adaptarlo a tu objetivo.
        </p>
      </section>


      {/* Grid de proyectos */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-500">
            No hay proyectos disponibles o no coinciden con el filtro
            seleccionado.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id || project.slug} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              ¿Buscas algo similar para tu marca o evento?
            </h2>
            <p className="text-sm text-zinc-300 max-w-md">
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

// src/pages/Portfolio.jsx
import { useMemo } from "react"
import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard.jsx"
import { projects } from "../data/projects.js"

const clientLogos = [
  { name: "Cliente 01", mark: "C1" },
  { name: "Cliente 02", mark: "C2" },
  { name: "Cliente 03", mark: "C3" },
  { name: "Cliente 04", mark: "C4" },
  { name: "Cliente 05", mark: "C5" },
  { name: "Cliente 06", mark: "C6" },
]

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

      {/* Clientes */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        <div className="flex flex-col gap-6 md:gap-10">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Clientes con los que he trabajado
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Espacios para logos. Cuando los tengas, los sustituyo por tus marcas reales.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="kv-glass-soft rounded-2xl border border-white/10 px-4 py-6 flex flex-col items-center justify-center text-center"
              >
                <div className="h-10 w-10 rounded-full border border-amber-300/40 bg-amber-300/10 text-amber-200 flex items-center justify-center text-sm font-semibold">
                  {client.mark}
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                  {client.name}
                </p>
                <p className="text-[10px] text-zinc-600 mt-1">Logo aqui</p>
              </div>
            ))}
          </div>
        </div>
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

import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Portfolio() {
  const [category, setCategory] = useState('todos')

  const categories = useMemo(() => {
    if (!Array.isArray(projects)) return []
    const set = new Set()
    projects.forEach((p) => {
      if (p.category) set.add(p.category)
    })
    return Array.from(set)
  }, [])

  const filtered = useMemo(() => {
    if (!Array.isArray(projects)) return []
    if (category === 'todos') return projects
    return projects.filter((p) => p.category === category)
  }, [category])

  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6 md:pt-14 md:pb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
          Portfolio
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          Proyectos de FPV, cine y contenido para marcas.
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl">
          Una selección de trabajos para marcas, festivales y proyectos culturales. Puedes
          filtrar por tipo de pieza para encontrar mejor lo que se parece a lo que tienes en
          mente.
        </p>
      </section>

      {/* Filtros básicos */}
      <section className="max-w-6xl mx-auto px-4 pb-4">
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setCategory('todos')}
            className={`px-3 py-1 rounded-full border ${
              category === 'todos'
                ? 'border-amber-400 bg-amber-400/10 text-amber-200'
                : 'border-zinc-700 text-zinc-300 hover:border-amber-300 hover:text-amber-200'
            } transition`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full border ${
                category === cat
                  ? 'border-amber-400 bg-amber-400/10 text-amber-200'
                  : 'border-zinc-700 text-zinc-300 hover:border-amber-300 hover:text-amber-200'
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de proyectos */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-500">
            No hay proyectos disponibles o no coinciden con el filtro seleccionado.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id || project.slug} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
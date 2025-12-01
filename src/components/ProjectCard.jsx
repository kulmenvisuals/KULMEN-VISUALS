// src/components/ProjectCard.jsx
import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {
  if (!project) return null

  return (
    <Link
      to={`/proyectos/${project.id}`}
      className="group block bg-zinc-900/60 border border-zinc-800/70 rounded-2xl overflow-hidden hover:border-amber-400/70 hover:bg-zinc-900 transition-colors"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 space-y-2">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500">
          {project.client}
        </p>
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-400">
          {project.type?.join(" · ")} — {project.location}
        </p>
      </div>
    </Link>
  )
}
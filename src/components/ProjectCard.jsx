import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {
  if (!project) return null

  const slug = project.id || project.slug
  const href = `/proyectos/${slug}`

  const typeText = Array.isArray(project.type)
    ? project.type.join(" · ")
    : project.type || ""

  const locationText = project.location
    ? typeText
      ? `${typeText} — ${project.location}`
      : project.location
    : typeText

  return (
    <Link to={href} className="group block">
      <article className="kv-glass-soft rounded-3xl overflow-hidden flex flex-col h-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.75)]">
        <div className="relative aspect-video overflow-hidden">
          {project.thumbnail && (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-80 group-hover:opacity-100 transition" />

          {project.type && (
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
              {Array.isArray(project.type)
                ? project.type.slice(0, 3).map((tag) => (
                    <span key={tag} className="kv-chip bg-black/70 border-transparent">
                      {tag}
                    </span>
                  ))
                : (
                  <span className="kv-chip bg-black/70 border-transparent">
                    {project.type}
                  </span>
                )}
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col">
          {project.client && (
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 mb-1">
              {project.client}
            </p>
          )}
          <h3 className="text-sm md:text-base font-semibold text-zinc-50 mb-1">
            {project.title}
          </h3>
          {locationText && (
            <p className="text-xs text-zinc-400 mb-1">{locationText}</p>
          )}
        </div>
      </article>
    </Link>
  )
}

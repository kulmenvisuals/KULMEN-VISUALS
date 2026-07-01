import { Link } from "react-router-dom"
import { getProjectPath } from "../utils/routes.js"

export default function ProjectCard({
  project,
  showPortfolioPlaceholder = false,
  featured = false,
}) {
  if (!project) return null

  const href = getProjectPath(project)

  const typeText = Array.isArray(project.type)
    ? project.type.slice(0, 2).join(" / ")
    : project.type || ""

  const showPlaceholder = showPortfolioPlaceholder && project.cardPlaceholder

  return (
    <Link
      to={href}
      className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-3xl"
    >
      <article className="relative rounded-3xl overflow-hidden flex flex-col h-full border border-white/10 bg-zinc-900/40 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:shadow-[0_24px_50px_-20px_rgba(3,3,6,0.8)]">
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-video md:aspect-[21/9]" : "aspect-video"
          }`}
        >
          {project.thumbnail && !showPlaceholder && (
            <img
              src={project.thumbnail}
              alt={`${project.title}, proyecto de Kulmen Visuals`}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
              width="1280"
              height="720"
              loading="lazy"
            />
          )}

          {showPlaceholder && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,151,21,0.16),_transparent_52%),linear-gradient(135deg,_rgba(24,24,27,0.98),_rgba(9,9,11,1))]">
              <div className="flex h-full flex-col justify-between p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200/85">
                  {project.cardPlaceholder.eyebrow}
                </p>
                <div className="space-y-2">
                  <div className="h-px w-14 bg-amber-300/50" />
                  <p className="text-sm font-semibold text-zinc-100 md:text-base">
                    {project.cardPlaceholder.title}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition" />
        </div>

        <div className={`flex-1 flex flex-col ${featured ? "p-5 md:p-6" : "p-4 md:p-5"}`}>
          <div className="flex items-baseline justify-between gap-3 mb-1.5">
            {project.client && (
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500 truncate">
                {project.client}
              </p>
            )}
            {typeText && (
              <p className="text-[11px] text-amber-300/90 shrink-0">{typeText}</p>
            )}
          </div>
          <h3
            className={`font-semibold text-zinc-50 group-hover:text-amber-100 transition-colors ${
              featured ? "text-lg md:text-2xl" : "text-sm md:text-base"
            }`}
          >
            {project.title}
          </h3>
          {project.location && (
            <p className="text-xs text-zinc-500 mt-1">{project.location}</p>
          )}
        </div>
      </article>
    </Link>
  )
}

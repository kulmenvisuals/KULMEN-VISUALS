import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import VideoPlayer from '../components/VideoPlayer.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = Array.isArray(projects)
    ? projects.find((p) => p.slug === slug)
    : null

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-zinc-50">
        <h1 className="text-2xl font-semibold mb-4">Proyecto no encontrado</h1>
        <p className="text-sm text-zinc-400 mb-4">
          No he encontrado ningún proyecto con ese identificador.
        </p>
        <Link
          to="/proyectos"
          className="inline-flex px-4 py-2 rounded-full border border-zinc-600 text-sm text-zinc-100 hover:border-amber-300 hover:text-amber-200 transition"
        >
          Volver al portfolio
        </Link>
      </div>
    )
  }

  const related =
    Array.isArray(projects) &&
    projects
      .filter((p) => p.slug !== project.slug && p.category === project.category)
      .slice(0, 3)

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero vídeo */}
      <section className="border-b border-zinc-900 bg-black">
        <div className="max-w-5xl mx-auto px-4 pt-10 pb-8 md:pt-14 md:pb-10">
          {project.heroVideo ? (
            <VideoPlayer
              src={project.heroVideo}
              poster={project.heroPoster}
              className="rounded-2xl overflow-hidden border border-zinc-800 mb-6"
            />
          ) : project.heroImage ? (
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full rounded-2xl border border-zinc-800 mb-6 object-cover"
            />
          ) : null}

          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-2">
            {project.category && (
              <span className="px-2 py-1 rounded-full border border-zinc-700 uppercase tracking-wide">
                {project.category}
              </span>
            )}
            {project.year && <span>{project.year}</span>}
            {project.location && <span>· {project.location}</span>}
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h1>
          {project.summary && (
            <p className="text-sm text-zinc-300 max-w-2xl mb-4">{project.summary}</p>
          )}

          {/* Metadatos básicos */}
          <dl className="grid gap-3 text-xs text-zinc-400 sm:grid-cols-2 md:grid-cols-4 mb-4">
            {project.client && (
              <div>
                <dt className="font-medium text-zinc-300">Cliente</dt>
                <dd>{project.client}</dd>
              </div>
            )}
            {project.format && (
              <div>
                <dt className="font-medium text-zinc-300">Formato</dt>
                <dd>{project.format}</dd>
              </div>
            )}
            {project.role && (
              <div>
                <dt className="font-medium text-zinc-300">Rol</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            {project.duration && (
              <div>
                <dt className="font-medium text-zinc-300">Duración</dt>
                <dd>{project.duration}</dd>
              </div>
            )}
          </dl>

          <Link
            to="/proyectos"
            className="inline-flex text-xs text-zinc-400 hover:text-amber-200 underline underline-offset-4"
          >
            ← Volver a proyectos
          </Link>
        </div>
      </section>

      {/* Cuerpo: contexto + ficha técnica */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr),minmax(0,1.3fr)]">
          <div className="text-sm text-zinc-300 space-y-4">
            {project.context && (
              <p className="whitespace-pre-line">{project.context}</p>
            )}
            {project.process && (
              <p className="whitespace-pre-line text-zinc-400">{project.process}</p>
            )}
          </div>

          <aside className="text-xs text-zinc-400 border border-zinc-800 rounded-2xl p-4 bg-zinc-900/40 space-y-3">
            <h2 className="text-sm font-semibold text-zinc-100 mb-1">Ficha técnica</h2>
            {project.camera && (
              <p>
                <span className="font-medium text-zinc-200">Cámara:</span> {project.camera}
              </p>
            )}
            {project.drone && (
              <p>
                <span className="font-medium text-zinc-200">Dron:</span> {project.drone}
              </p>
            )}
            {project.software && (
              <p>
                <span className="font-medium text-zinc-200">Software:</span>{' '}
                {project.software}
              </p>
            )}
          </aside>
        </div>
      </section>

      {/* Galería extra opcional */}
      {Array.isArray(project.gallery) && project.gallery.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-14">
          <h2 className="text-sm font-semibold text-zinc-100 mb-4">Galería</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.gallery.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt || project.title}
                className="w-full rounded-xl border border-zinc-800 object-cover"
              />
            ))}
          </div>
        </section>
      )}

      {/* Proyectos relacionados */}
      {related && related.length > 0 && (
        <section className="border-t border-zinc-900 bg-zinc-900/40">
          <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-zinc-100">
                Proyectos relacionados
              </h2>
              <Link
                to="/proyectos"
                className="text-xs text-zinc-400 hover:text-amber-200 underline underline-offset-4"
              >
                Ver todos
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.id || p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
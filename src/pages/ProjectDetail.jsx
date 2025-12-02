// src/pages/ProjectDetail.jsx
import { Link, useParams } from "react-router-dom"
import { projects } from "../data/projects.js"
import VideoPlayer from "../components/VideoPlayer.jsx"

export default function ProjectDetail() {
  const { slug } = useParams()

  // Intentamos buscar por slug y, si no, por id
  const project = projects.find(
    (p) => p.slug === slug || p.id === slug
  )

  if (!project) {
    return (
      <div className="bg-zinc-950 text-zinc-50 min-h-screen">
        <main className="max-w-4xl mx-auto px-4 pt-16 pb-20">
          <h1 className="text-3xl font-semibold mb-3">Proyecto no encontrado</h1>
          <p className="text-zinc-400 mb-8">
            No he encontrado ningún proyecto con ese identificador.
          </p>
          <Link
            to="/proyectos"
            className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400 text-black text-sm font-semibold hover:bg-amber-300 transition"
          >
            Volver al portfolio
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20">
        {/* Migas + volver */}
        <div className="mb-6 text-xs text-zinc-500 flex items-center gap-2">
          <Link to="/proyectos" className="hover:text-amber-300">
            Portfolio
          </Link>
          <span>•</span>
          <span>{project.client}</span>
        </div>

        {/* Cabecera */}
        <header className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
            {project.year && (
              <span className="uppercase tracking-[0.2em]">
                {project.year}
              </span>
            )}
            {project.location && (
              <span>{project.location}</span>
            )}
            {Array.isArray(project.type) && project.type.length > 0 && (
              <span>{project.type.join(" · ")}</span>
            )}
          </div>
        </header>

        {/* VIDEO PRINCIPAL */}
        {(project.youtubeUrl || project.videoUrl) && (
          <section className="mb-10">
            {project.youtubeUrl ? (
              // 👉 Si hay YouTube, usamos iframe
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
                <iframe
                  src={project.youtubeUrl}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              // 👉 Si NO hay YouTube pero sí video local, usamos tu VideoPlayer
              <VideoPlayer src={project.videoUrl} poster={project.poster} />
            )}
          </section>
        )}

        {/* Descripción + roles */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] mb-12">
          <div className="text-sm text-zinc-300 leading-relaxed">
            {project.description && (
              <p className="mb-4">{project.description}</p>
            )}
            {project.extra && (
              <p className="text-zinc-400 text-sm">{project.extra}</p>
            )}
          </div>

          <aside className="text-sm">
            {project.client && (
              <div className="mb-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                  Cliente
                </h2>
                <p className="text-zinc-200">{project.client}</p>
              </div>
            )}
            {Array.isArray(project.roles) && project.roles.length > 0 && (
              <div className="mb-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                  Rol
                </h2>
                <p className="text-zinc-200">{project.roles.join(" · ")}</p>
              </div>
            )}
            {project.category && (
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                  Tipo de proyecto
                </h2>
                <p className="text-zinc-200">{project.category}</p>
              </div>
            )}
          </aside>
        </section>

        {/* Galería simple */}
        {Array.isArray(project.images) && project.images.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-zinc-100 mb-4">
              Imágenes del proyecto
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {project.images.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900"
                >
                  <img
                    src={src}
                    alt={`${project.title} — imagen ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
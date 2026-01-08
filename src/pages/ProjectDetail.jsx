// src/pages/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects.js"
import VideoPlayer from "../components/VideoPlayer.jsx"

// Normaliza strings para comparar slugs aunque tengan acentos/espacios
function normalizeSlug(value) {
  if (!value) return ""
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD") // quita acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-") // todo lo que no sea letra/numero → "-"
    .replace(/(^-|-$)/g, "") // quita guiones al principio/fin
}

export default function ProjectDetail() {
  const { slug } = useParams()

  // Buscamos por varias cosas: id, slug, título… todo normalizado
  const project = projects.find((p) => {
    const slugNorm = normalizeSlug(slug)
    return (
      normalizeSlug(p.id) === slugNorm ||
      normalizeSlug(p.slug) === slugNorm ||
      normalizeSlug(p.title) === slugNorm
    )
  })

  if (!project) {
    return (
      <main className="text-zinc-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-24 space-y-4">
          <h1 className="text-3xl font-bold mb-2">Proyecto no encontrado</h1>
          <p className="text-zinc-400">
            No he encontrado ningún proyecto con ese identificador.
          </p>

          <p className="text-xs text-zinc-500 mt-4">
            <span className="font-semibold text-zinc-300">Slug recibido:</span>{" "}
            <code className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
              {slug ?? "(vacío)"}
            </code>
          </p>

          <p className="text-xs text-zinc-500">
            <span className="font-semibold text-zinc-300">
              IDs disponibles:
            </span>{" "}
            {projects.map((p) => p.id).join(", ")}
          </p>

          <Link
            to="/proyectos"
            className="kv-button-primary mt-6"
          >
            Volver al portfolio
          </Link>
        </div>
      </main>
    )
  }

  // Construimos URL embed de Instagram si existe instagramUrl
  const instagramEmbedUrl = project.instagramUrl
    ? `${project.instagramUrl.replace(/\/$/, "")}/embed`
    : null

  return (
    <div className="text-zinc-50 min-h-screen">
      <main className="relative max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20 space-y-10">
        <div className="pointer-events-none absolute inset-0 kv-grid-overlay opacity-15" />
        <div className="pointer-events-none absolute -top-24 right-6 h-56 w-56 rounded-full bg-amber-400/8 blur-3xl kv-float" />
        {/* Migas + volver */}
        <div className="text-xs text-zinc-500 flex items-center gap-2">
          <Link to="/proyectos" className="hover:text-amber-300">
            Portfolio
          </Link>
          <span>•</span>
          <span>{project.client}</span>
        </div>

        {/* Cabecera */}
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-50">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
            {project.year && (
              <span className="uppercase tracking-[0.2em]">
                {project.year}
              </span>
            )}
            {project.location && <span>{project.location}</span>}
            {Array.isArray(project.type) && project.type.length > 0 && (
              <span>{project.type.join(" · ")}</span>
            )}
          </div>
        </header>

        {/* VIDEO PRINCIPAL */}
        {(project.youtubeUrl || instagramEmbedUrl || project.videoUrl) && (
          <section>
            {project.youtubeUrl ? (
              // YouTube
              <div className="aspect-video w-full rounded-3xl overflow-hidden kv-panel bg-black/80">
                <iframe
                  src={project.youtubeUrl}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : instagramEmbedUrl ? (
              // Instagram (post / reel)
              <div className="w-full max-w-md md:max-w-lg mx-auto rounded-3xl overflow-hidden kv-panel bg-black/80">
                <div className="aspect-[9/16]">
                  <iframe
                    src={instagramEmbedUrl}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              // Vídeo local como fallback
              <div className="aspect-video w-full rounded-3xl overflow-hidden kv-panel bg-black/80">
                <VideoPlayer src={project.videoUrl} poster={project.poster} />
              </div>
            )}
          </section>
        )}

        {/* Descripción + ficha lateral */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="text-sm text-zinc-300 leading-relaxed space-y-4 relative z-10">
            {project.description && <p>{project.description}</p>}
            {project.extra && (
              <p className="text-zinc-400 text-sm">{project.extra}</p>
            )}

            {project.instagramUrl && (
              <p className="text-[11px] text-zinc-500">
                También en Instagram:{" "}
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-300 hover:text-amber-200"
                >
                  ver publicación
                </a>
              </p>
            )}
          </div>

          <aside className="text-sm space-y-4 kv-panel rounded-2xl p-5 h-fit">
            {project.client && (
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                  Cliente
                </h2>
                <p className="text-zinc-200">{project.client}</p>
              </div>
            )}
            {Array.isArray(project.roles) && project.roles.length > 0 && (
              <div>
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
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-zinc-100">
              Imágenes del proyecto
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {project.images.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/3]"
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

        {/* CTA final */}
        <section className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              ¿Buscas algo similar para tu marca o evento?
            </h2>
            <p className="text-sm text-zinc-300 max-w-md">
              Puedo ayudarte a definir el enfoque y producir una pieza
              a medida para tu objetivo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="kv-button-primary">
              Hablemos de tu proyecto
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

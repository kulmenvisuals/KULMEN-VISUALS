// src/pages/ProjectDetail.jsx
import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects.js"
import VideoPlayer from "../components/VideoPlayer.jsx"
import { normalizeSlug } from "../utils/slug.js"
import { usePageSeo, useJsonLd, siteUrl } from "../utils/seo.js"
import { defaultOgImage } from "../utils/routes.js"

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

  const pageSeo = useMemo(() => project ? {
    title: `${project.title} | Kulmen Visuals`,
    description: project.description || 'Proyecto audiovisual producido por Kulmen Visuals para marcas, eventos y espacios.',
    pathname: `/proyectos/${project.slug || project.id}`,
    image: project.thumbnail || project.images?.[0] || defaultOgImage,
  } : {
    title: 'Proyecto no encontrado | Kulmen Visuals',
    pathname: '/proyectos',
    robots: 'noindex, nofollow',
  }, [project])

  const jsonLdSchema = useMemo(() => {
    if (!project) return null
    const thumbnailUrl = `${siteUrl}${project.thumbnail || project.images?.[0] || defaultOgImage}`
    const projectDescription = project.description || 'Proyecto audiovisual producido por Kulmen Visuals para marcas, eventos y espacios.'
    const authorRef = { '@type': 'Person', name: 'io Rodríguez', url: `${siteUrl}/sobre-mi` }
    const projectSlug = project.slug || project.id

    const videoId = project.youtubeUrl?.split('/embed/')?.[1]?.split('?')?.[0]
    const contentUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : undefined

    return project.youtubeUrl
      ? {
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: project.title,
          description: projectDescription,
          thumbnailUrl,
          embedUrl: project.youtubeUrl,
          contentUrl,
          uploadDate: project.year ? `${project.year}-01-01` : undefined,
          author: authorRef,
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: projectDescription,
          image: thumbnailUrl,
          url: project.instagramUrl || `${siteUrl}/proyectos/${projectSlug}`,
          creator: authorRef,
        }
  }, [project])

  usePageSeo(pageSeo)
  useJsonLd(jsonLdSchema)

  if (!project) {
    return (
      <div className="bg-zinc-950 text-zinc-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-24 space-y-4">
          <h1 className="kv-page-title mb-2">Proyecto no encontrado</h1>
          <p className="kv-body-muted">
            No he encontrado ningún proyecto con ese identificador.
          </p>

          <p className="kv-caption text-zinc-500 mt-4">
            <span className="font-semibold text-zinc-300">Slug recibido:</span>{" "}
            <code className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
              {slug ?? "(vacío)"}
            </code>
          </p>

          <p className="kv-caption text-zinc-500">
            <span className="font-semibold text-zinc-300">
              IDs disponibles:
            </span>{" "}
            {projects.map((p) => p.id).join(", ")}
          </p>

          <Link
            to="/proyectos"
            className="inline-flex mt-6 px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
          >
            Volver al portfolio
          </Link>
        </div>
      </div>
    )
  }

  // Construimos URL embed de Instagram si existe instagramUrl
  const instagramEmbedUrl = project.instagramUrl
    ? `${project.instagramUrl.replace(/\/$/, "")}/embed`
    : null
  const hasYoutube = Boolean(project.youtubeUrl)
  const hasLocalVideo = Boolean(project.videoUrl)
  const hasInstagram = Boolean(instagramEmbedUrl)
  const useInstagramSplit = hasInstagram && !hasYoutube && !hasLocalVideo

  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20 space-y-10">
        {/* Migas + volver */}
        <div className="kv-caption text-zinc-500 flex items-center gap-2">
          <Link to="/proyectos" className="hover:text-amber-300">
            Portfolio
          </Link>
          <span>•</span>
          <span>{project.client}</span>
        </div>

        {/* Cabecera */}
        <header className="space-y-3">
          <h1 className="kv-page-title text-zinc-50">
            {project.title}
          </h1>
          <div className="kv-caption text-zinc-400 flex flex-wrap gap-4">
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
        {(hasYoutube || hasInstagram || hasLocalVideo) && !useInstagramSplit && (
          <section>
            {hasYoutube ? (
              // YouTube
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
                <iframe
                  src={project.youtubeUrl}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : hasInstagram ? (
              // Instagram (post / reel)
            <div className="w-full max-w-[200px] sm:max-w-[240px] mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
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
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
                <VideoPlayer src={project.videoUrl} poster={project.poster} />
              </div>
            )}
          </section>
        )}

        {useInstagramSplit ? (
          <section className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] items-start">
            <div className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-none mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
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

            <div className="space-y-8">
              <div className="kv-lede text-zinc-300 leading-relaxed space-y-4">
                {project.description && <p>{project.description}</p>}
                {project.extra && (
                  <p className="kv-body-muted text-zinc-400">{project.extra}</p>
                )}

                {project.instagramUrl && (
                  <p className="kv-caption text-zinc-500">
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

              <aside className="kv-body-muted space-y-4">
                {project.client && (
                  <div>
                    <h2 className="kv-eyebrow text-zinc-500 mb-1">
                      Cliente
                    </h2>
                    <p className="text-zinc-200">{project.client}</p>
                  </div>
                )}
                {project.agency && (
                  <div>
                    <h2 className="kv-eyebrow text-zinc-500 mb-1">
                      Agencia
                    </h2>
                    <p className="text-zinc-200">{project.agency}</p>
                  </div>
                )}
                {Array.isArray(project.roles) && project.roles.length > 0 && (
                  <div>
                    <h2 className="kv-eyebrow text-zinc-500 mb-1">
                      Rol
                    </h2>
                    <p className="text-zinc-200">{project.roles.join(" · ")}</p>
                  </div>
                )}
                {project.category && (
                  <div>
                    <h2 className="kv-eyebrow text-zinc-500 mb-1">
                      Tipo de proyecto
                    </h2>
                    <p className="text-zinc-200">{project.category}</p>
                  </div>
                )}
              </aside>
            </div>
          </section>
        ) : (
          <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="kv-lede text-zinc-300 leading-relaxed space-y-4">
              {project.description && <p>{project.description}</p>}
              {project.extra && (
                <p className="kv-body-muted text-zinc-400">{project.extra}</p>
              )}

              {project.instagramUrl && (
                <p className="kv-caption text-zinc-500">
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

            <aside className="kv-body-muted space-y-4">
              {project.client && (
                <div>
                  <h2 className="kv-eyebrow text-zinc-500 mb-1">
                    Cliente
                  </h2>
                  <p className="text-zinc-200">{project.client}</p>
                </div>
              )}
              {project.agency && (
                <div>
                  <h2 className="kv-eyebrow text-zinc-500 mb-1">
                    Agencia
                  </h2>
                  <p className="text-zinc-200">{project.agency}</p>
                </div>
              )}
              {Array.isArray(project.roles) && project.roles.length > 0 && (
                <div>
                  <h2 className="kv-eyebrow text-zinc-500 mb-1">
                    Rol
                  </h2>
                  <p className="text-zinc-200">{project.roles.join(" · ")}</p>
                </div>
              )}
              {project.category && (
                <div>
                  <h2 className="kv-eyebrow text-zinc-500 mb-1">
                    Tipo de proyecto
                  </h2>
                  <p className="text-zinc-200">{project.category}</p>
                </div>
              )}
            </aside>
          </section>
        )}

        {/* Galería simple */}
        {Array.isArray(project.images) && project.images.length > 0 && (
          <section className="space-y-4">
            <h2 className="kv-card-title text-zinc-100">
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
            <h2 className="kv-section-title mb-2">
              ¿Buscas algo similar para tu marca o evento?
            </h2>
            <p className="kv-lede max-w-md">
              Puedo ayudarte a definir el enfoque y producir una pieza
              a medida para tu objetivo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="kv-button-primary kv-button-accent">
              Hablemos de tu proyecto
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

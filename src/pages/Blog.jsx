// src/pages/Blog.jsx
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { blogPosts } from "../data/blogPosts.js"

const formatDate = (value) =>
  new Date(value).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

export default function Blog() {
  const posts = useMemo(() => {
    if (!Array.isArray(blogPosts)) return []
    return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [])

  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6 md:pt-14 md:pb-10">
        <p className="kv-eyebrow text-zinc-500 mb-3">Blog</p>
        <h1 className="kv-page-title mb-3">
          Blog de producción audiovisual y FPV en Galicia.
        </h1>
        <p className="kv-body-muted max-w-2xl">
          Guías y artículos prácticos sobre vídeo para marcas, turismo y
          eventos. Enfoque claro, planificación realista y recursos para mejorar
          tu presencia online.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        {posts.length === 0 ? (
          <p className="kv-body-muted text-zinc-500">
            Aún no hay artículos publicados.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl border border-zinc-800/80 bg-zinc-950/60 overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <div className="kv-caption text-zinc-400 flex flex-wrap gap-3">
                    <span className="uppercase tracking-[0.2em]">
                      {post.category}
                    </span>
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="kv-card-title text-zinc-100">
                    {post.title}
                  </h2>
                  <p className="kv-body-muted text-zinc-300">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tags.map((tag) => (
                      <span key={tag} className="kv-chip text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="kv-button-secondary"
                    >
                      Leer artículo
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="kv-section-title mb-2">
              ¿Quieres un vídeo que posicione tu marca?
            </h2>
            <p className="kv-lede max-w-md">
              Te ayudo a definir el enfoque y producir una pieza con intención
              estratégica.
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

// src/pages/BlogPost.jsx
import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { blogPosts } from "../data/blogPosts.js"
import { normalizeSlug } from "../utils/slug.js"
import { getBlogPostPath } from "../utils/routes.js"
import { getRelatedItems, getPostTerms } from "../utils/related.js"
import { usePageSeo, useJsonLd, siteUrl, brandTitle } from "../utils/seo.js"
import { defaultOgImage } from "../utils/routes.js"

// Formato ligero para el texto de los posts: [texto](/ruta/) y **negrita**.
const inlinePattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g

function renderInline(text) {
  const parts = []
  let lastIndex = 0

  for (const match of text.matchAll(inlinePattern)) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))

    if (match[1]) {
      const [, label, href] = match
      const className = "text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4"
      parts.push(
        href.startsWith("/") ? (
          <Link key={match.index} to={href} className={className}>{label}</Link>
        ) : (
          <a key={match.index} href={href} target="_blank" rel="noreferrer" className={className}>{label}</a>
        ),
      )
    } else {
      parts.push(<strong key={match.index} className="text-zinc-100 font-semibold">{match[3]}</strong>)
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}

const formatDate = (value) =>
  new Date(value).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

export default function BlogPost() {
  const { slug } = useParams()

  const post = useMemo(() => {
    const slugNorm = normalizeSlug(slug)
    return blogPosts.find(
      (item) =>
        normalizeSlug(item.slug) === slugNorm ||
        normalizeSlug(item.id) === slugNorm ||
        normalizeSlug(item.title) === slugNorm,
    )
  }, [slug])

  const pageSeo = useMemo(() => post ? {
    title: brandTitle(post.seoTitle || post.title),
    description: post.excerpt,
    pathname: getBlogPostPath(post),
    ogType: 'article',
    image: post.cover || defaultOgImage,
  } : {
    title: 'Artículo no encontrado | Kulmen Visuals',
    pathname: '/blog',
    robots: 'noindex, nofollow',
  }, [post])

  const jsonLdSchema = useMemo(() => {
    if (!post) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: `${siteUrl}${post.cover || defaultOgImage}`,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      url: `${siteUrl}${getBlogPostPath(post)}`,
      keywords: Array.isArray(post.tags) ? post.tags.join(', ') : undefined,
      author: { '@type': 'Person', name: 'io Rodríguez', url: `${siteUrl}/sobre-mi/` },
      publisher: {
        '@type': 'Organization',
        name: 'Kulmen Visuals',
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/logo-kulmen-visuals.png` },
      },
    }
  }, [post])

  usePageSeo(pageSeo)
  useJsonLd(jsonLdSchema)

  if (!post) {
    return (
      <div className="bg-zinc-950 text-zinc-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-24 space-y-4">
          <h1 className="kv-page-title mb-2">Artículo no encontrado</h1>
          <p className="kv-body-muted">
            No he encontrado ningún artículo con ese identificador.
          </p>

          <p className="kv-caption text-zinc-500 mt-4">
            <span className="font-semibold text-zinc-300">Slug recibido:</span>{" "}
            <code className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
              {slug ?? "(vacío)"}
            </code>
          </p>

          <Link
            to="/blog/"
            className="inline-flex mt-6 px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
          >
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = getRelatedItems(blogPosts, post, getPostTerms, 3)

  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20 space-y-10">
        <div className="kv-caption text-zinc-500 flex items-center gap-2">
          <Link to="/blog/" className="hover:text-amber-300">
            Blog
          </Link>
          <span>•</span>
          <span>{post.category}</span>
        </div>

        <header className="space-y-4">
          <h1 className="kv-page-title text-zinc-50">
            {post.title}
          </h1>
          <div className="kv-caption text-zinc-400 flex flex-wrap gap-4">
            <span className="uppercase tracking-[0.2em]">{post.category}</span>
            <span>
              {post.updated ? `Actualizado el ${formatDate(post.updated)}` : formatDate(post.date)}
            </span>
            <span>{post.readTime}</span>
          </div>
          <p className="kv-lede text-zinc-300 max-w-3xl">
            {post.excerpt}
          </p>
        </header>

        <section className="rounded-3xl overflow-hidden border border-zinc-800/70 bg-zinc-950/60">
          <div className="aspect-[16/9] w-full">
            <img
              src={post.cover}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          <article className="space-y-8">
            {post.sections.map((section) => (
              <div key={section.title} className="space-y-4">
                {section.level === 3 ? (
                  <h3 className="kv-card-title text-zinc-100 text-lg md:text-xl">
                    {section.title}
                  </h3>
                ) : (
                  <h2 className="kv-section-title text-zinc-100">
                    {section.title}
                  </h2>
                )}
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="kv-body-muted text-zinc-300">
                    {renderInline(paragraph)}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 text-zinc-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="kv-bullet mt-2 shrink-0" />
                        <span>{renderInline(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol className="space-y-3 text-zinc-300">
                    {section.steps.map((step, i) => (
                      <li key={step} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-300/40 text-xs font-semibold text-amber-200">
                          {i + 1}
                        </span>
                        <span>{renderInline(step)}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {section.closing?.map((paragraph) => (
                  <p key={paragraph} className="kv-body-muted text-zinc-300">
                    {renderInline(paragraph)}
                  </p>
                ))}
              </div>
            ))}
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-5 space-y-3">
              <h3 className="kv-card-title text-zinc-100">
                Sobre este artículo
              </h3>
              <p className="kv-body-muted text-zinc-400">
                Si quieres aplicar estas ideas a tu marca, puedo ayudarte a
                definir el enfoque y producir la pieza adecuada.
              </p>
              <Link to="/contacto/" className="kv-button-primary kv-button-accent">
                Solicitar propuesta
              </Link>
              {post.service && (
                <Link
                  to={post.service.to}
                  className="block kv-caption text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4"
                >
                  {post.service.label}
                </Link>
              )}
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-5 space-y-3">
              <h3 className="kv-card-title text-zinc-100">Etiquetas</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="kv-chip text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {relatedPosts.length > 0 && (
          <section className="space-y-4">
            <h2 className="kv-section-title">Otros artículos</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={getBlogPostPath(item)}
                  className="group rounded-2xl border border-zinc-800/70 bg-zinc-950/60 overflow-hidden"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="kv-caption text-zinc-400">
                      {formatDate(item.date)}
                    </p>
                    <h3 className="kv-card-title text-zinc-100">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

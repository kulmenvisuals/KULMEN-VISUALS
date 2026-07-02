import { Link } from 'react-router-dom'
import { MapPin, Shield, CheckCircle2 } from 'lucide-react'
import { usePageSeo } from '../utils/seo.js'

export default function LocalLanding({ data }) {
  usePageSeo(data.seo)

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Schema inline: presente en el HTML prerenderizado para crawlers sin JS */}
      {data.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
        />
      )}
      {/* HERO */}
      <section className="relative border-b border-zinc-800/60">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={14} className="text-amber-300" />
            <p className="kv-eyebrow text-amber-300/80">{data.eyebrow}</p>
          </div>
          <h1 className="kv-page-title mb-5">{data.h1}</h1>
          <p className="kv-lede max-w-2xl text-zinc-300">{data.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
            <Link to="/servicios-grabacion-con-drones/" className="kv-button-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ZONAS DONDE TRABAJAMOS */}
      {data.zonas && (
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="kv-section-title mb-4">{data.zonas.title}</h2>
          <p className="kv-body-muted max-w-2xl mb-6">{data.zonas.text}</p>
          {data.zonas.chips && (
            <div className="flex flex-wrap gap-2">
              {data.zonas.chips.map(z => (
                <span key={z} className="kv-chip text-[12px]">{z}</span>
              ))}
            </div>
          )}
        </section>
      )}

      {/* TIPOS DE PROYECTOS FRECUENTES */}
      {data.proyectos && (
        <section className="border-t border-zinc-900 bg-zinc-950/80">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="kv-section-title mb-8">{data.proyectos.title}</h2>
            <div className={`grid gap-4 ${data.proyectos.items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
              {data.proyectos.items.map((item, i) => (
                <article
                  key={i}
                  className="group relative overflow-hidden kv-glass-soft rounded-2xl p-5 border border-white/10 transition-transform duration-300 hover:-translate-y-1 hover:border-amber-300/40"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                  </div>
                  <div className="relative">
                    <h3 className="kv-card-title text-zinc-100 mb-2 group-hover:text-amber-100 transition-colors">{item.title}</h3>
                    <p className="kv-card-body text-zinc-400">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LIMITACIONES Y PERMISOS */}
      {data.permisos && (
        <section className="border-t border-zinc-900">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <div className="kv-glass rounded-3xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} className="text-amber-300 shrink-0" />
                <h2 className="kv-section-title">{data.permisos.title}</h2>
              </div>
              <p className="kv-body-muted mb-4">{data.permisos.text}</p>
              {data.permisos.items && (
                <ul className="space-y-2 mt-4">
                  {data.permisos.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 size={16} className="text-amber-300 mt-0.5 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CASOS REALES */}
      {data.casos && (
        <section className="border-t border-zinc-900 bg-zinc-950/80">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <h2 className="kv-section-title mb-6">{data.casos.title}</h2>
            <div className="space-y-4">
              {data.casos.items.map((item, i) => (
                <div key={i} className="kv-glass-soft rounded-2xl p-5 border border-white/10">
                  <h3 className="kv-card-title text-zinc-100 mb-1">{item.title}</h3>
                  <p className="kv-card-body text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SERVICIOS RELACIONADOS */}
      {data.serviciosRelacionados && (
        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <p className="kv-eyebrow text-zinc-400 mb-5">Servicios disponibles en {data.ciudad}</p>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {data.serviciosRelacionados.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="kv-glass-soft rounded-xl p-4 border border-white/10 hover:border-amber-300/30 transition-colors group"
                >
                  <span className="kv-card-title text-zinc-200 group-hover:text-amber-200 transition-colors block">
                    {link.label}
                  </span>
                  {link.desc && (
                    <p className="kv-card-body text-zinc-400 mt-1">{link.desc}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQS */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="border-t border-zinc-900 bg-zinc-950/60">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <h2 className="kv-section-title mb-8">Preguntas frecuentes</h2>
            <div className="space-y-3">
              {data.faqs.map((item, i) => (
                <details
                  key={i}
                  className="group kv-glass-soft rounded-2xl border border-white/10 p-5"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="kv-card-title text-zinc-100">{item.question}</span>
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="kv-body-muted mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA LOCAL */}
      <section className="max-w-4xl mx-auto px-4 py-14 md:py-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="kv-section-title mb-2">
              {data.cta?.title || `¿Necesitas grabación con drones en ${data.ciudad}?`}
            </h2>
            <p className="kv-lede max-w-md">
              {data.cta?.desc || 'Cuéntame tu proyecto y te preparo una propuesta sin compromiso.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Contactar
            </Link>
            <Link to="/servicios-grabacion-con-drones/" className="kv-button-secondary">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

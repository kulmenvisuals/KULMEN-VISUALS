import { Link } from 'react-router-dom'
import { CheckCircle2, Shield, MapPin } from 'lucide-react'
import { usePageSeo } from '../utils/seo.js'

export default function DronLanding({ data }) {
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
          <p className="kv-eyebrow text-amber-300/80 mb-3">{data.eyebrow}</p>
          <h1 className="kv-page-title mb-5">{data.h1}</h1>
          <p className="kv-lede max-w-2xl text-zinc-300">{data.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
            {data.hubLink && (
              <Link to={data.hubLink.to} className="kv-button-secondary">
                {data.hubLink.label}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* PROBLEMA QUE RESUELVE */}
      {data.problema && (
        <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h2 className="kv-section-title mb-4">{data.problema.title}</h2>
          <p className="kv-body-muted max-w-2xl">{data.problema.text}</p>
        </section>
      )}

      {/* PARA QUIÉN ES */}
      {data.paraQuien && (
        <section className="border-t border-zinc-900 bg-zinc-950/80">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="kv-section-title mb-8">{data.paraQuien.title}</h2>
            <div className={`grid gap-4 ${data.paraQuien.items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
              {data.paraQuien.items.map((item, i) => (
                <article
                  key={i}
                  className="group kv-glass-soft rounded-2xl p-5 border border-white/10 transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="kv-card-title text-zinc-100 mb-2">{item.title}</h3>
                  <p className="kv-card-body text-zinc-400">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TIPOS DE VUELO / SERVICIO */}
      {data.tipos && (
        <section className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="kv-section-title mb-8">{data.tipos.title}</h2>
            <div className={`grid gap-4 ${data.tipos.items.length === 2 ? 'md:grid-cols-2' : data.tipos.items.length >= 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3'}`}>
              {data.tipos.items.map((item, i) => (
                <article
                  key={i}
                  className="group relative overflow-hidden kv-glass-soft rounded-2xl p-5 border border-white/10 transition-transform duration-300 hover:-translate-y-1 hover:border-amber-300/40"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                  </div>
                  <div className="relative">
                    <h3 className="kv-card-title text-zinc-100 mb-2 group-hover:text-amber-100 transition-colors">{item.title}</h3>
                    <p className="kv-card-body text-zinc-400 mb-3">{item.desc}</p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[11px] rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-amber-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QUÉ INCLUYE */}
      {data.incluye && (
        <section className="border-t border-zinc-900 bg-zinc-950/60">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <h2 className="kv-section-title mb-6">{data.incluye.title || '¿Qué incluye el servicio?'}</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {data.incluye.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-amber-300 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* PERMISOS Y LEGALIDAD */}
      {data.permisos && (
        <section className="border-t border-zinc-900">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <div className="kv-glass rounded-3xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} className="text-amber-300 shrink-0" />
                <h2 className="kv-section-title">{data.permisos.title || 'Permisos y legalidad'}</h2>
              </div>
              <p className="kv-body-muted">{data.permisos.text}</p>
            </div>
          </div>
        </section>
      )}

      {/* EJEMPLOS DE USO */}
      {data.ejemplos && (
        <section className="border-t border-zinc-900 bg-zinc-950/80">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <h2 className="kv-section-title mb-6">{data.ejemplos.title || 'Ejemplos de uso'}</h2>
            <ul className="space-y-3">
              {data.ejemplos.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <span className="kv-bullet mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ZONAS */}
      {data.zonas && (
        <section className="border-t border-zinc-900">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={18} className="text-amber-300 shrink-0" />
              <h2 className="kv-section-title">{data.zonas.title || 'Zona de trabajo'}</h2>
            </div>
            <p className="kv-body-muted mb-4">{data.zonas.text}</p>
            {data.zonas.chips && (
              <div className="flex flex-wrap gap-2 mt-3">
                {data.zonas.chips.map(z => (
                  <span key={z} className="kv-chip text-[12px]">{z}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* LINKS INTERNOS */}
      {data.relatedLinks && data.relatedLinks.length > 0 && (
        <section className="border-t border-zinc-900 bg-zinc-950/60">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <p className="kv-eyebrow text-zinc-400 mb-5">Servicios relacionados</p>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {data.relatedLinks.map((link, i) => (
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
        <section className="border-t border-zinc-900">
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-14 md:py-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="kv-section-title mb-2">
              {data.cta?.title || '¿Necesitas grabación con drones?'}
            </h2>
            <p className="kv-lede max-w-md">
              {data.cta?.desc || 'Cuéntame tu proyecto y te preparo una propuesta sin compromiso.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
            <Link to="/servicios-grabacion-con-drones/" className="kv-button-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

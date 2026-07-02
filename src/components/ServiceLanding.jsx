// src/components/ServiceLanding.jsx
// Plantilla para landings SEO de servicios (no dron): hero con respuesta
// directa, entregables, tipos de proyecto, proceso, precios orientativos,
// FAQ y enlaces relacionados. El schema va inline para quedar prerenderizado.
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { usePageSeo } from '../utils/seo.js'

export default function ServiceLanding({ data }) {
  usePageSeo(data.seo)

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {data.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
        />
      )}

      {/* HERO con respuesta directa */}
      <section className="relative border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          {data.eyebrow && (
            <p className="kv-eyebrow text-amber-300/80 mb-4">{data.eyebrow}</p>
          )}
          <h1 className="kv-page-title mb-6">{data.h1}</h1>
          <p className="kv-lede max-w-2xl mb-4">{data.intro}</p>
          {data.intro2 && (
            <p className="kv-body-muted max-w-2xl mb-8">{data.intro2}</p>
          )}
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
            <Link to="/proyectos/" className="kv-button-secondary">
              Ver proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      {data.incluye && (
        <section className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <h2 className="kv-section-title mb-4">{data.incluye.title}</h2>
          {data.incluye.text && (
            <p className="kv-body-muted max-w-2xl mb-6">{data.incluye.text}</p>
          )}
          <ul className="grid gap-3 md:grid-cols-2">
            {data.incluye.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base text-zinc-300">
                <CheckCircle2 size={16} className="text-amber-300 mt-1 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* TIPOS DE PROYECTO */}
      {data.tipos && (
        <section className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
            <h2 className="kv-section-title mb-3">{data.tipos.title}</h2>
            {data.tipos.text && (
              <p className="kv-body-muted max-w-2xl mb-10">{data.tipos.text}</p>
            )}
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {data.tipos.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 p-5"
                >
                  <h3 className="kv-card-title text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DESTACADO: un servicio concreto que merece explicación propia */}
      {data.destacado && (
        <section className="border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
            <div className="rounded-3xl border border-amber-400/20 p-6 md:p-10">
              <h2 className="kv-section-title mb-4">{data.destacado.title}</h2>
              <p className="kv-body-muted max-w-2xl mb-6">{data.destacado.text}</p>
              {data.destacado.items && (
                <ul className="grid gap-3 md:grid-cols-2">
                  {data.destacado.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm md:text-base text-zinc-300">
                      <CheckCircle2 size={16} className="text-amber-300 mt-1 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* PROCESO */}
      {data.proceso && (
        <section className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
            <h2 className="kv-section-title mb-10">{data.proceso.title}</h2>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {data.proceso.items.map((fase) => (
                <div key={fase.title} className="border-l-2 border-amber-400/50 pl-5">
                  <h3 className="kv-card-title text-zinc-100 mb-2">{fase.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{fase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRECIOS ORIENTATIVOS */}
      {data.precios && (
        <section className="border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
            <h2 className="kv-section-title mb-3">{data.precios.title}</h2>
            {data.precios.text && (
              <p className="kv-body-muted max-w-2xl mb-8">{data.precios.text}</p>
            )}
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {data.precios.items.map(([concepto, precio]) => (
                <li key={concepto} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="text-sm md:text-base text-zinc-300">{concepto}</span>
                  <span className="font-semibold text-amber-300 whitespace-nowrap">{precio}</span>
                </li>
              ))}
            </ul>
            <p className="kv-caption text-zinc-500 mt-4">
              Rangos orientativos. El presupuesto final se cierra por escrito
              antes de empezar, sin sorpresas.
            </p>
          </div>
        </section>
      )}

      {/* SERVICIOS RELACIONADOS */}
      {data.relacionados && (
        <section className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
            <h2 className="kv-section-title mb-8">Servicios relacionados</h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {data.relacionados.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group rounded-2xl border border-white/10 p-5 transition-colors hover:border-amber-300/40"
                >
                  <span className="kv-card-title text-zinc-100 group-hover:text-amber-200 transition-colors block mb-1">
                    {link.label}
                  </span>
                  {link.desc && <p className="text-sm text-zinc-400">{link.desc}</p>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
            <h2 className="kv-section-title mb-8">Preguntas frecuentes</h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {data.faqs.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="text-base font-semibold text-zinc-100">
                      {item.question}
                    </span>
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="kv-body-muted mt-3 pr-10">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-5 [text-wrap:balance]">
            {data.cta.title}
          </h2>
          <p className="kv-lede max-w-lg mx-auto mb-9">{data.cta.desc}</p>
          <Link to="/contacto/" className="kv-button-primary kv-button-accent text-base px-8 py-3.5">
            Pedir presupuesto
          </Link>
        </div>
      </section>
    </div>
  )
}

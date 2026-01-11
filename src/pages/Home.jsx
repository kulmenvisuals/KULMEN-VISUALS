import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Film, Plane, Scissors, Share2, Briefcase, Calendar, Building2 } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

const featuredProjects = Array.isArray(projects) ? projects.slice(0, 3) : []

const serviceTeasers = [
  {
    id: 'pre',
    titulo: 'Preproducción',
    texto:
      'Ideas, guion y planificación. Te ayudo a bajar a tierra la idea, definir objetivos y diseñar una pieza que tenga sentido para tu marca.',
  },
  {
    id: 'rodaje',
    titulo: 'Rodaje',
    texto:
      'Cámaras de cine, dron FPV y sonido. Desde localización y logística hasta dirección de rodaje, trabajando ágil y con cabeza.',
  },
  {
    id: 'post',
    titulo: 'Montaje & color',
    texto:
      'Edición, corrección de color y entrega en formatos listos para redes, web o campañas. Ritmo cuidado y narrativa clara.',
  },
  {
    id: 'ia',
    titulo: 'Contenido con IA',
    texto:
      'Apoyo creativo con IA para adaptar, versionar y multiplicar tus piezas sin perder coherencia visual ni de mensaje.',
  },
]


const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Kulmen Visuals",
      url: "https://kulmenvisuals.com",
      email: "hola@kulmenvisuals.com",
      telephone: "+34 652405654",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pontevedra",
        addressCountry: "ES",
      },
      areaServed: "ES",
      sameAs: ["https://www.instagram.com/kulmenvisuals/"],
    },
    {
      "@type": "LocalBusiness",
      name: "Kulmen Visuals",
      url: "https://kulmenvisuals.com",
      telephone: "+34 652405654",
      email: "hola@kulmenvisuals.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pontevedra",
        addressCountry: "ES",
      },
      areaServed: "ES",
    },
  ],
}

export default function Home() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[data-lightwidget="kulmenvisuals"]'
    )
    if (existing) return
    const script = document.createElement('script')
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js'
    script.async = true
    script.setAttribute('data-lightwidget', 'kulmenvisuals')
    document.body.appendChild(script)
  }, [])

  return (
    <div className="bg-zinc-950 text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* HERO con vídeo de fondo */}
      <section className="relative min-h-[70vh] md:h-[80vh] overflow-hidden pt-20 pb-10 md:pt-24">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={`${import.meta.env.BASE_URL}images/hero-poster.webp`}
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col justify-center gap-4 md:gap-0">
          <p className="kv-eyebrow text-zinc-300 mb-4">
            Kulmen Visuals · Galicia
          </p>
          <h1 className="kv-hero-title mb-6">
            Producción audiovisual <br className="hidden md:block" />
            <span className="text-zinc-200"> con FPV cinematográfico en Galicia.</span>
          </h1>
          <p className="kv-lede max-w-xl mb-8">
            Vídeos para marcas y eventos que necesitan destacar de verdad. 
            Rodaje, FPV y edición pensados para redes, campañas y web. 
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/proyectos" className="kv-button-primary">
              Ver proyectos
            </Link>
          </div>

          <form
            action="https://formspree.io/f/xyzdkrka"
            method="POST"
            className="mt-6 w-full max-w-2xl kv-crystal rounded-2xl p-3 md:p-4 flex flex-col gap-3"
          >
            <input
              type="hidden"
              name="_subject"
              value="Nuevo lead desde el hero de Kulmen Visuals"
            />
            
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <input
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="w-full md:flex-1 rounded-full bg-black/40 border border-white/20 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                aria-label="Correo electrónico"
              />
              <input
                type="text"
                name="interes"
                required
                placeholder="¿Qué te interesa?"
                className="w-full md:flex-[1.2] rounded-full bg-black/40 border border-white/20 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                aria-label="Interés del proyecto"
              />
              <button type="submit" className="kv-button-primary kv-button-accent md:shrink-0">
                Iniciar proyecto
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-6 md:mt-8 pb-10 md:pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
            </div>
            <div className="relative">
              <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors">
                Producción completa, sin intermediarios ni fricción
              </h3>
              <p className="kv-card-body text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                Planificación, rodaje y edición en un solo flujo.
              </p>
            </div>
          </article>
          <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
            </div>
            <div className="relative">
              <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors">
                Contenido diseñado para publicarse
              </h3>
              <p className="kv-card-body text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                Formatos, duración y encuadres adaptados a cada canal.
              </p>
            </div>
          </article>
          <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
            </div>
            <div className="relative">
              <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors">
                Impacto visual desde el primer segundo
              </h3>
              <p className="kv-card-body text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                Movimiento, ritmo y planos pensados para retener.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Últimos trabajos */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="kv-section-title mb-2">Últimos trabajos</h2>
            <p className="kv-body-muted max-w-md">
              Proyectos audiovisuales para marcas, eventos y espacios en Galicia.
            </p>
          </div>
          <Link
            to="/proyectos"
            className="kv-button-secondary text-sm"
          >
            Ver proyectos completos
          </Link>
        </div>

        {featuredProjects.length === 0 ? (
          <p className="kv-body-muted text-zinc-500">
            Aún no hay proyectos cargados en <code>data/projects.js</code>.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id || project.slug} project={project} />
            ))}
          </div>
        )}
      </section>


      {/* Servicios de producción audiovisual */}
      <section className="max-w-6xl mx-auto px-4 pb-14 md:pb-20">
        <div className="flex flex-col gap-6 md:gap-10">
          <div>
            <h2 className="kv-section-title mb-3">
              Servicios de producción audiovisual
            </h2>
            <p className="kv-body-muted max-w-2xl">
              Producción integral con foco narrativo, fluidez y acabado profesional.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
                  <Film size={16} />
                </div>
                <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors">
                  Producción audiovisual
                </h3>
                <p className="kv-card-body text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                  Rodaje de vídeo con enfoque narrativo y publicitario para marcas,
                  eventos y proyectos.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
                  <Plane size={16} />
                </div>
                <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors">
                  FPV cinematográfico
                </h3>
                <p className="kv-card-body text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                  Planos aéreos dinámicos e inmersivos que generan impacto, carácter,
                  y diferenciación.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
                  <Scissors size={16} />
                </div>
                <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors">
                  Edición y postproducción
                </h3>
                <p className="kv-card-body text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                  Montaje, ritmo, música y color para un acabado profesional listo para
                  publicar.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
                  <Share2 size={16} />
                </div>
                <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors">
                  Contenido para redes
                </h3>
                <p className="kv-card-body text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                  Versiones optimizadas por formato y plataforma para aprovechar cada
                  rodaje al máximo.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Proyectos con los que trabajo */}
      <section className="max-w-6xl mx-auto px-4 pb-14 md:pb-20">
        <div className="flex flex-col gap-6 md:gap-10">
          <div>
            <h2 className="kv-section-title mb-3">
              Proyectos con los que trabajo
            </h2>
            <p className="kv-body-muted max-w-2xl">
              Trabajo con marcas, proyectos y eventos que necesitan una mirada cercana
              y una producción ágil.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
                  <Briefcase size={16} />
                </div>
                <h3 className="kv-card-title text-zinc-100">
                  Marcas
                </h3>
                <p className="kv-card-body text-zinc-400 mt-2">
                  Vídeos de producto y campañas pensados para construir imagen de marca,
                  lanzar novedades y generar contenido listo para redes y web.

                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
                  <Calendar size={16} />
                </div>
                <h3 className="kv-card-title text-zinc-100">
                  Eventos
                </h3>
                <p className="kv-card-body text-zinc-400 mt-2">
                  Piezas que amplifican el evento: teasers previos, contenido durante la acción y aftermovies que prolongan su impacto en el tiempo.

                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
                  <Building2 size={16} />
                </div>
                <h3 className="kv-card-title text-zinc-100">
                  Espacios
                </h3>
                <p className="kv-card-body text-zinc-400 mt-2">
                  Flythroughs y visitas inmersivas pensadas para inmobiliarias, promotoras,
                   alojamientos turísticos y negocios que necesitan mostrar sus espacios con claridad, 
                   impacto y diferenciación.

                </p>
              </div>
            </article>
          </div>
          <p className="kv-lede">
            El objetivo manda. La técnica se adapta para cumplirlo.
          </p>
        </div>
      </section>

      {/* Resumen de servicios*/}
      <section className="border-t border-zinc-900/70 bg-zinc-950/90">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
            <div className="max-w-md">
              <h2 className="kv-section-title mb-3">
                Realizo todo el proceso.
              </h2>
              <p className="kv-body-muted">
                Desde la idea inicial hasta la pieza final lista para publicar. Planifico cada etapa
                para que el rodaje fluya, la edición sea ágil y el resultado final cumpla el objetivo.
              </p>
            </div>
            <div className="kv-body-muted max-w-sm" />
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {serviceTeasers.map((service) => (
              <article
                key={service.id}
                className="relative kv-glass-soft rounded-2xl p-4 flex flex-col overflow-hidden group
                           transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                {/* Glow hover como en SobreMi */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-20 -left-16 w-40 h-40 bg-amber-400/12 blur-3xl" />
                  <div className="absolute -bottom-20 -right-10 w-36 h-36 bg-amber-500/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                <h3 className="kv-card-title mb-2 text-zinc-100">
                  {service.titulo}
                </h3>
                <p className="kv-card-body text-zinc-300 leading-relaxed">
                  {service.texto}
                </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="kv-section-title mb-2">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="kv-lede max-w-md">
              Escríbeme para ver si encaja lo que necesitas con lo
              que puedo ofrecerte. Sin compromiso. Comencemos a impulsar tu presencia.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram preview */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="overflow-hidden rounded-2xl">
          <iframe
            title="Kulmen Visuals Instagram feed"
            src="https://cdn.lightwidget.com/widgets/2519ad266e6d5a7cb28dd291383745f2.html"
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget w-full border-0 overflow-hidden"
            style={{ height: "clamp(520px, 70vw, 820px)" }}
          />
        </div>
      </section>
    </div>
  )
}

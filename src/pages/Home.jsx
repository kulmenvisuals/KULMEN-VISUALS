import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Film, Plane, Scissors, Share2 } from 'lucide-react'
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
          src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/85" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col justify-center gap-4 md:gap-0">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-300 mb-4">
            Kulmen Visuals · Galicia
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Producción audiovisual <br className="hidden md:block" />
            <span className="text-zinc-200"> con FPV cinematográfico en Galicia.</span>
          </h1>
          <p className="max-w-xl text-zinc-300 mb-8 text-sm md:text-base">
            Vídeos para marcas y eventos que necesitan destacar de verdad. 
            Rodaje, FPV y edición pensados para redes, campañas y web. 
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/proyectos" className="kv-button-primary">
              Ver proyectos
            </Link>
            <Link to="/servicios" className="kv-button-secondary">
              Ver cómo trabajo
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
              <button type="submit" className="kv-button-primary md:shrink-0">
                Iniciar proyecto
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
            </div>
            <div className="relative">
              <h3 className="text-sm md:text-base font-semibold text-zinc-100 group-hover:text-amber-100 transition-colors">
                Impacto visual desde el primer segundo
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                Movimiento, ritmo y planos pensados para retener.
              </p>
            </div>
          </article>
          <article className="group relative overflow-hidden kv-glass-soft rounded-2xl p-4 md:p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.65)]">
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
            </div>
            <div className="relative">
              <h3 className="text-sm md:text-base font-semibold text-zinc-100 group-hover:text-amber-100 transition-colors">
                Contenido diseñado para publicarse
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
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
              <h3 className="text-sm md:text-base font-semibold text-zinc-100 group-hover:text-amber-100 transition-colors">
                Producción completa, sin intermediarios ni fricción
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                Planificación, rodaje y edición en un solo flujo.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Últimos trabajos */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Últimos trabajos</h2>
            <p className="text-sm text-zinc-400 max-w-md">
              Una selección de proyectos recientes con dron FPV, cobertura de eventos y piezas
              para marcas en Galicia.
            </p>
          </div>
          <Link
            to="/proyectos"
            className="text-sm text-amber-300 hover:text-amber-200 underline underline-offset-4"
          >
            Ver todos los proyectos
          </Link>
        </div>

        {featuredProjects.length === 0 ? (
          <p className="text-sm text-zinc-500">
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
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Servicios de producción audiovisual
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Producción integral con foco narrativo, ritmo y acabado profesional.
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
                <h3 className="text-sm md:text-base font-semibold text-zinc-100 group-hover:text-amber-100 transition-colors">
                  Producción audiovisual
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
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
                <h3 className="text-sm md:text-base font-semibold text-zinc-100 group-hover:text-amber-100 transition-colors">
                  FPV cinematográfico
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
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
                <h3 className="text-sm md:text-base font-semibold text-zinc-100 group-hover:text-amber-100 transition-colors">
                  Edición y postproducción
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
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
                <h3 className="text-sm md:text-base font-semibold text-zinc-100 group-hover:text-amber-100 transition-colors">
                  Contenido para redes
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 group-hover:text-zinc-200 transition-colors">
                  Versiones optimizadas por formato y plataforma para aprovechar cada
                  rodaje al máximo.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Resumen de servicios*/}
      <section className="border-t border-zinc-900/70 bg-zinc-950/90">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
            <div className="max-w-md">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Acompaño todo el proceso.
              </h2>
              <p className="text-sm text-zinc-400">
                Desde la idea inicial hasta la pieza final lista para publicar. Puedo entrar
                en cualquier fase, pero lo ideal es diseñar el proyecto juntos desde el principio.
              </p>
            </div>
            <div className="text-sm text-zinc-400 max-w-sm">
              <p>
                Trabajo con marcas, proyectos y eventos que necesitan una
                mirada cercana y una producción ágil.
              </p>
            </div>
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
                <h3 className="text-sm font-semibold mb-2 text-zinc-100">
                  {service.titulo}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {service.texto}
                </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram preview */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="relative overflow-hidden kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-6 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="absolute -bottom-28 left-6 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800/80 to-zinc-950/80 flex items-center justify-center text-lg font-semibold text-amber-200">
                  KV
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    Instagram
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-100">
                    @kulmenvisuals
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Últimas publicaciones y BTS de rodajes.
                  </p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/kulmenvisuals/"
                target="_blank"
                rel="noreferrer"
                className="kv-button-primary"
              >
                Ver perfil
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80">
                <iframe
                  title="Kulmen Visuals Instagram feed"
                  src="https://cdn.lightwidget.com/widgets/2519ad266e6d5a7cb28dd291383745f2.html"
                  scrolling="no"
                  allowTransparency={true}
                  className="lightwidget-widget w-full border-0 overflow-hidden"
                  style={{ height: 'clamp(520px, 70vw, 820px)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-sm text-zinc-300 max-w-md">
              Escríbeme para ver si encaja lo que necesitas con lo
              que puedo ofrecerte. Sin compromiso. Comencemos a impulsar tu presencia.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="kv-button-primary">
              Comencemos
            </Link>
            <Link to="/proyectos" className="kv-button-secondary">
              Ver portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

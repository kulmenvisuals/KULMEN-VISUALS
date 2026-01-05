import { Link } from 'react-router-dom'
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

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
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
            Eleva tu marca <br className="hidden md:block" />
            <span className="text-zinc-200"> con contenido de altura.</span>
          </h1>
          <p className="max-w-xl text-zinc-300 mb-8 text-sm md:text-base">
            Productora audiovisual 360º: guion, rodaje, FPV y postproducción para marcas,
            eventos y proyectos que quieren destacar y diferenciarse.
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
                className="kv-glass-soft rounded-2xl p-4 flex flex-col"
              >
                <h3 className="text-sm font-semibold mb-2 text-zinc-100">
                  {service.titulo}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {service.texto}
                </p>
              </article>
            ))}
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

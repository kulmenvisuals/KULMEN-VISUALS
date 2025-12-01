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
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-300 mb-4">
            Kulmen Visuals · Galicia
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Historias con alma.<br className="hidden md:block" />
            <span className="text-zinc-200"> Estética de cine.</span>
          </h1>
          <p className="max-w-xl text-zinc-300 mb-8 text-sm md:text-base">
            Productora audiovisual 360º: guion, rodaje, FPV y postproducción para marcas,
            eventos y proyectos que quieren enseñar algo más que un plano bonito.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/proyectos"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-black text-sm font-semibold hover:bg-amber-300 transition"
            >
              Ver proyectos
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-zinc-600 text-sm text-zinc-100 hover:border-amber-300 hover:text-amber-200 transition"
            >
              Ver cómo trabajo
            </Link>
          </div>
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

      {/* Resumen de servicios */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
            <div className="max-w-md">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                Acompaño todo el proceso.
              </h2>
              <p className="text-sm text-zinc-400">
                Desde la idea inicial hasta la pieza final lista para publicar. Podemos entrar
                en cualquier fase, pero lo ideal es diseñar el proyecto juntas desde el principio.
              </p>
            </div>
            <div className="text-sm text-zinc-400 max-w-sm">
              <p>
                Trabajo con marcas pequeñas, proyectos culturales y eventos que necesitan una
                mirada cercana. Nada de vídeos plantillero sin contexto.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {serviceTeasers.map((service) => (
              <article
                key={service.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 flex flex-col"
              >
                <h3 className="text-sm font-semibold mb-2 text-zinc-100">
                  {service.titulo}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{service.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-sm text-zinc-400 max-w-md">
              Podemos empezar con una llamada corta para ver si encaja lo que necesitas con lo
              que puedo ofrecerte. Sin compromiso.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-black text-sm font-semibold hover:bg-amber-300 transition"
            >
              Escríbeme
            </Link>
            <Link
              to="/proyectos"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-zinc-600 text-sm text-zinc-100 hover:border-amber-300 hover:text-amber-200 transition"
            >
              Ver portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Film, Plane, Scissors, Share2, Briefcase, Calendar, Building2 } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { setPageMeta } from '../utils/seo.js'

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

const faqItems = [
  {
    question: '¿Qué tipo de proyectos audiovisuales realizas?',
    answer:
      'Trabajo principalmente en vídeo para marcas, eventos y turismo: spots y piezas cortas para campañas, videoclips, aftermovies, resúmenes de eventos, recorridos con dron FPV y contenido pensado para redes sociales (Reels, Shorts, TikTok). También desarrollo piezas más completas para web o presentación de proyectos.',
  },
  {
    question: '¿En qué zona trabajas? ¿Solo en Galicia?',
    answer:
      'Estoy basada en Galicia, pero puedo desplazarme a otras zonas de España si el proyecto lo requiere. Para proyectos fuera de Galicia suelo plantear un presupuesto cerrado que incluya desplazamiento, dietas y alojamiento, para que tengas el coste total desde el principio.',
  },
  {
    question: '¿Qué diferencia hay entre un dron “normal” y un dron FPV?',
    answer:
      'El dron clásico se usa para planos estables y panorámicos (vistas aéreas, contexto del lugar). El dron FPV permite planos mucho más dinámicos: persecución de vehículos, recorridos entre personas, entrada y salida de espacios, giros rápidos. Es ideal para deporte, eventos, turismo y negocios donde interesa enseñar el espacio de forma inmersiva.',
  },
  {
    question: '¿Qué servicios ofreces además del rodaje?',
    answer:
      'No solo grabo: preproducción (definición de objetivo, guion básico, estructura y planificación), rodaje (cámara de cine, dron FPV, dron aéreo y sonido básico), postproducción (montaje, corrección de color, limpieza de audio, música con licencia y rótulos básicos) y contenido con IA como apoyo puntual.',
  },
  {
    question: '¿Cómo es el proceso de trabajo desde que pido un presupuesto?',
    answer:
      'Contacto inicial, propuesta, planificación, rodaje y montaje con entregas. Empezamos definiendo objetivo, fechas y localización, preparo la propuesta, cerramos guion y calendario, grabamos y envío una primera versión para comentarios antes de la entrega final.',
  },
  {
    question: '¿Cuánto cuesta un vídeo con dron FPV o una pieza completa?',
    answer:
      'El precio depende del tipo de proyecto, duración del rodaje, localizaciones, si hay dron/cámara o ambos, y la complejidad de la edición. Suelo preparar un presupuesto cerrado tras una breve llamada o correo para definir alcance y necesidades.',
  },
  {
    question: '¿Cuánto tardas en entregar el material?',
    answer:
      'Depende del proyecto: eventos y aftermovies sencillos entre 3 y 10 días laborables; spots, videoclips y proyectos más complejos entre 2 y 4 semanas. Si hay fecha límite, se planifica desde el inicio.',
  },
  {
    question: '¿Te encargas de los permisos para volar drones?',
    answer:
      'Sí. Trabajo con la regulación vigente de UAS/drones en España: reviso el espacio aéreo y gestiono coordinación y solicitudes cuando es necesario. Si un vuelo no es viable, propongo alternativas.',
  },
  {
    question: '¿Qué formatos de entrega recibo?',
    answer:
      'Entrego formato horizontal (16:9) para web o YouTube y, si el proyecto lo incluye, versiones verticales (9:16) para Reels, TikTok o Shorts. Los archivos se entregan por enlace en .mp4 de alta calidad.',
  },
  {
    question: '¿Puedo pedir solo edición si ya tengo el material grabado?',
    answer:
      'Sí. Puedo encargarme solo de postproducción: ordenar material, montar, corregir color, añadir música y preparar versiones para redes. Reviso una muestra antes para asegurar la calidad.',
  },
  {
    question: '¿Qué papel tiene la inteligencia artificial (IA) en tus proyectos?',
    answer:
      'La IA es un recurso de apoyo: moodboards, storyboards rápidos, variaciones de contenido y, en casos concretos, imágenes o animaciones generadas cuando aporta valor creativo.',
  },
  {
    question: '¿Cómo puedo pedir un presupuesto o empezar un proyecto?',
    answer:
      'Puedes contactar desde el formulario de la web o escribir a hola@kulmenvisuals.com. Si incluyes tipo de proyecto, localización, fechas aproximadas y objetivo, podré darte una respuesta más precisa.',
  },
]

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kulmenvisuals.com/#organization",
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
      "@id": "https://kulmenvisuals.com/#localbusiness",
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
    {
      "@type": "Service",
      name: "Producción audiovisual",
      serviceType: "Producción audiovisual",
      provider: { "@id": "https://kulmenvisuals.com/#organization" },
      areaServed: "Galicia",
      url: "https://kulmenvisuals.com/servicios",
    },
    {
      "@type": "Service",
      name: "FPV cinematográfico",
      serviceType: "Drones FPV",
      provider: { "@id": "https://kulmenvisuals.com/#organization" },
      areaServed: "Galicia",
      url: "https://kulmenvisuals.com/servicios",
    },
    {
      "@type": "Service",
      name: "Edición y postproducción",
      serviceType: "Postproducción de vídeo",
      provider: { "@id": "https://kulmenvisuals.com/#organization" },
      areaServed: "Galicia",
      url: "https://kulmenvisuals.com/servicios",
    },
    {
      "@type": "FAQPage",
      "@id": "https://kulmenvisuals.com/#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
}

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)
  const [useMobileVideo, setUseMobileVideo] = useState(false)

  useEffect(() => {
    setPageMeta({
      title: 'Producción audiovisual y FPV en Galicia | Kulmen Visuals',
      description:
        'Producción audiovisual y drones FPV en Galicia para marcas, eventos y espacios. Rodaje, edición y contenido para web, redes y campañas publicitarias de impacto.',
    })
  }, [])

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const widthQuery = window.matchMedia('(min-width: 768px)')

    const updateVideo = () => {
      const allowVideo = !motionQuery.matches
      setShowVideo(allowVideo)
      setUseMobileVideo(!widthQuery.matches)
    }

    updateVideo()

    const addListener = (query, handler) => {
      if (query.addEventListener) {
        query.addEventListener('change', handler)
      } else {
        query.addListener(handler)
      }
    }
    const removeListener = (query, handler) => {
      if (query.removeEventListener) {
        query.removeEventListener('change', handler)
      } else {
        query.removeListener(handler)
      }
    }

    addListener(motionQuery, updateVideo)
    addListener(widthQuery, updateVideo)

    return () => {
      removeListener(motionQuery, updateVideo)
      removeListener(widthQuery, updateVideo)
    }
  }, [])

  const heroVideoSrc = useMobileVideo
    ? `${import.meta.env.BASE_URL}videos/hero-mobile.mp4`
    : `${import.meta.env.BASE_URL}videos/hero.mp4`

  return (
    <div className="bg-zinc-950 text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* HERO con vídeo de fondo */}
      <section className="relative min-h-[70vh] md:h-[80vh] overflow-hidden pt-20 pb-10 md:pt-24">
        {showVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}images/hero-poster.webp`}
            aria-hidden="true"
          >
            <source
              src={heroVideoSrc}
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={`${import.meta.env.BASE_URL}images/hero-poster.webp`}
            alt=""
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/85 md:from-black/55 md:via-black/35 md:to-black/75" />

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
            <Link to="/servicios" className="kv-button-secondary">
              Ver servicios
            </Link>
            <Link to="/contacto" className="kv-button-primary md:hidden">
              Iniciar proyecto
            </Link>
          </div>

          <form
            action="https://formspree.io/f/xyzdkrka"
            method="POST"
            className="mt-6 w-full max-w-2xl kv-crystal rounded-2xl p-3 md:p-4 hidden md:flex flex-col gap-3"
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

      {/* Servicios de producción audiovisual */}
      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-14">
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

      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-950/80 to-zinc-900/60 px-5 py-8 md:px-8 md:py-10">
          <div className="pointer-events-none absolute -top-24 -right-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="kv-eyebrow text-zinc-400 mb-3">
                Estrategia · Producción · Distribución
              </p>
              <h2 className="kv-section-title mb-4">
                Producción audiovisual en Galicia con enfoque estratégico
              </h2>
              <p className="kv-body-muted mb-4">
                Me encargo de todo el flujo: concepto, guion, rodaje, FPV y
                postproducción. El objetivo es que el vídeo no solo se vea bien,
                sino que cumpla una función clara dentro de tu marketing o evento.
              </p>
              <p className="kv-body-muted">
                Trabajo con marcas, organizadores y espacios que necesitan piezas
                con ritmo, narrativa y versiones listas para campañas, web y
                redes sociales.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="kv-chip text-[11px]">Marcas</span>
                <span className="kv-chip text-[11px]">Eventos</span>
                <span className="kv-chip text-[11px]">Turismo</span>
                <span className="kv-chip text-[11px]">FPV Cinemático</span>
              </div>
            </div>
            <div className="kv-glass rounded-2xl border border-white/10 p-5 md:p-6">
              <h3 className="kv-card-title text-zinc-100 mb-4">
                Qué incluye cada proyecto
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {[
                  'Preproducción con objetivos y guion técnico.',
                  'Rodaje con cámara de cine y dron FPV.',
                  'Edición, color, sonido y música con licencia.',
                  'Adaptación a formatos para redes y campañas.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.65)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Últimos trabajos */}
      <section className="max-w-6xl mx-auto px-4 pt-6 md:pt-10 pb-10 md:pb-14">
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

      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="kv-section-title mb-2">Preguntas frecuentes</h2>
            <p className="kv-body-muted max-w-2xl">
              Respuestas rápidas sobre producción audiovisual, FPV y entregas.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group kv-glass-soft rounded-2xl border border-white/10 p-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="kv-card-title text-zinc-100">
                    {item.question}
                  </span>
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="kv-body-muted mt-3">{item.answer}</p>
              </details>
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

    </div>
  )
}

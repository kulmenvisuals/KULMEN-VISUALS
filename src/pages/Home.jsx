import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Film, Plane, Scissors, Share2, Briefcase, Calendar, Building2 } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { usePageSeo } from '../utils/seo.js'

const featuredProjects = Array.isArray(projects) ? projects.slice(0, 3) : []

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
    question: '¿Qué diferencia hay entre un dron "normal" y un dron FPV?',
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
      "@type": "WebSite",
      "@id": "https://kulmenvisuals.com/#website",
      name: "Kulmen Visuals",
      url: "https://kulmenvisuals.com",
      publisher: { "@id": "https://kulmenvisuals.com/#localbusiness" },
    },
    {
      "@type": ["LocalBusiness", "VideoProductionCompany"],
      "@id": "https://kulmenvisuals.com/#localbusiness",
      name: "Kulmen Visuals",
      description: "Productora audiovisual y servicios de drones FPV en Galicia",
      url: "https://kulmenvisuals.com",
      logo: "https://kulmenvisuals.com/logo-kulmen-visuals.png",
      image: "https://kulmenvisuals.com/images/hero-poster.webp",
      telephone: "+34 652405654",
      email: "hola@kulmenvisuals.com",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pontevedra",
        addressRegion: "Galicia",
        addressCountry: "ES",
      },
      areaServed: {
        "@type": "State",
        name: "Galicia",
        containedIn: { "@type": "Country", name: "España" },
      },
      founder: {
        "@type": "Person",
        name: "io Rodríguez",
        jobTitle: "Creadora audiovisual y piloto FPV",
        url: "https://kulmenvisuals.com/sobre-mi/",
      },
      sameAs: ["https://www.instagram.com/kulmenvisuals/"],
    },
    {
      "@type": "Service",
      name: "Producción audiovisual",
      serviceType: "Producción audiovisual",
      provider: { "@id": "https://kulmenvisuals.com/#localbusiness" },
      areaServed: "Galicia",
      url: "https://kulmenvisuals.com/servicios/",
    },
    {
      "@type": "Service",
      name: "FPV cinematográfico",
      serviceType: "Drones FPV",
      provider: { "@id": "https://kulmenvisuals.com/#localbusiness" },
      areaServed: "Galicia",
      url: "https://kulmenvisuals.com/servicios/",
    },
    {
      "@type": "Service",
      name: "Edición y postproducción",
      serviceType: "Postproducción de vídeo",
      provider: { "@id": "https://kulmenvisuals.com/#localbusiness" },
      areaServed: "Galicia",
      url: "https://kulmenvisuals.com/servicios/",
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

const homeSeo = {
  title: 'Producción audiovisual y FPV en Galicia | Kulmen Visuals',
  description:
    'Productora audiovisual y piloto FPV en Galicia. Rodaje, drones FPV cinematográficos y edición para marcas, eventos y turismo. Pide presupuesto sin compromiso.',
  pathname: '/',
}

const services = [
  {
    num: '01',
    icon: <Film size={16} />,
    titulo: 'Preproducción',
    texto: 'Ideas, guion y planificación. Definimos objetivos y estructura para que cada rodaje tenga sentido dentro de tu estrategia.',
  },
  {
    num: '02',
    icon: <Plane size={16} />,
    titulo: 'Rodaje & FPV',
    texto: 'Cámara de cine y dron FPV. Desde localización y logística hasta dirección de rodaje, ágil y con cabeza.',
  },
  {
    num: '03',
    icon: <Scissors size={16} />,
    titulo: 'Montaje & color',
    texto: 'Edición, corrección de color y entrega en formatos listos para redes, web o campañas. Ritmo cuidado, narrativa clara.',
  },
  {
    num: '04',
    icon: <Share2 size={16} />,
    titulo: 'Contenido con IA',
    texto: 'Apoyo creativo con IA para adaptar, versionar y multiplicar tus piezas sin perder coherencia visual ni de mensaje.',
  },
]

const clientTypes = [
  {
    icon: <Briefcase size={16} />,
    titulo: 'Marcas',
    texto: 'Vídeos de producto y campañas pensados para construir imagen de marca, lanzar novedades y generar contenido listo para redes y web.',
  },
  {
    icon: <Calendar size={16} />,
    titulo: 'Eventos',
    texto: 'Piezas que amplifican el evento: teasers previos, contenido durante la acción y aftermovies que prolongan su impacto en el tiempo.',
  },
  {
    icon: <Building2 size={16} />,
    titulo: 'Espacios',
    texto: 'Flythroughs y visitas inmersivas para inmobiliarias, alojamientos y negocios que necesitan mostrar sus espacios con claridad e impacto.',
  },
]

export default function Home() {
  usePageSeo(homeSeo)
  const navigate = useNavigate()

  const [showVideo, setShowVideo] = useState(false)
  const [useMobileVideo, setUseMobileVideo] = useState(false)

  async function handleHeroSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      await fetch('https://formspree.io/f/xyzdkrka', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
    } catch {
      // continuar igualmente — Formspree gestiona reintentos
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'Hero form',
        content_category: 'Producción audiovisual',
      })
    }

    navigate('/contacto/gracias/')
  }

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

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] overflow-hidden flex flex-col">
        {showVideo ? (
          <video
            className="pointer-events-none absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}images/hero-poster.webp`}
            aria-hidden="true"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            className="pointer-events-none absolute inset-0 w-full h-full object-cover"
            src={`${import.meta.env.BASE_URL}images/hero-poster.webp`}
            alt="Grabación FPV cinematográfico para marca en Galicia — Kulmen Visuals"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-zinc-950/98" />

        {/* Content anchored to the bottom */}
        <div className="relative z-10 mt-auto max-w-6xl mx-auto w-full px-4 pb-12 md:pb-16 pt-28">
          <p className="kv-eyebrow text-zinc-400 mb-5">
            Kulmen Visuals · Galicia
          </p>

          <h1 className="kv-display-title text-zinc-50 mb-6">
            Producción<br />
            audiovisual<br />
            <span className="text-amber-400">con FPV.</span>
          </h1>

          <p className="kv-lede max-w-xl mb-8">
            Vídeos para marcas y eventos que necesitan destacar de verdad.
            Rodaje, FPV cinematográfico y edición pensados para redes, campañas y web.
          </p>

          {/* Mobile CTAs */}
          <div className="flex flex-wrap gap-3 mb-8 md:hidden">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Iniciar proyecto
            </Link>
            <Link to="/servicios/" className="kv-button-secondary">
              Ver servicios
            </Link>
          </div>

          {/* Desktop lead form */}
          <form
            onSubmit={handleHeroSubmit}
            className="w-full max-w-2xl kv-crystal rounded-2xl p-3 md:p-4 hidden md:flex flex-col gap-3 mb-8"
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

          {/* Tag strip */}
          <div className="flex flex-wrap gap-2">
            {['FPV certificado', 'Cámara de cine', 'Postproducción', 'Marcas', 'Eventos', 'Galicia'].map((tag) => (
              <span key={tag} className="kv-chip text-[11px]">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────── */}
      <section className="border-b border-zinc-800/60 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '+25', label: 'proyectos realizados' },
              { value: 'FPV', label: 'certificado AESA' },
              { value: '3+', label: 'años de experiencia' },
              { value: '≤10d', label: 'entrega media' },
            ].map((stat, i) => (
              <div
                key={stat.value}
                className={`flex flex-col ${i % 2 === 1 ? 'items-end text-right' : 'items-start'} md:items-center md:text-center`}
              >
                <span className="kv-stat-number">{stat.value}</span>
                <span className="kv-caption text-zinc-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="kv-section-title mb-3">Servicios de producción</h2>
            <p className="kv-body-muted max-w-xl">
              Producción integral — desde la idea hasta la pieza lista para publicar.
            </p>
          </div>
          <Link to="/servicios/" className="kv-button-secondary text-sm shrink-0">
            Ver todos los servicios →
          </Link>
        </div>

        {/* Editorial numbered 2×2 grid */}
        <div className="grid md:grid-cols-2 border border-zinc-800/60 rounded-3xl overflow-hidden">
          {services.map((svc, i) => (
            <article
              key={svc.num}
              className={[
                'group flex gap-5 p-7 md:p-8 hover:bg-zinc-900/50 transition-colors duration-300',
                i % 2 === 0 ? 'md:border-r border-zinc-800/60' : '',
                i < 2 ? 'border-b border-zinc-800/60' : '',
              ].join(' ')}
            >
              <span className="kv-service-num shrink-0 pt-0.5">{svc.num}</span>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400">{svc.icon}</span>
                  <h3 className="kv-card-title text-zinc-100">{svc.titulo}</h3>
                </div>
                <p className="kv-card-body text-zinc-400 group-hover:text-zinc-300 transition-colors">{svc.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-14 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="kv-section-title mb-2">Últimos trabajos</h2>
            <p className="kv-body-muted max-w-md">
              Proyectos audiovisuales para marcas, eventos y espacios en Galicia.
            </p>
          </div>
          <Link to="/proyectos/" className="kv-button-secondary text-sm">
            Ver proyectos completos →
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

      {/* ── EDITORIAL STATEMENT ──────────────────────────────────────── */}
      <section className="border-t border-b border-zinc-800/60 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-20 items-center">
            <div>
              <h2 className="kv-statement-title">
                No solo grabo.<br />
                <span className="text-zinc-600">Planifico. Dirijo. Edito.</span>
              </h2>
            </div>
            <div className="space-y-5">
              <p className="kv-body-muted">
                Me encargo de todo el flujo: concepto, guion, rodaje, FPV y postproducción.
                El objetivo es que el vídeo no solo se vea bien, sino que cumpla una función
                clara dentro de tu marketing o evento.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                {[
                  'Preproducción con objetivos y guion técnico',
                  'Rodaje con cámara de cine y dron FPV',
                  'Edición, color, sonido y música con licencia',
                  'Adaptación a formatos para redes y campañas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,151,21,0.6)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/sobre-mi/" className="kv-button-secondary inline-flex text-sm">
                Sobre mí →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT TYPES ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="mb-10">
          <h2 className="kv-section-title mb-3">¿Con quién trabajo?</h2>
          <p className="kv-body-muted max-w-2xl">
            Marcas, proyectos y eventos que necesitan una mirada cercana y una producción ágil.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {clientTypes.map((item) => (
            <article
              key={item.titulo}
              className="group relative overflow-hidden kv-glass-soft rounded-2xl p-5 md:p-6 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_20px_40px_-24px_rgba(245,151,21,0.45)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-400/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/8 blur-3xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-400/30 bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors mb-2">
                  {item.titulo}
                </h3>
                <p className="kv-card-body text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {item.texto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-14 md:pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-6 py-12 md:px-12 md:py-16">
          <div className="pointer-events-none absolute -top-28 -right-20 h-80 w-80 rounded-full bg-amber-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-amber-500/8 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="kv-section-title mb-3">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="kv-lede">
                Escríbeme para ver si encaja lo que necesitas con lo que puedo ofrecerte.
                Sin compromiso. Comencemos a impulsar tu presencia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/contacto/" className="kv-button-primary kv-button-accent">
                Pedir presupuesto
              </Link>
              <a
                href="mailto:hola@kulmenvisuals.com"
                className="kv-button-secondary"
              >
                Escribir un email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-14 md:pb-20">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="kv-section-title mb-2">Preguntas frecuentes</h2>
            <p className="kv-body-muted max-w-2xl">
              Respuestas rápidas sobre producción audiovisual, FPV y entregas.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group kv-glass-soft rounded-2xl border border-white/10 p-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="kv-card-title text-zinc-100">
                    {item.question}
                  </span>
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="kv-body-muted mt-3 text-zinc-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

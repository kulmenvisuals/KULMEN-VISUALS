import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { usePageSeo } from '../utils/seo.js'

const featuredProjects = Array.isArray(projects) ? projects.slice(0, 3) : []

const clientLogos = [
  { name: 'Banca March', src: '/images/logo-banca-march.webp' },
  { name: 'Norvento Technpower', src: '/images/logo-norvento-technpower.jpg' },
  { name: 'Cobre San Rafael', src: '/images/logo-cobre-san-rafael.jpg' },
  { name: 'Orballo', src: '/images/orballo_logo.jpg' },
  { name: 'Orestes Comunica', src: '/images/logo-orestes-comunica.webp' },
  { name: 'Grupo Country Homes', src: '/images/logo-gch.png' },
  { name: 'XGAP Fitness Center', src: '/images/logo-xgap.png' },
]

const servicios = [
  {
    id: 'produccion',
    titulo: 'Producción audiovisual',
    texto:
      'Rodaje con enfoque narrativo y publicitario para marcas, eventos y proyectos.',
    to: '/produccion-audiovisual-galicia/',
  },
  {
    id: 'fpv',
    titulo: 'FPV cinematográfico',
    texto:
      'Planos aéreos dinámicos e inmersivos que generan impacto y diferenciación.',
    to: '/grabacion-con-drones-fpv/',
  },
  {
    id: 'edicion',
    titulo: 'Edición y postproducción',
    texto:
      'Montaje, ritmo, música y color para un acabado profesional listo para publicar.',
    to: '/edicion-y-postproduccion-de-video/',
  },
  {
    id: 'redes',
    titulo: 'Contenido para redes',
    texto:
      'Versiones optimizadas por formato y plataforma para aprovechar cada rodaje al máximo.',
    to: '/contenido-para-redes-sociales/',
  },
]

const proceso = [
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
    titulo: 'Montaje y color',
    texto:
      'Edición, corrección de color y entrega en formatos listos para redes, web o campañas. Ritmo cuidado y narrativa clara.',
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
      url: "https://kulmenvisuals.com/produccion-audiovisual-galicia/",
    },
    {
      "@type": "Service",
      name: "FPV cinematográfico",
      serviceType: "Drones FPV",
      provider: { "@id": "https://kulmenvisuals.com/#localbusiness" },
      areaServed: "Galicia",
      url: "https://kulmenvisuals.com/grabacion-con-drones-fpv/",
    },
    {
      "@type": "Service",
      name: "Edición y postproducción",
      serviceType: "Postproducción de vídeo",
      provider: { "@id": "https://kulmenvisuals.com/#localbusiness" },
      areaServed: "Galicia",
      url: "https://kulmenvisuals.com/edicion-y-postproduccion-de-video/",
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
  title: 'Producción audiovisual con drones FPV en Galicia | Kulmen Visuals',
  description:
    'Productora audiovisual y piloto FPV en Galicia. Rodaje, drones FPV cinematográficos y edición para marcas, eventos y turismo. Pide presupuesto sin compromiso.',
  pathname: '/',
}

const easeOut = [0.16, 1, 0.3, 1]

function Reveal({ children, delay = 0, className }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: easeOut }}
    >
      {children}
    </Motion.div>
  )
}

export default function Home() {
  usePageSeo(homeSeo)
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()

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
      // continuar igualmente: Formspree gestiona reintentos
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

      {/* HERO con vídeo de fondo */}
      <section className="relative -mt-[5.25rem] md:-mt-[5.5rem] min-h-[84vh] md:min-h-[92vh] overflow-hidden flex items-center pt-28 pb-12 md:pt-32">
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
            alt="Grabación FPV cinematográfica para marca en Galicia, Kulmen Visuals"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-zinc-950 md:from-black/60 md:via-black/35" />

        <Motion.div
          className="relative z-10 w-full max-w-6xl mx-auto px-4"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <div className="max-w-3xl">
            <h1 className="kv-hero-title mb-5">
              Producción audiovisual con{' '}
              <span className="text-amber-400">drones FPV</span> en
              Galicia.
            </h1>
            <p className="kv-lede max-w-xl mb-8">
              Vídeos para marcas, espacios y eventos que necesitan destacar.
              Grabación y edición pensados para obtener el mayor impacto en
              redes, campañas y web.
            </p>

            <div className="flex flex-wrap gap-3 md:hidden">
              <Link to="/contacto/" className="kv-button-primary kv-button-accent">
                Pedir presupuesto
              </Link>
              <Link to="/proyectos/" className="kv-button-secondary">
                Ver proyectos
              </Link>
            </div>

            {/* Captura de lead en desktop */}
            <form
              onSubmit={handleHeroSubmit}
              className="hidden md:flex w-full max-w-2xl flex-col gap-3"
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
                  className="w-full md:flex-1 rounded-full bg-black/50 border border-white/15 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-400 transition focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30"
                  aria-label="Correo electrónico"
                />
                <input
                  type="text"
                  name="interes"
                  required
                  placeholder="¿Qué necesitas? Spot, evento, FPV..."
                  className="w-full md:flex-[1.2] rounded-full bg-black/50 border border-white/15 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-400 transition focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30"
                  aria-label="Interés del proyecto"
                />
                <button
                  type="submit"
                  className="kv-button-primary kv-button-accent md:shrink-0"
                >
                  Pedir presupuesto
                </button>
              </div>
            </form>
          </div>
        </Motion.div>
      </section>

      {/* Logos de clientes: prueba social bajo el hero */}
      <section className="py-12 md:py-16" aria-label="Clientes">
        <p className="text-center text-sm text-zinc-500 mb-10 px-4">
          Han confiado en Kulmen Visuals
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />
          <div className="flex items-center gap-16 md:gap-20 animate-marquee w-max">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <img
                key={`${client.name}-${i}`}
                src={client.src}
                alt={client.name}
                className="h-9 md:h-10 w-auto max-w-[140px] object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition duration-500"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios: filas editoriales, no tarjetas */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <Reveal>
          <h2 className="kv-section-title mb-3">
            Servicios de producción audiovisual
          </h2>
          <p className="kv-body-muted max-w-2xl mb-10 md:mb-12">
            Producción integral con foco narrativo, fluidez y acabado profesional.
          </p>
        </Reveal>

        <div>
          {servicios.map((servicio, i) => (
            <Reveal key={servicio.id} delay={i * 0.05}>
              <Link
                to={servicio.to}
                className="group grid gap-3 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_auto] md:items-center border-t border-white/10 py-8 md:py-10"
              >
                <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] text-zinc-200 group-hover:text-amber-300 transition-colors duration-300">
                  {servicio.titulo}
                </h3>
                <p className="text-sm md:text-base text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 md:pr-10">
                  {servicio.texto}
                </p>
                <ArrowRight
                  className="hidden md:block h-6 w-6 text-zinc-700 transition duration-300 group-hover:text-amber-400 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* Enfoque estratégico: split editorial */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="grid gap-12 md:gap-16 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <h2 className="kv-section-title mb-4">
                Vídeo con enfoque estratégico, no solo bonito
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
              <ul className="mt-6 flex flex-wrap gap-2">
                {['Marcas', 'Eventos', 'Turismo', 'Espacios'].map((tag) => (
                  <li key={tag} className="kv-chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="kv-card-title text-zinc-100 mb-4">
                Qué incluye cada proyecto
              </h3>
              <ul className="divide-y divide-white/10">
                {[
                  'Preproducción con objetivos y guion técnico.',
                  'Rodaje con cámara de cine y dron FPV.',
                  'Edición, color, sonido y música con licencia.',
                  'Adaptación a formatos para redes y campañas.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5 text-sm md:text-base text-zinc-300">
                    <span className="kv-bullet mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Últimos trabajos: destacado grande + dos secundarios */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
            <div>
              <h2 className="kv-section-title mb-2">Últimos trabajos</h2>
              <p className="kv-body-muted max-w-md">
                Proyectos audiovisuales para marcas, eventos y espacios en Galicia.
              </p>
            </div>
            <Link to="/proyectos/" className="kv-button-secondary text-sm">
              Ver proyectos
            </Link>
          </div>
        </Reveal>

        {featuredProjects.length === 0 ? (
          <p className="kv-body-muted text-zinc-500">
            Aún no hay proyectos cargados en <code>data/projects.js</code>.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal
                key={project.id || project.slug}
                delay={i * 0.08}
                className={i === 0 ? 'md:col-span-2' : undefined}
              >
                <ProjectCard project={project} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* Detrás de la cámara: io */}
      <section className="border-t border-white/5 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <Reveal>
              <div className="relative max-w-sm mx-auto md:mx-0">
                <div className="rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src={`${import.meta.env.BASE_URL}images/io-portrait.jpg`}
                    alt="io Rodríguez, creadora audiovisual y piloto de drones FPV"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="kv-section-title mb-4">
                Detrás de cada proyecto: io Rodríguez
              </h2>
              <p className="kv-body-muted mb-4 max-w-xl">
                Creadora audiovisual y piloto de drones FPV certificada por EASA.
                Un solo interlocutor de principio a fin: hablas directamente con
                quien graba, vuela y edita tu pieza.
              </p>
              <p className="kv-body-muted mb-6 max-w-xl">
                Trabajo bien con equipos pequeños que no tienen departamento de
                vídeo pero necesitan contenido sólido y constante, sin
                complicarse la vida.
              </p>
              <ul className="flex flex-wrap gap-2 mb-8">
                {[
                  'Piloto certificada EASA',
                  'Realizadora audiovisual',
                  'Editora de contenidos',
                ].map((chip) => (
                  <li key={chip} className="kv-chip">
                    {chip}
                  </li>
                ))}
              </ul>
              <Link to="/sobre-mi/" className="kv-button-secondary">
                Conocer mi forma de trabajar
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Proceso completo */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <Reveal>
          <h2 className="kv-section-title mb-3">Realizo todo el proceso</h2>
          <p className="kv-body-muted max-w-2xl mb-10 md:mb-14">
            Desde la idea inicial hasta la pieza final lista para publicar.
            Planifico cada etapa para que el rodaje fluya y el resultado cumpla
            el objetivo.
          </p>
        </Reveal>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map((fase, i) => (
            <Reveal key={fase.id} delay={i * 0.07}>
              <div className="border-l-2 border-amber-400/50 pl-5">
                <h3 className="kv-card-title text-zinc-100 mb-2">
                  {fase.titulo}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {fase.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA final: editorial */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02] mb-6 [text-wrap:balance]">
              ¿Tienes un proyecto <span className="text-amber-400">en mente</span>?
            </h2>
            <p className="kv-lede max-w-lg mx-auto mb-10">
              Cuéntame qué necesitas y te respondo con una propuesta clara.
              Sin compromiso.
            </p>
            <Link to="/contacto/" className="kv-button-primary kv-button-accent text-base px-8 py-3.5">
              Pedir presupuesto
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="max-w-3xl mx-auto px-4 py-20 md:py-24 border-t border-white/5">
        <Reveal>
          <h2 className="kv-section-title mb-3">Preguntas frecuentes</h2>
          <p className="kv-body-muted mb-8">
            Respuestas rápidas sobre producción audiovisual, FPV y entregas.
          </p>
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqItems.map((item) => (
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
      </section>
    </div>
  )
}

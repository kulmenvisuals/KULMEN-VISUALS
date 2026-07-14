// src/pages/Servicios.jsx
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Camera, Drone, Heart, Scissors } from "lucide-react"
import { especialidades } from "../data/servicios.js"
import VideoPlayer from "../components/VideoPlayer.jsx"
import { usePageSeo } from "../utils/seo.js"

const assetBase = import.meta.env.BASE_URL
const heroVideo = `${assetBase}videos/hero.mp4`
const heroPoster = `${assetBase}images/hero-poster.jpg`

const equipmentGroups = [
  {
    id: "camaras",
    label: "Cámaras",
    grid: "md:grid-cols-2",
    items: [
      {
        name: "Blackmagic 4K",
        alt: "Cámara Blackmagic 4K, equipo de rodaje Kulmen Visuals",
        desc: "Look cinematográfico y rango dinámico para piezas con intención visual.",
        tags: ["Spots", "Narrativa", "Entrevistas cuidadas"],
        image: `${assetBase}images/blackmagic.jpg`,
      },
      {
        name: "Lumix S5II",
        alt: "Lumix S5II, cámara principal de producción Kulmen Visuals",
        desc: "Full frame ágil y fiable en poca luz para rodajes rápidos.",
        tags: ["Eventos", "Entrevistas", "Run & gun"],
        image: `${assetBase}images/lumix-s5ii.jpeg`,
      },
    ],
  },
  {
    id: "drones",
    label: "Drones",
    grid: "md:grid-cols-3",
    items: [
      {
        name: "DJI Mini 4 Pro",
        alt: "DJI Mini 4 Pro, dron de rodaje aéreo Kulmen Visuals",
        desc: "Compacto y discreto, ideal para tomas limpias de localización.",
        tags: ["Turismo", "Exteriores", "Establishing shots"],
        image: `${assetBase}images/dji-mini-4pro.webp`,
      },
      {
        name: "FPV Mark 5",
        alt: "FPV Mark 5, dron FPV cinematográfico Kulmen Visuals",
        desc: "Velocidad y energía con vuelos dinámicos y agresivos.",
        tags: ["Deporte", "Acción", "Adrenalina"],
        image: `${assetBase}images/geprc-mark5.jpg`,
      },
      {
        name: "GEPRC Cinelog 30 V3",
        alt: "GEPRC Cinelog 30 V3, dron FPV indoor Kulmen Visuals",
        desc: "Cinewhoop estable para interiores y vuelos cercanos.",
        tags: ["Eventos indoor", "Recorridos", "Espacios reducidos"],
        image: `${assetBase}images/geprc-cinelog-30-v3.png`,
      },
    ],
  },
]

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://kulmenvisuals.com/#kulmen-services",
      name: "Producción audiovisual y dron FPV en Galicia",
      serviceType: "Servicios audiovisuales, grabación con dron FPV y postproducción",
      provider: {
        "@id": "https://kulmenvisuals.com/#kulmen-business",
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Galicia",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios Kulmen Visuals",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Cine y Publicidad",
            description: "Spots y piezas cortas para campañas, webs y lanzamientos de producto.",
          },
          {
            "@type": "Offer",
            name: "FPV Profesional",
            description: "Planos FPV para vehículos, deporte y recorridos inmersivos en espacios y negocios.",
          },
          {
            "@type": "Offer",
            name: "Eventos y Cultura",
            description: "Aftermovies, resúmenes de evento y clips verticales listos para redes.",
          },
          {
            "@type": "Offer",
            name: "Turismo y Territorio",
            description: "Piezas que muestran el lugar con contexto: paisaje, actividad y personas.",
          },
        ],
      },
    },
    {
      "@type": "Service",
      name: "Grabación con drones FPV",
      serviceType: "Drones FPV",
      areaServed: "ES",
      provider: {
        "@type": "Organization",
        name: "Kulmen Visuals",
        url: "https://kulmenvisuals.com",
      },
    },
    {
      "@type": "Service",
      name: "Producción de vídeo",
      serviceType: "Producción audiovisual",
      areaServed: "ES",
      provider: {
        "@type": "Organization",
        name: "Kulmen Visuals",
        url: "https://kulmenvisuals.com",
      },
    },
    {
      "@type": "Service",
      name: "Edición y postproducción de vídeo",
      serviceType: "Postproducción",
      areaServed: "ES",
      provider: {
        "@type": "Organization",
        name: "Kulmen Visuals",
        url: "https://kulmenvisuals.com",
      },
    },
    {
      "@type": "Service",
      name: "Contenido para redes sociales",
      serviceType: "Contenido para RRSS",
      areaServed: "ES",
      provider: {
        "@type": "Organization",
        name: "Kulmen Visuals",
        url: "https://kulmenvisuals.com",
      },
    },
    {
      "@type": "Service",
      name: "Contenido audiovisual y multimedia",
      serviceType: "Contenido audiovisual",
      areaServed: "ES",
      provider: {
        "@type": "Organization",
        name: "Kulmen Visuals",
        url: "https://kulmenvisuals.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué tipo de proyectos cubrís con dron FPV?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rodajes dinámicos para deporte, acción, turismo y eventos. El FPV aporta movimiento cercano y una perspectiva inmersiva.",
          },
        },
        {
          "@type": "Question",
          name: "¿Ofrecéis producción completa o solo postproducción?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Podemos encargarnos de todo el proceso o entrar en una fase concreta: rodaje, edición, color o entrega final.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajáis solo en Pontevedra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estamos en Pontevedra y trabajamos en toda España según el proyecto.",
          },
        },
      ],
    },
  ],
}

const mainServices = [
  {
    id: "produccion-audiovisual",
    title: "Producción audiovisual",
    href: "/produccion-audiovisual-galicia/",
    icon: Camera,
    intro:
      "Planificación y rodaje de vídeo para marcas, eventos y espacios, con un enfoque narrativo y visual coherente con el mensaje.",
    usage: [
      "Vídeos de marca y campañas",
      "Lanzamientos y activaciones",
      "Piezas clave para web y RRSS",
    ],
    includes: [
      "Definición de enfoque visual",
      "Rodaje en localización",
      "Dirección de plano y ritmo",
    ],
    result: "Resultado: base sólida y reutilizable para la edición.",
  },
  {
    id: "fpv-cinematografico",
    title: "FPV cinematográfico",
    href: "/grabacion-con-drones-fpv/",
    icon: Drone,
    iconClassName: "h-6 w-6",
    intro:
      "Grabación aérea dinámica con drones FPV para generar movimiento, inmersión y continuidad visual.",
    usage: [
      "Eventos y acciones en directo",
      "Recorridos fluidos de espacios",
      "Acción y movimiento con impacto",
    ],
    includes: [
      "Planificación de vuelo y permisos",
      "Grabación en exterior e interior",
      "Integración en edición y ritmo",
    ],
    result: "Resultado: inmersión sin distraer del mensaje.",
  },
  {
    id: "edicion-postproduccion",
    title: "Edición y postproducción",
    href: "/edicion-y-postproduccion-de-video/",
    icon: Scissors,
    intro:
      "Montaje final del proyecto con atención al ritmo, la estructura y el uso real del vídeo.",
    usage: [
      "Selección y montaje de planos",
      "Ritmo y duración final",
      "Narrativa adaptada al canal",
    ],
    includes: [
      "Música y sonido",
      "Corrección de color",
      "Exportaciones por formato",
    ],
    result: "Resultado: pieza clara, dinámica y lista para publicar.",
  },
  {
    id: "contenido-redes",
    title: "Contenido para redes",
    href: "/contenido-para-redes-sociales/",
    icon: Heart,
    intro:
      "Creación de piezas de vídeo pensadas específicamente para redes sociales, a partir de un enfoque claro y un material bien planteado desde el rodaje.",
    usage: [
      "Comunicación directa en RRSS",
      "Multipieza desde un rodaje",
      "Coherencia visual de marca",
    ],
    includes: [
      "Planificación desde el inicio",
      "Grabación pensada por formato",
      "Edición con puntos de atención",
    ],
    result: "Resultado: vídeos listos para publicar y alineados con la estrategia.",
  },
]

const serviciosSeo = {
  title: 'Servicios de producción audiovisual y dron FPV en Galicia | Kulmen Visuals',
  description:
    'Producción audiovisual completa en Galicia: vídeo para marcas, FPV profesional, edición y contenido para redes. Conoce todos los servicios de Kulmen Visuals.',
  pathname: '/servicios',
}

export default function Servicios() {
  usePageSeo(serviciosSeo)

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: 'Servicios de producción audiovisual',
        content_category: 'Servicios',
        content_type: 'product',
      })
    }
  }, [])

  const especialidadesList = Array.isArray(especialidades) ? especialidades : []


  return (
    <div className="bg-zinc-950 text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* HERO: vídeo + copy de servicios */}
      <section className="relative border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid gap-10 lg:grid-cols-2 items-center">
          {/* Texto */}
          <div className="space-y-4">
            <p className="kv-eyebrow text-amber-300/80">
              Servicios
            </p>
            <h1 className="kv-page-title">
              De la idea al máster final.
              <br />
              Vídeo, FPV y contenido para marcas y proyectos.
            </h1>
            <p className="kv-lede max-w-xl">
              Planifico, grabo y edito vídeo para marcas, eventos y espacios que
              necesitan comunicar con intención y diferenciarse. Desde campañas de
              marca hasta coberturas ágiles de eventos y turismo.
            </p>

          </div>

          {/* Vídeo */}
          <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black/60 kv-glass-soft">
            <VideoPlayer src={heroVideo} poster={heroPoster} label="Reel de trabajo" />
          </div>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-8">
          <header className="space-y-2">
            <p className="kv-eyebrow text-amber-300/80">
              Servicios
            </p>
            <h2 className="kv-section-title">
              Cuatro servicios, una narrativa consistente.
            </h2>
            <p className="kv-lede max-w-2xl">
              Bloques combinables según lo que necesite tu proyecto.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {mainServices.map((service) => (
              <article
                key={service.id}
                className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-950/70 kv-glass-soft backdrop-blur transition-transform duration-300 hover:scale-[1.01] hover:border-zinc-700"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] bg-amber-400/50" />
                <div className="relative z-10 px-6 py-7 md:px-8 md:py-8 space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-200">
                        <service.icon
                          className={service.iconClassName ?? "h-5 w-5"}
                        />
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-zinc-50">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-zinc-300">
                      {service.intro}
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <p className="kv-eyebrow text-zinc-400">
                        Para qué sirve
                      </p>
                      <ul className="space-y-1.5 text-sm text-zinc-200/90">
                        {service.usage.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="kv-bullet mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="kv-eyebrow text-zinc-400">
                        Qué incluye
                      </p>
                      <ul className="space-y-1.5 text-sm text-zinc-200/90">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="kv-bullet mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-amber-100/90 border-t border-amber-300/10 pt-3">
                    {service.result}
                  </p>

                  {service.href && (
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-400/10 px-4 py-2.5 text-sm font-semibold text-amber-300 transition duration-300 hover:border-amber-300/45 hover:bg-amber-400/15 hover:text-amber-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    >
                      Ver servicio en detalle
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES – estilo “antes”, títulos grandes + hover */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-8">
          <header className="space-y-2">
            <h2 className="kv-section-title">
              ¿Para qué tipo de proyectos encajamos mejor?
            </h2>
            <p className="kv-lede max-w-2xl">
              Desde cine y publicidad hasta turismo y cultura. Adaptamos el lenguaje
              visual y el ritmo al contexto de cada pieza.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {especialidadesList.map((card) => (
              <article
                key={card.id}
                className="relative rounded-[32px] overflow-hidden kv-glass-soft group
                           transition-transform duration-300 ease-out hover:-translate-y-1.5"
              >
                {/* Glow en hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-24 -left-10 w-40 h-40 bg-amber-400/18 blur-3xl" />
                  <div className="absolute -bottom-24 -right-10 w-44 h-44 bg-amber-500/10 blur-3xl" />
                </div>

                <div className="relative z-10 px-6 pt-8 pb-7 md:px-7 md:pt-9 md:pb-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-50 mb-4">
                    {card.titulo}
                  </h3>
                  <p className="kv-lede text-zinc-200/90 mb-5">
                    {card.descripcion}
                  </p>

                  <ul className="space-y-3 text-sm md:text-base text-zinc-100/90">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="kv-bullet mt-2" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Equipo audiovisual */}
      <section className="border-t border-zinc-900/80 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-10">
          <header className="space-y-2">
            <p className="kv-eyebrow text-amber-300/80">
              Equipo audiovisual
            </p>
            <h2 className="kv-section-title">
              Herramientas pensadas para cada tipo de rodaje.
            </h2>
            <p className="kv-lede max-w-2xl">
              El equipo no es un listado técnico: es la clave para elegir el
              lenguaje visual correcto. Aquí tienes una vista rápida de para qué
              encaja cada cámara y cada dron.
            </p>
          </header>

          <div className="grid gap-6">
            {equipmentGroups.map((group) => (
              <div
                key={group.id}
                className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/70 kv-glass-soft"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-20 right-8 h-40 w-40 rounded-full bg-amber-500/8 blur-3xl" />
                  <div className="absolute -bottom-24 left-6 h-48 w-48 rounded-full bg-amber-400/6 blur-3xl" />
                </div>

                <div className="relative z-10 px-6 py-8 md:px-8 md:py-9 space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="kv-eyebrow text-amber-300/80">
                      {group.label}
                    </p>
                    <span className="kv-caption text-zinc-500">
                      {group.items.length} opciones
                    </span>
                  </div>

                  <div className={`grid gap-4 ${group.grid}`}>
                    {group.items.map((item) => (
                      <article
                        key={item.name}
                        className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 overflow-hidden"
                      >
                        <div className="aspect-[16/9] w-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.alt || item.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 space-y-3">
                        <div className="space-y-1">
                          <h3 className="kv-card-title text-zinc-100">
                            {item.name}
                          </h3>
                          <p className="kv-card-body text-zinc-300">{item.desc}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px] text-amber-200">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="kv-section-title mb-2">
              ¿Qué necesitas?
            </h2>
            <p className="kv-lede max-w-md">
              Si tienes una idea, una fecha o un objetivo, lo vemos.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

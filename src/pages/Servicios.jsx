// src/pages/Servicios.jsx
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Camera, Drone, Heart, Scissors, CheckCircle2 } from "lucide-react"
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

const moreServices = [
  {
    href: "/video-corporativo-con-dron/",
    title: "Vídeo corporativo",
    desc: "Empresas, industria e instalaciones: vídeos para web, ferias y presentaciones.",
  },
  {
    href: "/dron-para-cine-y-publicidad/",
    title: "Publicidad y spots",
    desc: "Piezas cortas para campañas y anuncios, con planos aéreos si la idea lo pide.",
  },
  {
    href: "/dron-para-eventos/",
    title: "Vídeo para eventos",
    desc: "Festivales, conciertos, competiciones y activaciones de marca.",
  },
  {
    href: "/fotografia-y-video-de-bodas/",
    title: "Fotografía y vídeo de bodas",
    desc: "Reportaje, película del día y planos aéreos FPV.",
  },
  {
    href: "/servicios-grabacion-con-drones/",
    title: "Grabación aérea con drones",
    desc: "FPV, cinewhoop de interiores y dron estabilizado con piloto certificada.",
  },
  {
    href: "/fotografia-aerea-con-dron-galicia/",
    title: "Fotografía aérea",
    desc: "Fotos aéreas editadas, HDR y 360° para espacios, obras y empresas.",
  },
  {
    href: "/alquiler-drones-con-piloto/",
    title: "Alquiler de dron con piloto",
    desc: "Dron y piloto para tu producción, con permisos y seguro.",
  },
]

const datos = [
  { valor: "+5 años", texto: "produciendo vídeo para marcas, empresas y eventos" },
  { valor: "3 fases", texto: "preproducción, rodaje y edición sin intermediarios" },
  { valor: "Equipo a medida", texto: "sola en piezas ágiles, con equipo en producciones grandes" },
  { valor: "Galicia y España", texto: "base en Pontevedra y presupuesto cerrado con desplazamiento" },
]

const modalidades = [
  {
    title: "Proyecto cerrado",
    desc: "Una pieza o una campaña completa, de la idea a la entrega, con presupuesto cerrado antes de empezar.",
  },
  {
    title: "Packs mensuales",
    desc: "Rodaje periódico para tener contenido constante en redes sin preparar un encargo cada vez.",
    href: "/contenido-para-redes-sociales/",
    link: "Contenido para redes",
  },
  {
    title: "Jornada de rodaje",
    desc: "Días o medias jornadas de cámara o dron para tu producción, sin edición incluida.",
    href: "/alquiler-drones-con-piloto/",
    link: "Dron con piloto",
  },
  {
    title: "Solo edición",
    desc: "Tú aportas el material y yo me encargo del montaje, el color, el sonido y las versiones por formato.",
    href: "/edicion-y-postproduccion-de-video/",
    link: "Edición y postproducción",
  },
]

const clientes = [
  { name: "Cobre San Rafael", href: "/proyectos/patrocinios-cobre-san-rafael/", detail: "piezas de patrocinio deportivo con Orestes Comunica" },
  { name: "Banca March", href: "/proyectos/banca-march-lynda-benglis/", detail: "reportaje de arte en Madrid con Starporcasa" },
  { name: "Norvento Technpower", href: "/proyectos/rrss-norvento-technpower/", detail: "contenido de producto para redes" },
  { name: "AE League", href: "/proyectos/ae-league-2026-anuncio-oficial/", detail: "anuncio oficial de AE League 2026" },
  { name: "Grupo Country Homes", href: "/proyectos/video-inmobiliario-grupo-country-homes/", detail: "vídeo inmobiliario de propiedades" },
  { name: "Villa Boutique 1880", href: "/proyectos/anuncio-documental-villa-boutique-1880/", detail: "anuncio documental con FPV" },
]

const faqs = [
  {
    question: "¿Qué servicios ofrece una productora audiovisual?",
    answer:
      "Todo lo necesario para que un vídeo llegue a publicarse: preproducción (objetivo, guion, localizaciones y permisos), rodaje con cámara, dron y sonido, y postproducción (montaje, color, música y versiones por formato). En mi caso también incluye grabación aérea con drones FPV y estabilizados, fotografía aérea y contenido para redes sociales.",
  },
  {
    question: "¿Qué diferencia hay entre una productora de vídeo y una productora de contenidos?",
    answer:
      "Una productora de vídeo suele trabajar por proyectos: un spot, un vídeo corporativo o un aftermovie. Una productora de contenidos produce de forma continua para redes y canales propios. Yo hago las dos cosas: proyectos cerrados y packs mensuales de contenido con rodaje periódico.",
  },
  {
    question: "¿Puedo contratar solo el rodaje o solo la edición?",
    answer:
      "Sí. Puedes contratar jornadas o medias jornadas de rodaje con cámara o dron sin edición, o enviarme tu material para que lo edite. No hace falta contratar la producción completa.",
  },
  {
    question: "¿Trabajas para agencias?",
    answer:
      "Sí, también en marca blanca. Agencias como Orestes Comunica o Starporcasa me han subcontratado la producción de piezas para sus clientes, y me adapto a su guion, su línea visual y sus plazos.",
  },
  {
    question: "¿Trabajas sola o con equipo?",
    answer:
      "Depende del proyecto. En piezas ágiles grabo y edito yo, lo que reduce costes y simplifica la comunicación. En producciones más grandes sumo los perfiles que haga falta, siempre con una sola interlocutora para ti.",
  },
  {
    question: "¿Cuánto se tarda en tener un vídeo?",
    answer:
      "Eventos y piezas sencillas, entre 3 y 10 días laborables. Spots, vídeos de marca y proyectos con más postproducción, entre 2 y 4 semanas. Si hay una fecha límite, se planifica desde el inicio.",
  },
  {
    question: "¿Cuánto cuesta contratar una productora de vídeo?",
    answer:
      "Depende de la duración de la pieza, las jornadas de rodaje, el equipo, los desplazamientos y la edición. Preparo un presupuesto cerrado y desglosado tras una breve conversación sobre lo que necesitas.",
  },
]

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://kulmenvisuals.com/servicios/#service",
      name: "Servicios audiovisuales de Kulmen Visuals",
      serviceType: "Productora de vídeo",
      description:
        "Productora de vídeo independiente: producción audiovisual, vídeo corporativo, publicidad, eventos, contenido para redes sociales, edición y grabación aérea con drones.",
      url: "https://kulmenvisuals.com/servicios/",
      provider: { "@id": "https://kulmenvisuals.com/#localbusiness" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Galicia" },
        { "@type": "Country", name: "España" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios audiovisuales",
        itemListElement: [...mainServices, ...moreServices].map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: `https://kulmenvisuals.com${service.href}`,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://kulmenvisuals.com/" },
        { "@type": "ListItem", position: 2, name: "Servicios", item: "https://kulmenvisuals.com/servicios/" },
      ],
    },
  ],
}

const serviciosSeo = {
  title: 'Productora de vídeo | Servicios audiovisuales para empresas',
  description:
    'Productora de vídeo independiente en Galicia: vídeo corporativo, publicidad, eventos, redes sociales, drones FPV y edición. Proyecto cerrado, packs o jornadas.',
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
              De la idea al máster final
            </p>
            <h1 className="kv-page-title">
              Productora de vídeo: servicios audiovisuales para marcas y empresas
            </h1>
            <p className="kv-lede max-w-xl">
              Soy io Rodríguez y dirijo Kulmen Visuals, una productora de vídeo
              independiente con base en Pontevedra. Planifico, grabo y edito
              vídeo corporativo, publicidad, eventos y contenido para redes, con
              cámara de cine y drones FPV. Hablas siempre con la persona que
              graba y edita tu pieza.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/contacto/" className="kv-button-primary kv-button-accent">
                Pedir presupuesto
              </Link>
              <Link to="/proyectos/" className="kv-button-secondary">
                Ver proyectos
              </Link>
            </div>

          </div>

          {/* Vídeo */}
          <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black/60 kv-glass-soft">
            <VideoPlayer src={heroVideo} poster={heroPoster} label="Reel de trabajo" />
          </div>
        </div>
      </section>

      {/* Datos clave */}
      <section className="border-b border-zinc-900">
        <dl className="max-w-6xl mx-auto px-4 py-8 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {datos.map((dato) => (
            <div key={dato.valor}>
              <dt className="kv-card-title text-amber-200">{dato.valor}</dt>
              <dd className="kv-card-body text-zinc-400 mt-1">{dato.texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Servicios principales */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-8">
          <header className="space-y-2">
            <p className="kv-eyebrow text-amber-300/80">
              Servicios
            </p>
            <h2 className="kv-section-title">
              Servicios de producción de vídeo
            </h2>
            <p className="kv-lede max-w-2xl">
              Cuatro bloques combinables. Puedes contratar el proceso completo o
              solo la fase que necesites.
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

      {/* Resto del catálogo */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16 space-y-8">
          <header className="space-y-2">
            <h2 className="kv-section-title">Más servicios audiovisuales</h2>
            <p className="kv-lede max-w-2xl">
              Servicios específicos para sectores y formatos concretos, con su
              propia página de detalle.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {moreServices.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group kv-glass-soft rounded-2xl p-5 border border-white/10 transition hover:-translate-y-1 hover:border-amber-300/40"
              >
                <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="kv-card-body text-zinc-400">{service.desc}</p>
                <span className="mt-3 inline-block text-xs text-amber-300/70 group-hover:text-amber-300 transition-colors">
                  Ver servicio →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades de contratación */}
      <section className="border-t border-zinc-900 bg-zinc-950/80">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16 space-y-8">
          <header className="space-y-2">
            <h2 className="kv-section-title">Cómo puedes contratarme</h2>
            <p className="kv-lede max-w-2xl">
              No todas las empresas necesitan una producción completa. Elige el
              formato que encaje con tu forma de trabajar.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {modalidades.map((item) => (
              <article key={item.title} className="kv-glass-soft rounded-2xl p-5 border border-white/10">
                <h3 className="kv-card-title text-zinc-100 mb-2">{item.title}</h3>
                <p className="kv-card-body text-zinc-400">{item.desc}</p>
                {item.href && (
                  <Link to={item.href} className="mt-3 inline-block text-xs text-amber-300/80 hover:text-amber-300">
                    {item.link} →
                  </Link>
                )}
              </article>
            ))}
          </div>

          <div className="kv-glass rounded-3xl p-6 md:p-8 border border-white/10 grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-center">
            <div className="space-y-3">
              <h3 className="kv-card-title text-zinc-100 text-lg md:text-xl">
                Producción en marca blanca para agencias
              </h3>
              <p className="kv-body-muted">
                Si eres una agencia de marketing o comunicación, puedo producir
                las piezas de tus clientes bajo tu marca: me adapto a tu guion,
                tu línea visual y tus plazos. Así he trabajado con Orestes
                Comunica en los patrocinios de Cobre San Rafael y con
                Starporcasa en el reportaje de Banca March.
              </p>
            </div>
            <ul className="space-y-2 text-zinc-300">
              {[
                "Sin contacto directo con tu cliente si así lo prefieres",
                "Rodaje, dron y edición en un solo proveedor",
                "Entregas en los formatos de tu campaña",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-300 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES – estilo “antes”, títulos grandes + hover */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-8">
          <header className="space-y-2">
            <h2 className="kv-section-title">
              ¿Para qué tipo de proyectos encajo mejor?
            </h2>
            <p className="kv-lede max-w-2xl">
              Desde cine y publicidad hasta turismo y cultura. Adapto el lenguaje
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
              Rodaje con cámara de cine, FPV y dron
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

      {/* Clientes */}
      <section className="border-t border-zinc-900 bg-zinc-950/80">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-16 space-y-8">
          <header className="space-y-2">
            <h2 className="kv-section-title">Empresas y marcas con las que he trabajado</h2>
            <p className="kv-lede max-w-2xl">
              Algunos proyectos recientes. Puedes ver cada uno en el portfolio.
            </p>
          </header>
          <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {clientes.map((cliente) => (
              <li key={cliente.name}>
                <Link
                  to={cliente.href}
                  className="group block kv-glass-soft rounded-xl p-4 border border-white/10 hover:border-amber-300/30 transition-colors"
                >
                  <span className="kv-card-title text-zinc-200 group-hover:text-amber-200 transition-colors block">
                    {cliente.name}
                  </span>
                  <span className="kv-card-body text-zinc-400">{cliente.detail}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h2 className="kv-section-title mb-8">Preguntas frecuentes sobre servicios audiovisuales</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group kv-glass-soft rounded-2xl border border-white/10 p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="kv-card-title text-zinc-100">{item.question}</span>
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="kv-body-muted mt-3">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="kv-body-muted mt-6">
            ¿Buscas producción local? Mira{" "}
            <Link to="/" className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4">
              productora audiovisual en Galicia
            </Link>{" "}
            o la guía de{" "}
            <Link to="/blog/como-elegir-productora-audiovisual/" className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4">
              cómo elegir productora audiovisual
            </Link>
            .
          </p>
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

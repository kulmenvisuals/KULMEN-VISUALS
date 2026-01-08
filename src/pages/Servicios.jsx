// src/pages/Servicios.jsx
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Camera, Drone, Heart, Scissors, Video } from "lucide-react"
import { fases, especialidades } from "../data/servicios.js"
import VideoPlayer from "../components/VideoPlayer.jsx"

const assetBase = import.meta.env.BASE_URL
const heroVideo = `${assetBase}videos/hero.mp4`
const heroPoster = `${assetBase}images/hero_poster.jpg`

const equipmentGroups = [
  {
    id: "camaras",
    label: "Cámaras",
    grid: "md:grid-cols-2",
    items: [
      {
        name: "Blackmagic 4K",
        desc: "Look cinematográfico y rango dinámico para piezas con intención visual.",
        tags: ["Spots", "Narrativa", "Entrevistas cuidadas"],
        image: `${assetBase}images/blackmagic.jpg`,
      },
      {
        name: "Lumix S5II",
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
        desc: "Compacto y discreto, ideal para tomas limpias de localización.",
        tags: ["Turismo", "Exteriores", "Establishing shots"],
        image: `${assetBase}images/dji-mini-4pro.webp`,
      },
      {
        name: "FPV Mark 5",
        desc: "Velocidad y energía con vuelos dinámicos y agresivos.",
        tags: ["Deporte", "Acción", "Adrenalina"],
        image: `${assetBase}images/geprc-mark5.jpg`,
      },
      {
        name: "GEPRC Cinelog 30 V3",
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

export default function Servicios() {
  const fasesList = Array.isArray(fases) ? fases : []
  const especialidadesList = Array.isArray(especialidades) ? especialidades : []

  const [faseActiva, setFaseActiva] = useState(fasesList[0]?.id ?? "prepro")
  const fase = fasesList.find((f) => f.id === faseActiva) ?? fasesList[0] ?? {}

  return (
    <main className="bg-zinc-950 text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* HERO: vídeo + copy de servicios */}
      <section className="relative border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid gap-10 lg:grid-cols-2 items-center">
          {/* Texto */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-300/80">
              Servicios
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              De la idea al máster final.
              <br />
              Vídeo, FPV y contenido para marcas y proyectos.
            </h1>
            <p className="text-zinc-300 max-w-xl text-sm md:text-base">
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
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">
              Servicios
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Cuatro servicios, una narrativa consistente.
            </h2>
            <p className="text-zinc-300 max-w-2xl text-sm md:text-base">
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
                      <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                        Para qué sirve
                      </p>
                      <ul className="space-y-1.5 text-sm text-zinc-200/90">
                        {service.usage.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 inline-block h-[2px] w-4 rounded-full bg-amber-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                        Qué incluye
                      </p>
                      <ul className="space-y-1.5 text-sm text-zinc-200/90">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 inline-block h-[2px] w-4 rounded-full bg-amber-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-amber-100/90 border-t border-amber-300/10 pt-3">
                    {service.result}
                  </p>
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
            <h2 className="text-2xl md:text-3xl font-semibold">
              ¿Para qué tipo de proyectos encajamos mejor?
            </h2>
            <p className="text-zinc-300 max-w-2xl text-sm md:text-base">
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
                  <p className="text-[11px] md:text-xs tracking-[0.35em] text-amber-300/80 uppercase mb-3">
                    ESPECIALIDAD
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-50 mb-4">
                    {card.titulo}
                  </h3>

                  <ul className="space-y-3 text-sm md:text-base text-zinc-100/90">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 inline-block w-5 h-[2px] rounded-full bg-amber-300" />
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

      {/* PROCESO: prepro / pro / post / IA */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <header className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Proceso audiovisual completo: de la idea a la entrega.
          </h2>
          <p className="text-zinc-300 max-w-2xl text-sm md:text-base">
            Preproducción, rodaje, postproducción y edición con IA cuando aporta
            velocidad y consistencia al resultado final.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[230px,1fr] items-start">
          {/* Selector de fase */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2">
            {fasesList.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFaseActiva(f.id)}
                className={`text-left px-4 py-3 rounded-xl border text-sm transition
                  ${
                    f.id === faseActiva
                      ? "border-amber-400 bg-amber-400/10 text-amber-200"
                      : "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-600"
                  }`}
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                  {f.subtitulo}
                </p>
                <p className="font-medium">{f.titulo}</p>
              </button>
            ))}
          </div>

          {/* Contenido de fase */}
          <motion.div
            key={fase.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            {fase.texto && (
              <p className="text-zinc-200 leading-relaxed text-sm md:text-base">
                {fase.texto}
              </p>
            )}

            {Array.isArray(fase.bullets) && fase.bullets.length > 0 && (
              <div className="grid gap-3 md:grid-cols-2">
                {fase.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 px-4 py-3"
                  >
                    <p className="text-sm text-zinc-200/90">{item}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Toggles (prepro) */}
            {Array.isArray(fase.toggles) && fase.toggles.length > 0 && (
              <div className="grid gap-3 md:grid-cols-2">
                {fase.toggles.map((t) => (
                  <div
                    key={t.id}
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900/70 px-4 py-3"
                  >
                    <p className="text-sm font-medium text-amber-200">{t.label}</p>
                    <p className="text-xs text-zinc-400">{t.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Modos (producción) */}
            {Array.isArray(fase.modos) && fase.modos.length > 0 && (
              <div className="grid gap-3 md:grid-cols-2">
                {fase.modos.map((m) => (
                  <div
                    key={m.id}
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 px-4 py-3"
                  >
                    <p className="text-sm font-medium text-amber-200">{m.label}</p>
                    <p className="text-xs text-zinc-400">{m.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Before/After (postproducción) */}
            {fase.beforeAfter && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-zinc-400 uppercase">
                    Antes
                  </p>
                  <div className="rounded-xl overflow-hidden border border-zinc-800">
                    <img
                      src={fase.beforeAfter.before}
                      alt="Antes de corrección de color"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-zinc-400 uppercase">
                    Después
                  </p>
                  <div className="rounded-xl overflow-hidden border border-amber-400/70">
                    <img
                      src={fase.beforeAfter.after}
                      alt="Después de corrección de color"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      </section>

      {/* Equipo audiovisual */}
      <section className="border-t border-zinc-900/80 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-10">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">
              Equipo audiovisual
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Herramientas pensadas para cada tipo de rodaje.
            </h2>
            <p className="text-zinc-300 max-w-2xl text-sm md:text-base">
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
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">
                      {group.label}
                    </p>
                    <span className="text-[11px] text-zinc-500">
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
                            alt={item.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 space-y-3">
                        <div className="space-y-1">
                          <h3 className="text-base font-semibold text-zinc-100">
                            {item.name}
                          </h3>
                          <p className="text-sm text-zinc-300">{item.desc}</p>
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
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              ¿Qué necesitas?
            </h2>
            <p className="text-sm text-zinc-300 max-w-md">
              Si tienes una idea, una fecha o un objetivo, lo vemos.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="kv-button-primary">
              Pedir presupuesto
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

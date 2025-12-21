// src/pages/SobreMi.jsx

// Ruta de la foto (sirve tanto en dev como en GitHub Pages)
const fotoIo = `${import.meta.env.BASE_URL}images/io-portrait.jpg`

const aboutBlocks = [
  {
    id: "como",
    label: "Cómo trabajo",
    title: "Contexto primero, cámara después.",
    text: "Me gusta entender bien el contexto del proyecto: quién eres, qué quieres comunicar y para quién. A partir de ahí planteo una propuesta visual concreta, con referencias claras y una ruta de trabajo realista.",
    bullets: [
      "Escucha activa y briefing cuidado",
      "Referencias visuales compartidas",
      "Plan de trabajo asumible para tu equipo",
    ],
  },
  {
    id: "disfruto",
    label: "Lo que más disfruto",
    title: "El punto exacto donde todo encaja.",
    text: "El momento en el que técnica y emociones se encuentran: un plano FPV bien medido, una transición que respira, un color que cuenta algo más que lo que se ve en pantalla.",
    bullets: [
      "Planos FPV medidos, no gratuitos",
      "Color con intención narrativa",
      "Ritmo que acompaña la música y la historia",
    ],
  },
  {
    id: "clientes",
    label: "Con quién suelo trabajar",
    title: "Proyectos que cuidan el detalle.",
    text: "Marcas, festivales, centros deportivos y proyectos culturales que valoran el detalle visual y quieren algo más que “un vídeo más” para redes.",
    bullets: [
      "Marcas pequeñas y medianas",
      "Festivales y proyectos culturales",
      "Centros deportivos y eventos con alma",
    ],
  },
]

export default function SobreMi() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero con foto + texto */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
              Sobre mí
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              io Rodríguez — Kulmen Visuals
            </h1>
            <p className="text-zinc-300 text-sm md:text-base mb-4 max-w-xl">
              Soy creadora audiovisual y piloto de drones FPV. Me muevo entre el cine,
              la publicidad y los proyectos culturales, buscando siempre piezas que
              tengan cuidado estético y que conecten con las personas.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-4 max-w-xl">
              Trabajo el proyecto de principio a fin: desde pensar la idea y la estrategia,
              hasta el rodaje con cámara y dron, y la postproducción completa
              (montaje, color, sonido, grafismo). También integro herramientas de IA
              cuando aportan valor: moodboards, storyboards y assets híbridos.
            </p>
            <p className="text-zinc-500 text-xs md:text-sm max-w-xl">
              Mi objetivo: que cada pieza tenga alma de cine pero funcione en el mundo
              real de marcas, festivales y redes sociales.
            </p>

            {/* Etiquetas rápidas */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-zinc-900/70 border border-zinc-700/80 text-zinc-200 backdrop-blur-md">
                Dirección y guion
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900/70 border border-zinc-700/80 text-zinc-200 backdrop-blur-md">
                Cámara &amp; FPV
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900/70 border border-zinc-700/80 text-zinc-200 backdrop-blur-md">
                Montaje &amp; color
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900/70 border border-zinc-700/80 text-zinc-200 backdrop-blur-md">
                Contenido con IA
              </span>
            </div>
          </div>

          {/* Foto */}
          <div className="relative w-full max-w-xs md:max-w-sm mx-auto">
            <div className="rounded-3xl overflow-hidden border border-zinc-700/80 bg-zinc-900/60 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
              <img
                src={fotoIo}
                alt="Retrato de io Rodríguez, creadora audiovisual y piloto de drones"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-[11px] text-zinc-500 text-center">
              io Rodríguez — Kulmen Visuals · Galicia
            </p>
          </div>
        </div>
      </section>

      {/* Bloque extra: cómo trabajo / lo que disfruto / con quién trabajo */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20 border-t border-zinc-900">
        <header className="mb-8 md:mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80 mb-2">
            Forma de trabajar
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-50">
            Cómo entiendo el proceso creativo.
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {aboutBlocks.map((block) => (
            <article
              key={block.id}
              className="relative rounded-3xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-xl overflow-hidden group shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
            >
              {/* Foco de color en hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="absolute -top-24 -left-16 w-48 h-48 bg-amber-400/15 blur-3xl" />
                <div className="absolute -bottom-24 -right-8 w-40 h-40 bg-amber-500/10 blur-3xl" />
              </div>

              <div className="relative z-10 px-5 py-5 md:px-6 md:py-6 space-y-3">
                <p className="text-[11px] tracking-[0.3em] uppercase text-amber-300/80">
                  {block.label}
                </p>
                <h3 className="text-base md:text-lg font-semibold text-zinc-50">
                  {block.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                  {block.text}
                </p>

                <ul className="pt-2 space-y-1.5 text-[11px] text-zinc-200/90">
                  {block.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-block w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
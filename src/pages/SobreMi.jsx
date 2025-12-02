// src/pages/SobreMi.jsx

// Ruta de la foto (sirve tanto en dev como en GitHub Pages)
const fotoIo = `${import.meta.env.BASE_URL}images/io-portrait.jpg`

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
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200">
                Dirección y guion
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200">
                Cámara &amp; FPV
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200">
                Montaje &amp; color
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200">
                Contenido con IA
              </span>
            </div>
          </div>

          {/* Foto */}
          <div className="relative w-full max-w-xs md:max-w-sm mx-auto">
            <div className="rounded-3xl overflow-hidden border border-zinc-800/70 bg-zinc-900/60 shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
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

      {/* Bloque extra: cómo trabajo */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20 border-t border-zinc-900">
        <div className="grid gap-8 md:grid-cols-3 text-sm">
          <div>
            <h2 className="text-zinc-100 font-semibold mb-2 text-base">
              Cómo trabajo
            </h2>
            <p className="text-zinc-400">
              Me gusta entender bien el contexto del proyecto: quién eres, qué
              quieres comunicar y para quién. A partir de ahí planteo una propuesta
              visual concreta, con referencias claras y una ruta de trabajo realista.
            </p>
          </div>

          <div>
            <h2 className="text-zinc-100 font-semibold mb-2 text-base">
              Lo que más disfruto
            </h2>
            <p className="text-zinc-400">
              El punto exacto donde técnica y emociones se encuentran: un plano FPV
              bien medido, una transición que respira, un color que cuenta algo más
              que lo que se ve en pantalla.
            </p>
          </div>

          <div>
            <h2 className="text-zinc-100 font-semibold mb-2 text-base">
              Con quién suelo trabajar
            </h2>
            <p className="text-zinc-400">
              Marcas, festivales, centros deportivos y proyectos culturales que
              valoran el detalle visual y quieren algo más que “un vídeo más” para
              redes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
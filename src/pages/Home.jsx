import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  const base = import.meta.env.BASE_URL // respeta GitHub Pages (/KULMEN-VISUALS/)

  return (
    <div className="bg-zinc-950 text-zinc-100">

      {/* HERO: UNA SOLA SECCIÓN */}
      <section className="relative min-h-[70svh] bg-zinc-900 overflow-hidden">
        {/* Vídeo de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={`${base}videos/hero.mp4`}  /* <-- pon aquí tu fichero en public/videos/ */
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* Degradado para contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />

        {/* Contenido sobre el vídeo */}
        <div className="relative z-10 flex items-end min-h-[70svh]">
          <div className="max-w-6xl mx-auto px-4 pb-10">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Historias con alma. Estética de cine.
            </motion.h1>
            <p className="text-zinc-300 mt-2 max-w-xl">
              Productora audiovisual 360°: guion, rodaje, FPV y postproducción desde Galicia.
            </p>
            <div className="flex gap-3 mt-6">
              <Link
                className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
                to="/proyectos"
              >
                Ver proyectos
              </Link>
              <Link
                className="px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition"
                to="/mapa"
              >
                Explorar mapa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— BLOQUE DE PRUEBA ——— */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">
          🔧 PRUEBA: si ves este texto justo debajo del hero y el footer queda al final, el layout está OK.
        </h2>
        <p className="text-zinc-400 mt-2">
          Luego quitamos esta sección y volvemos a meter tus “Últimos trabajos”.
        </p>
      </section>
      {/* ——— FIN BLOQUE DE PRUEBA ——— */}

    </div>
  )
}
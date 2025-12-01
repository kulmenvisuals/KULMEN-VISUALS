// src/pages/Servicios.jsx
import { motion } from "framer-motion"
import { servicios } from "../data/servicios"
import VideoPlayer from "../components/VideoPlayer.jsx"
import Filters from "../components/Filters.jsx"
import ProjectCard from "../components/ProjectCard.jsx"
import Footer from "../components/Footer.jsx"

export default function Servicios() {
  const serviciosClave = servicios.filter((s) => s.destacado)
  const serviciosExtra = servicios.filter((s) => !s.destacado)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col">
      {/* HERO SERVICIOS */}
      <section className="relative border-b border-zinc-800 overflow-hidden">
        {/* Fondo vídeo */}
        <div className="absolute inset-0">
          <VideoPlayer />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/85 to-zinc-950" />
        </div>

        {/* Contenido */}
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <motion.p
            className="text-sm uppercase tracking-[0.2em] text-amber-300 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Servicios
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Acompaño tu proyecto
            <span className="block text-amber-300">de la idea a la pieza final.</span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-zinc-300 text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Diseño campañas, grabo con cámaras de cine y dron FPV y remato la postproducción
            para que tengas piezas redondas para redes, web o publicidad. También puedo
            generar assets con IA cuando ayudan a sumar.
          </motion.p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1">
        {/* Bloque 1 – Proceso en 3 fases */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 border-b border-zinc-900">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Un proceso claro para no perder el foco
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400 mb-2">
                01 · Preproducción
              </p>
              <h3 className="font-medium mb-2">Pensar la pieza</h3>
              <p className="text-zinc-300 text-sm">
                Brief, concepto, guion y planificación. Aterrizamos objetivo, tono, localizaciones
                y qué piezas necesitas exactamente.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400 mb-2">
                02 · Rodaje
              </p>
              <h3 className="font-medium mb-2">Cámaras + dron FPV</h3>
              <p className="text-zinc-300 text-sm">
                Rodaje con cámaras profesionales, dron FPV y sonido. Busco planos con intención:
                ritmo, transiciones y movimiento que sumen a la historia.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400 mb-2">
                03 · Postproducción
              </p>
              <h3 className="font-medium mb-2">Montaje y entregables</h3>
              <p className="text-zinc-300 text-sm">
                Edición, color, grafismos, subtítulos y adaptaciones de formato para que puedas
                usar la pieza en redes, web o campañas de pago.
              </p>
            </div>
          </div>
        </section>

        {/* Bloque 2 – Servicios clave (cards + filtros) */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 border-b border-zinc-900">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">Servicios principales</h2>
              <p className="text-sm text-zinc-400">
                Lo que más me suelen pedir: piezas concretas para objetivos muy claros.
              </p>
            </div>

            {/* Filtros visuales (solo UI, si quieres luego lo hacemos funcional) */}
            <div className="w-full md:w-auto">
              <Filters />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviciosClave.map((servicio) => (
              <ProjectCard
                key={servicio.id}
                title={servicio.nombre}
                category={servicio.categoria}
                location={servicio.cliente}
                thumbnail={servicio.thumbnail}
                to={servicio.slug ? `/proyectos/${servicio.slug}` : undefined}
                extraBadges={servicio.etiquetas}
              />
            ))}
          </div>
        </section>

        {/* Bloque 3 – Servicios extra / IA / packs */}
        {serviciosExtra.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 border-b border-zinc-900">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Otros servicios que pueden encajar
            </h2>
            <p className="text-sm text-zinc-400 mb-6">
              Soportes adicionales, piezas puramente sociales o apoyo con herramientas de IA
              para generar assets cuando tiene sentido creativo.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {serviciosExtra.map((servicio) => (
                <div
                  key={servicio.id}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-400 mb-2">
                      {servicio.categoria}
                    </p>
                    <h3 className="font-medium mb-1">{servicio.nombre}</h3>
                    <p className="text-sm text-zinc-300 mb-2">{servicio.descripcion}</p>
                  </div>
                  {servicio.etiquetas?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {servicio.etiquetas.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* FOOTER GLOBAL */}
      <Footer />
    </div>
  )
}
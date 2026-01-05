// src/pages/Servicios.jsx
import { useState } from "react"
import { motion } from "framer-motion"
import { fases, especialidades } from "../data/servicios.js"
import VideoPlayer from "../components/VideoPlayer.jsx"

const heroVideo = `${import.meta.env.BASE_URL}videos/hero.mp4`
const heroPoster = `${import.meta.env.BASE_URL}images/hero_poster.jpg` // opcional

export default function Servicios() {
  const fasesList = Array.isArray(fases) ? fases : []
  const especialidadesList = Array.isArray(especialidades) ? especialidades : []

  const [faseActiva, setFaseActiva] = useState(fasesList[0]?.id ?? "prepro")
  const fase = fasesList.find((f) => f.id === faseActiva) ?? fasesList[0] ?? {}

  return (
    <main className="bg-zinc-950 text-zinc-100">
      {/* HERO: qué ofrezco */}
      <section className="relative border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid gap-10 lg:grid-cols-2 items-center">
          {/* Texto */}
          <div>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-amber-300/80 mb-3">
              Servicios
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-semibold leading-tight mb-4">
              Vídeo para marcas, eventos y deporte.
            </h1>
            <p className="text-sm md:text-base lg:text-[17px] text-zinc-300 max-w-xl leading-relaxed mb-4">
              Planifico, ruedo y edito piezas completas combinando cámara de cine y
              dron FPV. Un único equipo, entregas claras y material listo para usar
              en web, redes y campañas.
            </p>
            <p className="text-xs md:text-sm lg:text-[15px] text-zinc-400 max-w-xl leading-relaxed mb-5">
              Puedo entrar solo en rodaje o solo en edición, pero donde más valor
              aporto es gestionando todo el flujo: desde el planteamiento de la
              pieza hasta los archivos finales organizados.
            </p>

            <ul className="grid gap-2 text-xs md:text-sm lg:text-[14px] text-zinc-300 md:grid-cols-2">
              <li>· Spots y piezas cortas para campañas</li>
              <li>· Vídeo para webs, lanzamientos y dosieres</li>
              <li>· Cobertura de eventos con entregas rápidas</li>
              <li>· Clips verticales listos para redes sociales</li>
            </ul>
          </div>

          {/* Vídeo */}
          <div className="kv-glass rounded-3xl overflow-hidden">
            <VideoPlayer src={heroVideo} poster={heroPoster} label="Reel de trabajo" />
          </div>
        </div>
      </section>

      {/* PROCESO: prepro / rodaje / post / IA */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <header className="space-y-2">
          <h2 className="text-2xl md:text-3xl lg:text-[1.8rem] font-semibold">
            Un flujo de trabajo claro, de inicio a fin.
          </h2>
          <p className="text-sm md:text-base lg:text-[15px] text-zinc-300 max-w-2xl leading-relaxed">
            Divido el proyecto en cuatro fases. No todas son obligatorias, pero tener
            esta estructura ayuda a saber en qué punto estamos y qué falta por cerrar.
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
                className={`text-left px-4 py-3 rounded-xl text-xs md:text-sm transition kv-glass-soft ${
                  f.id === faseActiva
                    ? "border-amber-400/80 bg-amber-400/10 text-amber-200"
                    : "border-zinc-700/70 text-zinc-300 hover:border-amber-300/70 hover:text-amber-200"
                }`}
              >
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                  {f.subtitulo}
                </p>
                <p className="font-medium text-sm md:text-base">{f.titulo}</p>
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
              <p className="text-sm md:text-base lg:text-[15px] text-zinc-200 leading-relaxed">
                {fase.texto}
              </p>
            )}

            {/* Toggles (prepro) */}
            {Array.isArray(fase.toggles) && fase.toggles.length > 0 && (
              <div className="grid gap-3 md:grid-cols-2">
                {fase.toggles.map((t) => (
                  <div
                    key={t.id}
                    className="kv-glass-soft rounded-xl px-4 py-3 text-xs md:text-sm"
                  >
                    <p className="text-sm font-medium text-amber-200 mb-1">
                      {t.label}
                    </p>
                    <p className="text-xs md:text-[13px] text-zinc-400">{t.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Modos (producción) */}
            {Array.isArray(fase.modos) && fase.modos.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {fase.modos.map((m) => (
                  <div
                    key={m.id}
                    className="kv-glass-soft rounded-full px-4 py-2 text-xs md:text-[13px]"
                  >
                    <p className="text-[11px] md:text-xs font-semibold text-amber-200">
                      {m.label}
                    </p>
                    <p className="text-[11px] text-zinc-400">{m.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Before/After (postproducción) */}
            {fase.beforeAfter && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold text-zinc-400 uppercase">
                    Antes
                  </p>
                  <div className="kv-glass-soft rounded-xl overflow-hidden">
                    <img
                      src={fase.beforeAfter.before}
                      alt="Antes de corrección de color"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold text-zinc-400 uppercase">
                    Después
                  </p>
                  <div className="kv-glass-soft rounded-xl overflow-hidden border border-amber-400/70">
                    <img
                      src={fase.beforeAfter.after}
                      alt="Después de corrección de color"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Presets IA */}
            {Array.isArray(fase.presets) && fase.presets.length > 0 && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  {fase.presets.map((p) => (
                    <div
                      key={p.id}
                      className="rounded-xl border border-violet-500/50 bg-violet-950/40 backdrop-blur-md px-4 py-3 text-xs md:text-[13px]"
                    >
                      <p className="text-[11px] md:text-xs font-semibold text-violet-200">
                        {p.label}
                      </p>
                      <p className="text-[11px] text-violet-200/80">{p.desc}</p>
                    </div>
                  ))}
                </div>
                {fase.nota && (
                  <p className="text-[11px] md:text-xs text-violet-200/70">
                    {fase.nota}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-6">
          <header className="space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-[1.8rem] font-semibold">
              Dónde tiene más sentido trabajar juntas.
            </h2>
            <p className="text-sm md:text-base lg:text-[15px] text-zinc-300 max-w-2xl leading-relaxed">
              Estos son los tipos de proyectos donde más valor puedo aportar:
              necesidades claras, recursos ajustados y ganas de tener vídeo que
              se pueda aprovechar de verdad.
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {especialidadesList.map((card) => (
              <article
                key={card.id}
                className="relative rounded-3xl overflow-hidden kv-glass-soft group"
              >
                <div
                  className="absolute inset-0 opacity-45 group-hover:opacity-70 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${card.fondo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 p-4 pt-20 bg-gradient-to-t from-black/90 via-black/65 to-black/20">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-amber-300/80 mb-1">
                    Especialidad
                  </p>
                  <h3 className="text-sm md:text-base font-semibold mb-2">
                    {card.titulo}
                  </h3>
                  <ul className="space-y-1 text-[11px] md:text-xs text-zinc-200">
                    {card.bullets.map((b, i) => (
                      <li key={i}>· {b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
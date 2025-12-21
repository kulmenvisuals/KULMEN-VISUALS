// src/pages/Servicios.jsx
import { useState } from "react"
import { motion } from "framer-motion"
import { fases, especialidades } from "../data/servicios.js"
import VideoPlayer from "../components/VideoPlayer.jsx"

const heroVideo = `${import.meta.env.BASE_URL}videos/hero.mp4`
const heroPoster = `${import.meta.env.BASE_URL}images/hero_poster.jpg` 

export default function Servicios() {
  const fasesList = Array.isArray(fases) ? fases : []
  const especialidadesList = Array.isArray(especialidades) ? especialidades : []

  const [faseActiva, setFaseActiva] = useState(fasesList[0]?.id ?? "prepro")
  const fase =
    fasesList.find((f) => f.id === faseActiva) ?? fasesList[0] ?? {}

  return (
    <main className="bg-zinc-950 text-zinc-100">
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
              Cine, FPV y contenido que convierte.
            </h1>
            <p className="text-zinc-300 max-w-xl">
              Diseñamos y producimos piezas audiovisuales completas:
              preproducción, rodaje y postproducción. Desde campañas de marca
              hasta coberturas ágiles de eventos y turismo.
            </p>

            <ul className="grid gap-2 text-sm text-zinc-300 md:grid-cols-2">
              <li>· Diseño de campaña y guion técnico</li>
              <li>· Rodaje con cámaras de cine y drones FPV</li>
              <li>· Edición, color y sonido finales</li>
              <li>· Apoyo con IA: moodboards, storyboards, assets</li>
            </ul>
          </div>

          {/* Vídeo */}
          <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black/60">
            <VideoPlayer src={heroVideo} poster={heroPoster} label="Reel de trabajo" />
          </div>
        </div>
      </section>

      {/* PROCESO: prepro / pro / post / IA */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <header className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Un proceso completo, fase a fase.
          </h2>
          <p className="text-zinc-300 max-w-2xl">
            No solo grabamos: pensamos, planificamos y cerramos la pieza contigo. Puedes
            entrar en cualquier fase, pero el resultado brilla cuando recorremos el
            camino completo.
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
              <p className="text-zinc-200 leading-relaxed">{fase.texto}</p>
            )}

            {/* Toggles (prepro) */}
            {Array.isArray(fase.toggles) && fase.toggles.length > 0 && (
              <div className="grid gap-3 md:grid-cols-2">
                {fase.toggles.map((t) => (
                  <div
                    key={t.id}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3"
                  >
                    <p className="text-sm font-medium text-amber-200">
                      {t.label}
                    </p>
                    <p className="text-xs text-zinc-400">{t.desc}</p>
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
                    className="rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2"
                  >
                    <p className="text-xs font-medium text-amber-200">
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

            {/* Presets IA */}
            {Array.isArray(fase.presets) && fase.presets.length > 0 && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  {fase.presets.map((p) => (
                    <div
                      key={p.id}
                      className="rounded-xl border border-violet-500/50 bg-violet-950/40 px-4 py-3"
                    >
                      <p className="text-xs font-semibold text-violet-200">
                        {p.label}
                      </p>
                      <p className="text-[11px] text-violet-200/80">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
                {fase.nota && (
                  <p className="text-[11px] text-violet-200/70">
                    {fase.nota}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ESPECIALIDADES – versión glass con foto y hover */}
      <section className="border-t border-zinc-800 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
          <header className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              ¿Para qué tipo de proyectos encajamos mejor?
            </h2>
            <p className="text-zinc-300 max-w-2xl">
              Desde cine y publicidad hasta turismo y cultura. Adaptamos el lenguaje
              visual y el ritmo al contexto de cada pieza.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {especialidadesList.map((item) => (
              <article
                key={item.id}
                className="relative group overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900/40
                           backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                           transition-transform transition-shadow duration-300
                           hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.75)]"
              >
                {/* Imagen de fondo + overlays */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40
                               group-hover:opacity-70 group-hover:scale-105
                               transition-transform transition-opacity duration-400"
                    style={{ backgroundImage: `url(${item.fondo})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.35),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>

                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-amber-300/80">
                      {item.badge || "Especialidad"}
                    </p>
                    <h3 className="text-lg font-semibold text-zinc-50">
                      {item.titulo}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-1.5 text-sm text-zinc-200">
                    {item.bullets?.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="mt-[6px] h-[3px] w-[12px] rounded-full bg-amber-300/80" />
                        <span className="leading-snug text-zinc-200/95">
                          {bullet}
                        </span>
                      </li>
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
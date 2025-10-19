import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PreproPanel from "./panels/PreproPanel"
import ProPanel from "./panels/ProPanel"
import PostPanel from "./panels/PostPanel"
import IAPanel from "./panels/IAPanel"

export default function ProcesoTabs({ fases = [] }) {
  const [tab, setTab] = useState(fases[0]?.id || "prepro")
  const current = fases.find(f => f.id === tab)

  return (
    <section id="proceso" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Cómo trabajamos</h2>
          <p className="text-zinc-400 mt-1">De la idea al master final, con un flujo claro y eficaz.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {fases.map(f => (
            <button
              key={f.id}
              onClick={() => setTab(f.id)}
              className={`px-4 py-2 rounded-lg border whitespace-nowrap ${
                tab === f.id ? "border-amber-400 bg-amber-400/10 text-amber-300"
                             : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
              }`}
            >
              {f.titulo}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-lg font-semibold">{current?.subtitulo}</h3>
              <p className="text-zinc-300">{current?.texto}</p>
            </div>

            {/* Panel dinámico */}
            {tab === "prepro" && <PreproPanel toggles={current.toggles} />}
            {tab === "pro" && <ProPanel modos={current.modos} />}
            {tab === "post" && <PostPanel beforeAfter={current.beforeAfter} bullets={current.bullets} />}
            {tab === "ia" && <IAPanel presets={current.presets} nota={current.nota} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
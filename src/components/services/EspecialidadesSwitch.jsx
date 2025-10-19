import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EspecialidadesSwitch({ items = [] }) {
  const [id, setId] = useState(items[0]?.id)
  const current = items.find(i => i.id === id)

  return (
    <section className="relative py-12 md:py-16">
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: `url(${current?.fondo})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-zinc-950/70" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-2">
          {items.map(i => (
            <button
              key={i.id}
              onClick={() => setId(i.id)}
              className={`px-4 py-2 rounded-lg border whitespace-nowrap ${
                id === i.id ? "border-amber-400 bg-amber-400/10 text-amber-300"
                            : "border-zinc-800 bg-zinc-900/70 hover:bg-zinc-800/70"
              }`}
            >
              {i.titulo}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-6 rounded-xl border border-zinc-800/70 bg-zinc-900/60 p-6"
          >
            <h3 className="text-xl font-semibold">{current?.titulo}</h3>
            <ul className="mt-2 text-zinc-300 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {current?.bullets.map((b, i) => <li key={i}>• {b}</li>)}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
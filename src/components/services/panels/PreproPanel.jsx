import { useState } from "react"

export default function PreproPanel({ toggles = [] }) {
  const [active, setActive] = useState(toggles[0]?.id)

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {toggles.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-4 py-2 rounded-lg border text-left whitespace-nowrap ${
              active === t.id ? "border-amber-400 bg-amber-400/10 text-amber-300"
                              : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="md:col-span-2">
        {toggles.map(t => active === t.id && (
          <div key={t.id} className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/50">
            <h4 className="font-semibold mb-2">{t.label}</h4>
            <p className="text-zinc-300">{t.desc}</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {/* Placeholders de storyboard/mood (sustituye por tus imágenes) */}
              <div className="h-24 bg-zinc-800 rounded" />
              <div className="h-24 bg-zinc-800 rounded" />
              <div className="h-24 bg-zinc-800 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
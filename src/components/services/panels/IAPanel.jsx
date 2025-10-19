import { useState } from "react"

export default function IAPanel({ presets = [], nota = "" }) {
  const [active, setActive] = useState(presets[0]?.id)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {presets.map(p => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`px-4 py-2 rounded-lg border whitespace-nowrap ${
              active === p.id ? "border-amber-400 bg-amber-400/10 text-amber-300"
                              : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {presets.map(p => active === p.id && (
        <div key={p.id} className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/50">
          <h4 className="font-semibold mb-2">{p.label}</h4>
          <p className="text-zinc-300">{p.desc}</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-24 bg-zinc-800 rounded" />
            <div className="h-24 bg-zinc-800 rounded" />
            <div className="h-24 bg-zinc-800 rounded" />
          </div>
          {nota && <p className="text-xs text-zinc-500 mt-4">{nota}</p>}
        </div>
      ))}
    </div>
  )
}
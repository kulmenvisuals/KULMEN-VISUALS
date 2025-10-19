import { useState } from "react"

const looks = {
  cine: "from-zinc-900 via-zinc-900 to-zinc-800",
  fpv: "from-zinc-900 via-amber-900/20 to-zinc-800",
  aereo: "from-zinc-900 via-sky-900/20 to-zinc-800",
  cinewhoop: "from-zinc-900 via-violet-900/20 to-zinc-800",
}

export default function ProPanel({ modos = [] }) {
  const [mode, setMode] = useState(modos[0]?.id || "cine")

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {modos.map(m => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`px-4 py-2 rounded-lg border whitespace-nowrap ${
              mode === m.id ? "border-amber-400 bg-amber-400/10 text-amber-300"
                            : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Demo ligera: parallax/tilt simulado */}
      <div className={`rounded-xl border border-zinc-800 p-6 bg-gradient-to-tr ${looks[mode]} overflow-hidden`}>
        <div className="relative h-56 md:h-72 rounded-lg bg-zinc-950/50 border border-zinc-800 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_70%_-10%,rgba(255,196,0,0.16),transparent)]" />
          <div className="absolute inset-6 border-2 border-white/20 rounded-lg"
               style={{ transform: "perspective(700px) rotateX(6deg) rotateY(-6deg)" }} />
          <div className="absolute bottom-3 left-3 text-xs text-zinc-400">
            {modos.find(m => m.id === mode)?.desc}
          </div>
        </div>
      </div>
    </div>
  )
}
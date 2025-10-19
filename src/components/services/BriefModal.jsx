import { useEffect } from "react"

export default function BriefModal({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999]">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 md:inset-0 md:my-auto md:max-w-lg md:mx-auto bg-zinc-950 border border-zinc-800 rounded-t-2xl md:rounded-2xl p-6">
        <h3 className="text-xl font-semibold">Cuéntanos tu proyecto</h3>
        <p className="text-zinc-400 text-sm">5 pasos rápidos · te respondemos en 24h</p>

        <form
          className="mt-4 space-y-3"
          action="https://formspree.io/f/your-id" // <-- cambia por tu endpoint o maneja onSubmit
          method="POST"
        >
          <div className="grid grid-cols-2 gap-2">
            <select className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" name="objetivo" required>
              <option value="">Objetivo</option>
              <option>Lanzamiento</option>
              <option>Evento</option>
              <option>Turismo</option>
              <option>Pieza artística</option>
            </select>
            <select className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" name="fase" required>
              <option value="">Fase actual</option>
              <option>Idea</option>
              <option>Guion</option>
              <option>Rodaje</option>
              <option>Edición</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <select className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" name="estilo" required>
              <option value="">Estilo</option>
              <option>Cinematográfico</option>
              <option>Documental</option>
              <option>Dinámico</option>
              <option>Minimal</option>
            </select>
            <select className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" name="necesidades" required>
              <option value="">Necesidades</option>
              <option>Cámara</option>
              <option>FPV</option>
              <option>Dron cine</option>
              <option>IA creativa</option>
              <option>Color/Motion</option>
            </select>
          </div>

          <input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" name="nombre" placeholder="Nombre" required />
          <input type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" name="email" placeholder="Email" required />
          <textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" name="mensaje" rows="3" placeholder="Mensaje (opcional)" />

          <div className="flex items-center justify-between gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
              Cerrar
            </button>
            <button className="px-5 py-2 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
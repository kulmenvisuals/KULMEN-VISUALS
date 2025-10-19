import { useState } from "react"
import HeroServicios from "../components/services/HeroServicios"
import ProcesoTabs from "../components/services/ProcesoTabs"
import EspecialidadesSwitch from "../components/services/EspecialidadesSwitch"
import BriefModal from "../components/services/BriefModal"
import { fases, especialidades } from "../data/servicios"

export default function Servicios() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <HeroServicios />

      <ProcesoTabs fases={fases} />

      <EspecialidadesSwitch items={especialidades} />

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">¿Tienes un proyecto en mente?</h3>
        <p className="text-zinc-300 mt-2">Hablemos y creemos algo que merezca ser recordado.</p>
        <div className="mt-6">
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
          >
            Abrir briefing rápido
          </button>
        </div>
      </section>

      <BriefModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
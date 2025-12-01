import HeroServicios from '../components/services/HeroServicios.jsx'
import BeforeAfterSlider from '../components/services/panels/BeforeAfterSlider.jsx'
import ProcesoTabs from '../components/services/panels/ProcesoTabs.jsx'
import EspecialidadesSwitch from '../components/services/panels/EspecialidadesSwitch.jsx'
import BriefModal from '../components/services/panels/BriefModal.jsx'
import { servicios } from '../data/servicios.js'

export default function Servicios() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* HERO servicios */}
      <HeroServicios />

      {/* Bloque servicios 4 columnas */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <header className="max-w-3xl mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
            Servicios
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            Preproducción, rodaje, postproducción e IA, todo alineado.
          </h1>
          <p className="text-sm text-zinc-400">
            Puedo entrar en proyectos ya en marcha, pero donde más valor aporto es cuando
            diseño contigo la pieza desde cero: qué queremos contar, cómo lo rodamos y qué
            entregables necesitamos.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-4">
          {Array.isArray(servicios) &&
            servicios.map((item) => (
              <article
                key={item.id}
                className="border border-zinc-800 rounded-2xl bg-zinc-900/40 p-4 flex flex-col"
              >
                <h2 className="text-sm font-semibold mb-2">{item.titulo}</h2>
                <p className="text-xs text-zinc-400 mb-3">{item.descripcion}</p>
                {item.para && (
                  <p className="text-[11px] text-zinc-500 mt-auto">
                    <span className="font-semibold text-zinc-300">Ideal para:</span>{' '}
                    {item.para}
                  </p>
                )}
              </article>
            ))}
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="border-t border-zinc-900 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Cómo trabajo un proyecto.</h2>
            <p className="text-sm text-zinc-400">
              No todos los proyectos necesitan el mismo despliegue, pero siempre sigo una
              estructura base para que el proceso sea claro para ti y para mí: escuchar,
              proponer, rodar y cerrar.
            </p>
            <p className="text-sm text-zinc-400">
              En función del presupuesto y los plazos, ajustamos equipo y recursos, pero nunca
              sacrificando la narrativa ni la honestidad visual.
            </p>
          </div>
          <div>
            <ProcesoTabs />
          </div>
        </div>
      </section>

      {/* Especialidades FPV / Cine / Eventos / Turismo */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1.5fr)] items-start">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Qué tipo de piezas hacemos.</h2>
            <p className="text-sm text-zinc-400">
              Desde planos FPV muy físicos y cercanos, hasta coberturas limpias de eventos o
              spots más narrativos para marcas. Podemos mezclar enfoques o centrarnos sólo en
              uno.
            </p>
          </div>
          <EspecialidadesSwitch />
        </div>
      </section>

      {/* Before/After (color, edición, etc.) */}
      <section className="border-t border-zinc-900 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Del bruto a la pieza final.</h2>
            <p className="text-sm text-zinc-400">
              El trabajo no termina cuando guardamos la cámara. En montaje y color es donde se
              termina de construir el ritmo, el tono y la sensación que quieres transmitir.
            </p>
            <p className="text-sm text-zinc-400">
              Aquí puedes ver un ejemplo del antes y después de una pieza, con corrección de
              color y pequeños ajustes de ritmo y limpieza.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* CTA Brief */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 px-6 py-8 md:px-10 md:py-10 grid gap-6 md:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)] items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">¿Te ayudo a aterrizar la idea?</h2>
            <p className="text-sm text-zinc-400">
              Si todavía no tienes claro el formato o lo que necesitas, podemos empezar con un
              pequeño brief guiado para aclararlo. Así evitamos perder tiempo y presupuesto en
              pruebas que no llevan a ninguna parte.
            </p>
          </div>
          <div className="justify-self-end">
            <BriefModal />
          </div>
        </div>
      </section>
    </div>
  )
}
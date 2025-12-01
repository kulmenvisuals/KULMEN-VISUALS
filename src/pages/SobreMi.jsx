import { Link } from 'react-router-dom'

export default function SobreMi() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.8fr),minmax(0,1.2fr)] items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Sobre mí
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Io Rodríguez, Kulmen Visuals.
            </h1>
            <p className="text-sm text-zinc-300">
              Soy creadora audiovisual y piloto de dron FPV. Vengo del deporte, de entrenar y
              competir, y eso se nota en cómo ruedo: me gusta el movimiento, el ritmo y las
              cosas que se sienten en el cuerpo, no sólo en la cabeza.
            </p>
            <p className="text-sm text-zinc-300">
              Kulmen Visuals nace de juntar todo eso con Galicia, su paisaje y la gente que
              está haciendo cosas aquí: proyectos culturales, pequeñas marcas, eventos que no
              salen en la tele pero que tienen una comunidad muy real detrás.
            </p>
            <p className="text-sm text-zinc-300">
              Me gusta cuidar a la gente delante y detrás de cámara, explicar bien el proceso y
              que todo el mundo sepa qué estamos haciendo y para qué. No me interesa hacer
              vídeos huecos; prefiero piezas pequeñas pero honestas.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/proyectos"
                className="inline-flex px-5 py-2.5 rounded-full bg-amber-400 text-black text-xs font-semibold hover:bg-amber-300 transition"
              >
                Ver portfolio
              </Link>
              <Link
                to="/contacto"
                className="inline-flex px-5 py-2.5 rounded-full border border-zinc-600 text-xs text-zinc-100 hover:border-amber-300 hover:text-amber-200 transition"
              >
                Hablemos
              </Link>
            </div>
          </div>

          <aside className="border border-zinc-800 rounded-2xl bg-zinc-900/60 p-5 space-y-4 text-xs text-zinc-400">
            {/* Si subes una foto, puedes añadirla aquí */}
            {/* <img src="/images/sobre-mi-io.jpg" alt="Io Rodríguez" className="w-full rounded-xl mb-4 object-cover" /> */}
            <div>
              <h2 className="text-sm font-semibold text-zinc-100 mb-1">En corto</h2>
              <ul className="space-y-1 list-disc list-inside">
                <li>FPV y cine desde Galicia.</li>
                <li>Mezcla de rodajes ligeros con mirada de cine.</li>
                <li>Clientes pequeños y proyectos culturales.</li>
                <li>Obsesión sana por el sonido y el ritmo.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-zinc-100 mb-1">
                Lo que intento cuidar siempre
              </h2>
              <ul className="space-y-1 list-disc list-inside">
                <li>Que el rodaje sea un lugar seguro para todo el mundo.</li>
                <li>No vender más de lo que realmente podemos hacer.</li>
                <li>Ser clara con tiempos, entregas y versiones.</li>
                <li>Escuchar antes de proponer.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
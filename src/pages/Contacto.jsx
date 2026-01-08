// src/pages/Contacto.jsx

export default function Contacto() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>

      <p className="text-zinc-300 mb-4">
        Si tienes un proyecto en mente o necesitas contenido audiovisual para tu
        marca, evento o espacio, escríbeme y lo vemos.
      </p>

      <p className="text-sm text-zinc-400 mb-6">
        Responderé en un plazo de 24–48 h laborables.
      </p>

      <p className="text-sm text-zinc-400 mb-6">
        Ubicación. Trabajo desde Pontevedra y me desplazo por Galicia y España,
        según el proyecto.
      </p>

      <p className="text-sm text-zinc-400 mb-6">
        Puedes escribirme directamente a{" "}
        <a
          href="mailto:hola@kulmenvisuals.com"
          className="text-amber-300 hover:text-amber-200"
        >
          hola@kulmenvisuals.com
        </a>{" "}
        o rellenar este formulario.
      </p>

      {/* FORMULARIO FUNCIONAL CON FORMSPREE */}
      <form
        action="https://formspree.io/f/xyzdkrka"
        method="POST"
        className="space-y-4"
      >
        {/* Asunto del email que me llega */}
        <input
          type="hidden"
          name="_subject"
          value="Nuevo contacto desde la web de Kulmen Visuals"
        />

        <div>
          <label className="block text-xs text-zinc-400 mb-1" htmlFor="nombre">
            Nombre *
          </label>
          <input
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            required
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1" htmlFor="empresa">
            Empresa / Proyecto
          </label>
          <input
            id="empresa"
            name="empresa"
            placeholder="Marca, evento o espacio"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
          />
          <p className="text-[11px] text-zinc-500 mt-2">
            Deja este campo opcional si no tienes empresa.
          </p>
        </div>

        <div>
          <label
            className="block text-xs text-zinc-400 mb-1"
            htmlFor="tipo-proyecto"
          >
            Tipo de proyecto *
          </label>
          <select
            id="tipo-proyecto"
            name="tipo_proyecto"
            required
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
          >
            <option value="">Selecciona una opción</option>
            <option value="Marca / Campaña">Marca / Campaña</option>
            <option value="Evento">Evento</option>
            <option value="Espacio">Espacio</option>
            <option value="Deporte">Deporte</option>
            <option value="Turismo">Turismo</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <fieldset className="space-y-3">
          <legend className="block text-xs text-zinc-400 mb-1">
            ¿Para qué lo necesitas? *
          </legend>
          <div className="grid gap-2 text-sm text-zinc-200">
            {[
              "Redes sociales",
              "Campaña publicitaria",
              "Web",
              "Uso interno",
              "Aún no lo tengo claro",
            ].map((option, index) => (
              <label
                key={option}
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2"
              >
                <input
                  type="checkbox"
                  name="objetivo[]"
                  value={option}
                  required={index === 0}
                  className="h-4 w-4 accent-amber-400"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label className="block text-xs text-zinc-400 mb-1" htmlFor="fecha">
            Fecha y lugar aproximados
          </label>
          <input
            id="fecha"
            name="fecha"
            placeholder="Ej. Julio · Vigo"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1" htmlFor="mensaje">
            Cuéntame un poco más sobre el proyecto *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="6"
            required
            placeholder="Qué quieres comunicar, a quién va dirigido y qué resultado esperas."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition"
        >
          Enviar solicitud
        </button>
      </form>

    </div>
  )
}

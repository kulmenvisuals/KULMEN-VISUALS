// src/pages/Contacto.jsx

export default function Contacto() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="relative overflow-hidden kv-panel rounded-[32px] px-6 py-10 md:px-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 kv-grid-overlay opacity-25" />
        <div className="pointer-events-none absolute -top-16 right-10 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl kv-float-slow" />
        <div className="pointer-events-none absolute -bottom-20 left-6 h-52 w-52 rounded-full bg-sky-400/8 blur-3xl kv-float" />

        <div className="relative z-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="kv-eyebrow text-zinc-400">
              Contacto
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-zinc-50">
              Cuéntame tu proyecto
            </h1>
          </div>

          <p className="text-zinc-300 text-base md:text-lg">
            Si tienes un proyecto en mente o necesitas contenido audiovisual
            para tu marca, evento o espacio, escríbeme y lo vemos.
          </p>

          <div className="kv-glass-soft rounded-2xl border border-zinc-800/80 px-6 py-5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-100">
                  Respuesta rápida
                </p>
                <p className="text-sm text-zinc-400">
                  Responderé en un plazo de 24–48 h laborables.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-100">Ubicación</p>
                <p className="text-sm text-zinc-400">
                  Trabajo desde Pontevedra y me desplazo por Galicia y España,
                  según el proyecto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-100">
                  Correo directo
                </p>
                <p className="text-sm text-zinc-400">
                  <a
                    href="mailto:hola@kulmenvisuals.com"
                    className="text-amber-300 hover:text-amber-200"
                  >
                    hola@kulmenvisuals.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULARIO FUNCIONAL CON FORMSPREE */}
        <div className="kv-glass rounded-3xl border border-zinc-800/80 px-6 py-8 md:px-8 md:py-10">
          <form
            action="https://formspree.io/f/xyzdkrka"
            method="POST"
            className="space-y-5"
          >
            {/* Asunto del email que me llega */}
            <input
              type="hidden"
              name="_subject"
              value="Nuevo contacto desde la web de Kulmen Visuals"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  className="block text-xs text-zinc-400 mb-1"
                  htmlFor="nombre"
                >
                  Nombre *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                  className="kv-input"
                />
              </div>

              <div>
                <label
                  className="block text-xs text-zinc-400 mb-1"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="kv-input"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs text-zinc-400 mb-1"
                htmlFor="empresa"
              >
                Empresa / Proyecto
              </label>
              <input
                id="empresa"
                name="empresa"
                placeholder="Marca, evento o espacio"
                className="kv-input"
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
                className="kv-select"
              >
                <option value="">Selecciona una opción</option>
                <option value="Marca / Campaña">Marca / Campaña</option>
                <option value="Evento">Evento</option>
                <option value="Espacio">Espacio</option>
                <option value="Deporte">Deporte</option>
                <option value="Otro">Otro</option>
              </select>
              <p className="text-[11px] text-zinc-500 mt-2">
                Esto te ahorra mensajes de ida y vuelta.
              </p>
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
                placeholder="Ej. marzo · Pontevedra"
                className="kv-input"
              />
            </div>

            <div>
              <label
                className="block text-xs text-zinc-400 mb-1"
                htmlFor="mensaje"
              >
                Cuéntame un poco más sobre el proyecto *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="6"
                required
                placeholder="Qué quieres comunicar, a quién va dirigido y qué resultado esperas del vídeo."
                className="kv-textarea"
              />
            </div>

            <button
              type="submit"
              className="kv-button-primary w-full sm:w-auto"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

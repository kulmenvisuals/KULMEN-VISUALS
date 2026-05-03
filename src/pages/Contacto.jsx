// src/pages/Contacto.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const objectiveFieldName = 'objetivo[]'

export default function Contacto() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  function syncObjectiveValidity(form) {
    const checkboxes = Array.from(
      form.querySelectorAll(`input[name="${objectiveFieldName}"]`),
    )
    const hasSelection = checkboxes.some((checkbox) => checkbox.checked)
    const message = hasSelection ? '' : 'Selecciona al menos una opción.'

    checkboxes.forEach((checkbox) => {
      checkbox.setCustomValidity(message)
    })

    return hasSelection
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    if (!syncObjectiveValidity(form)) {
      form.reportValidity()
      return
    }

    setSubmitting(true)
    const data = new FormData(form)

    try {
      await fetch('https://formspree.io/f/xyzdkrka', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
    } catch {
      // continuar igualmente — Formspree gestiona reintentos
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'Formulario de contacto',
        content_category: 'Producción audiovisual',
      })
    }

    navigate('/contacto/gracias/')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="kv-eyebrow text-zinc-500">
              Contacto
            </p>
            <h1 className="kv-page-title text-zinc-50">
              Cuéntame tu proyecto
            </h1>
          </div>

          <p className="kv-lede text-zinc-300">
            Si tienes un proyecto en mente o necesitas contenido audiovisual
            para tu marca, evento o espacio, escríbeme y lo vemos.
          </p>

          <div className="kv-glass-soft rounded-2xl border border-zinc-800/80 px-6 py-5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div>
                <p className="kv-card-title text-zinc-100">
                  Respuesta rápida
                </p>
                <p className="kv-body-muted">
                  Responderé en un plazo de 24–48 h laborables.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div>
                <p className="kv-card-title text-zinc-100">Ubicación</p>
                <p className="kv-body-muted">
                  Trabajo desde Pontevedra y me desplazo por Galicia y España,
                  según el proyecto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div>
                <p className="kv-card-title text-zinc-100">
                  Correo directo
                </p>
                <p className="kv-body-muted">
                  <a
                    href="mailto:hola@kulmenvisuals.com"
                    className="text-amber-300 hover:text-amber-200"
                    onClick={() => {
                      if (typeof window.fbq === 'function') {
                        window.fbq('track', 'Contact')
                      }
                    }}
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
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="Nuevo contacto desde la web de Kulmen Visuals"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  className="kv-caption text-zinc-400 mb-1"
                  htmlFor="nombre"
                >
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
                <label
                  className="kv-caption text-zinc-400 mb-1"
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
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
                />
              </div>
            </div>

            <div>
              <label
                className="kv-caption text-zinc-400 mb-1"
                htmlFor="empresa"
              >
                Empresa / Proyecto
              </label>
              <input
                id="empresa"
                name="empresa"
                placeholder="Marca, evento o espacio"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
              />
              <p className="kv-caption text-zinc-500 mt-2">
                Deja este campo opcional si no tienes empresa.
              </p>
            </div>

            <div>
              <label
                className="kv-caption text-zinc-400 mb-1"
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
                <option value="Otro">Otro</option>
              </select>
              <p className="kv-caption text-zinc-500 mt-2">
                Esto te ahorra mensajes de ida y vuelta.
              </p>
            </div>

            <fieldset className="space-y-3">
              <legend className="kv-caption text-zinc-400 mb-1">
                ¿Para qué lo necesitas? *
              </legend>
              <div className="grid gap-2 text-sm text-zinc-200">
                {[
                  "Redes sociales",
                  "Campaña publicitaria",
                  "Web",
                  "Uso interno",
                  "Aún no lo tengo claro",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2"
                  >
                    <input
                      type="checkbox"
                      name={objectiveFieldName}
                      value={option}
                      onChange={(event) => syncObjectiveValidity(event.currentTarget.form)}
                      className="h-4 w-4 accent-amber-400"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label className="kv-caption text-zinc-400 mb-1" htmlFor="fecha">
                Fecha y lugar aproximados
              </label>
              <input
                id="fecha"
                name="fecha"
                placeholder="Ej. marzo · Pontevedra"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
              />
            </div>

            <div>
              <label
                className="kv-caption text-zinc-400 mb-1"
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
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Enviando…' : 'Enviar solicitud'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

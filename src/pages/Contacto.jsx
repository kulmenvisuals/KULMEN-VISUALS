// src/pages/Contacto.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const objectiveFieldName = 'objetivo[]'

const siguientesPasos = [
  {
    title: 'Te respondo en 24-48 horas',
    desc: 'Leo tu mensaje y te escribo en un plazo de 24 a 48 horas laborables, con preguntas concretas o una primera idea de enfoque.',
  },
  {
    title: 'Una llamada breve',
    desc: 'Si hace falta, hablamos unos minutos para cerrar objetivo, fechas, localización y dónde se va a publicar el vídeo.',
  },
  {
    title: 'Propuesta con presupuesto cerrado',
    desc: 'Te envío la propuesta con el presupuesto desglosado: rodaje, dron, edición y desplazamiento. Sin compromiso y sin sorpresas después.',
  },
]

const queIncluir = [
  'Tipo de proyecto: spot, vídeo de empresa, evento, FPV, fotografía aérea, redes…',
  'Localización y fechas aproximadas',
  'Objetivo del vídeo y dónde se va a publicar',
  'Referencias que te gusten, si las tienes',
  'Presupuesto orientativo, si ya lo has definido',
]

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
                  Responderé en un plazo de 24 a 48 horas laborables.
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
                  className="kv-input"
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
                  className="kv-input"
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
                className="kv-input"
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
                className="kv-input"
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
                placeholder="Ej. marzo, Pontevedra"
                className="kv-input"
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
                className="kv-input"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="kv-button-primary kv-button-accent w-full sm:w-auto px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Enviando…' : 'Enviar solicitud'}
            </button>
          </form>
        </div>
      </div>

      {/* Qué pasa después del formulario */}
      <section className="mt-16 md:mt-20 border-t border-zinc-800/70 pt-12 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <h2 className="kv-section-title">Qué pasa después de escribirme</h2>
          <ol className="space-y-5">
            {siguientesPasos.map((paso, i) => (
              <li key={paso.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300/40 text-sm font-semibold text-amber-200">
                  {i + 1}
                </span>
                <div>
                  <h3 className="kv-card-title text-zinc-100 mb-1">{paso.title}</h3>
                  <p className="kv-body-muted">{paso.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="kv-section-title">Qué incluir en tu mensaje</h2>
            <ul className="space-y-2 text-zinc-300">
              {queIncluir.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="kv-bullet mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="kv-body-muted">
            ¿Aún no sabes qué necesitas? Mira los{' '}
            <Link to="/servicios/" className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4">
              servicios audiovisuales
            </Link>{' '}
            o los{' '}
            <Link to="/proyectos/" className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4">
              proyectos recientes
            </Link>{' '}
            para hacerte una idea.
          </p>
        </div>
      </section>
    </div>
  )
}

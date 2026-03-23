import { Link } from "react-router-dom"

export default function ContactoGracias() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="kv-glass rounded-3xl border border-zinc-800/80 px-6 py-10 md:px-10 md:py-12 text-center">
        <p className="kv-eyebrow text-zinc-500 mb-3">Mensaje enviado</p>
        <h1 className="kv-page-title text-zinc-50 mb-4">
          Gracias, he recibido tu solicitud.
        </h1>
        <p className="kv-lede text-zinc-300 max-w-2xl mx-auto">
          Revisaré la información y te responderé en un plazo de 24–48 horas
          laborables.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="kv-button-secondary">
            Volver al inicio
          </Link>
          <Link to="/proyectos" className="kv-button-primary kv-button-accent">
            Ver proyectos
          </Link>
        </div>
      </div>
    </div>
  )
}

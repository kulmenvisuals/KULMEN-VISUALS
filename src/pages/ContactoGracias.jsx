import { Link } from "react-router-dom"

export default function ContactoGracias() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="kv-glass rounded-3xl border border-zinc-800/80 px-6 py-10 md:px-10 md:py-12 text-center">
        <h1 className="kv-page-title text-zinc-50 mb-4">
          Recibido.
        </h1>
        <p className="kv-lede text-zinc-300 max-w-2xl mx-auto">
          Gracias, ya tengo tu mensaje.<br />
        </p>
        <p className="kv-body-muted text-zinc-400 max-w-xl mx-auto mt-4">
          Pronto tendrás respuesta.<br />
          Si el proyecto encaja, te propondré el siguiente paso.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="kv-button-secondary">
            Volver al inicio
          </Link>
          <Link to="/proyectos/" className="kv-button-primary kv-button-accent">
            Ver proyectos
          </Link>
        </div>
      </div>
    </div>
  )
}

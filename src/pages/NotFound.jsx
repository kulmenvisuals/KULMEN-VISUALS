import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-zinc-50">
      <section className="max-w-3xl mx-auto px-4 pt-16 pb-20 text-center">
        <h1 className="text-3xl font-semibold mb-3">404</h1>
        <p className="text-sm text-zinc-400 mb-6">
          No he encontrado la página que buscas. Puede que el enlace esté roto o que haya
          cambiado de ruta.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="kv-button-primary"
          >
            Volver al inicio
          </Link>
          <Link
            to="/proyectos"
            className="kv-button-secondary"
          >
            Ver portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-3xl mx-auto px-4 pt-16 pb-20 text-center">
        <h1 className="text-3xl font-semibold mb-3">404</h1>
        <p className="text-sm text-zinc-400 mb-6">
          No he encontrado la página que buscas. Puede que el enlace esté roto o que haya
          cambiado de ruta.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex px-5 py-2.5 rounded-full bg-amber-400 text-black text-sm font-semibold hover:bg-amber-300 transition"
          >
            Volver al inicio
          </Link>
          <Link
            to="/proyectos"
            className="inline-flex px-5 py-2.5 rounded-full border border-zinc-600 text-sm text-zinc-100 hover:border-amber-300 hover:text-amber-200 transition"
          >
            Ver portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}
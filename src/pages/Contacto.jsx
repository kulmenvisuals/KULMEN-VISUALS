// src/pages/Contacto.jsx

export default function Contacto() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-xl mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
          Contacto
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          Cuéntame tu proyecto.
        </h1>
        <p className="text-sm text-zinc-400 mb-8">
          Objetivo, tipo de pieza, localización, fechas aproximadas y presupuesto
          orientativo. No hace falta que lo tengas todo clarísimo, pero cuanto más
          contexto me des, mejor podré ayudarte.
        </p>

        {/* FORMULARIO – FORMSPREE
        <form
          action="https://formspree.io/f/your-id"
          method="POST"
          className="space-y-4"
        >
          <input
            name="nombre"
            placeholder="Nombre"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none focus:border-amber-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none focus:border-amber-400"
          />
          <textarea
            name="mensaje"
            rows="6"
            placeholder="Mensaje"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none focus:border-amber-400 resize-y"
          />

          <button
            type="submit"
            className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition"
          >
            Enviar
          </button>
        </form>

        {/* Mailto directo */}
        <p className="text-xs text-zinc-500 mt-6">
          También puedes escribir a{' '}
          <a className="text-amber-400" href="mailto:kulmenvisuals@gmail.com">
            kulmenvisuals@gmail.com
          </a>
        </p>
      </section>
    </div>
  )
}
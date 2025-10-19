export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="text-zinc-300 mb-6">
        Cuéntame tu proyecto (objetivo, localización, fechas, presupuesto).
      </p>

      {/* Opción 1: Formspree (recomendado). Cambia ACTION por tu endpoint */}
      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="space-y-4"
      >
        <input name="nombre" placeholder="Nombre" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" />
        <input name="email" type="email" placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" />
        <textarea name="mensaje" rows="6" placeholder="Mensaje" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2" />
        <button className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold">Enviar</button>
      </form>

      {/* O Opción 2: mailto directo */}
      <p className="text-sm text-zinc-500 mt-6">
        También puedes escribir a <a className="text-amber-400" href="mailto:hola@kulmenvisuals.com">hola@kulmenvisuals.com</a>
      </p>
    </div>
  )
}
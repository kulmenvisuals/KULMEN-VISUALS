// src/pages/Contacto.jsx

export default function Contacto() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>

      <p className="text-zinc-300 mb-4">
        Cuéntame tu proyecto: ¿qué quieres conseguir?
      </p>

      <p className="text-sm text-zinc-400 mb-6">
        Puedes escribirme directamente a{" "}
        <a
          href="mailto:kulmenvisuals@gmail.com"
          className="text-amber-300 hover:text-amber-200"
        >
          kulmenvisuals@gmail.com
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
            Nombre
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
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            required
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
          />
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="6"
            required
            placeholder="Cuéntame lo que tienes en mente."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition"
        >
          Enviar
        </button>
      </form>

      <p className="text-[11px] text-zinc-500 mt-4">
        El formulario se envía mediante Formspree y llega a{" "}
        <span className="text-amber-300">kulmenvisuals@gmail.com</span>.
      </p>
    </div>
  )
}
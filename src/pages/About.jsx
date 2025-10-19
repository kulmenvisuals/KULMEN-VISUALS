export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 leading-relaxed">
      <h1 className="text-3xl font-bold">Sobre mí</h1>
      <p className="text-zinc-300">
        Soy Kulmen Visuals: dirección, cámara, pilotaje FPV y postproducción. Me obsesiona la
        estética cinematográfica aplicada a marcas, territorio y cultura gallega. Trabajo con
        equipos ágiles y criterio narrativo.
      </p>
      <ul className="grid md:grid-cols-2 gap-3 text-zinc-300">
        <li>• FPV y dron clásico con permisos</li>
        <li>• Dirección de fotografía y cámara</li>
        <li>• Color grading y finishing</li>
        <li>• Entregas optimizadas para redes</li>
      </ul>
    </div>
  )
}
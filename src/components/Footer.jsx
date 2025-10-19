export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 text-sm text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <p>© {new Date().getFullYear()} Kulmen Visuals — Galicia</p>
        <p>FPV · Cine · Publicidad · Turismo · Eventos</p>
      </div>
    </footer>
  )
}
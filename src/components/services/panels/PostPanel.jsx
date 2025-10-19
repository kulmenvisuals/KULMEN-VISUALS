import BeforeAfterSlider from "../BeforeAfterSlider"

export default function PostPanel({ beforeAfter, bullets = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <BeforeAfterSlider before={beforeAfter.before} after={beforeAfter.after} />
      <div className="rounded-xl border border-zinc-800 p-5 bg-zinc-900/50">
        <h4 className="font-semibold mb-2">Qué hacemos</h4>
        <ul className="space-y-2 text-zinc-300">
          {bullets.map((b, i) => <li key={i}>• {b}</li>)}
        </ul>
      </div>
    </div>
  )
}
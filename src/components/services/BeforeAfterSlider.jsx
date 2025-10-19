import { useRef, useState, useEffect } from "react"

export default function BeforeAfterSlider({ before, after, className = "" }) {
  const ref = useRef(null)
  const [x, setX] = useState(50) // porcentaje

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const pct = ((clientX - rect.left) / rect.width) * 100
      setX(Math.max(0, Math.min(100, pct)))
    }
    const onDown = () => el.addEventListener("mousemove", onMove)
    const onUp = () => el.removeEventListener("mousemove", onMove)

    el.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    el.addEventListener("touchmove", onMove, { passive: true })

    return () => {
      el.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      el.removeEventListener("touchmove", onMove)
    }
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-xl border border-zinc-800 aspect-video ${className}`}>
      <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ width: `${x}%`, overflow: "hidden" }}>
        <img src={before} alt="before" className="w-full h-full object-cover" />
      </div>
      {/* Divider */}
      <div className="absolute top-0 bottom-0" style={{ left: `${x}%` }}>
        <div className="w-0.5 h-full bg-white/70 -translate-x-1/2" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black grid place-items-center text-xs font-bold select-none">
          ↔
        </div>
      </div>
    </div>
  )
}
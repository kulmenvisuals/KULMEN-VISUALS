import { useRef, useEffect } from "react"

export default function VideoPlayer({ src, poster, className = "" }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onIntersect = (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.play().catch(() => {})
          obs.disconnect()
        }
      })
    }
    const obs = new IntersectionObserver(onIntersect, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      playsInline
      muted
      loop
      poster={poster}
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
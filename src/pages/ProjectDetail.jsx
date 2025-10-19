import { useParams, Link } from "react-router-dom"
import projects from "../data/projects"
import VideoPlayer from "../components/VideoPlayer"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const marker = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41], iconAnchor: [12, 41]
})

export default function ProjectDetail() {
  const { id } = useParams()
  const p = projects.find(x => x.id === id)
  if (!p) return <div className="p-6">Proyecto no encontrado.</div>

  const related = projects.filter(x => x.id !== p.id && x.type.some(t => p.type.includes(t)))

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <Link to="/proyectos" className="text-amber-400">← Volver</Link>
      <h1 className="text-3xl font-bold">{p.title}</h1>
      <p className="text-zinc-400">{p.client} · {p.year} · {p.type.join(" · ")} · {p.location}</p>

      <VideoPlayer src={p.videoUrl} poster={p.poster} className="w-full rounded-xl border border-zinc-800 aspect-video object-cover" />

      <p className="text-zinc-300">{p.description}</p>

      <div>
        <h2 className="font-semibold mb-2">Localización</h2>
        <div className="h-72 rounded-xl overflow-hidden border border-zinc-800">
          <MapContainer center={p.coords} zoom={11} className="h-full w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={p.coords} icon={marker}>
              <Popup>{p.title} — {p.location}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="font-semibold mb-3">Relacionados</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(r => (
              <Link key={r.id} to={`/proyectos/${r.id}`} className="group">
                <img src={r.thumbnail} className="rounded-xl border border-zinc-800 aspect-video object-cover group-hover:opacity-90" />
                <div className="mt-2 text-sm">{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
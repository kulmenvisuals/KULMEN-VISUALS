import { useMemo, useState } from "react"
import projects from "../data/projects"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { Link } from "react-router-dom"

const marker = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41], iconAnchor: [12, 41]
})

export default function MapPage() {
  const [type, setType] = useState("")
  const types = useMemo(() => Array.from(new Set(projects.flatMap(p => p.type))), [])
  const filtered = projects.filter(p => !type || p.type.includes(type))

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-3xl font-bold">Mapa de Galicia</h1>
      <div className="flex items-center gap-3">
        <label className="text-sm text-zinc-400">Filtrar por tipo</label>
        <select
          className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Todos</option>
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="h-[70svh] rounded-xl overflow-hidden border border-zinc-800">
        <MapContainer center={[42.88, -8.04]} zoom={7.3} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filtered.map(p => (
            <Marker key={p.id} position={p.coords} icon={marker}>
              <Popup>
                <div className="text-sm">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-zinc-500">{p.type.join(" · ")}</div>
                  <Link to={`/proyectos/${p.id}`} className="text-amber-400">Ver ficha</Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}
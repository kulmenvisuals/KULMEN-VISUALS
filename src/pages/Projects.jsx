import { useMemo, useState } from "react"
import projects from "../data/projects"
import Filters from "../components/Filters"
import ProjectCard from "../components/ProjectCard"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {
  const types = useMemo(() => Array.from(new Set(projects.flatMap(p => p.type))), [])
  const locations = useMemo(() => Array.from(new Set(projects.map(p => p.location))), [])
  const [state, setState] = useState({ q: "", type: "", location: "" })

  const filtered = projects.filter(p => {
    const q = state.q.toLowerCase()
    const byQ = !q || p.title.toLowerCase().includes(q) || (p.client||"").toLowerCase().includes(q)
    const byType = !state.type || p.type.includes(state.type)
    const byLoc = !state.location || p.location === state.location
    return byQ && byType && byLoc
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Proyectos</h1>
      <Filters types={types} locations={locations} state={state} setState={setState} />

      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
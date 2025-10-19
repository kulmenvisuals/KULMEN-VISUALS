import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800"
    >
      <Link to={`/proyectos/${project.id}`} className="block">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-xs text-zinc-400 mt-1">
            {project.type.join(" · ")} — {project.location}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
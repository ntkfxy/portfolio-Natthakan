import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/portfolio'
export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="card bg-base-200 overflow-hidden hover:shadow-xl transition">
            <img src={p.image} alt={p.title} loading="lazy" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="opacity-80 text-sm mb-3">{p.desc}</p>
              <p className="text-xs opacity-70 mb-3"><strong>My role:</strong> {p.contribution}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.tech.map(t => <span key={t} className="badge badge-primary badge-outline">{t}</span>)}
              </div>
              <div className="flex gap-2">
                <a href={p.github} className="btn btn-sm btn-ghost"><FaGithub /> Code</a>
                <a href={p.demo} className="btn btn-sm btn-primary"><FaExternalLinkAlt /> Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

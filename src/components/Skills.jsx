import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div key={s.group} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="card bg-base-200 p-6 hover:shadow-xl transition">
              <Icon className="text-4xl text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">{s.group}</h3>
              <ul className="space-y-1 opacity-80">
                {s.items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

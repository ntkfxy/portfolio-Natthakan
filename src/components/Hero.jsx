import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="section-pad min-h-[90vh] flex flex-col justify-center items-center text-center">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-6xl lg:text-7xl font-extrabold">
        Hi, I'm <span className="text-gradient">{profile.name}</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-lg sm:text-xl max-w-2xl opacity-80">
        {profile.roles.join(' • ')}
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 max-w-2xl opacity-70">
        {profile.bio}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap gap-3 justify-center">
        <a href="#resume" className="btn btn-primary">Download Resume</a>
        <a href="#projects" className="btn btn-outline">View Projects</a>
        <a href="#contact" className="btn btn-ghost">Contact Me</a>
      </motion.div>
    </section>
  )
}

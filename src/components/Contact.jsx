import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/portfolio'
export default function Contact() {
  return (
    <section id="contact" className="section-pad text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="opacity-80 mb-8">Open to internship opportunities. Let's talk!</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a href={`mailto:${profile.email}`} className="btn btn-primary"><FaEnvelope /> Email</a>
        <a href={profile.socials.github} className="btn btn-outline"><FaGithub /> GitHub</a>
        <a href={profile.socials.linkedin} className="btn btn-outline"><FaLinkedin /> LinkedIn</a>
      </div>
    </section>
  )
}

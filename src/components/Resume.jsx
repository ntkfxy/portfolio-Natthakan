import { FaDownload } from 'react-icons/fa'
import { resumes } from '../data/portfolio'
export default function Resume() {
  return (
    <section id="resume" className="section-pad text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
      <p className="opacity-80 mb-8">Download the resume tailored to the role you're hiring for.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {resumes.map(r => (
          <a key={r.role} href={r.file} download className="btn btn-primary">
            <FaDownload /> {r.role}
          </a>
        ))}
      </div>
    </section>
  )
}

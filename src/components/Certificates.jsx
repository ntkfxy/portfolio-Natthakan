import { FaCertificate } from 'react-icons/fa'
import { certificates } from '../data/portfolio'
export default function Certificates() {
  return (
    <section id="certificates" className="section-pad">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Certificates</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certificates.map(c => (
          <div key={c.name} className="card bg-base-200 p-5 hover:shadow-lg transition">
            <FaCertificate className="text-3xl text-primary mb-2" />
            <h3 className="font-bold">{c.name}</h3>
            <p className="text-sm opacity-70">{c.issuer} • {c.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

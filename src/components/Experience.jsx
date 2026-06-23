import { experience } from '../data/portfolio'
export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Experience</h2>
      <ul className="timeline timeline-vertical">
        {experience.map((e, i) => (
          <li key={e.title}>
            {i > 0 && <hr />}
            <div className="timeline-start font-bold">{e.year}</div>
            <div className="timeline-middle">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            <div className="timeline-end timeline-box">
              <h3 className="font-bold">{e.title}</h3>
              <p className="text-sm opacity-80">{e.desc}</p>
            </div>
            {i < experience.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </section>
  )
}

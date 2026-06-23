import { profile } from '../data/portfolio'
export default function About() {
  return (
    <section id="about" className="section-pad">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <p className="opacity-80 leading-relaxed">{profile.bio} Based in {profile.location}, I'm actively seeking internship opportunities to grow as a developer, tester, or analyst.</p>
        <div className="card bg-base-200 p-6">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Location:</strong> {profile.location}</p>
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

const links = ['about', 'skills', 'projects', 'experience', 'certificates', 'resume', 'contact']

export default function Navbar() {
  const [theme, setTheme] = useState('light')
  const [open, setOpen] = useState(false)

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme) }, [theme])

  return (
    <nav className="sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        <a href="#hero" className="text-xl font-bold text-gradient">Natthakan.</a>
        <ul className="hidden md:flex gap-6">
          {links.map(l => (
            <li key={l}><a href={`#${l}`} className="capitalize hover:text-primary transition">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="btn btn-ghost btn-circle" aria-label="Toggle theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <button onClick={() => setOpen(!open)} className="btn btn-ghost btn-circle md:hidden" aria-label="Menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4">
          {links.map(l => (
            <li key={l}><a href={`#${l}`} onClick={() => setOpen(false)} className="capitalize block py-2 hover:text-primary">{l}</a></li>
          ))}
        </ul>
      )}
    </nav>
  )
}

import { FaReact, FaGitAlt, FaFigma, FaBug } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiPostman, SiJira, SiMysql } from 'react-icons/si'
import { MdAnalytics } from 'react-icons/md'
import storemate from "../assets/img/storemate.png"
import QAIntern from "../assets/resume/Natthakan_Jamratphum_QAIntern.pdf"
import BAIntern from "../assets/resume/Natthakan_Jamratphum_BAInternship_Resume.pdf"
import TranScript from "../assets/resume/Natthakan_Jamratphum_Eng_Transcript.pdf"

export const profile = {
  name: 'Natthakan Jamratphum',
  nickname: 'Fay',
  roles: ['Frontend Developer', 'QA Tester', 'Business Analyst'],
  bio: 'Computer Science student passionate about building clean UIs, ensuring software quality, and analyzing business needs to create impactful digital products.',
  email: 'natthakanjam26@gmail.com',
  phone: '+66 82 150 5710',
  location: 'Nakhon Pathom, Thailand',
  socials: {
    github: 'https://github.com/ntkfxy',
    linkedin: 'https://linkedin.com/in/natthakan-jamratphum/',
  },
}

export const skills = [
  { group: 'Frontend', icon: FaReact, items: ['React', 'JavaScript', 'TypeScript','TailwindCSS', 'HTML/CSS'] },
  { group: 'QA Testing', icon: FaBug, items: ['Manual Testing', 'Postman', 'Test Cases', 'Bug Reports'] },
  { group: 'Business Analysis', icon: MdAnalytics, items: ['Requirement Gathering', 'User Stories', 'Flowcharts', 'Documentation'] },
  { group: 'Tools', icon: FaGitAlt, items: ['Git/GitHub', 'Figma', 'Jira', 'MySQL'] },
]

export const projects = [
  {
    title: 'E-Commerce Website',
    desc: 'Full-stack e-commerce platform with cart, checkout, and admin dashboard.',
    tech: ['React', 'Typescript', 'Redux Toolkit', 'Java'],
    contribution: 'Built frontend components and integrated payment API.',
    github: 'https://github.com/nabnoey/storemate', demo: 'https://storemate-final.vercel.app/',
    image: storemate,
  },
  {
    title: 'MernChat Website',
    desc: 'Real-time messaging UI, user online status tracking, and active session management.',
    tech: ['React', 'Socket.io', 'TailwindCSS', 'zustand'],
    contribution: 'Designed UI and implemented recommendation algorithm.',
    github: 'https://github.com/ntkfxy/Mern_chat.git',
    image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800',
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio showcasing projects, skills, and experience.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    contribution: 'Designed and developed entire site from scratch.',
    github: '#', demo: '#',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
  },
]

export const experience = [
  { 
  year: '2025', 
  title: 'Senior Project — E-Commerce Platform', 
  desc: 'Led frontend development for a 4-person team; built responsive mobile layouts and multi-page features, integrated Stripe payment, and implemented the notification system.' 
}
]

export const certificates = [
  { name: 'SQL Basics', issuer: 'Born To Dev', year: '2024' },
  { name: 'พื้นฐาน TypeScript และ Frameworks', issuer: 'itgenius', year: '2026' },
  { name: 'Next.js 16: The AI-Native Developer Masterclass', issuer: 'itgenius', year: '2026' },
  { name: 'Basic Laravel 8 and React JS with Docker', issuer: 'itgenius', year: '2026' },
  { name: 'API Gateway and Software Architecture Fundamentals (Kong API Gateway)', issuer: 'Software Engineer', year: '2026' },
]

export const resumes = [
  { role: 'TranScript', file: TranScript },
  { role: 'Frontend Developer', file: './resume' },
  { role: 'QA Tester', file: QAIntern },
  { role: 'Business Analyst', file: BAIntern },
]

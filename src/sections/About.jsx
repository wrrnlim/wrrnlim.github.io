import { socialLinks } from '../constants/socials'
import { FaArrowRight, FaCalendarAlt, FaLinkedin } from 'react-icons/fa'
import Card from '../components/Card'
import Section from '../components/Section'
import Badge from '../components/Badge'

const experience = [
  { company: 'City of Edmonton', role: 'Geospatial Systems Analyst', dates: 'Sep 2025 – Present', skills: ['.NET', 'JavaScript', 'System Design'], mark: 'CoE', accent: 'bg-[#154c96] text-white' },
  { company: 'Trust Science', role: 'Software Developer', dates: 'Sep 2021 – Mar 2025', skills: ['JavaScript', 'React', 'Node', 'AWS'], mark: 'TS', accent: 'bg-[#010233] text-white' },
]

const education = [
  { company: 'University of Alberta', role: 'BSc Computing Science with Business Minor', dates: 'Sep 2019 – Apr 2023', skills: [], mark: 'UofA', accent: 'bg-[#185c36] text-white' },
]

function ExperienceItem({ item, isLast }) {
  return (
    <li className={`relative flex gap-4 ${isLast ? 'pb-0' : 'pb-8'}`}>
      {!isLast && <span className="absolute left-5 top-12 h-[calc(100%-2.5rem)] w-px bg-gray-200" />}
      <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold shadow-sm ${item.accent}`}>{item.mark}</div>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div><h5 className="font-bold text-gray-900">{item.role}</h5><p className="text-sm text-gray-700">{item.company}</p></div>
          <p className="flex shrink-0 items-center gap-1.5 text-sm text-gray-500"><FaCalendarAlt className="text-xs" aria-hidden="true" />{item.dates}</p>
        </div>
        {item.skills.length > 0 && <div className="mt-3 flex flex-wrap">{item.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div>}
      </div>
    </li>
  )
}

export default function About() {
  return (
    <Section title="About">
      <Card>
        <div className="mx-auto max-w-3xl text-left">
          <header className="flex justify-center border-b border-gray-200 pb-7">
            <img alt="Profile Photo" src="images/profile_img.png" className="h-28 w-28 rounded-full object-cover shadow-sm ring-4 ring-gray-100" />
          </header>

          <section className='py-8' aria-labelledby="experience-heading">
            <div className="mb-6 flex items-center gap-3">
              <div><h4 id="experience-heading" className="text-xl font-bold text-gray-900">Work Experience</h4><p className="text-sm text-gray-500">My recent roles</p></div>
            </div>
            <ol>{experience.map((item, index) => <ExperienceItem key={item.company} item={item} isLast={index === experience.length - 1} />)}</ol>
          </section>

          <div className="pt-8">
            <section className="border-t border-gray-200 py-8" aria-labelledby="education-heading">
              <div className="mb-5 flex items-center gap-3">
                <div><h4 id="education-heading" className="text-xl font-bold text-gray-900">Education</h4><p className="text-sm text-gray-500">My academic background</p></div>
              </div>
              <ol>{education.map((item, index) => <ExperienceItem key={item.company} item={item} isLast={index === education.length - 1} />)}</ol>
            </section>
          </div>

          <footer className="mt-8 border-t border-gray-100 pt-4">
            <div className="mt-3 flex justify-end">
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-2 rounded-lg px-3 py-1 font-medium text-gray-800 transition-all duration-200 hover:bg-[#ffcd71]/20">
                <FaLinkedin className="text-lg" />
                <span className="underline">View on LinkedIn</span>
                <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>
            </div>
          </footer>
        </div>
      </Card>
    </Section>
  )
}

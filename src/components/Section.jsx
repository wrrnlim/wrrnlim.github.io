import React from 'react'
import Card from './Card'

export default function Section(props) {
  const { title } = props
  const frontendSkills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'
  ]
  const backendSkills = [
    'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'
  ]
  return (
    <div className="text-center">
      <h3 className='text-3xl font-bold my-5' id={title.toLowerCase()}>{title}</h3>
      <div className="rounded-xl p-8 border-gray-200 border max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-left">
              <li>
                University of Alberta - Bachelor of Science in Computer Science with Business Minor (2019-2023)
              </li>
              <li>
                International Baccalaureate Diploma (2016-2019)
              </li>
            </ul>
          </div>

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

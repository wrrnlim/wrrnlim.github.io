import React from 'react'
import Card from './Card'
import { FaArrowRight, FaLinkedin } from 'react-icons/fa'
import profileImg from '../assets/profile_img.jpeg'

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
      <div className="rounded-xl p-8 border-gray-200 border shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-5 lg:mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="md:col-span-3 p-4 flex justify-center items-center">
            <img
              alt="Profile Photo"
              src={profileImg}
              className="max-h-48 w-auto rounded-full shadow-sm"
            />
          </div>
          <div className="md:col-span-7 p-4 flex flex-col justify-between text-left space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg text-[#242935]">Education</h4>
                <p className="ml-1">University of Alberta - BSc Computing Science with Business Minor (2019-2023)</p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-[#242935]">Latest Work Experience</h4>
                <p className="ml-1">Software Developer at Trust Science (2021-2025)</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-600 italic text-sm">View all my education, work experience, and updated information on my LinkedIn profile.</p>
              <div className="mt-3 self-end flex justify-end">
                <a href="https://linkedin.com/in/yourprofile" className="text-[#242935] hover:text-[#facb72] font-medium hover:cursor-pointer flex items-center gap-2 transition-colors duration-200 group">
                  <FaLinkedin className="text-lg" />
                  <span className="underline">View on LinkedIn</span>
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

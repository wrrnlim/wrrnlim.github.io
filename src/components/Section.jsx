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
      <h3 className="text-3xl font-bold my-5" id={title.toLowerCase()}>{title}</h3>
      <div className="rounded-xl p-10 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-4xl mx-5 lg:mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="md:col-span-3 p-4 flex justify-center items-center">
            <img
              alt="Profile Photo"
              src={profileImg}
              className="max-h-40 w-auto rounded-full shadow-sm ring-4 ring-gray-100"
            />
          </div>
          <div className="md:col-span-7 p-4 flex flex-col justify-between text-left space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-xl text-gray-800">Education</h4>
                <p className="text-gray-700">University of Alberta - BSc Computing Science with Business Minor</p>
                <p className="text-gray-400">Sep 2019 - Apr 2023</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800">Recent Work Experience</h4>
                <p className="text-gray-700">Software Developer at Trust Science</p>
                <p className="text-gray-400">Sep 2021 - Mar 2025</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-600 italic text-sm">View all my education, work experience, and updated information on my LinkedIn profile.</p>
              <div className="mt-3 self-end flex justify-end">
                <a href="https://linkedin.com/in/warrenlim" target='_blank' className="text-gray-800 hover:bg-[#ffcd71]/20 px-3 py-1 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 group">
                  <FaLinkedin className="text-lg" />
                  <span className="underline">View on LinkedIn</span>
                  <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { socialLinks } from '../constants/socials'
import { FaArrowRight, FaLinkedin } from 'react-icons/fa'
import profileImg from '../assets/profile_img.jpeg'
import Card from '../components/Card'
import Section from '../components/Section'

export default function About() {

  return (
    <Section title="About">
      <Card>
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
                <p className="text-gray-500">Sep 2019 - Apr 2023</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800">Recent Work Experience</h4>
                <p className="text-gray-700">Software Developer at Trust Science</p>
                <p className="text-gray-500">Sep 2021 - Mar 2025</p>
                <div className="pt-1">
                  <span className="inline-block bg-gray-200 rounded-full px-2 text-sm text-gray-700 mr-2 mb-2">JavaScript</span>
                  <span className="inline-block bg-gray-200 rounded-full px-2 text-sm text-gray-700 mr-2 mb-2">React</span>
                  <span className="inline-block bg-gray-200 rounded-full px-2 text-sm text-gray-700 mr-2 mb-2">Node</span>
                  <span className="inline-block bg-gray-200 rounded-full px-2 text-sm text-gray-700 mr-2 mb-2">AWS</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-500 italic text-sm">View all my education, work experience, and updated information on my LinkedIn profile.</p>
              <div className="mt-3 self-end flex justify-end">
                <a href={socialLinks.linkedin} target='_blank' className="text-gray-800 hover:bg-[#ffcd71]/20 px-3 py-1 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 group">
                  <FaLinkedin className="text-lg" />
                  <span className="underline">View on LinkedIn</span>
                  <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  )
}

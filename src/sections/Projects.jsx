import React from 'react'
import { socialLinks } from '../constants/socials'
import { FaArrowRight, FaLinkedin } from 'react-icons/fa'
import profileImg from '../assets/profile_img.jpeg'
import Section from '../components/Section'

export default function Projects() {

  return (
      <Section title="Projects">
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
          <img class="w-full h-30" src={profileImg} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <h4 class="font-bold text-xl mb-2">The Coldest Sunset</h4>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
      </Section>
  )
}

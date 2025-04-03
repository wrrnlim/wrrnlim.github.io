import React from 'react'
import portfolioScreenshot from '../assets/portfolio_screenshot.png'
import Section from '../components/Section'
import Badge from '../components/Badge'

export default function Projects() {

  return (
    <Section title="Projects">
      <div class="max-w-sm rounded overflow-hidden shadow-sm mx-auto hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
        <img class="w-full h-40 object-cover" src={portfolioScreenshot} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <h4 class="font-bold text-xl mb-2">Portfolio Site</h4>
          <p class="text-gray-700 text-base">
            This Next.js project is the site you are viewing right now!
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <Badge>Next.js</Badge>
          <Badge>GitHub Pages</Badge>
          <Badge>React</Badge>
        </div>
      </div>
    </Section>
  )
}

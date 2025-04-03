import React from 'react'
import portfolioScreenshot from '../assets/portfolio_screenshot.png'
import finflowScreenshot from '../assets/finflow_screenshot.png'
import constructionScreenshot from '../assets/crane.png'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {

  return (
    <Section title="Projects">
      <div className="flex flex-wrap justify-between">
        <ProjectCard
          image={portfolioScreenshot}
          title="Portfolio Site"
          description="This Next.js project is the site you are viewing right now!"
          badges={['Next.js', 'React', 'GitHub Pages', 'Tailwind', 'Vite']}
        />
        <ProjectCard
          image={finflowScreenshot}
          title="FinFlow"
          description="Finance management app that helps you track your income and expenses, with a monthly overview of your finances."
          badges={['React', 'Tailwind', 'Firebase', 'Vite']}
        />
        <ProjectCard
          image={constructionScreenshot}
          title="More Coming Soon"
          description="More projects are in the works, but are not yet ready to be displayed. Stay tuned!"
        />
      </div>
    </Section>
  )
}

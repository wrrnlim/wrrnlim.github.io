import React from 'react'
import constructionScreenshot from '../assets/crane.png'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

export default function Blog() {

  return (
    <Section title="Blog">
      <div className="flex flex-wrap justify-between">
        <ProjectCard
          image={constructionScreenshot}
          title="Blogs Coming Soon"
          description="The blog section is currently being built."
        />
      </div>
    </Section>
  )
}

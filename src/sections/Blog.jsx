import React from 'react'
import constructionScreenshot from '../assets/construction.png'
import Section from '../components/Section'
import TileCard from '../components/TileCard'

export default function Blog() {

  return (
    <Section title="Blog">
      <div className="flex flex-wrap justify-between">
        <TileCard
          image={constructionScreenshot}
          title="Blogs Coming Soon"
          description="The blog section is currently being built."
        />
      </div>
    </Section>
  )
}

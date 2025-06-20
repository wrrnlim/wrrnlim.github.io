import { Link } from 'react-router-dom'
import constructionScreenshot from '../assets/construction.png'
import finflowScreenshot from '../assets/finflow_screenshot.png'
import portfolioScreenshot from '../assets/portfolio_screenshot.png'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'

export default function Projects() {

  return (
    <Section title="Projects">
      <div className="flex flex-wrap justify-between gap-4">
        <Link to="/projects/portfolio">
          <ProjectCard
            image={portfolioScreenshot}
            title="Portfolio Site"
            description="This React project is the site you are viewing right now!"
            badges={['React', 'GitHub Pages', 'Tailwind', 'Vite']}
          />
        </Link>
        <Link to="/projects/finflow">
          <ProjectCard
            image={finflowScreenshot}
            title="FinFlow"
            description="Finance management app that helps you track your income and expenses, with a monthly overview of your finances."
            badges={['React', 'Tailwind', 'Firebase', 'Vite']}
          />
        </Link>
        <Link to="/projects/coming-soon">
          <ProjectCard
            image={constructionScreenshot}
            title="More Coming Soon"
            description="More projects are in the works, but are not yet ready to be displayed. Stay tuned!"
          />
        </Link>
      </div>
    </Section>
  )
}

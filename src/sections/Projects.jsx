import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import projects from '../constants/projects'

export default function Projects() {

  return (
    <Section title="Projects">
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {projects.map(project => {
          const card = (
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description || 'No description available.'}
              badges={project.skills}
            />
          )

          return project.id === 'coming-soon' ? (
            <div key={project.id}>
              {card}
            </div>
          ) :
          <Link key={project.id} to={`/projects/${project.id}`}>
            {card}
          </Link>
        })}
      </div>
    </Section>
  )
}

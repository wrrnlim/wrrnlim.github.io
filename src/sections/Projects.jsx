import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import projects from '../constants/projects'

export default function Projects() {

  return (
    <Section title="Projects">
      <div className="flex flex-wrap justify-between gap-4">
        {projects.map(project => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description || 'No description available.'}
              badges={project.skills}
            />
          </Link>
        ))}
      </div>
    </Section>
  )
}

import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import blogs from '../constants/blogs'

export default function Blog() {

  return (
    <Section title="Blog">
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {blogs.map(blog => {
          const card = (
            <ProjectCard
              image={blog.image}
              title={blog.title}
              description={blog.description || 'No description available.'}
              badges={blog.skills}
            />
          )

          return blog.id === 'coming-soon' ? (
            <div key={blog.id}>
              {card}
            </div>
          ) : (
            <Link key={blog.id} to={`/blogs/${blog.id}`}>
              {card}
            </Link>
          )
        })}
      </div>
    </Section>
  )
}

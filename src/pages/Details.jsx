import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import projects from '../constants/projects'

export default function Details() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  const [content, setContent] = useState('')

  useEffect(() => {
    if (!project) return
    const fetchContent = async () => {
      try {
        const res = await fetch(project.contentPath)
        if (res.headers.get('Content-Type') !== 'text/markdown') throw new Error('Invalid content type')
        const text = await res.text()
        setContent(text)
      } catch (err) {
        console.error('Error fetching content:', err)
        setContent('# Content not found')
      }
    }
    fetchContent()
  }, [project])


  if (!project) return <h1 className="p-4 text-2xl font-bold">Project not found</h1>

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map(skill => (
          <span key={skill} className="bg-gray-200 text-sm px-2 py-1 rounded">{skill}</span>
        ))}
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import projects from '../constants/projects'
import MarkdownRenderer from '../components/MarkdownRenderer'
import Badge from '../components/Badge'
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Helmet } from "react-helmet";

export default function Details() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const navigate = useNavigate()

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
    <>
      <Helmet>
        <title>{project.title} | Projects</title>
      </Helmet>
      <div className="p-8 max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-[#242935] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap mt-4 mb-2">
          {project.skills.map(skill => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap mt-2 mb-6 gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#facb72] text-[#242935] hover:text-[#facb72] hover:bg-[#242935] text-sm px-4 py-2 rounded transition cursor-pointer flex items-center gap-1"
            >
              View Live<FiExternalLink size={16} />
            </a>)}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#facb72] text-[#242935] hover:text-[#facb72] hover:bg-[#242935] text-sm px-4 py-2 rounded transition cursor-pointer flex items-center gap-1"
            >
              View Code <FaGithub size={16} />
            </a>
          )}
        </div>
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </div>
    </>
  )
}

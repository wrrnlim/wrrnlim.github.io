import React from 'react'
import Badge from '../components/Badge'

export default function ProjectCard(props) {
  const { image, title, description, badges=[] } = props
  return (
    <div className="max-w-70 rounded overflow-hidden mx-auto shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 mb-10">
      <img className="w-full h-40 object-cover" src={image} alt="Project cover image" />
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pb-3">
        {badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>
    </div>
  )
}

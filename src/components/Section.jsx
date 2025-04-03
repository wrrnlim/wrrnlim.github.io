import React from 'react'

export default function Section(props) {
  const { children, title } = props

  return (
    <div className="text-center mb-20">
      <h3 className="text-3xl font-bold my-10" id={title.toLowerCase()}>{title}</h3>
      {children}
    </div>
  )
}

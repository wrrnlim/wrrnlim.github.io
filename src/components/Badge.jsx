import React from 'react'

export default function Badge(props) {
  const { children } = props

  return (
    <span className="inline-block bg-gray-200 rounded-full px-2 text-sm text-gray-700 mr-2 mb-2">{children}</span>
  )
}

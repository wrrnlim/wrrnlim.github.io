import React from 'react'

export default function Card({ children }) {
  return (
    <div className="rounded-xl p-10 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 mx-5 lg:mx-auto mb-10">
      {children}
    </div>
  )
}

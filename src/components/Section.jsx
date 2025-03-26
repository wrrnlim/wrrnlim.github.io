import React from 'react'
import Card from './Card'

export default function Section(props) {
  const { title } = props
  return (
    <div className="text-center">
      <h3 className='text-3xl font-bold my-5'>{title}</h3>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

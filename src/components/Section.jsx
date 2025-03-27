import React from 'react'
import Card from './Card'

export default function Section(props) {
  const { title } = props
  return (
    <div className="text-center">
      <h3 className='text-3xl font-bold my-5' id={title.toLowerCase()}>{title}</h3>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-4">
        <Card>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Education</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </Card>
        <Card />
        <Card />
      </div>
    </div>
  )
}

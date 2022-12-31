import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import Background from '../components/Background'

export default function Blog() {
  return (
    <Background>
      <h1 className='mb-5 hero-title text-light'>Blog page coming soon!</h1>
      <MDBBtn color='light' outline href='/' className="mt-5">
        <div className='hero-btn'>
          <MDBIcon size='md' fas icon='house' /> &nbsp;
          Home
        </div>
      </MDBBtn>
    </Background>
  )
}
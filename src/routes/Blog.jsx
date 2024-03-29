import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'

export default function Blog() {
  return (
    <Background>
    <Navbar/>
      <div className='d-flex flex-column justify-content-center align-items-center h-100'>
        <h1 className='mb-5 hero-title text-light'>Blog page coming soon!</h1>
        <MDBBtn color='light' outline href='/' className="mt-5">
          <div className='hero-btn'>
            <MDBIcon size='md' fas icon='house' /> &nbsp;
            Home
          </div>
        </MDBBtn>
      </div>
    </Background>
  )
}
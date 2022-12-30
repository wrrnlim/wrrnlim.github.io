import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-left text-light'>
      <div className='text-center m-5 footer-text'>
        &copy; Warren Lim {new Date().getFullYear()} 
      </div>
    </MDBFooter>
  )
}

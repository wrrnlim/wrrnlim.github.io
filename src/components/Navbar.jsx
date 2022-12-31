import navLogo from '/assets/img/wl_logo_nav.png';

import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';



export default function Navbar() {
  const [navToggled, setNavToggler] = useState(false);
  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src={`${navLogo}`}
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            onClick={() => setNavToggler(!navToggled)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={navToggled}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Blog</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href='#' tabIndex={-1} aria-disabled='true'>
                  Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0 d-flex flex-row'>
              <MDBNavbarItem className='me-3 me-lg-0'>
                <MDBNavbarLink href='https://github.com/wrrnlim'>
                  <MDBIcon fab icon='github' />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='me-3 me-lg-0'>
                <MDBNavbarLink href='https://www.linkedin.com/in/warrenlim/'>
                  <MDBIcon fab icon='linkedin' />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

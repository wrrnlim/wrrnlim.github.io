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
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';



export default function Navbar() {
  const [navToggled, setNavToggler] = useState(false);
  return (
    // <div>
    //   <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-2">
    //     <div class="container-fluid">
    //       <a class="navbar-brand me-2" href="/">
    //         <img src={`${navLogo}`} height="16" alt="Logo" style={{ marginTop: "-1px" }}></img>
    //       </a>
    //       <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navCollapse"> <i class="fas fa-bars"></i> </button>
    //       <div class="collapse navbar-collapse" id='navCollapse'>
    //         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li class="nav-item"> <a class="nav-link" href="#">Home</a> </li>
    //           <li class="nav-item"> <a class="nav-link" href="">Projects</a> </li>
    //           <li class="nav-item"> <a class="nav-link" href="">Blog</a> </li>
    //         </ul>
    //         <div class="d-flex align-items-center">
    //           <a class="text-reset me-3"> <i class="fab fa-github"></i></a>
    //           <a class="text-reset me-3"><i class="fab fa-linkedin"></i></a>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

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
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  Disabled
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

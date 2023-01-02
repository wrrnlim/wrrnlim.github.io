import React from 'react';
import { useEffect, useState } from 'react';
import '../css/home.css'
import { MDBBtn, MDBBtnGroup, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import Footer from './Footer';

export default function Header() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 800) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [screenWidth]);

  return (
    <>
      <header className='d-flex align-items-center justify-content-center' style={{ height: '100vh', flexDirection: 'column' }}>
        <div className='text-white hero text-center'>
          <h1 className='mb-5 hero-title text-center'>Hi, my name is Warren</h1>
          <h4 className='mb-auto hero-sub'>
            I AM A COMPUTING SCIENCE MAJOR + BUSINESS MINOR<br />
            STUDENT AT THE UNIVERSITY OF ALBERTA.
          </h4>
        </div>
        <MDBBtnGroup size='lg' shadow='0' aria-label='Navigation buttons' className='mt-5' vertical={smallScreen}>
          <MDBBtn color='light' outline href='/#/blog'>
            <div className='hero-btn'>
              <MDBIcon size='lg' fas icon='pen-square' /> &nbsp;
              Blog
            </div>
          </MDBBtn>
          <MDBBtn color='light' outline href='/#/projects'>
            <div className='hero-btn'>
              <MDBIcon size='lg' fas icon='tools' /> &nbsp;
              Projects
            </div>
          </MDBBtn>
          <MDBBtn color='light' outline href='https://github.com/wrrnlim/' target='_blank'>
            <div className='hero-btn'>
              <MDBIcon size='lg' fab icon='github' /> &nbsp;
              GitHub
            </div>
          </MDBBtn>
          <MDBBtn color='light' outline href='https://www.linkedin.com/in/warrenlim/' target='_blank'>
            <div className='hero-btn'>
              <MDBIcon size='lg' fab icon='linkedin-in' /> &nbsp;
              LinkedIn
            </div>
          </MDBBtn>
        </MDBBtnGroup>
        <Footer />
      </header>
    </>
  );
}
import React from 'react';
import { useEffect, useState } from 'react';
import '../css/home.css'
import { MDBBtn, MDBBtnGroup, MDBIcon } from 'mdb-react-ui-kit';

export default function Home() {
  const styles = {
    bg: {
      backgroundImage: `url('../images/bg.png')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      margin: '0 auto',
    },
  };

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
      <header style={{ paddingLeft: 0 }}>
        <div
          className='p-5 text-center bg-image'
          style={styles.bg}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
              <div className='text-white hero'>
                <h1 className='mb-5 hero-title'>Hi, my name is Warren</h1>
                <h4 className='mb-auto hero-sub'>
                  I AM A COMPUTING SCIENCE MAJOR + BUSINESS MINOR<br />
                  STUDENT AT THE UNIVERSITY OF ALBERTA.
                </h4>
              </div>
              <MDBBtnGroup size='lg' aria-label='Navigation buttons' className='mt-5' vertical={smallScreen}>
                <MDBBtn color='light' outline>
                  <div className='hero-btn'>
                  <MDBIcon size='lg' fas icon='pen-square' /> &nbsp;
                  Blog
                  </div>
                </MDBBtn>
                <MDBBtn color='light' outline>
                  <div className='hero-btn'>
                  <MDBIcon size='lg' fas icon='tools' /> &nbsp;
                  Projects
                  </div>
                </MDBBtn>
                <MDBBtn color='light' outline>
                  <div className='hero-btn'>
                    <MDBIcon size='lg' fab icon='github' /> &nbsp;
                    GitHub
                  </div>
                </MDBBtn>
                <MDBBtn color='light' outline>
                  <div className='hero-btn'>
                    <MDBIcon size='lg' fab icon='linkedin-in' /> &nbsp;
                    LinkedIn
                  </div>
                </MDBBtn>
              </MDBBtnGroup>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
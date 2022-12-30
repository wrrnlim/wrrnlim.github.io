import React from 'react'
import backgroundImage from '/assets/img/bg.png';

export default function Background(props) {
  const styles = {
    bg: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      margin: '0 auto',
    },
  };

  return (
    <>
      <header style={{ paddingLeft: 0, position: 'relative' }}>
        <div
          className='p-5 text-center bg-image'
          style={styles.bg}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
              {props.children}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

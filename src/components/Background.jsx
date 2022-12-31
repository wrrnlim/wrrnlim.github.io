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
          className='bg-image'
          style={styles.bg}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            {props.children}
          </div>
        </div>
      </header>
    </>
  )
}

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
      overflow: 'auto',
      position: 'relative',
    },
    mask: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
    },
    content: {
      zIndex: 2,
    }
  };

  return (
    <>
      <div style={styles.bg}>
        <div style={styles.mask}>
          <div style={styles.content}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}
import React from 'react'
import backgroundImage from '/assets/img/bgdark.png';

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
  };

  return (
    <>
      <div style={styles.bg}>
        {props.children}
      </div>
    </>
  )
}
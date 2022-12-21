import './css/App.css'
import Home from './components/Home.jsx'
import './css/App.css'

function App() {
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
    bgOverlay: {
      backgroundImage: 'linear-gradient(to top, rgba(19, 21, 25, 0.5), rgba(19, 21, 25, 0.5)), url("../images/overlay.png")',
      backgroundSize: 'auto, 256px 256px',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat, repeat',
      width: '100vw',
      height: '100vh'
    }
  };
  return (
    <>
      <div style={styles.bg}>
        <div style={styles.bgOverlay}>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App

import './css/App.css';
import backgroundImage from '/assets/img/bg.png';
import Home from './components/Home.jsx';
import Footer from './components/Footer';

function App() {
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
      <header style={{ paddingLeft: 0 }}>
        <div
          className='p-5 text-center bg-image'
          style={styles.bg}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
              <Home />
              <Footer />
            </div>
          </div>
        </div>
    </header>
    </>
  )
}

export default App

import './css/App.css';
import backgroundImage from '/assets/img/bg.png';
import Home from './routes/Home.jsx';
import Footer from './components/Footer';
import Background from './components/Background';

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
      <Background>
        <Home />
        <Footer />
      </Background>
    </>
  )
}

export default App

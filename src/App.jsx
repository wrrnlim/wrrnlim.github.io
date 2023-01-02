import './css/App.css';
import Home from './routes/Home.jsx';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {

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

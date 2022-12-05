import './App.css'
import Home from './components/Home.jsx'

function App() {
  return (
    <div id='wrapper'>
      <Home />

      <footer id="footer">
        <p className="copyright">&copy; Warren Lim {new Date().getFullYear()}. Page adapted from <a href="https://html5up.net" target='_blank'>HTML5 UP</a>.</p>
      </footer>
    </div>
  )
}

export default App

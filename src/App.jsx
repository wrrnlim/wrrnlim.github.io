import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Details from './pages/Details';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/portfolio" element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App;

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Details from './pages/Details';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;

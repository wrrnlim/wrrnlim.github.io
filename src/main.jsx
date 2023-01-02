import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  Routes,
  HashRouter,
  Route,
} from "react-router-dom";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import ErrorPage from './components/ErrorPage';
import Projects from './routes/Projects';
import Blog from './routes/Blog';
import Home from './routes/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> } errorElement={ <ErrorPage /> }/>
        <Route path='/projects' element={ <Projects /> }/>
        <Route path='/blog' element={ <Blog /> }/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

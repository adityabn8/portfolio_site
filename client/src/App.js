import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Blogs from './components/Blogs';
import './App.scss';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className="header">
          <Header />
        </div>
        <div className='body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/Blogs' element={<Blogs />} />
          </Routes>
        </div>
        <div className="footer"><Footer /></div>
      </div>
    </Router>
  );
}

export default App;
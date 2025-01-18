/*'use client'; // Add this directive to use client-side rendering

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Tittle from './tittle';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  
  return (
    <main>
      <Tittle />
      <div id="overlay"></div>
      <Spline
        onLoad={(spline) => spline.setGlobalEvents(true)}
        scene="https://prod.spline.design/0Vt4vZoLzFCc-dZI/scene.splinecode"
      />
      
      <div className="navigation-links">
        
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        
      </div>
      <footer>Made with love.</footer>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<div>About Me</div>} />
        <Route path="/skills" element={<div>Skills</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  );
}

export default App;
*/
// App.js
"use client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigation';
import Home from './home';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';



function App() {
  return (
    <>
    
    <main>
    <Navbar />
    <About />
    <Project />
    <Contact />
  </main>
  </>
  );
}

export default App;

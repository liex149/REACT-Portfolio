import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Resume from './components/Resume';
import Form from './components/Form';



function App() {
  return (
    <>
    
    <main>
    <Navbar />
    <Header />
    <About />
    <Project />
    <Contact />
    <Resume />
    <Form/>
  </main>
  </>
  );
}

export default App;

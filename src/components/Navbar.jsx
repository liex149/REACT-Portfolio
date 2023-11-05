import React from 'react'

// react fontawesome imports




const Navbar = () => {
 
  return (
    
<nav className="green navbar-light navbar-expand-lg navbar">
  <div className="container">
  <div className="navbar-brand" ></div>
  <button className="navbar-toggler" type="button " data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
        <a className="nav-link" href="#header"> Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#about">About Me <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#resume">Resume</a>
      </li>
    </ul>
   
  </div>
  </div>
</nav>

  )
}

export default Navbar
//Needs links to my Github, Linkedin

import React from "react";

function Footer() {
  return (
    <footer className=" text-center">
        
      <div className="content text-centered  page-container p-3 mt-5">
        <body>
        <p id="footer">
          <strong>My Full Stack Development Portfolio on </strong>
          <a href="https://github.com/liex149" target="_blank" rel="noreferrer">
            GitHub |
          </a>
       
         
          <a
            href="https://www.linkedin.com/in/linh-lien-4b4a0a51"
            target="_blank" rel="noreferrer"
          >
             | LinkedIn
          </a>{" "}
          
          
        </p></body>
      </div>
      
    </footer>
  );
}

export default Footer;
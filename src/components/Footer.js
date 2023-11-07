//Needs links to my Github, Linkedin

import React from "react";

function Footer() {
  return (
    <footer className=" text-center">
        
      <div className="content text-centered  page-container p-3 mt-5">
        <body>
        <p id="footer">
          <strong> </strong>
          
          <a href="https://www.linkedin.com/in/linh-lien-4b4a0a51"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
          <a href="https://github.com/liex149"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
          {/* <a href="https://www.instagram.com/linhlien23/"><img src=" https://icons8.com/icon/32323/instagram" alt="Instagram" className="icon"/></a> */}
    
        </p></body>
      </div>
      
    </footer>
  );
}

export default Footer;
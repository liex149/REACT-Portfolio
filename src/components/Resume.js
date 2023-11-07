import React from "react";

function Resume() {
	return (
    <div>
		<section id="Reslink">
			<div className="center" >
				<h1 className="page-header text-center text-light">My Resume</h1>
			</div>
			<div className="bottom-spacing">
      <a
          className="button is-primary d-flex justify-content-center"
          href={"images/updatedresume2022.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download "></i>
          </span>
          <span>Download My Resume</span>
        </a>
			</div>
      
			<div className="p-3 text-light proficiencies">
				<h5 >Front-End Proficiencies</h5>
				
					<ul>HTML5</ul>
					<ul>CSS3</ul>
					<ul>JavaScript</ul>
					<ul>jQuery</ul>
					<ul>Bootstrap</ul>
					<ul>React</ul>
					<ul>version control/Git</ul> 
					<ul>responsive design</ul>
				
				<br></br>
				<h5>Back-End Proficiencies</h5>
			
					<ul>APIs</ul>
					<ul>NodeJS</ul>
					<ul>Express</ul>
					<ul>Model View Controller (MVC)</ul>
					<ul>REST</ul>
					<ul>Progressive Web Appulcations (PWA)</ul>
			
				<br></br>
				<h5>Dev Tool Proficiencies</h5>
			
					<ul>Git</ul>
					<ul>npm</ul>
					<ul>Jest</ul>
					<ul>Webpack</ul>
				
				<br></br>
				<h5>Database Proficiencies</h5>
			
					<ul>MySQL</ul>
					<ul>Sequeulze</ul>
					<ul>NoSQL</ul>
					<ul>SQulte</ul>
					<ul>GraphQL</ul>
					<ul>MongoDB</ul>
					<ul>Mongoose</ul>
				
			</div>
		</section>
    </div>
	);
}

export default Resume;
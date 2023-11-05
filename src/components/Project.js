import React from "react";
import { projects } from "./data";
// import { Sparkles } from "heroicons-react";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-500 body-font ">
      <div className="container px-2 py-5 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-10">
          {/* <Sparkles className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-dark">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are a few apps/websites that I have worked on. Please click on
            the link to check them out!
          </p>
        </div>
        <div className="d-flex  flex-wrap text-center">
          {projects.map((project) => (
            <div className="p-3 ">
              <div
                className="card d-flex  mb-3 d-flex flex-wrap"
                style={{ width: "300px", height: "500px" }}
              >
                <img
                  className="card-img-top"
                  src={project.image}
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div>
                  <div className="card-body align-bottom">
                    <a href={project.link} className="card-link">
                      Click to View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

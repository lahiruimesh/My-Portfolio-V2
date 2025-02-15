import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-black min-h-screen">
      
      <h2 className="text-3xl font-bold text-white text-center">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-4 shadow-lg rounded-lg text-black bg-gray-200">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Description of the project.</p>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-gray-200">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Description of the project.</p>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-gray-200">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Description of the project.</p>
        </div>
        

      </div>
    </section>
  );
};

export default Projects;

import React from 'react';

const About = () => {
    return(
    <section id="about" className="p-8 bg-black text-white min-h-screen z-500">
      <h2 className="text-3xl font-bold text-center" >About Me</h2>
      <div className="mt-6 text-center ">
        <p>Brief Bio Here...</p>
        <h3 className="text-xl font-bold mt-4">Skills</h3>
        <p>React, Tailwind CSS, JavaScript, MERN Stack...</p>
        <h3 className="text-xl font-bold mt-4">Education</h3>
        <p>Your University - Degree</p>
      </div>
    </section>
    );
};

export default About;
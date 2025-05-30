import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFirebase } from 'react-icons/si';
import BNR from "../Assets/BNR.jpg";
import PF from "../Assets/PF.png";
import { FaReact, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa';

// Project data
const projectCards = [
  {
    id: 1,
    title: "Bun & Run – Smart Fast Food Vending Machine",
    description: "Bun & Run is a smart vending machine with QR payments, touch-screen UI, and real-time inventory updates—built in 3 months using ESP-32, MicroPython, Node.js, and Firebase.",
    image: BNR,
    technologies: [FaJsSquare, FaNodeJs, SiFirebase],
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A responsive and modern personal portfolio built with React and Tailwind CSS. Showcases my projects, skills, and contact information in a clean single-page layout.",
    image: PF,
    technologies: [FaReact, FaJsSquare, FaCss3Alt],
  },

];


const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8 bg-black min-h-screen"
      style={{
        backgroundImage: "linear-gradient(to bottom right,rgb(13, 0, 22),rgb(24, 1, 39),rgb(15, 2, 27),rgb(35, 0, 59))",
        backgroundColor: "#000015",
      }}
    >
      <h1 className="text-3xl font-bold text-white text-center">Projects</h1>
      <p className="text-lg text-gray-300 text-center mt-6">
        My experience as an IT Undergraduate and SE Enthusiast.
      </p>

      <div className="m-20 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
        {projectCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-between p-2 shadow-lg rounded-lg bg-gray-900 w-80 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-52 w-full rounded-t-lg object-cover"
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.4 }}
            />
            <h3
              className="p-4 text-xl font-bold text-[#C0C0C0] opacity-60"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </h3>
            <p
              className="px-4 pb-2 text-[#C0C0C0] opacity-60"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.description}
            </p>

            {/* Social media + technologies icons */}
              <div className="flex items-center justify-between px-4 mt-4 mb-4 opacity-80">
                {/* Social media icons */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition-transform transform hover:scale-125"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 transition-transform transform hover:scale-125"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>

                {/* Technology icons */}
                <div className="flex gap-3 pr-4">
                  {card.technologies?.map((TechIcon, index) => (
                    <TechIcon key={index} size={20} className="text-white hover:text-cyan-400 opacity-80 transition-transform transform hover:scale-110 " />
                  ))}
                </div>
              </div>

            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

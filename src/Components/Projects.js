import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import BNR from "../Assets/BNR.jpg";
import myImage2 from "../Assets/pic2.jpg";

// Project data
const projectCards = [
  {
    id: 1,
    title: "Bun & Run – Smart Fast Food Vending Machine",
    description: "Bun & Run is a smart vending machine with QR payments, touch-screen UI, and real-time inventory updates—built in 3 months using ESP-32, MicroPython, Node.js, and Firebase.",
    image: BNR,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: myImage2,
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: myImage2,
  },
  {
    id: 4,
    title: "Project 4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: myImage2,
  },
  {
    id: 5,
    title: "Project 5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: myImage2,
  },
  {
    id: 6,
    title: "Project 6",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: myImage2,
  },
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8 bg-black min-h-screen"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #000015, rgb(8, 2, 12))",
        backgroundColor: "#000015",
      }}
    >
      <h1 className="text-5xl font-bold text-white text-center">Projects</h1>
      <p className="text-xl text-gray-300 text-center mt-6">
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

            {/* Social media icons */}
            <div className="flex justify-left ml-5 opacity-80 gap-6 mt-4 mb-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-transform transform hover:scale-125"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-transform transform hover:scale-125"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

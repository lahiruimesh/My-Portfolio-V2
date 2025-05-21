import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import myImage1 from "../Assets/pic4.jpg";
import myImage2 from "../Assets/pic2.jpg";

// Project data
const projectCards = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: myImage2,
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

// Animation config
const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

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
          <motion.div
            key={card.id}
            className="flex flex-col justify-between p-2 shadow-lg rounded-lg bg-gray-900 w-80 transition-all duration-300 hover:scale-105"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.img
              src={card.image}
              alt={card.title}
              className="h-52 w-full rounded-t-lg object-cover"
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.4 }}
            />
            <motion.h3
              className="p-4 text-xl font-bold text-[#C0C0C0] opacity-60"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </motion.h3>
            <motion.p
              className="px-4 pb-2 text-[#C0C0C0] opacity-60"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.description}
            </motion.p>

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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

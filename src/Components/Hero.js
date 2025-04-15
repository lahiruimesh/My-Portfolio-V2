import React from "react";
//import heroBg from "../Assets/1581013.jpg"; // Fix import path
//import GalaxyBackground from "./GalaxyBackground";
import { FaLinkedin, FaFacebook, FaBehance, FaInstagram } from "react-icons/fa";


const Hero = () => {
  return (
    
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-white bg-black"
      /*style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}*/
    >
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={26} className="text-white hover:text-blue-800 hover:scale-150"/>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={26} className="text-white hover:text-blue-800 hover:scale-150" />
        </a>
        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
          <FaBehance size={26} className="text-white hover:text-blue-800 hover:scale-150" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={26} className="text-white hover:text-blue-800 hover:scale-150" />
        </a>
      </div>

      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold">Hi, I'm <span className="text-blue-600">Lahiru Imesh</span></h1>
        <p className="text-2xl mt-4">I am an undergraduate at the University of Moratuwa, focused on <br />developing my skills in IT and software development.</p>


        <div className="space-y-8 space-x-7">
            <button className="bg-transparent hover:bg-blue-800 text-white font-semibold hover:text-white py-3 px-9 border border-white hover:border-transparent rounded-full transition duration-300">
            <a href="#contact">Contact Me</a>
            </button>

            <button className="bg-blue-800 hover:bg-transparent text-white font-bold py-3 px-5 rounded inline-flex items-center space-x-2 transition duration-300 border rounded-full border-blue-800 hover:border-white">
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
              </svg>
                <span>Download CV</span>
            </button>
      </div>
</div>

    </section>
  );
};

export default Hero;

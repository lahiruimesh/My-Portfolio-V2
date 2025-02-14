import React from "react";
import heroBg from "../Assets/1581013.jpg"; // Fix import path

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Lahiru Imesh</h1>
        <p className="text-xl mt-4">A passionate Web Developer</p>
      </div>
    </section>
  );
};

export default Hero;

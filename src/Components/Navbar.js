import React from 'react';

const Navbar = () => {
    return(
        <nav className=" text-white fixed w-full p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#beyond">Beyond Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;
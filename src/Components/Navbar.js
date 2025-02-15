import React from 'react';

const Navbar = () => {
    return(
        <nav className=" text-white fixed w-full p-9 z-50">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex gap-8 ">
          <li className='hover:text-blue-800 hover:font-bold hover:underline'><a href="#about">About</a></li>
          <li className='hover:text-blue-800 hover:font-bold hover:underline'><a href="#projects">Projects</a></li>
          <li className='hover:text-blue-800 hover:font-bold hover:underline'><a href="#beyond">Beyond Works</a></li>
          <li className='hover:text-blue-800 hover:font-bold hover:underline'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;
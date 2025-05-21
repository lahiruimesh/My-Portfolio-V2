/*
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

*/

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: install lucide-react or use your own icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-white fixed w-full p-6 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {['About', 'Projects', 'Beyond Works', 'Contact'].map((item) => (
            <li key={item} className="hover:text-purple-800 hover:font-bold">
              <a href={`#${item.toLowerCase().replace(' ', '')}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 bg-black p-4 rounded-md">
          {['About', 'Projects', 'Beyond Works', 'Contact'].map((item) => (
            <li key={item} className="relative pb-1 border-b-2 border-transparent hover:border-purple-800 transition-all duration-300 hover:font-bold">
              <a href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

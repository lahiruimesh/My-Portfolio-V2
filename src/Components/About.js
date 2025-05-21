import React, { useState, useEffect } from 'react';
import image1 from '../Assets/image2.jpg';
import image2 from '../Assets/image3.jpg';

const About = () => {
  // State to manage the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  // Effect to handle slide transitions every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section id="about" className="bg-black text-white items-center justify-center min-h-screen" style={{
      backgroundImage: 'linear-gradient(to bottom right, #000015,rgb(8, 2, 12))',
      backgroundColor: '#000015' // fallback color
    }}>
     
      <div className="container mx-auto flex flex-col gap-6 p-6">
        {/* First Row: Card 1, Card 3 (left), Card 2 (right) */}
        <div className="flex flex-col md:flex-row mt-16 gap-6">
          {/* Left Section: Card 1 and Card 3 */}
          <div className="flex flex-col gap-6 w-full md:w-2/5">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray rounded-xl border border-gray-600 p-6 shadow-lg h-30">
              <h2 className="text-xl font-bold">Tech enthusiast with a passion for development.</h2>
              <div className="h-4 bg-gray-600 rounded mt-4 opacity-50"></div>
            </div>

            {/* Card 3 with Slides */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg h-60 overflow-hidden">
              <div className="mt-3 relative w-full h-20">
                {/* Slide Container */}
                <div
                  className="w-full h-full flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 */}
                  <div className="w-full flex-shrink-0 text-center">
                  <h2 className="text-3xl font-bold mt-4 ml-5 mr-5">Here are some <span className='text-3xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text'>skills </span> I’ve <br />been honing over the past 3 years</h2>
                  </div>
                  {/* Slide 2 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Frontend</h2>
                      <div className='m-5 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">React Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Tailwind CSS</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Javascript</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Next Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Material UI</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Bootstrap</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Backend</h2>
                      <div className='m-5 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">React Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Tailwind CSS</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Javascript</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Next Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Material UI</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Bootstrap</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 4 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Programming</h2>
                      <div className='m-5 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">React Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Tailwind CSS</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Javascript</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Next Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Material UI</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Bootstrap</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 5 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">IDE's</h2>
                      <div className='m-5 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">React Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Tailwind CSS</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Javascript</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Next Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Material UI</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Bootstrap</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 6 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Design</h2>
                      <div className='m-5 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">React Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Tailwind CSS</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Javascript</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Next Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Material UI</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Bootstrap</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 7 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Others</h2>
                      <div className='m-5 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">React Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Tailwind CSS</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Javascript</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Next Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Material UI</h3>
                        </div>
                        <div className="bg-purple-900 w-[7rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Bootstrap</h3>
                        </div>
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Card 2 */}
          <div 
            className="rounded-xl p-6 shadow-lg flex flex-col w-full md:w-3/5 h-100 overflow-hidden"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900 opacity-60"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-left mt-60 ml-5">I prioritize client <br /> collaboration, fostering  <br />  open communication</h2>
            </div>
          </div>
          </div>


        {/* Second Row: Card 4 (left), Card 5 and Card 6 (right) */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section: Card 4 */}
          <div 
            className="rounded-xl p-6 shadow-lg flex flex-col w-full md:w-3/5 h-100 relative overflow-hidden"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-white opacity-50"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-left mt-60 ml-5">I prioritize client <br /> collaboration, fostering  <br />  open communication</h2>
            </div>
          </div>

          {/* Right Section: Card 5 and Card 6 */}
          <div className="flex flex-col gap-6 w-full md:w-2/5">
          
            {/* Card 5 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg h-48">
              <h2 className="text-xl font-bold">Card 5: Project Updates</h2>
              <p className="mt-4">Working on exciting updates for the animation library.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg h-48">
              <h2 className="text-xl font-bold">Card 6: Future Plans</h2>
              <p className="mt-4">Planning to integrate more advanced features soon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
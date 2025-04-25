import React, { useState, useEffect } from 'react';

const About = () => {
  // State to manage the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Effect to handle slide transitions every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section id="about" className="bg-black text-white items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-white text-center p-8">About</h1>
      <div className="container mx-auto flex flex-col gap-6 p-6">
        {/* First Row: Card 1, Card 3 (left), Card 2 (right) */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section: Card 1 and Card 3 */}
          <div className="flex flex-col gap-6 w-full md:w-2/5">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg h-38">
              <h2 className="text-xl font-bold">Tech enthusiast with a passion for development.</h2>
              <div className="h-4 bg-gray-600 rounded mt-4 opacity-50"></div>
            </div>

            {/* Card 3 with Slides */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg h-58 overflow-hidden">
              <h3 className="text-lg font-semibold">The Inside Scoop</h3>
              <h2 className="text-xl font-bold mt-2">Currently building a JS Animation library</h2>
              <div className="mt-4 relative w-full h-20">
                {/* Slide Container */}
                <div
                  className="w-full h-full flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <p className="text-lg text-orange-400">Slide 1</p>
                  </div>
                  {/* Slide 2 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <p className="text-lg text-orange-400">Slide 2</p>
                  </div>
                  {/* Slide 3 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <p className="text-lg text-orange-400">Slide 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Card 2 */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center w-full md:w-3/5 h-100">
            <h2 className="text-2xl font-bold text-center">Do you want to start a project together?</h2>
            <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <span>Copy my email address</span>
            </button>
          </div>
        </div>

        {/* Second Row: Card 4 (left), Card 5 and Card 6 (right) */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section: Card 4 */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center w-full md:w-3/5 h-100">
            <h2 className="text-2xl font-bold text-center">Do you want to start a project together?</h2>
            <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <span>Copy my email address</span>
            </button>
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
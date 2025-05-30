import React, { useState, useEffect } from 'react';
import image1 from '../Assets/image2.jpg';
import image2 from '../Assets/image3.jpg';

const About = () => {
  // State to manage the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

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
      backgroundImage:  "linear-gradient(to bottom right,rgb(13, 0, 22),rgb(24, 1, 39),rgb(15, 2, 27),rgb(35, 0, 59))",
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
              <div className="h-4 bg-purple-600 rounded mt-4 opacity-50"></div>
            </div>

             {/* Card 3 with Slides */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg h-80 md:h-60 overflow-hidden">
              <div className="mt-3 relative w-full h-20">
                {/* Slide Container */}
                <div
                  className="w-full md:h-full flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 */}
                  <div className="w-full flex-shrink-0 text-center">
                  <h2 className="text-3xl font-bold mt-4 ml-5 mr-5">Here are some <span className='text-3xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text'>skills </span> I’ve <br />been honing over the past 3 years</h2>
                  </div>
                  {/* Slide 2 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Frontend</h2>
                      <div className='m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">React Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Tailwind CSS</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Javascript</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Next Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Material UI</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Bootstrap</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Backend</h2>
                      <div className='m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Node Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">MongoDB</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Express Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Nest Js</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">MySQL</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 4 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Programming</h2>
                      <div className='m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">C</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">C#</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Java</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 5 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Design</h2>
                      <div className='m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Photoshop</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Illustrator</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Figma</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Canva</h3>
                        </div>
                      </div>
                  </div>
                  {/* Slide 6 */}
                  <div className="w-full flex-shrink-0 text-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">Tools & Platforms</h2>
                      <div className='m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4'>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">VS Code</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Postman</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Git</h3>
                        </div>
                        <div className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center">
                            <h3 className="text-white text-base">Github</h3>
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
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900 opacity-80"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-left mt-60 ml-0 md:ml-5">I believe in listening
              <br /> first, then creating  <br />  with purpose</h2>
            </div>
          </div>
          </div>


        {/* Second Row: Card 4 (left), Card 5 and Card 6 (right) */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section: Card 4 */}
          <div 
            className="rounded-xl p-6 shadow-lg flex flex-col w-full md:w-3/5 h-75 relative overflow-hidden"
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
              <h2 className="text-3xl font-bold text-left mt-60 ml-0 md:ml-5">Always exploring <br /> new challenges  <br />  and creative roles</h2>
            </div>
          </div>

          {/* Right Section: Card 5 and Card 6 */}
          <div className="flex flex-col gap-6 w-full md:w-2/5">
          
          
            {/* Card 6 */}
            <div className="bg-gradient-to-br from-gray-800 to-purple-900 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-white tracking-wide mb-3">
            University of Moratuwa – Undergraduate
            </h2>
            <p className="text-purple-200 text-sm md:text-base mb-1">
              <span className="font-semibold">Degree:</span> BSc (Hons) in Information Technology
            </p>
            <p className="text-purple-200 text-sm md:text-base mb-1">
              <span className="font-semibold">Duration:</span> 2023 – Present
            </p>
            <p className="text-purple-200 text-sm md:text-base mb-1">
              <span className="font-semibold">Current Year:</span> 2nd Year Undergraduate
            </p>
            <p className="text-purple-200 text-sm md:text-base mb-1">
              <span className="font-semibold">Focus Areas:</span> Full-Stack Development, UI/UX Design, Software Engineering
            </p>
            <p className="text-purple-200 text-sm md:text-base">
              <span className="font-semibold">Notable Work:</span> Projects in MERN stack, Healthcare Web App, and customizable e commerce website
            </p>
            <p className="mt-4 text-purple-200 text-sm md:text-base">
            Actively engaged in university tech clubs and hackathons. Participated in interfaculty competitions and contributed to organizing student tech meetups.
            </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
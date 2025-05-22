import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Information Technology",
      institution: "University of Moratuwa",
      duration: "2022 - 2027",
      description: "Pursuing a degree in Information Technology, specializing in software development and innovative technologies.",
      achievements: [
        "",
        ""
      ],
      color: "blue"
    },
    {
      id: 2,
      //degree: "Bachelor of Software Engineering",
      institution: "Bandarawela Central Collage",
      duration: "2018 - 2021",
      description: "Completed GCE Advanced Level (2021) in the Mathematics stream, achieving A grades in Combined Mathematics.",
      achievements: [
        "GCE Advanced Level (2021) Combined Maths - A Chemistry - A Physics - A ",
        "Z-Score - 1.6220"
      ],
      color: "green"
    },
    {
      id: 3,
      //degree: "High School Diploma",
      institution: "Bandarawela Dharmapala Collage",
      duration: "2012 - 2018",
      description: "Completed GCE Ordinary Level, excelling in core subjects and building a strong academic foundation.",
      achievements: [
        "GCE Ordinary Level (2017) - 8 A’s and 1 C (English) in Sinhala Medium"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-gray-900/50 backdrop-blur-sm",
        border: "border-blue-400/30",
        icon: "bg-blue-500",
        text: "text-blue-400",
        line: "bg-blue-400"
      },
      green: {
        bg: "bg-gray-900/50 backdrop-blur-sm",
        border: "border-green-400/30",
        icon: "bg-green-500",
        text: "text-green-400",
        line: "bg-green-400"
      },
      purple: {
        bg: "bg-gray-900/50 backdrop-blur-sm",
        border: "border-purple-400/30",
        icon: "bg-purple-500",
        text: "text-purple-400",
        line: "bg-purple-400"
      }
    };
    return colorMap[color];
  };

  return (
    <section id="education" className="p-8 bg-black text-white min-h-screen" style={{
        backgroundImage: 'linear-gradient(to bottom right,rgb(13, 0, 22),rgb(24, 1, 39),rgb(15, 2, 27),rgb(35, 0, 59))',
        backgroundColor: '#000015' // fallback color
      }}>

    <div className="max-w-4xl mx-auto p-6">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Educational Journey
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          My academic path and achievements that shaped my knowledge and skills
        </p>
      </div>

      {/* Education Tree */}
      <div className="relative">
        {/* Main vertical line - centered on desktop */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-600"></div>

        {educationData.map((edu, index) => {
          const colors = getColorClasses(edu.color);
          const isLeft = index % 2 === 0;
          
          return (
            <div key={edu.id} className="relative mb-12 last:mb-0">
              {/* Timeline dot - centered on desktop */}
              <div className={`absolute left-2 md:left-1/2 md:-translate-x-2 w-4 h-4 ${colors.icon} rounded-full border-4 border-gray-900 shadow-lg z-10`}></div>
              
              {/* Connecting line to card - direction based on position */}
              <div className={`absolute top-2 w-6 md:w-12 h-0.5 ${colors.line} ${
                isLeft 
                  ? 'left-8 md:right-1/2 md:left-auto md:mr-2' 
                  : 'left-8 md:left-1/2 md:ml-2'
              }`}></div>

              {/* Education Card - alternating left/right on desktop */}
              <div className={`ml-16 md:ml-0 ${
                isLeft 
                  ? 'md:w-5/12 md:mr-auto md:pr-8' 
                  : 'md:w-5/12 md:ml-auto md:pl-8'
              }`}>
                <div className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1`}>
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className={`${colors.text} mr-2`} size={24} />
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                        {edu.institution}
                        </h3>
                      </div>
                      {edu.degree}
                      <h4 className="text-lg font-semibold text-gray-300 mb-2">
                        
                      </h4>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4 text-gray-400">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center mb-3">
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-2 h-2 ${colors.icon} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
    </section>
  );
};

export default Education;
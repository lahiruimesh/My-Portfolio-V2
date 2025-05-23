import react from 'react';
import IEEE from '../Assets/IEEE.jpg';
import RM from '../Assets/RM.jpg';
import PB from '../Assets/PB.jpg';

const projectCards = [
  {
    id: 1,
    title: " INTERNSHIP TRAINEE -  People's Bank Sri Lanka (2022 - 2023)",
    description: "Completed a six-month internship at People's Bank after A-levels, gaining hands-on experience in banking operations, financial procedures, and customer service.",
    image: PB,
  },
  {
    id: 2,
    title: "ROTARACT CLUB OF UNIVERSITY OF MORATUWA",
    description: "I served as a Design Committee Member for Data Storm 5.0 and Co-Director of PR Avenue (2024–25), contributing to event branding, promotional content, and public relations efforts to boost engagement and visibility.",
    image: RM,
  },
  {
    id: 3,
    title: " IEEE STUDENT BRANCH UNIVERSITY OF MORATUWA",
    description: " Organizing Committee Member of MERCon 2023, actively involved in coordinating logistics and supporting the smooth execution of the international engineering research conference.",
    image: IEEE,
  }
]

const BeyondWorks = () => {
    return(
        
            <section id="beyondworks" className="p-8 bg-black text-white min-h-screen" style={{
              backgroundImage: 'linear-gradient(to top left,rgb(13, 0, 22),rgb(24, 1, 39),rgb(15, 2, 27),rgb(35, 0, 59))',
              backgroundColor: '#000015' // fallback color
            }}>

              <h2 className="text-3xl font-bold text-center">Beyond Works</h2>
              <p className="text-center mt-4">Any additional work experience and achievements.</p>

              <div className="m-20 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
          {projectCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-between p-2  border border-purple-400/70 rounded-lg bg-gray-900 w-80 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 duration-300 hover:scale-105"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-52 w-full rounded-t-lg object-cover"
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.4 }}
            />
            <h3
              className="p-4 text-xl font-bold text-[#C0C0C0] opacity-60"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </h3>
            <p
              className="px-4 pb-2 text-[#C0C0C0] opacity-60"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

    </section>
          
    );
};

export default BeyondWorks;

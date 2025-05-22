import react from 'react';
import Image1 from '../Assets/pic.jpg';
import Image2 from '../Assets/pic.jpg';
import Image3 from '../Assets/pic.jpg';

const projectCards = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: Image1,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: Image2,
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: Image3,
  }
]

const BeyondWorks = () => {
    return(
        
            <section id="beyond" className="p-8 bg-black text-white min-h-screen" style={{
              backgroundImage: 'linear-gradient(to top left,rgb(13, 0, 22),rgb(24, 1, 39),rgb(15, 2, 27),rgb(35, 0, 59))',
              backgroundColor: '#000015' // fallback color
            }}>

              <h2 className="text-3xl font-bold text-center">Beyond Works</h2>
              <p className="text-center mt-4">Any additional work experience or achievements.</p>

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

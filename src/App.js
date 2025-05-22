import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import BeyondWorks from './Components/BeyondWorks';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
//import Chatbot from './Components/Chatbot';
import Education from './Components/Education';
import GalaxyBackground from "./Components/GalaxyBackground";

function App() {
  return (
    <div>
      <Navbar />
      <GalaxyBackground />
        {/* <Chatbot /> */}
      <Hero />
      <About />
      <Projects />
      <Education />
      <BeyondWorks />
    <Contact /> 
      <Footer />
    </div>
  );
}

export default App;

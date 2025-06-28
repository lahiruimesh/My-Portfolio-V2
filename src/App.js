import './App.css';
import { useEffect } from 'react'; // ✅ You forgot to import this!
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import BeyondWorks from './Components/BeyondWorks';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Chatbot from './Components/Chatbot';
import Education from './Components/Education';
import GalaxyBackground from "./Components/GalaxyBackground";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);
}

function App() {
  usePageTracking();

  return (
    <div>
      <Navbar />
      <GalaxyBackground />
      <Chatbot />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <BeyondWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

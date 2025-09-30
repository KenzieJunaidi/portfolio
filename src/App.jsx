import './App.css'
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Landing} from './components/Landing';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Landing />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App

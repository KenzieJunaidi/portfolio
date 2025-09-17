import './App.css'
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Landing} from './components/Landing';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
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

      <motion.footer className="footer" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.6}}>
        <p> &copy; 2025 Kenzie Junaidi. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default App

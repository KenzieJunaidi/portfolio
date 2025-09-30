import './App.css'
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile'
import { Landing} from './components/Landing';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToHash } from './components/ScrollToHash';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className={`app ${isLoaded ? "loaded" : ""}`}>
              <ScrollToHash />
              <Landing />
              <Projects />
              <Contact />
              <Footer />
            </div>
          }
        />
          
        <Route 
          path="/profile"
          element={
            <div className={`app ${isLoaded ? "loaded" : ""}`}>
              <ScrollToHash />
              <Profile />
              <Footer />
            </div>
          }
        />

      </Routes>
    </Router>
  );
};

export default App

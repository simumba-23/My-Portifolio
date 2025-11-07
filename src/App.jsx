import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import Testimonial from './components/Testmonial';
import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;

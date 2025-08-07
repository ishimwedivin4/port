import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Articles from './Articles';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="articles">
        <Articles />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;

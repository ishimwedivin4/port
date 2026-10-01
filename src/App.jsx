import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = document.querySelector('.portfolio-cursor');
    if (!cursor) return;

    const handlePointerMove = (event) => {
      cursor.style.setProperty('--cursor-x', `${event.clientX}px`);
      cursor.style.setProperty('--cursor-y', `${event.clientY}px`);
      cursor.classList.add('is-visible');
    };

    const handlePointerLeave = () => cursor.classList.remove('is-visible');
    const handlePointerDown = () => cursor.classList.add('is-pressed');
    const handlePointerUp = () => cursor.classList.remove('is-pressed');

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />

        <main style={{ paddingTop: '4rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
        <span className="portfolio-cursor" aria-hidden="true"><span /></span>
      </div>
    </Router>
  );
}

export default App;

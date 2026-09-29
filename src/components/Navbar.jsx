import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-brand flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="logo-icon"
            >
              <span className="logo-monogram">ID</span>
            </motion.div>
            <span className="logo">Divin</span>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-desktop-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="nav-indicator"
                  />
                )}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="navbar-hire-link">Hire Me</Link>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile-controls">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="btn-icon"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-navigation"
          initial={false}
          animate={isOpen
            ? { opacity: 1, y: 0, visibility: 'visible' }
            : { opacity: 0, y: -8, visibility: 'hidden' }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="mobile-menu-panel md:hidden"
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
          <div className="mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="navbar-mobile-cta">
              Hire Me
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub', color: 'hover:text-gray-800' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: personalInfo.social.email, label: 'Email', color: 'hover:text-green-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleDownloadCV = () => {
    // Create a link to download the resume
    const resumeUrl = '/resume.pdf'; // This will look for resume.pdf in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.click();
    
    // Fallback if no resume file exists - show message
    setTimeout(() => {
      const testLink = document.createElement('a');
      testLink.href = resumeUrl;
      testLink.onload = () => {
        console.log('Resume downloaded successfully');
      };
      testLink.onerror = () => {
        alert('Resume file not found. Please add resume.pdf to the public folder, or contact me directly for my latest CV.');
      };
    }, 100);
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Background Decorative Elements */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="hero-avatar">
              <div className="hero-avatar-inner">
                D
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            <span>Hi, I'm </span>
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="hero-subtitle"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Bio/Description */}
          <motion.p
            variants={itemVariants}
            className="hero-description"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="btn btn-primary flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactMe}
              className="btn btn-secondary flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`social-icon ${color}`}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-secondary mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="scroll-indicator"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="scroll-indicator-dot"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

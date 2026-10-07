import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { personalInfo, projects } from '../data/portfolio';

const Hero = () => {
  const heroSummary = 'IT student focused on networking, security, and practical full-stack systems.';
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub', color: 'hover:text-gray-800' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-primary-600' },
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

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Background Decorative Elements */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10 relative z-10">
        <div className="hero-layout">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-intro"
          >
            <motion.div variants={itemVariants} className="hero-profile-row">
              <motion.div variants={itemVariants} className="hero-avatar hero-avatar-compact">
                <div className="hero-avatar-inner">
                  <img
                    src="/images/img.jpeg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center rounded-full"
                    loading="eager"
                    onLoad={(event) => {
                      event.currentTarget.nextSibling.style.display = 'none';
                    }}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                      event.currentTarget.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hero-avatar-fallback">D</div>
                </div>
              </motion.div>

              <div className="hero-profile-copy">
                <h1 className="hero-title-name">{personalInfo.name}</h1>
                <p className="hero-title-focus">Network &amp; Software Developer Portfolio</p>
                <div className="hero-location">
                  <MapPin size={15} aria-hidden="true" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="hero-description">
              {heroSummary}
            </motion.p>

            <motion.div variants={itemVariants} className="hero-terminal-window">
              <div className="hero-terminal-header">
                <div className="hero-terminal-dots">
                  <span className="hero-terminal-dot red" />
                  <span className="hero-terminal-dot yellow" />
                  <span className="hero-terminal-dot green" />
                </div>
                <div className="hero-terminal-title">{personalInfo.name.toLowerCase().replace(/\s+/g, '-') }@portfolio:~</div>
              </div>

              <div className="hero-terminal-body">
                <div className="hero-terminal-line"><span className="hero-terminal-prompt">$</span> whoami</div>
                <div className="hero-terminal-line hero-terminal-user">{personalInfo.name}</div>
                <div className="hero-terminal-line"><span className="hero-terminal-prompt">$</span> location</div>
                <div className="hero-terminal-line hero-terminal-user">{personalInfo.location}</div>
                <div className="hero-terminal-line"><span className="hero-terminal-prompt">$</span> ls /projects/</div>
                {featuredProjects.map((project) => (
                  <div key={project.id} className="hero-terminal-line hero-terminal-list">[{project.status === 'Deployed' ? 'LIVE' : project.status === 'Completed' ? 'DONE' : 'TEST'}] {project.title}</div>
                ))}
                <div className="hero-terminal-line"><span className="hero-terminal-prompt">$</span> echo &quot;Ready to build your system?&quot;</div>
                <div className="hero-terminal-line hero-terminal-success">Yes. Contact me and let&apos;s ship it.</div>
                <div className="hero-terminal-line hero-terminal-cursor"><span className="hero-terminal-caret">|</span></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-actions">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleViewProjects}
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                View My Work <ArrowDown size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleContactMe}
                className="btn btn-secondary flex items-center justify-center gap-2"
              >
                <Mail size={18} /> Contact Me
              </motion.button>
              <button onClick={handleDownloadCV} className="hero-cv-link">
                <Download size={16} /> Download CV
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-socials">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className={`social-icon ${color}`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-work"
          >
            <motion.div variants={itemVariants} className="hero-work-heading">
              <span className="hero-work-kicker">Selected work</span>
              <span className="hero-work-count">{featuredProjects.length} projects</span>
            </motion.div>

            <div className="hero-project-list">
              {featuredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  className="hero-project-card"
                >
                  <div className="hero-project-topline">
                    <span className="hero-project-mark" aria-hidden="true">{String(project.id).padStart(2, '0')}</span>
                    <span className={`hero-project-status ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="hero-project-tech">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <ArrowUpRight className="hero-project-arrow" size={18} aria-hidden="true" />
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

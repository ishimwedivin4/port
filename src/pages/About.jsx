import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code, Shield, Server, Award } from 'lucide-react';
import { personalInfo, education, experience, certifications } from '../data/portfolio';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building modern web applications with React.js and Spring Boot"
    },
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description: "Implementing secure network infrastructures and monitoring systems"
    },
    {
      icon: Server,
      title: "System Administration",
      description: "Managing Linux servers, containers, and network configurations"
    }
  ];

  return (
    <section ref={ref} className="section bg-secondary about-section">
      <div className="section-header">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="section-subtitle">
              Passionate about bridging the gap between network infrastructure and modern software development
            </p>
          </motion.div>

          <div className="about-overview mb-16">
            <motion.div variants={itemVariants} className="about-story">
              <span className="about-eyebrow">A little about me</span>
              <p>{personalInfo.bio}</p>
              <div className="about-facts">
                <div>
                  <MapPin size={17} aria-hidden="true" />
                  <span>{personalInfo.location}</span>
                </div>
                <div>
                  <GraduationCap size={18} aria-hidden="true" />
                  <span>{education[0].degree}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-focus-list about-focus-card">
              <h3>What I focus on</h3>
              {highlights.map((highlight) => (
                <div key={highlight.title} className="about-focus-item">
                  <highlight.icon size={21} aria-hidden="true" />
                  <div>
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education & Experience */}
          <div className="about-history-grid">
            {/* Education */}
            <motion.article variants={itemVariants} className="about-history-card fade-in-on-scroll">
              <div className="about-history-heading">
                <GraduationCap size={24} className="text-primary-600" />
                <h3>Education</h3>
              </div>
              
              <div className="about-history-entries">
                {education.map((edu) => (
                  <div key={edu.id} className="about-history-entry">
                    <h4>{edu.degree}</h4>
                    <p className="about-history-emphasis">{edu.institution}</p>
                    <p className="about-history-meta">
                      {edu.location} • {edu.period}
                    </p>
                    <p className="about-history-description">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            {/* Experience */}
            <motion.article variants={itemVariants} className="about-history-card fade-in-on-scroll">
              <div className="about-history-heading">
                <Briefcase size={24} className="text-primary-600" />
                <h3>Experience</h3>
              </div>
              
              <div className="about-history-entries">
                {experience.map((exp) => (
                  <div key={exp.id} className="about-history-entry">
                    <h4>{exp.title}</h4>
                    <p className="about-history-emphasis">{exp.company}</p>
                    <p className="about-history-meta">
                      {exp.location} • {exp.period}
                    </p>
                    <p className="about-history-description">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mt-16 fade-in-on-scroll">
            <div className="flex items-center space-x-2 mb-8">
              <Award size={24} className="text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            
            <div className="certification-grid">
              {certifications.map((cert, index) => (
                <motion.article
                  key={cert.id}
                  whileHover={{ y: -3 }}
                  className="certification-card"
                >
                  <div className="certification-card-top">
                    <span className="certification-icon" aria-hidden="true">{cert.icon}</span>
                    <span className="certification-year">{cert.year}</span>
                  </div>
                  <span className="certification-index">
                    Credential {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4>{cert.name}</h4>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-description">{cert.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

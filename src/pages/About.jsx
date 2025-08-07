import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code, Shield, Server } from 'lucide-react';
import { personalInfo, education, experience } from '../data/portfolio';

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
    <section ref={ref} className="section bg-secondary">
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

          <div className="content-grid mb-16">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6 fade-in-on-scroll">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="stat-card">
                  <div className="text-2xl font-bold text-primary-600 mb-1">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Coding</div>
                </div>
                <div className="stat-card">
                  <div className="text-2xl font-bold text-primary-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  className="flex-item-container fade-in-on-scroll"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education & Experience */}
          <div className="content-grid">
            {/* Education */}
            <motion.div variants={itemVariants} className="fade-in-on-scroll">
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap size={24} className="text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-primary-600 pl-6 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {edu.location} • {edu.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants} className="fade-in-on-scroll">
              <div className="flex items-center space-x-2 mb-6">
                <Briefcase size={24} className="text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-primary-600 pl-6 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {exp.location} • {exp.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
                    
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

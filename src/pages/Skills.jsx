import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [visibleSkills, setVisibleSkills] = useState(new Set());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 2.0
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    const observeSkills = () => {
      const skillElements = document.querySelectorAll('.skill-item');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSkills(prev => new Set([...prev, entry.target.dataset.skill]));
            }
          });
        },
        { threshold: 0.3 }
      );

      skillElements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    };

    if (isInView) {
      const cleanup = observeSkills();
      return cleanup;
    }
  }, [isInView]);

  return (
    <section ref={ref} className="section bg-secondary">
      <div className="section-header">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="section-title"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="section-subtitle"
        >
          A comprehensive overview of my technical expertise across various domains
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="skills-grid"
      >
        {skills && skills.length > 0 ? skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="skill-item fade-in-on-scroll"
            data-skill={category.category}
          >
            <div className="skill-category">
              <h3 className="skill-category-title">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items && category.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: skillIndex * 0.2 }}
                  >
                    <div className="skill-label">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={visibleSkills.has(category.category) ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">No skills data available</p>
          </div>
        )}
      </motion.div>

      {/* Additional Tools Section */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold text-center mb-6">
          Professional Tools & Technologies
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3">
          {[
            // Development Tools
            'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Git', 'Postman',
            
            // Network Tools  
            'Wireshark', 'Nmap', 'Cisco Packet Tracer', 'GNS3',
            
            // Security Tools
            'pfSense', 'Snort', 'Nessus', 'Burp Suite',
            
            // Infrastructure
            'Docker', 'VMware', 'VirtualBox', 'AWS', 'Kubernetes',
            
            // Design & Documentation
            'Figma', 'Canva', 'Swagger', 'Draw.io'
          ].map((tool) => (
            <motion.span
              key={tool}
              whileHover={{ scale: 1.05 }}
              className="tag"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

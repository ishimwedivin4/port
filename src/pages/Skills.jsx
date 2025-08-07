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
        staggerChildren: 0.1
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
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="skill-item"
            data-skill={category.category}
          >
            <div className="skill-category">
              <h3 className="skill-category-title">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="fade-in-on-scroll">
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
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Tools Section */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold text-center mb-6">
          Tools & Technologies
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'VS Code', 'IntelliJ IDEA', 'Postman', 'Wireshark', 'VMware',
            'VirtualBox', 'Cisco Packet Tracer', 'AWS', 'Figma', 'Canva'
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

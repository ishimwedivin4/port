import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Server, ShieldCheck } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const cursorRef = useRef(null);

  const categoryPresentation = {
    'Network & Security': {
      icon: ShieldCheck,
      description: 'Securing and analyzing networks, systems, and web applications.'
    },
    'Backend Development': {
      icon: Server,
      description: 'Building APIs, services, and data-backed applications.'
    },
    'Frontend Development': {
      icon: Monitor,
      description: 'Creating responsive interfaces and modern web experiences.'
    },
    'Infrastructure & DevOps': {
      icon: Code2,
      description: 'Deploying and maintaining Linux-based development environments.'
    }
  };

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse' || !cursorRef.current) return;
    cursorRef.current.style.setProperty('--cursor-x', `${event.clientX}px`);
    cursorRef.current.style.setProperty('--cursor-y', `${event.clientY}px`);
    cursorRef.current.classList.add('is-visible');
  };

  const handlePointerLeave = () => {
    cursorRef.current?.classList.remove('is-visible');
  };

  const tools = [
    'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Git', 'Postman',
    'Wireshark', 'Nmap', 'Cisco Packet Tracer', 'GNS3',
    'pfSense', 'Snort', 'Nessus', 'Burp Suite',
    'Docker', 'VMware', 'VirtualBox', 'AWS', 'Kubernetes',
    'Figma', 'Canva', 'Swagger', 'Draw.io'
  ];

  return (
    <section
      className="section bg-secondary skills-section"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="skills-content">
        <div className="skills-heading">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="skills-eyebrow"
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="skills-display-title"
          >
            Skills to build <em>real-world systems.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="skills-summary"
          >
            A practical mix of software development, network security, and infrastructure.
          </motion.p>
        </div>

        <div className="skills-showcase-grid">
          {skills.map((category, categoryIndex) => {
            const presentation = categoryPresentation[category.category];
            const Icon = presentation.icon;

            return (
              <motion.article
                key={category.category}
                className="skills-showcase-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
              >
                <Icon className="skills-showcase-icon" size={30} aria-hidden="true" />
                <h3>{category.category}</h3>
                <p>{presentation.description}</p>
                <div className="skills-tag-list">
                  {category.items.map((skill) => (
                    <span className="skills-tag" key={skill.name}>{skill.name}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="skills-tools">
          <h3>Professional Tools & Technologies</h3>
          <div className="skills-tools-list">
            {tools.map((tool) => (
              <span key={tool} className="tag">{tool}</span>
            ))}
          </div>
        </div>
      </div>

      <span ref={cursorRef} className="skills-cursor" aria-hidden="true">
        <span />
      </span>
    </section>
  );
};

export default Skills;

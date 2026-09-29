import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Monitor } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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

  const ProjectCard = ({ project }) => {
    const demoUrl = project.liveDemo && project.liveDemo !== '#'
      ? project.liveDemo
      : project.demo && project.demo !== '#'
        ? project.demo
        : null;
    const codeUrl = project.github && project.github !== '#' ? project.github : null;
    const statusClass = project.status.toLowerCase().replace(/\s+/g, '-');

    return (
      <motion.article
        variants={itemVariants}
        whileHover={{ y: -3 }}
        className="project-showcase-card"
      >
        <div className="project-showcase-preview">
          <div className="project-preview-placeholder" aria-hidden="true">
            <Monitor size={32} />
            <span>{project.type}</span>
          </div>
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              onError={(event) => { event.currentTarget.style.display = 'none'; }}
            />
          )}
          {project.featured && <span className="project-featured-label">Featured</span>}
        </div>
        <div className={`project-status-rail ${statusClass}`} />

        <div className="project-showcase-content">
          <div className="project-showcase-heading">
            <div>
              <span className="project-category-label">{project.category}</span>
              <h3>{project.title}</h3>
            </div>
            <span className={`project-status-label ${statusClass}`}>{project.status}</span>
          </div>

          <p className="project-showcase-description">{project.description}</p>

          <div className="project-showcase-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>

          <div className="project-showcase-actions">
            <details className="project-details">
              <summary>Project details <ExternalLink size={15} /></summary>
              <div className="project-details-panel">
                <p>{project.longDescription}</p>
                <ul>
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
            </details>
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-showcase-action">
                View Project <ExternalLink size={15} />
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="project-code-link">
                <Github size={15} /> Code
              </a>
            )}
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section ref={ref} className="section bg-primary projects-section">
      <div className="projects-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="projects-heading">
            <span className="projects-eyebrow">Portfolio</span>
            <h2 className="projects-display-title">
              Systems that solve <em>real problems.</em>
            </h2>
            <p className="projects-summary">
              Selected software, infrastructure, and security work from my portfolio.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="project-showcase-grid"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="cta-card">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check out my GitHub for additional projects and contributions
              </p>
              <motion.a
                href="https://github.com/divinishimwe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Github size={20} />
                <span>View GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

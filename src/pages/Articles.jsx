import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { articles } from '../data/portfolio';

const Articles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const publishedArticles = articles.filter(article => article.published);

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const ArticleCard = ({ article }) => (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -3 }}
      className="article-showcase-card"
    >
      {/* Article Image Placeholder */}
      <div className="article-preview">
        <div className="article-preview-art" aria-hidden="true">
          <BookOpen size={42} />
        </div>
        <span className="article-category">
          {article.category}
        </span>
        
        {/* Date and Read Time */}
        <div className="article-meta">
          <div>
            <Calendar size={14} />
            <span>{formatDate(article.date)}</span>
          </div>
          <div>
            <Clock size={14} />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="article-content">
        <h3 className={`article-title ${
          article.featured ? 'text-xl' : 'text-lg'
        }`}>
          {article.title}
        </h3>
        
        <p className="article-excerpt">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="article-tags">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        {article.link && article.link !== '#' ? (
          <motion.a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            className="article-read-link"
          >
            <span>Read Article</span>
            <ArrowRight size={16} />
          </motion.a>
        ) : (
          <span className="article-link-pending">Article link coming soon</span>
        )}
      </div>

      {/* Featured Badge */}
      {article.featured && (
        <div className="article-featured-badge">
          Featured
        </div>
      )}
    </motion.article>
  );

  return (
    <section ref={ref} className="section bg-primary articles-section">
      <div className="articles-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="articles-heading">
            <span className="articles-eyebrow">From the notebook</span>
            <h2 className="section-title articles-title">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="section-subtitle articles-subtitle">
              Sharing knowledge and insights from my journey in network systems and software development
            </p>
          </motion.div>

          {publishedArticles.length > 0 ? (
            <motion.div variants={containerVariants} className="articles-grid">
              {publishedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </motion.div>
          ) : (
            <motion.div variants={itemVariants} className="articles-empty-state">
              <BookOpen size={64} aria-hidden="true" />
              <h3>Articles Coming Soon</h3>
              <p>I'm working on some articles about network security and web development.</p>
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="articles-newsletter-wrap">
            <div className="form-card articles-newsletter">
              <div className="articles-newsletter-copy">
                <h3>Stay Updated</h3>
                <p>Get notified when I publish new articles about network security, web development, and tech insights.</p>
              </div>
              <form className="articles-newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-input"
                  aria-label="Email address"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary articles-subscribe-button px-8 py-3 whitespace-nowrap font-semibold"
                >
                  Subscribe
                </motion.button>
              </form>
              <p className="articles-newsletter-note">No spam, unsubscribe at any time</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;

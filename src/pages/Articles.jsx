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
      whileHover={{ y: -5 }}
      className="group relative bg-gradient-to-br from-primary-600 to-blue-600 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Article Image Placeholder */}
      <div className="h-48 bg-gradient-to-r from-primary-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <BookOpen size={48} className="text-white/80" />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white">
          {article.category}
        </div>
        
        {/* Date and Read Time */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white/90 text-sm">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span className="text-sm">{formatDate(article.date)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        <h3 className={`font-bold text-white mb-3 group-hover:text-primary-100 transition-colors ${
          article.featured ? 'text-xl' : 'text-lg'
        }`}>
          {article.title}
        </h3>
        
        <p className="text-primary-100 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/20 text-white text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <motion.a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="inline-flex items-center space-x-2 text-white font-medium group"
        >
          <span>Read Article</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      {/* Featured Badge */}
      {article.featured && (
        <div className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      )}
    </motion.article>
  );

  return (
    <section ref={ref} className="section bg-primary">
      <div className="section-header">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <h2 className="section-title">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="section-subtitle">
              Sharing knowledge and insights from my journey in network systems and software development
            </p>
          </motion.div>

          {/* Articles Grid */}
          {publishedArticles.length > 0 ? (
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {publishedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </motion.div>
          ) : (
            /* Coming Soon Message */
            <motion.div variants={itemVariants} className="text-center py-16">
              <div className="max-w-md mx-auto">
                <BookOpen size={64} className="mx-auto text-gray-400 dark:text-gray-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Articles Coming Soon
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm working on some exciting articles about network security and web development.
                </p>
              </div>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="form-card max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Get notified when I publish new articles about network security, web development, and tech insights.
                </p>
              </div>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="form-input"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary px-8 py-3 whitespace-nowrap font-semibold"
                >
                  Subscribe
                </motion.button>
              </form>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                No spam, unsubscribe at any time
              </p>
            </div>
          </motion.div>

          {/* Blog Platform Notice */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-2">Want to read more?</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with me on LinkedIn or GitHub for the latest updates and insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://www.linkedin.com/in/ishimwedivin2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <BookOpen size={20} />
                  <span>LinkedIn Articles</span>
                </motion.a>
                <motion.a
                  href="https://github.com/ishimwedivin2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <BookOpen size={20} />
                  <span>GitHub Projects</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;

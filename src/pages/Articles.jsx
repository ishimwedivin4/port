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
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const ArticleCard = ({ article, featured = false }) => (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-dark-900 rounded-xl shadow-lg overflow-hidden card-hover group cursor-pointer ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Article Header */}
      <div className={`bg-gradient-to-r from-primary-600 to-blue-600 p-6 text-white ${
        featured ? 'md:p-8' : ''
      }`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2 text-primary-100">
            <Calendar size={16} />
            <span className="text-sm">{formatDate(article.date)}</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-100">
            <Clock size={16} />
            <span className="text-sm">{article.readTime}</span>
          </div>
        </div>
        
        <h3 className={`font-bold text-white mb-3 group-hover:text-primary-100 transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {article.title}
        </h3>
        
        <p className={`text-primary-100 ${featured ? 'text-lg' : ''}`}>
          {article.excerpt}
        </p>
      </div>

      {/* Article Content */}
      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors group"
          >
            <span>Read Article</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <BookOpen size={20} className="text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </motion.article>
  );

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-width section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Sharing knowledge and insights from my journey in network systems and software development
            </p>
          </motion.div>

          {/* Articles Grid */}
          {publishedArticles.length > 0 ? (
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {publishedArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  featured={index === 0}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <BookOpen size={64} className="text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Articles Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm working on some exciting articles about network security and web development.
              </p>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-white dark:bg-dark-900 rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get notified when I publish new articles about network security, web development, and tech insights.
              </p>
              
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Subscribe
                </motion.button>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                No spam, unsubscribe at any time
              </p>
            </div>
          </motion.div>

          {/* Blog Platform Notice */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">Want to read more?</h4>
              <p className="text-primary-100 mb-4">
                Follow me on Medium and Dev.to for more in-depth technical articles
              </p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  Medium
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  Dev.to
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

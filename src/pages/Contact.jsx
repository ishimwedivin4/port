import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: personalInfo.social.email,
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+250 XXX XXX XXX',
      href: 'tel:+250XXXXXXX',
      color: 'text-purple-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.social.github,
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.social.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: personalInfo.social.email,
      color: 'hover:text-green-600'
    }
  ];

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

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
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="section-subtitle">
              Ready to collaborate? Let's discuss your next project or explore new opportunities together
            </p>
          </motion.div>

          <div className="content-grid">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8 fade-in-on-scroll">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm always open to discussing new opportunities, collaborating on interesting projects, 
                  or just having a chat about technology and innovation.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((contact) => (
                    <motion.div
                      key={contact.label}
                      whileHover={{ scale: 1.02 }}
                      className="flex-item-container"
                    >
                      <div className={`w-12 h-12 rounded-full bg-white dark:bg-dark-700 flex items-center justify-center ${contact.color}`}>
                        <contact.icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="fade-in-on-scroll">
              <div className="form-card">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <MessageCircle size={28} className="mr-3 text-primary-600" />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full btn-primary flex items-center justify-center space-x-2 py-4 text-lg font-semibold ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="cta-card bg-gradient-to-r from-primary-600 to-blue-600 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Start a Project?</h3>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's bring your ideas to life with cutting-edge technology and innovative solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={personalInfo.social.email}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Email Me Directly
                </motion.a>
                <motion.a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/30 transition-colors text-lg"
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Subscribe Section */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="form-card max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Stay Updated
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Subscribe to get notified about new projects, articles, and tech insights
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

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
      color: 'text-primary-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+250 788 955 906',
      href: 'tel:+250788955906',
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
      color: 'hover:text-primary-600'
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
    <section ref={ref} className="section bg-primary contact-section">
      <div className="contact-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="contact-heading">
            <span className="contact-eyebrow">Get in touch</span>
            <h2 className="section-title contact-title">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="section-subtitle contact-subtitle">
              Ready to collaborate? Let's discuss your next project or explore new opportunities together
            </p>
          </motion.div>

          <div className="contact-layout">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="contact-info-column fade-in-on-scroll">
              <div>
                <h3 className="contact-intro-title">
                  Let's Connect
                </h3>
                <p className="contact-intro-copy">
                  I'm always open to discussing new opportunities, collaborating on interesting projects, 
                  or just having a chat about technology and innovation.
                </p>

                {/* Contact Details */}
                <div className="contact-method-list">
                  {contactInfo.map((contact) => (
                    <motion.div
                      key={contact.label}
                      whileHover={{ x: 3 }}
                      className="contact-method"
                    >
                      <div className={`contact-method-icon ${contact.color}`}>
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
                <div className="contact-socials">
                  <h4>
                    Follow Me
                  </h4>
                  <div className="contact-social-links">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`contact-social-link ${social.color}`}
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
            <motion.div variants={itemVariants} className="contact-form-column fade-in-on-scroll">
              <div className="form-card contact-form-card">
                <h3 className="contact-form-title">
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
          <motion.div variants={itemVariants} className="contact-cta-wrap">
            <div className="cta-card contact-cta">
              <div>
                <h3>Ready to Start a Project?</h3>
                <p>
                Let's bring your ideas to life with cutting-edge technology and innovative solutions
                </p>
              </div>
              <div className="contact-cta-actions">
                <motion.a
                  href={personalInfo.social.email}
                  whileHover={{ scale: 1.05 }}
                  className="contact-cta-primary"
                >
                  Email Me Directly
                </motion.a>
                <motion.a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="contact-cta-secondary"
                >
                  Connect on LinkedIn
                </motion.a>
                <motion.button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'resume.pdf';
                    link.click();
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="contact-cta-secondary"
                >
                  Download Resume
                </motion.button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

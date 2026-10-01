import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Bot, ChevronUp, MessageCircle, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantReply, setAssistantReply] = useState('Hi! Ask me about Divin\'s skills, projects, or availability.');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappNumber = personalInfo.phone.replace(/\D/g, '');
  const assistantAnswers = {
    skills: 'Divin focuses on network security, full-stack development, and DevOps.',
    projects: 'Explore the Projects page for work in grocery management, deployment, and cybersecurity.',
    contact: `You can reach Divin at ${personalInfo.email} or send a message on WhatsApp.`
  };

  return (
    <div className="floating-actions">
      <AnimatePresence>
        {isAssistantOpen && (
          <Motion.section
            className="assistant-panel"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            aria-label="Portfolio assistant"
          >
            <div className="assistant-header">
              <span><Bot size={18} /> Portfolio assistant</span>
              <button type="button" onClick={() => setIsAssistantOpen(false)} aria-label="Close assistant">
                <X size={18} />
              </button>
            </div>
            <p className="assistant-reply" aria-live="polite">{assistantReply}</p>
            <div className="assistant-prompts" aria-label="Ask about">
              <button type="button" onClick={() => setAssistantReply(assistantAnswers.skills)}>Skills</button>
              <button type="button" onClick={() => setAssistantReply(assistantAnswers.projects)}>Projects</button>
              <button type="button" onClick={() => setAssistantReply(assistantAnswers.contact)}>Contact</button>
            </div>
          </Motion.section>
        )}
      </AnimatePresence>

      <a
        className="floating-action whatsapp-action"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Divin on WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle size={23} />
      </a>

      <button
        type="button"
        className="floating-action assistant-action"
        onClick={() => setIsAssistantOpen((open) => !open)}
        aria-label="Open portfolio assistant"
        aria-expanded={isAssistantOpen}
        title="Portfolio assistant"
      >
        <Bot size={23} />
      </button>

      <AnimatePresence>
        {isVisible && (
          <Motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="floating-action back-to-top"
            aria-label="Back to top"
            title="Back to top"
          >
            <ChevronUp size={24} />
          </Motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;

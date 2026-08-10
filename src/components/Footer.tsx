import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hi Dhiraj, I reviewed your portfolio website and would like to get in touch with you!"
    );
    window.open(`https://wa.me/${personalDetails.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-extrabold gradient-text">{personalDetails.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Senior Software Engineer specializing in scalable fintech systems, digital lending solutions, microservices architecture, and high-performance React/Node/Flutter applications.
            </p>

            <div className="flex space-x-3 pt-2">
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 rounded-xl bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-400">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Profile</a></li>
              <li><a href="#experience" className="hover:text-primary-400 transition-colors">Career Timeline</a></li>
              <li><a href="#projects" className="hover:text-primary-400 transition-colors">Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-primary-400 transition-colors">Technical Stack</a></li>
              <li><a href="#certifications" className="hover:text-primary-400 transition-colors">Certifications & Awards</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Get In Touch</a></li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Direct Reach</h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-400" />
                <span>{personalDetails.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-400" />
                <span>{personalDetails.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary-400" />
                <span>{personalDetails.location}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-md"
                >
                  <MessageSquare size={16} />
                  <span>Chat directly on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <div>© {new Date().getFullYear()} {personalDetails.name}. Crafted with React, TypeScript & Tailwind CSS.</div>
          <div className="mt-2 sm:mt-0 font-medium">Senior Software Engineer Portfolio</div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary-700 transition-all z-30"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;

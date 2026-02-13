import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone, Calendar, Code, Briefcase, Award, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/dhiraj-kumar-sah940',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:dhirajkumarsah940@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#about', label: 'About Me', icon: Award },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: Code },
    { href: '#skills', label: 'Skills', icon: Award },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-600 animate-pulse"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold gradient-text mb-4 bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Dhiraj Kumar Sah
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg text-left">
              I'm always open to new opportunities and exciting projects across industries. Whether you’re looking for a senior software engineer, a team lead, or simply want to discuss ideas or collaborations, I'd be happy to connect.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-primary-600 to-cyan-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
                <div className="text-2xl font-bold text-primary-400">3+</div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400">15+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
                <div className="text-2xl font-bold text-green-400">5★</div>
                <div className="text-xs text-gray-400">HackerRank</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <ExternalLink className="mr-2 text-primary-400" size={20} />
              Quick Navigation
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="flex items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 group border border-gray-700/50 hover:border-primary-600/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <link.icon className="mr-3 text-primary-400 group-hover:text-cyan-400 transition-colors" size={18} />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <Mail className="mr-2 text-primary-400" size={20} />
              Get In Touch
            </h4>
            <div className="space-y-4">
              <motion.div
                className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-primary-600/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <a
                  href="mailto:dhirajkumarsah940@gmail.com"
                  target='_blank'
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <Mail className="mr-3 text-primary-400" size={18} />
                  <div>
                    <div className="text-sm text-gray-400 text-left">Email</div>
                    <div className="font-medium">dhirajkumarsah940@gmail.com</div>
                  </div>
                </a>
              </motion.div>

              <motion.div
                className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-primary-600/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <a
                  href="tel:+919827436646"
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <Phone className="mr-3 text-primary-400" size={18} />
                  <div>
                    <div className="text-sm text-gray-400 text-left">Phone</div>
                    <div className="font-medium">+91-9827436646</div>
                  </div>
                </a>
              </motion.div>

              <motion.div
                className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-3 text-primary-400" size={18} />
                  <div>
                    <div className="text-sm text-gray-400 text-left">Location</div>
                    <div className="font-medium">Bengaluru, India</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center text-gray-300">
                  <Calendar className="mr-3 text-primary-400" size={18} />
                  <div>
                    <div className="text-sm text-gray-400 text-left">Available</div>
                    <div className="font-medium text-green-400">Open to Opportunities</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
            >
              © 2026 Dhiraj Kumar Sah. All rights reserved.
              <span className="ml-2 text-primary-400">❤️</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                <span className="mr-1">🔒</span> Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                <span className="mr-1">📋</span> Terms
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary-600 to-cyan-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 z-40 hover:scale-110 group"
        aria-label="Scroll to top"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp size={22} className="group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
};

export default Footer;

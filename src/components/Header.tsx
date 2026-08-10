import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, MessageSquare } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalDetails } from '../data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hi Dhiraj, I came across your portfolio website and would like to connect!"
    );
    window.open(`https://wa.me/${personalDetails.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-dark-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <a href="#about" className="flex items-center space-x-2">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
              D
            </span>
            <div>
              <span className="text-xl font-extrabold text-gray-900 dark:text-dark-text tracking-tight">
                Dhiraj <span className="gradient-text">Sah</span>
              </span>
              <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider -mt-1">
                Senior Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 text-xs sm:text-sm font-bold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle dark/light mode"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Header WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl flex items-center space-x-2 shadow-md hover:shadow-green-600/30 transition-all"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-dark-text"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-dark-surface rounded-2xl shadow-xl p-4 mb-4 border border-gray-100 dark:border-dark-border overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-bold text-gray-800 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-card rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="w-full py-2.5 bg-green-600 text-white font-bold rounded-xl flex items-center justify-center space-x-2 text-xs"
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

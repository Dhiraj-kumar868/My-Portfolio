import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavItem {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Header = () => {
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
    {
      label: 'Contact',
      href: '#footer',
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 dark:bg-dark-surface backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text dark:dark-gradient-text">Dhiraj</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={item.onClick}
                  className="text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Social Links */}
            <a
              href="https://linkedin.com/in/dhiraj-kumar-sah940"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-dark-textSecondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:dhirajkumarsah940@gmail.com"
              target='_blank'
              className="text-gray-600 dark:text-dark-textSecondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-dark-surface rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    item.onClick?.(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2 pt-4 border-t border-gray-200 dark:border-dark-border">
                <a
                  href="https://linkedin.com/in/dhiraj-kumar-sah940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-textSecondary hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:dhirajkumarsah940@gmail.com"
                  target='_blank'
                  className="text-gray-600 dark:text-dark-textSecondary hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

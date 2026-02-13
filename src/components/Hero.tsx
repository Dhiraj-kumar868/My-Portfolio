import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Briefcase, Code, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '../assets/profile.png';

const Hero = () => {
  const { theme } = useTheme();

  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '3+' },
    { icon: Code, label: 'Projects', value: '15+' },
    { icon: Award, label: 'Star Achiever', value: '2025' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-primary-100 dark:bg-dark-card text-primary-800 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold">
                  👋 Hello, I'm
                </span>
              </motion.div>

              {/* Name */}
              <h1 className="text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                Dhiraj Kumar Sah
              </h1>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl lg:text-3xl font-semibold gradient-text mb-4">
                  Senior Software Engineer
                </h2>
                <p className="text-lg text-gray-600 dark:text-dark-textSecondary leading-relaxed text-left">
                  Building scalable and reliable software solutions that power high-volume applications. Experienced in system architecture, performance optimization, and leading teams to deliver impactful products.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => window.location.href = '#footer'}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="ml-2" size={20} />
                </button>
                {/* <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors dark-card"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a> */}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-2 pt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-primary-100 dark:bg-dark-card rounded-lg">
                        <stat.icon className="text-primary-600 dark:text-primary-400" size={24} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-dark-textSecondary">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-surface shadow-2xl">
                <img
                  src={profileImage}
                  alt="Dhiraj Kumar Sah"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x400/3b82f6/ffffff?text=Dhiraj';
                  }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-surface rounded-lg shadow-lg p-3"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-xs text-gray-600 dark:text-dark-textSecondary">Years</div>
                </div>
              </motion.div>

              {/* <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-surface rounded-lg shadow-lg p-3"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-xs text-gray-600 dark:text-dark-textSecondary">NBFCs</div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

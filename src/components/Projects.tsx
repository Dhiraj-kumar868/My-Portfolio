import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-textSecondary max-w-3xl mx-auto">
            Innovative solutions that make a real impact in the fintech industry
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="max-w-4xl mx-auto">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-lg card-hover"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-dark-card rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">01</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4">
                BCMS - Business Correspondent Management System
              </h3>
              <p className="text-gray-700 dark:text-dark-textSecondary leading-relaxed mb-6">
                Comprehensive virtual accounting system for business correspondents with seamless AePS transactional integration. Built with Flutter, Angular, Node.js, and MongoDB for 50,000+ business correspondents with real-time transaction processing and compliance features.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Flutter</span>
                <div className="flex-1 items-center">
                  <div className="text-xs text-gray-600 dark:text-dark-textSecondary mb-1">Proficiency</div>
                  <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                    <div className="bg-blue-500 dark:bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Angular</span>
                <div className="flex-1 items-center">
                  <div className="text-xs text-gray-600 dark:text-dark-textSecondary mb-1">Proficiency</div>
                  <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                    <div className="bg-red-500 dark:bg-red-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                <div className="flex-1 items-center">
                  <div className="text-xs text-gray-600 dark:text-dark-textSecondary mb-1">Proficiency</div>
                  <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                    <div className="bg-green-500 dark:bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">MongoDB</span>
                <div className="flex-1 items-center">
                  <div className="text-xs text-gray-600 dark:text-dark-textSecondary mb-1">Proficiency</div>
                  <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                    <div className="bg-yellow-500 dark:bg-yellow-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

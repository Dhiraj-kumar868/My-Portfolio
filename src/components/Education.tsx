import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-dark-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 bg-primary-100 dark:bg-dark-card text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Academic Foundation
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-textSecondary max-w-2xl mx-auto">
            Rigorous academic foundation in Computer Science & Engineering from top institutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-dark-card dark:via-dark-surface dark:to-dark-card p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-dark-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center space-x-3 text-primary-600 dark:text-primary-400 font-bold text-sm">
                    <GraduationCap size={20} />
                    <span>{edu.institution}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">{edu.degree}</h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 dark:text-dark-textSecondary">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary-600" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary-600" />
                      {edu.period}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-3">
                    {edu.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-700 dark:text-dark-textSecondary gap-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Score Pill */}
                <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-bg rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm min-w-[200px] text-center">
                  <div className="text-3xl font-extrabold gradient-text mb-1">{edu.score}</div>
                  <div className="text-xs font-bold uppercase text-gray-500 dark:text-dark-textSecondary">{edu.scoreType}</div>
                  {edu.honors && (
                    <span className="mt-3 px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300 text-[11px] font-bold rounded-full">
                      ★ {edu.honors}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

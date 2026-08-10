import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiencesData } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark-surface dark:to-dark-bg relative">
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
            Career Timeline
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-textSecondary max-w-2xl mx-auto">
            Demonstrated engineering leadership and full-stack execution across high-scale fintech environments
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-primary-400 to-cyan-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiencesData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-white dark:bg-dark-surface border-4 border-primary-600 z-20 flex items-center justify-center shadow-lg">
                  {exp.type === 'current' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                  )}
                </div>

                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700 transition-all group">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-text group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {exp.company}
                        </div>
                      </div>

                      {exp.type === 'current' && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-950/80 dark:text-green-300 rounded-full text-xs font-bold uppercase tracking-wider">
                          Current Role
                        </span>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 dark:text-dark-textSecondary mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary-600" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary-600" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-dark-textSecondary">
                          <CheckCircle2 size={16} className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span>{ach.text}</span>
                            {ach.metric && (
                              <span className="ml-2 font-bold text-primary-600 dark:text-primary-400 text-xs bg-primary-50 dark:bg-primary-950 px-2 py-0.5 rounded-full inline-block mt-1">
                                ➔ {ach.metric}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-dark-border">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-dark-text text-[11px] font-semibold rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

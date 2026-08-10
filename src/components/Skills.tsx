import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap, Cpu, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stack', icon: Code },
    { id: 'languages', name: 'Languages & Core', icon: Code },
    { id: 'frontend', name: 'Frontend Tech', icon: Globe },
    { id: 'backend', name: 'Backend & DB', icon: Database },
    { id: 'state', name: 'Architecture & State', icon: Zap },
    { id: 'tools', name: 'DevOps & Tools', icon: Cpu },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const getProficiencyBadge = (level: number) => {
    if (level >= 95) return { label: 'Expert', color: 'bg-green-100 dark:bg-green-950/60 text-green-800 dark:text-green-300' };
    if (level >= 90) return { label: 'Advanced', color: 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300' };
    if (level >= 85) return { label: 'Proficient', color: 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300' };
    return { label: 'Competent', color: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300' };
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-dark-bg relative">
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
            Technical Stack
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-textSecondary max-w-2xl mx-auto">
            Battle-tested technical stack across microservices, modern frontend web frameworks, mobile applications, and database optimizations
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-white dark:bg-dark-surface text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-card'
                }`}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => {
            const badge = getProficiencyBadge(skill.level);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white dark:bg-dark-surface p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-dark-text text-base flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary-600 dark:text-primary-400" />
                      {skill.name}
                    </h3>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>

                  {/* Level Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-dark-textSecondary mb-1 font-medium">
                      <span>Proficiency</span>
                      <span className="font-bold text-primary-600 dark:text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-dark-bg h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-cyan-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

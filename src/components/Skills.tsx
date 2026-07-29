import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Shield, Zap } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: Code },
    { id: 'languages', name: 'Languages & Frameworks', icon: Code },
    { id: 'frontend', name: 'Frontend Technologies', icon: Globe },
    { id: 'backend', name: 'Backend & Databases', icon: Database },
    { id: 'state', name: 'State Management', icon: Zap },
    { id: 'tools', name: 'Tools', icon: Cpu },
  ];

  const skills = {
    languages: [
      { name: 'Java', level: 90, category: 'language' },
      { name: 'JavaScript', level: 95, category: 'language' },
      { name: 'TypeScript', level: 95, category: 'language' },
      { name: 'Dart', level: 90, category: 'language' },
      { name: 'Node.js', level: 90, category: 'skill' },
      { name: 'Express.js', level: 90, category: 'framework' },
      { name: 'Flutter', level: 95, category: 'framework' },
      { name: 'Angular', level: 95, category: 'framework' },
      { name: 'React', level: 95, category: 'library' }
    ],
    frontend: [
      { name: 'HTML5', level: 95, category: 'technology' },
      { name: 'CSS3', level: 90, category: 'technology' },
      { name: 'Bootstrap', level: 90, category: 'framework' },
      { name: 'Angular Material', level: 90, category: 'library' },
      { name: 'Responsive Design', level: 95, category: 'skill' },
      { name: 'Progressive Web Apps', level: 90, category: 'skill' }
    ],
    backend: [
      { name: 'MongoDB', level: 85, category: 'database' },
      { name: 'Oracle SQL', level: 80, category: 'database' },
      { name: 'Database Design', level: 90, category: 'skill' },
      { name: 'Query Optimization', level: 85, category: 'skill' },
      { name: 'REST APIs', level: 95, category: 'skill' },
      { name: 'GraphQL', level: 80, category: 'skill' },
      { name: 'Socket.io', level: 85, category: 'technology' },
      { name: 'WebSockets', level: 80, category: 'technology' }
    ],
    state: [
      { name: 'Redux', level: 90, category: 'state management' },
      { name: 'Context API', level: 95, category: 'state management' },
      { name: 'NgRx', level: 85, category: 'state management' },
      { name: 'Signal', level: 90, category: 'state management' },
      { name: 'RxJS', level: 90, category: 'state management' },
      { name: 'Provider', level: 95, category: 'state management' },
      { name: 'Bloc', level: 80, category: 'state management' }
    ],
    tools: [
      { name: 'Git', level: 95, category: 'tool' },
      { name: 'GitLab', level: 90, category: 'tool' },
      { name: 'GitHub', level: 95, category: 'tool' },
      { name: 'VS Code', level: 90, category: 'tool' },
      { name: 'IntelliJ IDEA', level: 85, category: 'tool' },
      { name: 'Android Studio', level: 80, category: 'tool' },
      { name: 'Postman', level: 90, category: 'tool' }
    ]
  };

  const getAllSkills = useCallback(() => {
    return Object.values(skills).flat();
  }, []);

  const getFilteredSkills = useMemo(() => {
    if (activeCategory === 'all') {
      return getAllSkills();
    }
    return skills[activeCategory as keyof typeof skills] || [];
  }, [activeCategory, getAllSkills]);

  const getProficiencyLevel = useCallback((level: number) => {
    if (level >= 95) return { label: 'Expert', color: 'bg-green-100 text-green-800 border-green-300' };
    if (level >= 90) return { label: 'Advanced', color: 'bg-blue-100 text-blue-800 border-blue-300' };
    if (level >= 85) return { label: 'Proficient', color: 'bg-purple-100 text-purple-800 border-purple-300' };
    if (level >= 80) return { label: 'Intermediate', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' };
    return { label: 'Developing', color: 'bg-gray-100 text-gray-800 border-gray-300' };
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-textSecondary max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development, fintech solutions, and enterprise architecture
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center space-x-8 px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === category.id
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white dark:bg-dark-surface text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-card'
                }`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getFilteredSkills.map((skill: { name: string; level: number; category: string }, index: number) => (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(0.05 + index * 0.01, 0.2) }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              className="group relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-dark-surface dark:via-dark-card dark:to-dark-surface rounded-lg p-3 shadow-md border border-gray-100 dark:border-dark-border hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon Background */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-primary-100 to-cyan-100 dark:from-primary-900/20 dark:to-cyan-900/20 rounded-md flex items-center justify-center">
                <div className="w-5 h-5 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-sm flex items-center justify-center">
                  <Code className="text-white" size={12} />
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-dark-text mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full border ${getProficiencyLevel(skill.level).color} shadow-sm`}>
                          {getProficiencyLevel(skill.level).label}
                        </span>
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider ${skill.category === 'language' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue' :
                    skill.category === 'framework' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-green' :
                      skill.category === 'database' ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple' :
                        skill.category === 'tool' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-yellow' :
                          skill.category === 'state management' ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-pink' :
                            'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-gray'
                    }`}>
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Expertise Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-primary-100">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4+</div>
                <div className="text-primary-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-primary-100">Users Impacted</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

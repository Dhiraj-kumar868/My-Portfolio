import React, { useState } from 'react';
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
    { id: 'tools', name: 'DevOps & Tools', icon: Cpu },
    { id: 'domain', name: 'Domain Knowledge', icon: Shield }
  ];

  const skills = {
    languages: [
      { name: 'Java', level: 90, category: 'language' },
      { name: 'JavaScript', level: 95, category: 'language' },
      { name: 'TypeScript', level: 95, category: 'language' },
      { name: 'Dart', level: 90, category: 'language' },
      { name: 'Node.js', level: 80, category: 'skill' },
      { name: 'Express.js', level: 80, category: 'framework' },
      { name: 'Flutter', level: 90, category: 'framework' },
      { name: 'Angular', level: 90, category: 'framework' },
      { name: 'React', level: 85, category: 'library' }
    ],
    frontend: [
      { name: 'HTML5', level: 95, category: 'technology' },
      { name: 'CSS3', level: 90, category: 'technology' },
      { name: 'Bootstrap', level: 85, category: 'framework' },
      { name: 'Angular Material', level: 90, category: 'library' },
      { name: 'Responsive Design', level: 95, category: 'skill' },
      { name: 'Progressive Web Apps', level: 85, category: 'skill' }
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
      { name: 'Signal', level: 80, category: 'state management' },
      { name: 'RxJS', level: 85, category: 'state management' },
      { name: 'Provider', level: 90, category: 'state management' },
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
    ],
    domain: [
      { name: 'Fintech Solutions', level: 95, category: 'domain' },
      { name: 'Digital Lending', level: 90, category: 'domain' },
      { name: 'Payment Gateways', level: 85, category: 'domain' },
      { name: 'KYC/eKYC', level: 90, category: 'domain' },
      { name: 'RBI Compliance', level: 95, category: 'domain' },
      { name: 'Security Standards', level: 90, category: 'domain' }
    ]
  };

  const getAllSkills = () => {
    return Object.values(skills).flat();
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return getAllSkills();
    }
    return skills[activeCategory as keyof typeof skills] || [];
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const currentSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg">
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
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
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
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-surface rounded-xl p-4 shadow-lg card-hover"
            >
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text">{skill.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-dark-textSecondary">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 relative overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full ${getSkillColor(skill.level)}`}
                    style={{ minWidth: '16px' }}
                  ></motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded-full ${skill.category === 'language' ? 'bg-blue-100 text-blue-700' :
                  skill.category === 'framework' ? 'bg-green-100 text-green-700' :
                    skill.category === 'database' ? 'bg-purple-100 text-purple-700' :
                      skill.category === 'tool' ? 'bg-yellow-100 text-yellow-700' :
                        skill.category === 'domain' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                  }`}>
                  {skill.category}
                </span>
                {skill.level >= 90 && (
                  <Zap size={16} className="text-yellow-500" />
                )}
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
                <div className="text-4xl font-bold mb-2">3+</div>
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

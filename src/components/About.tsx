import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, Users, Target, Rocket, CheckCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

const About: React.FC = () => {
  const coreCompetencies = [
    {
      icon: Code,
      title: 'Full-Stack Fintech Systems',
      description: 'End-to-end architecture of high-volume digital lending platforms & virtual accounting systems.',
      color: 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Users,
      title: 'Engineering Leadership',
      description: 'Leading and mentoring 7+ member engineering teams across production deliverables.',
      color: 'bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400'
    },
    {
      icon: Zap,
      title: 'Performance & Optimization',
      description: 'Achieved 40% reduction in API response latency and 30% faster data payload handling.',
      color: 'bg-yellow-100 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: Shield,
      title: 'RBI Security Compliance',
      description: 'Architecting RBI & UIDAI compliant biometric Aadhaar KYC authentication pipelines.',
      color: 'bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400'
    },
    {
      icon: Target,
      title: 'Tier-1 Banking Solutions',
      description: 'Direct enterprise impact for premier clients including Jio Financial Services and IDBI Bank.',
      color: 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400'
    },
    {
      icon: Rocket,
      title: 'Scalable Microservices',
      description: 'Designing fault-tolerant Node.js & React architectures processing 100,000+ active users.',
      color: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-surface relative">
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
            Who I Am
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-textSecondary max-w-2xl mx-auto">
            Senior Software Engineer & Fintech Architect dedicated to crafting reliable, scalable software solutions
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50/70 via-white to-secondary-50/70 dark:from-dark-card dark:via-dark-surface dark:to-dark-card rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-dark-border shadow-xl mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                Professional Profile
              </h3>
              <p className="text-gray-700 dark:text-dark-textSecondary leading-relaxed text-sm sm:text-base">
                {personalDetails.bio}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-dark-text">
                  <CheckCircle className="text-green-500" size={18} />
                  <span>React & TypeScript Expert</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-dark-text">
                  <CheckCircle className="text-green-500" size={18} />
                  <span>Node.js Microservices</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-dark-text">
                  <CheckCircle className="text-green-500" size={18} />
                  <span>Flutter Cross-Platform</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-dark-text">
                  <CheckCircle className="text-green-500" size={18} />
                  <span>System Architecture & Mentorship</span>
                </div>
              </div>
            </div>

            {/* Achievement Highlights Matrix */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {personalDetails.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-gray-100 dark:border-dark-border text-center shadow-md"
                >
                  <div className="text-2xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-800 dark:text-dark-text">{stat.label}</div>
                  <div className="text-[10px] text-gray-500 dark:text-dark-textSecondary mt-0.5">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Competencies Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-surface p-6 rounded-3xl border border-gray-100 dark:border-dark-border shadow-md hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl ${comp.color} flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-2">{comp.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-dark-textSecondary leading-relaxed">{comp.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

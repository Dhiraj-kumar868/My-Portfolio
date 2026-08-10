import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { certificationsData, hackerRankData } from '../data/portfolioData';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-dark-bg relative">
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
            Honors & Credentials
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
            Certifications & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-textSecondary max-w-2xl mx-auto">
            Industry certifications, company achievement awards, and HackerRank problem-solving badges
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-surface p-6 rounded-3xl border border-gray-100 dark:border-dark-border shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300 text-xs font-bold rounded-full">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">{cert.date}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-1">{cert.title}</h3>
                <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-3">{cert.issuer}</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-dark-textSecondary leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HackerRank Ratings Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold mb-2">HackerRank Technical Badges</h3>
            <p className="text-sm text-emerald-100">Verified algorithmic problem-solving & core language proficiencies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hackerRankData.map((hr, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-base">{hr.title}</h4>
                  <div className="flex space-x-1">
                    {[...Array(hr.stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-300 fill-yellow-300" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">{hr.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

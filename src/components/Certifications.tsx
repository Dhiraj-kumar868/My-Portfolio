import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, Code, Target, Download, ExternalLink, Star, Award, X } from 'lucide-react';

const Certifications = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const certifications = [
    {
      title: 'Star Achiever of the Year 2024',
      issuer: 'Ezee.ai | Veefin Group',
      date: '2025',
      type: 'award',
      icon: Star,
      description: 'Recognized for outstanding performance and significant contributions to company success',
      color: 'bg-yellow-100 text-yellow-600',
      pdfUrl: new URL("../assets/star-award.pdf", import.meta.url).href
    },
    {
      title: 'Certified React Developer',
      issuer: 'Knowledge Gate',
      date: '2025',
      type: 'certification',
      icon: FileText,
      description: 'Professional certification in React development and modern frontend technologies',
      color: 'bg-cyan-100 text-cyan-600',
      pdfUrl: new URL("../assets/react-certificate.pdf", import.meta.url).href
    },
    {
      title: 'Full Stack Java Developer',
      issuer: 'Naresh i Technologies',
      date: '2022',
      type: 'certification',
      icon: Code,
      description: 'Comprehensive certification in Java-based full stack development',
      color: 'bg-red-100 text-red-600',
      pdfUrl: new URL("../assets/full-stack-java-developer-certificate.pdf", import.meta.url).href
    },
    {
      title: 'Android App Developer (Flutter)',
      issuer: 'ThinkNEXT Technologies Private Limited',
      date: '2021',
      type: 'certification',
      icon: Target,
      description: 'Specialized certification in Flutter mobile app development',
      color: 'bg-green-100 text-green-600',
      pdfUrl: new URL("../assets/android-app-certificate.pdf", import.meta.url).href
    },
    {
      title: 'SII Merit Scholarship',
      issuer: 'Kalinga Institute of Industrial Technology',
      date: '2019-2023',
      type: 'scholarship',
      icon: Trophy,
      description: 'Full academic and hostel sponsorship awarded for outstanding merit in B.Tech program',
      color: 'bg-blue-100 text-blue-600',
      pdfUrl: '/assets/sii-merit-scholarship.pdf'
    }
  ]

  const hackerrankAchievements = [
    {
      title: 'Problem Solving',
      stars: 4,
      description: '4-star rating demonstrating strong analytical and problem-solving skills'
    },
    {
      title: 'Java',
      stars: 5,
      description: '5-star rating showcasing expertise in Java programming'
    },
    {
      title: 'Problem Solving (Basic)',
      stars: 5,
      description: 'Certified in fundamental problem-solving concepts and algorithms'
    },
    {
      title: 'Problem Solving (Intermediate)',
      stars: 5,
      description: 'Advanced certification in complex problem-solving techniques'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-bg">
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
            Certifications & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-textSecondary max-w-3xl mx-auto">
            Professional certifications and achievements that validate expertise and commitment to excellence
          </p>
        </motion.div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg card-hover relative"
              >
                {/* View Certificate Icon */}
                {cert.title !== 'SII Merit Scholarship' && (
                  <button
                    onClick={() => setSelectedPdf(cert.pdfUrl)}
                    className="absolute top-4 right-4 p-2 bg-primary-100 dark:bg-dark-card rounded-lg hover:bg-primary-200 dark:hover:bg-dark-border transition-colors group"
                    title="View Certificate"
                  >
                    <ExternalLink size={16} className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                  </button>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center mb-4`}>
                  <cert.icon size={32} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-dark-text">{cert.title}</h4>
                  <div className="text-sm text-gray-600 dark:text-dark-textSecondary">
                    <div className="font-medium text-primary-600 dark:text-primary-400">{cert.issuer}</div>
                    <div>{cert.date}</div>
                  </div>
                  <p className="text-gray-700 dark:text-dark-textSecondary text-sm leading-relaxed">{cert.description}</p>
                </div>

                {/* Badge */}
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${cert.type === 'award' ? 'bg-yellow-100 text-yellow-800' :
                    cert.type === 'scholarship' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                    {cert.type === 'award' ? '🏆 Award' :
                      cert.type === 'scholarship' ? '🎓 Scholarship' :
                        '📜 Certification'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* HackerRank Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center dark:text-gray-200">HackerRank Achievements</h3>
          <div className="bg-gradient-to-r from-green-600 to-green-400 dark:from-green-700 dark:to-green-500 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hackerrankAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 dark:bg-dark-surface backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < achievement.stars ? 'text-yellow-300 fill-current' : 'text-white/30'}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-green-100 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Overall Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-white/20 dark:border-dark-border"
            >
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-dark-text">4+</div>
                  <div className="text-green-100 dark:text-green-300">Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-dark-text">5★</div>
                  <div className="text-green-100 dark:text-green-300">Max Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-dark-text">100%</div>
                  <div className="text-green-100 dark:text-green-300">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Award className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Committed to staying current with the latest technologies and industry best practices
              through continuous learning and professional development.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Discuss My Expertise
            </a>
          </div>
        </motion.div>

        {/* PDF Modal */}
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white dark:bg-dark-surface rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-border">
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">Certificate Preview</h3>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                >
                  <X size={20} className="text-gray-600 dark:text-dark-textSecondary" />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="p-4">
                <div className="bg-gray-100 dark:bg-dark-bg rounded-lg p-4" style={{ height: '65vh', overflow: 'auto' }}>
                  <embed
                    src={selectedPdf}
                    type="application/pdf"
                    className="w-full h-full rounded-lg"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

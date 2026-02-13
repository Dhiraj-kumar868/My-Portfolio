import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, Users, Target, Rocket } from 'lucide-react';

const About = () => {
  const coreCompetencies = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end development of scalable web and mobile applications',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading and mentoring engineering teams to deliver excellence',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Achieving 30% faster processing and 40% reduced latency',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'RBI-compliant systems with robust security protocols',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Target,
      title: 'Fintech Solutions',
      description: 'Specialized expertise in digital lending and payment systems',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Rocket,
      title: 'Scalable Architecture',
      description: 'Designing systems for 100,000+ active users',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const achievements = [
    { number: '100K+', label: 'Active Users' },
    { number: '10+', label: 'NBFC Clients' },
    { number: '30%', label: 'Performance Boost' },
    { number: '40%', label: 'Latency Reduction' },
    { number: '98%', label: 'On-time Delivery' },
    { number: '7', label: 'Team Members Led' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-surface">
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
            About <span className="gradient-text dark:dark-gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-textSecondary max-w-3xl mx-auto">
            Senior Software Engineer passionate about building transformative fintech solutions
            that drive business growth and enhance user experiences
          </p>
        </motion.div>

        {/* Professional Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-dark-card dark:to-dark-surface rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4">Professional Profile</h3>
              <p className="text-gray-700 dark:text-dark-textSecondary leading-relaxed mb-4">
                Results-driven Senior Software Engineer with 3+ years of specialized experience in
                fintech application development and digital lending platforms. Proven track record
                in leading engineering teams and delivering enterprise solutions for major financial
                institutions including Jio Financial Services and IDBI Bank.
              </p>
              <p className="text-gray-700 dark:text-dark-textSecondary leading-relaxed">
                Expert in architecting scalable, RBI-compliant systems for high-volume transactions,
                consistently achieving significant performance improvements and operational excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-surface rounded-lg p-4 text-center shadow-lg"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600 dark:text-dark-textSecondary">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-8 text-center">Core Competencies</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg card-hover"
              >
                <div className={`w-12 h-12 rounded-lg ${competency.color} flex items-center justify-center mb-4`}>
                  <competency.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">{competency.title}</h4>
                <p className="text-gray-600 dark:text-dark-textSecondary text-sm">{competency.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

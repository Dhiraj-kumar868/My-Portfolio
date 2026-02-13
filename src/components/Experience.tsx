import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp, Users, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Ezee.ai | Veefin Group',
      location: 'Bengaluru, India',
      period: 'July 2025 - Present',
      type: 'current',
      achievements: [
        {
          icon: Users,
          text: 'Led and mentored a 7-member engineering team for Lend.ezee digital lending platform',
          metric: null
        },
        {
          icon: TrendingUp,
          text: 'Architected enterprise-grade scalable solutions for high-volume financial transactions',
          metric: '100K+ users'
        },
        {
          icon: Award,
          text: 'Established technical best practices and development workflows',
          metric: '25% reduction in production issues'
        }
      ],
      skills: ['Team Leadership', 'System Architecture', 'Fintech Solutions', 'Security Compliance']
    },
    {
      title: 'Software Engineer',
      company: 'Ezee.ai | Veefin Group',
      location: 'Bengaluru, India',
      period: 'June 2023 - June 2025',
      type: 'past',
      achievements: [
        {
          icon: TrendingUp,
          text: 'Engineered web and mobile solutions for 10+ NBFCs and banking clients',
          metric: '30% faster processing'
        },
        {
          icon: Users,
          text: 'Served major financial institutions including Jio Financial Services and IDBI Bank',
          metric: '100K+ active users'
        },
        {
          icon: Zap,
          text: 'Integrated complex Aadhaar-based authentication systems',
          metric: 'RBI compliant'
        },
        {
          icon: Award,
          text: 'Collaborated with cross-functional teams for feature-rich applications',
          metric: '98% on-time delivery'
        }
      ],
      skills: ['Full Stack Development', 'API Integration', 'Database Design', 'Performance Optimization']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Ezee.ai | Veefin Group',
      location: 'Bengaluru, India',
      period: 'June 2022 - June 2023',
      type: 'past',
      achievements: [
        {
          icon: Zap,
          text: 'Optimized critical platform services and reduced API latency',
          metric: '40% reduction'
        },
        {
          icon: TrendingUp,
          text: 'Designed and developed Dataset web application for master data management',
          metric: 'Led to full-time offer'
        },
        {
          icon: Users,
          text: 'Enhanced user experience for daily active clients',
          metric: '1K+ users'
        }
      ],
      skills: ['Performance Optimization', 'Web Development', 'API Design', 'Data Management']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-bg">
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
            Professional <span className="gradient-text dark:dark-gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-textSecondary max-w-3xl mx-auto">
            A journey of innovation and excellence in fintech development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-primary-300"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10">
                {exp.type === 'current' && (
                  <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping"></div>
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-8 card-hover"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">{exp.title}</h3>
                        <div className="text-primary-600 dark:text-primary-400 font-semibold text-lg">{exp.company}</div>
                      </div>
                      {exp.type === 'current' && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-dark-textSecondary space-x-4 text-sm">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <achievement.icon size={16} className="text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm leading-relaxed dark:text-gray-200 text-left">{achievement.text}</p>
                          {achievement.metric && (
                            <span className="block text-primary-600 font-semibold text-sm text-left">
                              {achievement.metric}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

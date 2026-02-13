import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Kalinga Institute of Industrial Technology',
      location: 'Bhubaneswar, India',
      period: 'July 2019 - May 2023',
      gpa: '9.27/10.0',
      honors: 'First Class with Distinction',
      type: 'higher',
      achievements: [
        'SII Merit Scholarship recipient',
        'Consistent academic performer',
        'Active participation in technical events',
        'Leadership roles in student organizations'
      ]
    },
    {
      degree: '+2 (Intermediate)',
      institution: 'Kantipur Secondary School',
      location: 'Biratnagar, Nepal',
      period: '2017 - 2019',
      percentage: '84%',
      type: 'intermediate',
      achievements: [
        'Strong foundation in Science and Mathematics',
        'Active participation in extracurricular activities',
        'Consistent academic performance'
      ]
    },
    {
      degree: 'SEE (Secondary Education Examination)',
      institution: 'Bal Bodh Secondary School',
      location: 'Kanchanrup, Saptari, Nepal',
      period: '2017',
      percentage: '87.5%',
      type: 'secondary',
      achievements: [
        'Excellent performance in board examinations',
        'Strong foundation in core subjects',
        'Recognition for academic excellence'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-surface">
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
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-textSecondary max-w-3xl mx-auto">
            Strong academic foundation in computer science and engineering
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-card dark:to-dark-surface rounded-2xl p-8 shadow-lg card-hover"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-2">{edu.degree}</h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold text-lg mb-1">
                      <GraduationCap size={20} className="mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-dark-textSecondary space-x-4 text-sm">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </div>

                {/* GPA/Percentage and Honors */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-dark-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold gradient-text">
                      {edu.gpa || edu.percentage}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-dark-textSecondary">{edu.gpa ? 'CGPA' : 'Percentage'}</div>
                  </div>
                  <div className="bg-white dark:bg-dark-surface rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                      {edu.honors || edu.type}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-dark-textSecondary">{edu.honors ? 'Honors' : 'Level'}</div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-dark-text mb-3 flex items-center">
                    <Award size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-dark-textSecondary text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 dark:from-dark-card dark:to-dark-surface rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">Academic Excellence</h3>
                <p className="text-gray-600 dark:text-dark-textSecondary text-sm">
                  Maintained outstanding academic performance throughout the engineering program
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">Merit Recognition</h3>
                <p className="text-gray-600 dark:text-dark-textSecondary text-sm">
                  Recipient of SII Merit Scholarship for exceptional academic achievements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">4-Year Journey</h3>
                <p className="text-gray-600 dark:text-dark-textSecondary text-sm">
                  Comprehensive engineering education with focus on practical applications
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

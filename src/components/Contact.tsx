import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhirajkumarsah940@gmail.com',
      href: 'mailto:dhirajkumarsah940@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Dhiraj,%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20connect!%0A%0A%0APlease%20let%20me%20know%20about%20any%20opportunities%20or%20collaborations.'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9827436646',
      href: 'tel:+919827436646'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/dhiraj-kumar-sah940',
      color: 'bg-blue-100 text-blue-600 hover:bg-blue-200'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-surface">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-textSecondary max-w-3xl mx-auto">
            Let's discuss how I can contribute to your team and help build amazing fintech solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-dark-textSecondary mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects in the fintech space.
                Whether you're looking for a senior software engineer, team lead, or want to discuss potential collaborations,
                I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-card rounded-lg hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <info.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-left">{info.label}</div>
                      <div className="font-semibold">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${social.color} dark:hover:opacity-80 dark:bg-dark-card`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-dark-card dark:to-dark-surface rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <MessageSquare className="text-primary-600 dark:text-primary-400 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-dark-text mb-2">Current Availability</h4>
                  <p className="text-gray-700 dark:text-dark-textSecondary text-sm">
                    Open to new opportunities and exciting challenges in fintech development.
                    Currently available for full-time positions and consulting projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

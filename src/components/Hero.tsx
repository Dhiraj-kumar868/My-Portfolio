import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, Briefcase, Sparkles, CheckCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import profileImage from '../assets/profile.png';

const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalDetails.titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hi Dhiraj, I came across your portfolio website and would like to connect regarding a potential software engineering opportunity!"
    );
    window.open(`https://wa.me/${personalDetails.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg pt-20 pb-16 relative overflow-hidden">
      {/* Background Subtle Cyber Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100/80 dark:bg-dark-card border border-primary-200 dark:border-dark-border text-primary-800 dark:text-primary-300 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold">Available for New Opportunities</span>
            </motion.div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-dark-text tracking-tight leading-tight">
                Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
              </h1>

              {/* Animated Rotating Role */}
              <div className="h-12 mt-2 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600 dark:text-primary-400 flex items-center gap-2"
                  >
                    <Sparkles size={22} className="text-yellow-500" />
                    <span>{personalDetails.titles[titleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-dark-textSecondary leading-relaxed max-w-2xl">
              {personalDetails.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-600/30 transition-all hover:scale-105 gap-2 text-sm sm:text-base"
              >
                <MessageSquare size={20} />
                Chat on WhatsApp
              </button>

              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-600/30 transition-all hover:scale-105 gap-2 text-sm sm:text-base"
              >
                Explore Projects
                <ArrowRight size={20} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 border-2 border-gray-300 dark:border-dark-border text-gray-800 dark:text-dark-text font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-dark-card transition-all text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-dark-border max-w-xl">
              {personalDetails.stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="bg-white/80 dark:bg-dark-card/60 backdrop-blur-md p-3.5 rounded-2xl border border-gray-100 dark:border-dark-border text-center shadow-sm">
                  <div className="text-xl sm:text-2xl font-extrabold gradient-text">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-500 dark:text-dark-textSecondary mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Avatar Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              {/* Outer Glowing Neon Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse pointer-events-none"></div>

              {/* Glass Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-surface shadow-2xl bg-gradient-to-b from-primary-100 to-white dark:from-dark-card dark:to-dark-surface p-2">
                <img
                  src={profileImage}
                  alt={personalDetails.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x400/2563eb/ffffff?text=Dhiraj+Sah';
                  }}
                />
              </div>

              {/* Floating Badge 1: Experience */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 bg-white dark:bg-dark-surface p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center font-bold">
                  <Briefcase size={20} />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-gray-900 dark:text-dark-text">4+ Years</div>
                  <div className="text-[11px] text-gray-500 dark:text-dark-textSecondary">Fintech Experience</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Tier 1 Clients */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -left-2 bg-white dark:bg-dark-surface p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-gray-900 dark:text-dark-text">Tier-1 Clients</div>
                  <div className="text-[11px] text-gray-500 dark:text-dark-textSecondary">Jio Fin & IDBI Bank</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, Cpu, Layers, TrendingUp } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi Dhiraj, I reviewed your project "${project.title}" on your portfolio. I would like to learn more about your role and architectural setup for this!`
    );
    window.open(`https://wa.me/919827436646?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white dark:bg-dark-surface rounded-2xl shadow-2xl overflow-hidden z-10 my-auto border border-gray-200 dark:border-dark-border max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-primary-600 via-primary-700 to-indigo-800 text-white flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              {project.category} Architecture
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{project.title}</h2>
            <p className="text-primary-100 text-sm sm:text-base font-medium max-w-2xl">{project.subtitle}</p>

            {/* Quick Metrics Header Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs sm:text-sm">
                  <span className="text-primary-200 block text-[11px] uppercase font-semibold">{metric.label}</span>
                  <span className="font-bold text-white text-base">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
            {/* Overview */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-3 flex items-center gap-2">
                <Layers className="text-primary-600 dark:text-primary-400" size={20} />
                Project Overview
              </h3>
              <p className="text-gray-700 dark:text-dark-textSecondary leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </div>

            {/* Business & Technical Impact Callout */}
            <div className="bg-primary-50 dark:bg-dark-card border-l-4 border-primary-600 dark:border-primary-400 p-4 sm:p-5 rounded-r-xl">
              <h4 className="font-bold text-primary-900 dark:text-primary-300 text-sm sm:text-base flex items-center gap-2 mb-1">
                <TrendingUp size={18} />
                Measurable Impact
              </h4>
              <p className="text-primary-800 dark:text-dark-textSecondary text-xs sm:text-sm font-medium">
                {project.impact}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-4 flex items-center gap-2">
                <Cpu className="text-primary-600 dark:text-primary-400" size={20} />
                System Architecture & Design Patterns
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.architectureHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 dark:bg-dark-card rounded-xl border border-gray-100 dark:border-dark-border flex items-start gap-3"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 dark:text-dark-textSecondary text-xs sm:text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-3">Key Deliverables</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyDeliverables.map((del, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-dark-textSecondary">
                    <span className="w-2 h-2 rounded-full bg-primary-500 mr-2 flex-shrink-0"></span>
                    {del}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Proficiency */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-4">Technology Stack Breakdown</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-dark-card p-3 rounded-xl">
                    <div className="flex justify-between items-center text-sm font-semibold mb-1 text-gray-800 dark:text-dark-text">
                      <span>{tech.name}</span>
                      <span className="text-xs text-primary-600 dark:text-primary-400">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-border h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tech.color || 'bg-primary-600'} transition-all duration-500`}
                        style={{ width: `${tech.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors gap-2"
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
              )}
            </div>

            <button
              onClick={handleWhatsAppInquiry}
              className="inline-flex items-center px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-lg hover:shadow-green-500/25 gap-2"
            >
              Discuss Architecture on WhatsApp
              <ExternalLink size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;

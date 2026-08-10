import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, MessageSquare } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Fintech', 'Full-Stack', 'Mobile'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  const handleWhatsAppProject = (title: string) => {
    const text = encodeURIComponent(
      `Hi Dhiraj, I saw your project "${title}" on your portfolio. I'd like to discuss a similar implementation!`
    );
    window.open(`https://wa.me/919827436646?text=${text}`, '_blank');
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-surface relative">
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
            Portfolio Highlights
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-textSecondary max-w-2xl mx-auto">
            Architecting production-grade fintech systems, virtual accounting platforms, and high-throughput data tools
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-border'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-dark-card dark:via-dark-surface dark:to-dark-card rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-dark-border transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-300 text-[11px] font-bold rounded-full">
                      ★ Featured Enterprise Project
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-text mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-gray-600 dark:text-dark-textSecondary text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-white dark:bg-dark-bg rounded-2xl border border-gray-100 dark:border-dark-border">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-dark-text">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-dark-textSecondary uppercase font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gray-200/60 dark:bg-dark-card text-gray-700 dark:text-dark-text text-[11px] font-semibold rounded-lg"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-gray-100 dark:border-dark-border flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors gap-1.5"
                >
                  Deep Architecture & Specs
                  <ArrowRight size={16} />
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleWhatsAppProject(project.title)}
                    className="p-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400 transition-colors"
                    title="Inquire about this project on WhatsApp"
                  >
                    <MessageSquare size={16} />
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-dark-text hover:bg-gray-200 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal Deep Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;

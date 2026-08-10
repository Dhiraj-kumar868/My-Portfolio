import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Send,
  Sparkles
} from 'lucide-react';
import { personalDetails, whatsAppTemplatesData } from '../data/portfolioData';

const Contact: React.FC = () => {
  // Form State for Email Composition
  const [senderName, setSenderName] = useState('');
  const [emailSubject, setEmailSubject] = useState('Senior Engineer Role / Project Inquiry');
  const [emailMessage, setEmailMessage] = useState('');

  // State for WhatsApp Hub
  const [selectedWhatsAppMsg, setSelectedWhatsAppMsg] = useState(whatsAppTemplatesData[0].message);
  const [customWhatsAppMsg, setCustomWhatsAppMsg] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, fieldName: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // 1. Primary Action: Open Gmail Web Compose in New Tab (Guaranteed to work in all browsers!)
  const handleGmailWebCompose = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSubject || !emailMessage) return;

    const formattedSubject = encodeURIComponent(emailSubject);
    const bodyContent = `Hi Dhiraj,\n\n${emailMessage}${senderName ? `\n\nBest regards,\n${senderName}` : ''}`;
    const formattedBody = encodeURIComponent(bodyContent);

    // Direct Gmail Web Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalDetails.email}&su=${formattedSubject}&body=${formattedBody}`;
    window.open(gmailUrl, '_blank');
  };

  // 2. Secondary Action: Trigger Native Mailto Protocol (for Outlook / Apple Mail / Desktop apps)
  const handleNativeMailtoCompose = () => {
    if (!emailSubject || !emailMessage) return;

    const formattedSubject = encodeURIComponent(emailSubject);
    const bodyContent = `Hi Dhiraj,\n\n${emailMessage}${senderName ? `\n\nBest regards,\n${senderName}` : ''}`;
    const formattedBody = encodeURIComponent(bodyContent);

    window.open(`mailto:${personalDetails.email}?subject=${formattedSubject}&body=${formattedBody}`, '_blank');
  };

  const handleWhatsAppSend = () => {
    const textToSend = customWhatsAppMsg || selectedWhatsAppMsg;
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${personalDetails.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {copiedField && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-gray-700"
          >
            <Check size={18} className="text-green-400 dark:text-green-600" />
            <span className="text-sm font-semibold">{copiedField} copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 bg-primary-100 dark:bg-dark-card text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Let's Connect
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-textSecondary max-w-2xl mx-auto leading-relaxed">
            Fill out your subject & message below. Click <strong className="text-primary-600 dark:text-primary-400 font-bold">Open Gmail Compose</strong> to launch a new email tab with your details pre-filled!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: WhatsApp Predefined Outreach (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 dark:from-green-950/40 dark:to-dark-card p-6 sm:p-8 rounded-3xl border border-green-200 dark:border-green-800/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">Direct WhatsApp Hub</h3>
                  <p className="text-xs text-green-700 dark:text-green-400 font-medium">Instant predefined outreach</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-dark-textSecondary text-sm mb-6 leading-relaxed">
                Select a template below to open a direct WhatsApp chat pre-filled with your message:
              </p>

              {/* Template Selection */}
              <div className="space-y-3 mb-6">
                {whatsAppTemplatesData.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => {
                      setSelectedWhatsAppMsg(tpl.message);
                      setCustomWhatsAppMsg('');
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl text-xs transition-all border ${
                      selectedWhatsAppMsg === tpl.message && !customWhatsAppMsg
                        ? 'border-green-500 bg-white dark:bg-dark-surface shadow-md font-semibold text-green-900 dark:text-green-300'
                        : 'border-green-200/50 dark:border-dark-border bg-white/60 dark:bg-dark-surface/50 hover:bg-white text-gray-700 dark:text-dark-textSecondary'
                    }`}
                  >
                    <div className="font-bold text-gray-900 dark:text-dark-text text-sm mb-1">{tpl.label}</div>
                    <div className="text-xs opacity-80 line-clamp-2">{tpl.message}</div>
                  </button>
                ))}
              </div>

              {/* Editable Text Preview */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-gray-600 dark:text-dark-textSecondary block mb-1.5 flex items-center gap-1">
                  <Sparkles size={14} className="text-green-600" />
                  Message Preview (Editable):
                </label>
                <textarea
                  rows={3}
                  value={customWhatsAppMsg || selectedWhatsAppMsg}
                  onChange={(e) => setCustomWhatsAppMsg(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-green-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl flex items-center justify-center space-x-2 shadow-xl shadow-green-600/30 transition-all hover:scale-[1.02] text-sm"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp Now</span>
                <ExternalLink size={16} />
              </button>
            </div>

            {/* Phone Card & Copy */}
            <div className="mt-8 pt-6 border-t border-green-200/60 dark:border-dark-border space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-dark-surface rounded-xl text-xs">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-600" />
                  <span className="font-medium text-gray-800 dark:text-dark-text">{personalDetails.phone}</span>
                </div>
                <button
                  onClick={(e) => handleCopy(e, personalDetails.phone, 'Phone number')}
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-dark-card rounded-md transition-colors"
                  title="Copy phone"
                >
                  <Copy size={14} className="text-gray-500" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Email Form (Redirects to Visitor's Inbox with Subject & Message) (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-dark-surface p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-dark-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-600/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">Send an Email</h3>
                  <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">Redirects to your email inbox with your pre-filled text</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-dark-textSecondary mb-8 leading-relaxed">
                Enter your subject and message below. Clicking <strong className="text-primary-600 dark:text-primary-400 font-bold">Open Gmail Compose ✉️</strong> will launch Gmail in a new tab addressed to <strong className="text-primary-600 dark:text-primary-400 font-bold">{personalDetails.email}</strong> with your text pre-filled!
              </p>

              <form onSubmit={handleGmailWebCompose} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-dark-text uppercase tracking-wider mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:outline-none text-gray-900 dark:text-dark-text"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-dark-text uppercase tracking-wider mb-2">
                    Email Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Senior Software Engineer Position / Project Proposal"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:outline-none text-gray-900 dark:text-dark-text font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-dark-text uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    placeholder="Write your message here... (e.g. We have an opportunity at our company and would love to connect with you!)"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:outline-none text-gray-900 dark:text-dark-text resize-none font-medium"
                  />
                </div>

                {/* Email Action Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Primary: Gmail Web Compose */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-lg shadow-primary-600/30 transition-all flex items-center justify-center space-x-2 text-xs sm:text-sm hover:scale-[1.01]"
                  >
                    <Send size={16} />
                    <span>Open Gmail Compose ✉️</span>
                    <ExternalLink size={16} />
                  </button>

                  {/* Secondary: Default Desktop Mail App */}
                  <button
                    type="button"
                    onClick={handleNativeMailtoCompose}
                    className="w-full py-4 bg-indigo-50 dark:bg-dark-card hover:bg-indigo-100 dark:hover:bg-dark-border text-primary-700 dark:text-primary-300 font-bold rounded-2xl border border-primary-200 dark:border-primary-800 transition-colors flex items-center justify-center space-x-2 text-xs sm:text-sm"
                  >
                    <Mail size={16} />
                    <span>Default Mail App 📬</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-dark-border flex flex-wrap items-center justify-between text-xs text-gray-500 dark:text-dark-textSecondary">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin size={14} className="text-primary-600" />
                Based in Bengaluru, India (Open to Remote & Global roles)
              </span>
              <div className="flex space-x-3 mt-2 sm:mt-0">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors flex items-center gap-1 font-semibold"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors flex items-center gap-1 font-semibold"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

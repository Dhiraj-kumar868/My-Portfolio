import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { whatsAppTemplatesData, personalDetails } from '../data/portfolioData';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(whatsAppTemplatesData[0].message);
  const [customMessage, setCustomMessage] = useState('');

  const handleSend = (msgText?: string) => {
    const textToSend = msgText || customMessage || selectedTemplate;
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${personalDetails.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-8 left-8 z-40">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group"
          aria-label="Contact via WhatsApp"
        >
          {/* Glowing Ping effect */}
          <span className="absolute -inset-1 rounded-full bg-green-500 opacity-40 animate-ping pointer-events-none"></span>

          {/* Icon */}
          {isOpen ? <X size={26} /> : <MessageSquare size={26} className="group-hover:scale-110 transition-transform" />}

          {/* Quick Tooltip */}
          <span className="absolute left-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            Chat on WhatsApp 👋
          </span>
        </motion.button>
      </div>

      {/* WhatsApp Modal / Quick Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 left-8 z-50 w-80 sm:w-96 bg-white dark:bg-dark-surface rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  💬
                </div>
                <div>
                  <h4 className="font-bold text-sm">Direct WhatsApp Chat</h4>
                  <p className="text-xs text-green-100 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-300 mr-1 animate-pulse"></span>
                    Online & Ready to connect
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Templates Selector */}
            <div className="p-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-dark-textSecondary flex items-center gap-1">
                <Sparkles size={14} className="text-green-500" />
                Select Quick Template Message:
              </p>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {whatsAppTemplatesData.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => {
                      setSelectedTemplate(template.message);
                      setCustomMessage('');
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all border ${
                      selectedTemplate === template.message && !customMessage
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-900 dark:text-green-300 font-semibold'
                        : 'border-gray-100 dark:border-dark-card hover:bg-gray-50 dark:hover:bg-dark-card text-gray-700 dark:text-dark-text'
                    }`}
                  >
                    <span className="font-bold block mb-0.5">{template.label}</span>
                    <span className="line-clamp-2 opacity-80">{template.message}</span>
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="pt-2">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-dark-textSecondary block mb-1">
                  Or edit message:
                </label>
                <textarea
                  rows={3}
                  value={customMessage || selectedTemplate}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                  placeholder="Type your message..."
                />
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSend()}
                className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg transition-all"
              >
                <span>Launch WhatsApp Chat</span>
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;

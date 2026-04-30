import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-gray-100"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🦷</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Dentalfix Support</p>
                <p className="text-gray-500 text-xs mt-0.5">Typically replies in minutes</p>
                <a
                  href="https://wa.me/919876543210?text=Hi%20Dentalfix!%20I%20need%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full text-center py-2 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-300/50 flex items-center justify-center transition-all hover:scale-110"
        aria-label="WhatsApp Chat"
      >
        <motion.div
          animate={{ rotate: showTooltip ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {showTooltip ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.div>
      </motion.button>

      {/* Pulse ring */}
      {!showTooltip && (
        <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-green-400/40 animate-ping pointer-events-none" />
      )}
    </div>
  );
}

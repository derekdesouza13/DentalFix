import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { bracesOptions } from '../data/mockData';

export default function BracesPricing() {
  const [selected, setSelected] = useState('ceramic');
  const current = bracesOptions.find((b) => b.type === selected);

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary-600 text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Braces & Aligner{' '}
            <span className="text-gradient">Pricing Guide</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choose the treatment that fits your lifestyle and budget. All prices include consultation, X-rays, and follow-up appointments.
          </p>
        </motion.div>

        {/* Selector tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {bracesOptions.map((option) => (
            <button
              key={option.type}
              onClick={() => setSelected(option.type)}
              className={`relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                selected === option.type
                  ? 'bg-primary-600 text-white shadow-lg shadow-blue-200 scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              <span className="mr-2">{option.icon}</span>
              {option.label}
              {option.tag && selected !== option.type && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-amber-400 text-white text-[10px] font-bold">
                  {option.tag}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${current.color} p-1`}>
              <div className="bg-white rounded-[22px] p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Left */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-semibold text-gray-600 mb-6">
                      {current.icon} {current.label}
                      {current.tag && (
                        <span
                          className="ml-2 px-2 py-0.5 rounded-full text-white text-[10px] font-bold"
                          style={{ backgroundColor: current.accent }}
                        >
                          {current.tag}
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-wide">Price Range</p>
                      <p className="font-display text-4xl font-bold text-gray-900">{current.priceRange}</p>
                    </div>

                    <div className="mb-8">
                      <p className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-wide">Treatment Duration</p>
                      <p className="font-semibold text-gray-700 text-lg">{current.duration}</p>
                    </div>

                    <p className="text-gray-400 text-sm mb-8">
                      *Final price depends on complexity. Includes all regular adjustment visits. EMI options available.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="#book"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:-translate-y-0.5"
                        style={{ backgroundColor: current.accent }}
                      >
                        Book Consultation
                        <ArrowRight size={16} />
                      </a>
                      <a
                        href="#consultation"
                        className="flex items-center justify-center px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:border-gray-300 transition-all"
                      >
                        Free Assessment
                      </a>
                    </div>
                  </div>

                  {/* Right - Benefits */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-display text-xl font-bold text-gray-900 mb-5">What's Included</h4>
                    <ul className="space-y-4">
                      {current.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle
                            size={20}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: current.accent }}
                          />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Additional inclusions */}
                    <div className="mt-6 pt-5 border-t border-gray-200">
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">All Plans Include</p>
                      <div className="flex flex-wrap gap-2">
                        {['Initial X-Ray', 'Dental Molds', 'Follow-ups', 'Retainer'].map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white text-xs font-medium text-gray-500 border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* EMI note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          💳 Easy EMI options available — pay as low as ₹1,500/month. Insurance claims assisted.
        </motion.p>
      </div>
    </section>
  );
}

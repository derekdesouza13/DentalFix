import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, ChevronDown } from 'lucide-react';
import { stats } from '../data/mockData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-sky-100/60"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/40 to-sky-300/30 blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-100/50 to-cyan-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-white/30 to-transparent" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#0A84FF 1px, transparent 1px), linear-gradient(90deg, #0A84FF 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary-700 text-sm font-semibold mb-8"
            >
              <Star size={14} className="fill-current" />
              Rated #1 Dental Clinic in the City
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              Confident{' '}
              <span className="text-gradient block">Smiles Start</span>
              Here.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Experience world-class dental care with our expert team. From routine cleanings to complete smile transformations — your perfect smile is our mission.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#book"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-base shadow-xl shadow-blue-300/40 hover:shadow-blue-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#consultation"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-blue-50 text-gray-800 font-semibold text-base shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                Free Consultation
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield size={16} className="text-green-500" />
                ISO Certified Clinic
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock size={16} className="text-primary-500" />
                Mon–Sat: 9AM – 8PM
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Star size={16} className="text-amber-400 fill-current" />
                4.9/5 on Google
              </div>
            </motion.div>
          </div>

          {/* Right — Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            {/* Main image container */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-200/60 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-3xl border border-blue-100/40" />

              {/* Main illustration */}
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-2xl shadow-blue-200/50 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=600&fit=crop"
                  alt="Happy patient with beautiful smile"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-3xl" />
              </div>

              {/* Floating badge – patients */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-2xl font-display font-bold text-primary-600">10k+</div>
                <div className="text-xs text-gray-500 font-medium">Happy Patients</div>
              </motion.div>

              {/* Floating badge – rating */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">4.9 Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white/70 border border-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="font-display text-3xl font-bold text-primary-600">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-1 mt-16 text-gray-400 hover:text-primary-500 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

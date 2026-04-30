import { motion } from 'framer-motion';

const services = [
  { icon: '🦷', title: 'General Dentistry', desc: 'Routine cleanings, fillings, and check-ups for all ages.', color: 'from-blue-50 to-sky-50', accent: '#0A84FF' },
  { icon: '✨', title: 'Teeth Whitening', desc: 'Professional in-office whitening for a brighter smile in one visit.', color: 'from-amber-50 to-yellow-50', accent: '#f59e0b' },
  { icon: '🔧', title: 'Orthodontics', desc: 'Metal, ceramic braces, and invisible aligners for aligned teeth.', color: 'from-purple-50 to-indigo-50', accent: '#8b5cf6' },
  { icon: '🦴', title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacements that last a lifetime.', color: 'from-green-50 to-emerald-50', accent: '#10b981' },
  { icon: '🎨', title: 'Smile Design', desc: 'Veneers, crowns, and cosmetic procedures to design your dream smile.', color: 'from-rose-50 to-pink-50', accent: '#f43f5e' },
  { icon: '🩺', title: 'Root Canal', desc: 'Painless root canal treatments with modern rotary endodontics.', color: 'from-orange-50 to-amber-50', accent: '#f97316' },
];

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary-600 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive{' '}
            <span className="text-gradient">Dental Care</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From routine cleanings to complete smile makeovers, we offer a full range of dental services under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group p-7 rounded-3xl bg-gradient-to-br ${service.color} border border-white shadow-sm hover:shadow-xl transition-all duration-400 cursor-default`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md"
                style={{ backgroundColor: `${service.accent}15` }}
              >
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              <a
                href="#book"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold transition-colors"
                style={{ color: service.accent }}
              >
                Book Now →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

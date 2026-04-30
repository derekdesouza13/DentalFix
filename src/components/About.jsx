import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award, Users } from 'lucide-react';
import { doctors, assistants } from '../data/mockData';

const teamMembers = [...doctors, ...assistants];

function TeamCard({ member, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Photo */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
        {member.rating && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-amber-600">
            <Star size={12} className="fill-current" />
            {member.rating}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-primary-600 text-sm font-semibold mt-1">{member.specialty}</p>
        <p className="text-gray-400 text-xs mt-1">{member.qualification}</p>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <Award size={14} className="text-primary-400" />
            {member.experience}
          </div>
          {member.patients && (
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <Users size={14} className="text-primary-400" />
              {member.patients}
            </div>
          )}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}

export default function About() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary-600 text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert{' '}
            <span className="text-gradient">Dentists</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our team of highly qualified specialists brings years of experience and a passion for creating beautiful, healthy smiles.
          </p>
        </motion.div>

        {/* Why Us strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '🏆', title: 'Award-Winning Care', desc: 'Recognized for excellence in dental treatment & patient satisfaction.' },
            { icon: '🔬', title: 'Latest Technology', desc: 'Digital X-rays, 3D scanning, and laser dentistry for precise results.' },
            { icon: '💙', title: 'Patient-First Approach', desc: 'We prioritize your comfort and customize every treatment plan.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

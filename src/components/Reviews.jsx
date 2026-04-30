import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '../data/mockData';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-amber-400 fill-current' : 'text-gray-200 fill-current'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [beforeAfterIdx, setBeforeAfterIdx] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? reviews.length - 1 : a - 1));
  const next = () => setActive((a) => (a === reviews.length - 1 ? 0 : a + 1));

  const review = reviews[active];

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results,{' '}
            <span className="text-gradient">Real Smiles</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            See the transformations and hear from our patients about their Dentalfix experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-6">Before & After</h3>
            <div className="grid grid-cols-2 gap-4">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setBeforeAfterIdx(i)}
                  className={`rounded-2xl overflow-hidden cursor-pointer transition-all ${
                    beforeAfterIdx === i ? 'ring-3 ring-primary-500 shadow-lg' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="relative">
                    <div className="grid grid-cols-2 h-36">
                      <div className="relative overflow-hidden">
                        <img src={r.before} alt="Before" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-red-900/30" />
                        <span className="absolute top-2 left-2 text-[10px] font-bold text-white bg-red-500 px-2 py-0.5 rounded-full">BEFORE</span>
                      </div>
                      <div className="relative overflow-hidden">
                        <img src={r.after} alt="After" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-green-900/20" />
                        <span className="absolute top-2 right-2 text-[10px] font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">AFTER</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-xs font-semibold text-gray-700">{r.name}</p>
                      <p className="text-[10px] text-gray-400">{r.treatment}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-6">What Patients Say</h3>

            <div className="relative bg-white rounded-3xl shadow-xl shadow-blue-100/50 p-8 overflow-hidden min-h-[320px] flex flex-col justify-between">
              {/* Quote icon */}
              <Quote size={48} className="text-blue-100 fill-current absolute top-6 right-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <StarRating rating={review.rating} />
                  <p className="text-gray-600 text-base leading-relaxed mt-4 mb-6 relative z-10">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={review.after}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-400">{review.treatment} · {review.date}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav */}
              <div className="flex items-center gap-4 mt-6">
                <button onClick={prev} className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-primary-100 hover:text-primary-600 flex items-center justify-center transition-colors">
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === active ? 'w-6 bg-primary-600' : 'w-2 bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <button onClick={next} className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-primary-100 hover:text-primary-600 flex items-center justify-center transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Google rating card */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-100">Rated on Google</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-3xl font-display font-bold">4.9</span>
                  <div>
                    <StarRating rating={5} />
                    <p className="text-xs text-blue-200 mt-0.5">Based on 847 reviews</p>
                  </div>
                </div>
              </div>
              <div className="text-5xl opacity-30">G</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

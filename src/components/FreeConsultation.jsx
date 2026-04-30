import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, MessageCircle, CheckCircle, X } from 'lucide-react';

export default function FreeConsultation() {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' });
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage({ preview: ev.target.result, name: file.name });
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
              100% Free
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Free Online{' '}
              <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Not sure where to start? Share your dental concerns or upload a photo of your teeth, and our specialists will reach out with a personalized plan — completely free.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { emoji: '💬', text: 'Quick response within 2 hours' },
                { emoji: '🔒', text: 'Your information stays private' },
                { emoji: '📱', text: 'Consult via WhatsApp or call' },
                { emoji: '✅', text: 'No obligation, no credit card' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-gray-600">
                  <span className="text-xl">{item.emoji}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Dentalfix!%20I%20need%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg shadow-green-200 transition-all hover:-translate-y-1"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center"
              >
                <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                <p className="text-gray-500">Our team will contact you at <strong>{form.phone}</strong> within 2 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', concern: '' }); setImage(null); }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Get Free Advice</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Dental Concern</label>
                    <textarea
                      name="concern"
                      value={form.concern}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe your dental problem or what you'd like to improve..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Upload area */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Upload Photo (Optional)</label>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => fileRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                        dragOver ? 'border-primary-400 bg-blue-50' : 'border-gray-200 hover:border-primary-300 hover:bg-blue-50/30'
                      }`}
                    >
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFile(e.target.files[0])}
                      />
                      {image ? (
                        <div className="relative inline-block">
                          <img src={image.preview} alt="preview" className="h-24 w-24 object-cover rounded-xl mx-auto" />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setImage(null); }}
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center"
                          >
                            <X size={12} />
                          </button>
                          <p className="text-xs text-gray-400 mt-2">{image.name}</p>
                        </div>
                      ) : (
                        <>
                          <Upload size={28} className="text-gray-300 mx-auto mb-2" />
                          <p className="text-sm text-gray-400">Drag & drop or <span className="text-primary-500 font-medium">browse</span></p>
                          <p className="text-xs text-gray-300 mt-1">PNG, JPG up to 10MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5"
                  >
                    Request Free Consultation
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

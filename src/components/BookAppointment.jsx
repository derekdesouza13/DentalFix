import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, User, Phone, Mail, ChevronDown } from 'lucide-react';
import { doctors, treatments } from '../data/mockData';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  treatment: '',
  doctor: '',
  date: '',
  time: '',
};

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
  '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
];

export default function BookAppointment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit phone required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.treatment) e.treatment = 'Please select a treatment';
    if (!form.doctor) e.doctor = 'Please select a doctor';
    if (!form.date) e.date = 'Please pick a date';
    if (!form.time) e.time = 'Please pick a time slot';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
    } text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all`;

  if (submitted) {
    return (
      <section id="book" className="section-padding bg-gradient-to-br from-blue-600 to-sky-500">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">
              Appointment Booked!
            </h2>
            <p className="text-gray-500 mb-2">
              Thank you, <strong className="text-gray-800">{form.name}</strong>! Your appointment is confirmed.
            </p>
            <div className="mt-6 p-5 bg-blue-50 rounded-2xl text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Treatment</span>
                <span className="font-medium text-gray-800">{form.treatment}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Doctor</span>
                <span className="font-medium text-gray-800">{doctors.find(d => String(d.id) === form.doctor)?.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date & Time</span>
                <span className="font-medium text-gray-800">{form.date} at {form.time}</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-6">A confirmation will be sent to {form.email}</p>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); }}
              className="mt-8 px-8 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Book Another
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="section-padding bg-gradient-to-br from-blue-600 to-sky-500 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-white"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Online Booking
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Book Your Appointment Online
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Skip the wait. Choose your preferred doctor, date, and time. Get confirmed in seconds.
            </p>
            <div className="space-y-4">
              {['No booking fee', 'Instant confirmation by email', 'Easy rescheduling', 'Reminder 24h before'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-300 flex-shrink-0" />
                  <span className="text-blue-50">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="mt-10 p-5 rounded-2xl bg-white/15 backdrop-blur-sm">
              <p className="text-sm text-blue-100 mb-3">Or call us directly</p>
              <a href="tel:+919876543210" className="text-2xl font-display font-bold text-white hover:underline">
                +91 98765 43210
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-7">Appointment Details</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Full Name</label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`${inputClass('name')} pl-9`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Phone Number</label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className={`${inputClass('phone')} pl-9`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Email Address</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`${inputClass('email')} pl-9`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Treatment */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Treatment Type</label>
                <div className="relative">
                  <select name="treatment" value={form.treatment} onChange={handleChange} className={`${inputClass('treatment')} appearance-none`}>
                    <option value="">Select treatment...</option>
                    {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                {errors.treatment && <p className="text-red-500 text-xs mt-1">{errors.treatment}</p>}
              </div>

              {/* Doctor */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Choose Doctor</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {doctors.map((doc) => (
                    <label
                      key={doc.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        form.doctor === String(doc.id)
                          ? 'border-primary-500 bg-blue-50'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="doctor"
                        value={doc.id}
                        checked={form.doctor === String(doc.id)}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-semibold text-gray-800 leading-tight">{doc.name.replace('Dr. ', 'Dr.')}</p>
                        <p className="text-[10px] text-gray-400">{doc.specialty.split(' & ')[0]}</p>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.doctor && <p className="text-red-500 text-xs mt-1">{errors.doctor}</p>}
              </div>

              {/* Date + Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Preferred Date</label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`${inputClass('date')} pl-9`}
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Preferred Time</label>
                  <div className="relative">
                    <select name="time" value={form.time} onChange={handleChange} className={`${inputClass('time')} appearance-none`}>
                      <option value="">Select time...</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 disabled:opacity-70 text-white font-bold text-base shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Booking...
                  </>
                ) : 'Confirm Appointment'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

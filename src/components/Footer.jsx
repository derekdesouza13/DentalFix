import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Services: ['Teeth Whitening', 'Braces & Aligners', 'Dental Implants', 'Root Canal', 'Cosmetic Dentistry', 'Smile Design'],
  Company: ['About Us', 'Our Team', 'Patient Reviews', 'Careers', 'Blog', 'Privacy Policy'],
  Support: ['Book Appointment', 'Free Consultation', 'Insurance Claims', 'EMI Options', 'Emergency Care', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-400">
      {/* Map embed */}
      <div className="w-full h-64 bg-gray-800 relative overflow-hidden">
        <iframe
          title="Dentalfix Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265788551891!2d73.91456537509385!3d18.56217128253663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
                <span className="text-xl">🦷</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">Dental</span>
                <span className="font-display text-xl font-bold text-primary-400">fix</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Premium dental care designed around you. State-of-the-art technology. Compassionate team. Beautiful smiles, guaranteed.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-sm hover:text-white transition-colors">
                <MapPin size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                103, Smile Tower, Viman Nagar, Pune – 411014, Maharashtra
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                +91 98765 43210
              </a>
              <a href="mailto:hello@dentalfix.in" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                hello@dentalfix.in
              </a>
              <div className="flex items-start gap-3 text-sm">
                <Clock size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Dentalfix Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

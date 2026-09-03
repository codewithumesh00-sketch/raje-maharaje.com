import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

const ContactPage = () => {
  const { navigateTo } = useShop();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Wedding Favours & Groomsmen',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-neutral-900">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-medium">Contact Us</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-2">
            Connect With Studio Sankara
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.16em] font-light text-neutral-900 mb-4">
            CONTACT RAJE MAHARAJE
          </h1>
          <div className="w-12 h-px bg-[#c5a059] mx-auto mb-4" />
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-500 font-light">
            Get in touch with Raje Maharaje for wedding gifting, bulk orders & corporate collaborations. We’re here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Atelier Details (Exact from rajemaharaje.com/contact-us) */}
          <div className="lg:col-span-5 space-y-8 bg-[#FAF9F5] p-8 sm:p-10 border border-neutral-200/70">
            <div>
              <h2 className="text-lg font-serif uppercase tracking-wider text-neutral-900 mb-2 font-medium">
                Atelier Address
              </h2>
              <div className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-neutral-600 font-light">
                <MapPin className="w-5 h-5 text-[#9c783e] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-900">Studio Sankara</p>
                  <p>Hermitage Apartments, Sector 28</p>
                  <p>Gurgaon 122002, Haryana, India</p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-200/70 pt-6">
              <h2 className="text-lg font-serif uppercase tracking-wider text-neutral-900 mb-3 font-medium">
                Email Inquiries
              </h2>
              <div className="flex items-center space-x-3 text-xs sm:text-sm font-sans text-neutral-600 font-light">
                <Mail className="w-5 h-5 text-[#9c783e] shrink-0" />
                <a
                  href="mailto:raje.maharaje.official@gmail.com"
                  className="hover:text-black hover:underline"
                >
                  raje.maharaje.official@gmail.com
                </a>
              </div>
            </div>

            <div className="border-t border-neutral-200/70 pt-6">
              <h2 className="text-lg font-serif uppercase tracking-wider text-neutral-900 mb-3 font-medium">
                Direct Concierge & Orders
              </h2>
              <div className="space-y-2 text-xs sm:text-sm font-sans text-neutral-600 font-light">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#9c783e] shrink-0" />
                  <a href="tel:9910807795" className="hover:text-black font-medium">
                    +91 9910807795
                  </a>
                </div>
                <div className="flex items-center space-x-3 pl-8">
                  <a href="tel:9820427795" className="hover:text-black font-medium">
                    +91 9820427795
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-200/70 pt-6">
              <div className="flex items-center space-x-3 text-xs text-neutral-500 font-light">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span>Monday &ndash; Saturday, 10:00 AM &ndash; 7:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-neutral-200/70">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-serif uppercase tracking-wider text-neutral-900">
                  Thank You for Your Inquiry
                </h3>
                <p className="text-xs sm:text-sm font-sans text-neutral-600 max-w-md mx-auto font-light">
                  Your message has been received by Prita Dheer and the Studio Sankara concierge team. We will reach out within 24 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-medium"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-lg font-serif uppercase tracking-wider text-neutral-900 font-medium mb-4">
                  Send A Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Rathore"
                      className="w-full px-4 py-2.5 border border-neutral-300 text-xs font-sans focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@domain.com"
                      className="w-full px-4 py-2.5 border border-neutral-300 text-xs font-sans focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 border border-neutral-300 text-xs font-sans focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-2">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-300 text-xs font-sans bg-white focus:outline-none focus:border-black"
                    >
                      <option value="Wedding Favours & Groomsmen">Wedding Favours & Groomsmen</option>
                      <option value="Corporate Dignitary Gifting">Corporate Dignitary Gifting</option>
                      <option value="Bespoke Box Inquiries">Bespoke Box Inquiries</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-2">
                    Message & Event Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event, quantity required, desired crafts, or timeline..."
                    className="w-full px-4 py-2.5 border border-neutral-300 text-xs font-sans focus:outline-none focus:border-black resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-black text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Atelier</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

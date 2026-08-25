import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Gift, Sparkles, MessageCircle, CheckCircle, ShieldCheck, Mail, Phone, Users, Send } from 'lucide-react';

const CorporateWeddingPage = () => {
  const { showToast } = useShop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Destination Wedding',
    quantity: '25-50 Pieces',
    eventDate: '',
    customNotes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your Royal Inquiry has been received. Our Concierge will reach out within 4 hours.', '👑');
  };

  return (
    <div className="bg-cream-50 text-obsidian-950 min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-obsidian-950 text-cream-100 border-b border-gold-900/40 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-950 border border-gold-500/40 text-gold-300 text-xs uppercase tracking-[0.25em]">
            <Gift className="w-3.5 h-3.5 text-gold-400" />
            <span>Bespoke Concierge Commissioning</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-gold-100">
            Wedding Favours & Corporate Gifting
          </h1>

          <p className="text-sm sm:text-base text-cream-200/80 font-serif max-w-2xl mx-auto leading-relaxed">
            From intimate royal destination weddings in Udaipur to Fortune 500 executive gifts — we curate customized silk ensembles encased in monogrammed rigid presentation chests.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4">
            <a
              href="https://wa.me/919910807795?text=Hello%20Raje%20Maharaje,%20I%20would%20like%20to%20discuss%20a%20wedding/corporate%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs uppercase font-bold tracking-widest transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Tier Solutions */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-cream-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-gold-800">10 – 35 Units</span>
              <h3 className="font-display text-xl font-bold text-obsidian-950 uppercase mt-1">
                The Groomsmen Suite
              </h3>
              <p className="text-xs text-obsidian-600 font-sans mt-2 leading-relaxed">
                Color-coordinated Tanchoi brocades and Chikankari silk squares matched precisely to the wedding palette and safa tones.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-obsidian-700 font-serif">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                  <span>Custom embroidered initials for each groomsman</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                  <span>Complimentary individual calligraphy cards</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-cream-200 text-xs font-serif font-bold text-gold-900">
              Tiered Curation Privileges Available
            </div>
          </div>

          <div className="bg-obsidian-950 text-cream-100 p-8 rounded-2xl border-2 border-gold-500/50 shadow-2xl flex flex-col justify-between relative">
            <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gold-500 text-obsidian-950 font-bold text-[10px] uppercase font-mono">
              Most Popular
            </span>
            <div>
              <span className="text-xs uppercase font-mono font-bold text-gold-400">50 – 200 Units</span>
              <h3 className="font-display text-xl font-bold text-gold-200 uppercase mt-1">
                The Royal Wedding Favour
              </h3>
              <p className="text-xs text-cream-200/90 font-sans mt-2 leading-relaxed">
                Heirloom keepsake chests for esteemed wedding guests, Baraat dignitaries, and family elders.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-cream-200 font-serif">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  <span>Custom brass wax seal with the Couple's Royal Monogram</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  <span>Bespoke ribbon Pantone matching & gift bag casing</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-gold-900/50 text-xs font-serif font-bold text-gold-300">
              Dedicated Wedding Concierge Manager
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-cream-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-gold-800">100+ Units</span>
              <h3 className="font-display text-xl font-bold text-obsidian-950 uppercase mt-1">
                Executive & Corporate
              </h3>
              <p className="text-xs text-obsidian-600 font-sans mt-2 leading-relaxed">
                Sophisticated Indian heritage gifting for international delegates, board members, and annual summits.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-obsidian-700 font-serif">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                  <span>Discreet corporate crest foil stamping</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                  <span>Multi-location domestic & worldwide express drop-shipping</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-cream-200 text-xs font-serif font-bold text-gold-900">
              GST Invoicing & Bulk Contract Terms
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-cream-300 shadow-xl">
          <div className="text-center max-w-md mx-auto mb-8">
            <h3 className="font-display text-2xl font-bold uppercase text-obsidian-950">
              Request A Bespoke Curation
            </h3>
            <p className="text-xs text-obsidian-600 font-serif mt-1">
              Share your event vision and our lead design team will prepare sample swatch presentations.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-4">
              <Sparkles className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-sans font-bold text-lg text-emerald-950 uppercase">
                Royal Request Transmitted
              </h4>
              <p className="text-xs text-emerald-800 font-sans max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our bespoke concierge has received your inquiry for <strong>{formData.quantity}</strong> ({formData.occasion}). We will review your vision and connect within 4 business hours.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919910807795?text=Hello%20Raje%20Maharaje%20Concierge,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20am%20inquiring%20about%20${encodeURIComponent(formData.quantity)}%20for%20a%20${encodeURIComponent(formData.occasion)}.%20Notes:%20${encodeURIComponent(formData.customNotes || 'None')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      occasion: 'Destination Wedding',
                      quantity: '25-50 Pieces',
                      eventDate: '',
                      customNotes: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                    Your Esteemed Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    placeholder="e.g. Maharani Devika / Rohan Singhania"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    placeholder="+91 9910807795"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                    Occasion Type
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                  >
                    <option>Destination Wedding</option>
                    <option>Groomsmen Curation</option>
                    <option>Corporate Annual Summit</option>
                    <option>VIP Diplomatic Gift</option>
                    <option>Other Royal Celebration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                  >
                    <option>10 - 25 Pieces</option>
                    <option>25 - 50 Pieces</option>
                    <option>50 - 150 Pieces</option>
                    <option>150+ Pieces</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                  Wedding Palette & Custom Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  placeholder="Share details like colors, wedding date, city, or custom initials..."
                  className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500 font-serif"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-obsidian-950 text-gold-300 font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-obsidian-950 transition-all shadow-xl"
              >
                Submit Royal Commission Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default CorporateWeddingPage;

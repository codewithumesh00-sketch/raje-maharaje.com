import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const ContactPage = () => {
  const { showToast } = useShop();
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been dispatched to our Gurgaon Atelier.', '💌');
  };

  const faqs = [
    {
      q: 'How long does custom monogramming embroidery take?',
      a: 'Custom monogramming is performed by master hand-embroidery artisans in Lucknow and Banaras. It typically takes 2-3 additional business days before dispatch.'
    },
    {
      q: 'Do you provide physical fabric swatches for wedding curation?',
      a: 'Yes, for wedding and corporate commissions of 15+ pieces, our atelier delivers a physical swatch kit with brocade swatches, ribbon options, and wax seal samples.'
    },
    {
      q: 'What is your shipping and international delivery policy?',
      a: 'We offer complimentary express delivery across India for orders above ₹5,000. Worldwide international express shipping to the USA, UK, UAE, and Europe is delivered via DHL Express in 4-6 business days.'
    },
    {
      q: 'Can I visit your studio in Gurgaon?',
      a: 'Private studio appointments at Studio Sankara (Hermitage Apartments, Sector 28, Gurgaon) are welcomed for bespoke consultations. Please contact us in advance to schedule.'
    }
  ];

  return (
    <div className="bg-cream-50 text-obsidian-950 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold font-serif">
            Atelier Concierge
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-obsidian-900 mt-2">
            Connect With The Atelier
          </h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 mb-4"></div>
          <p className="text-sm sm:text-base text-obsidian-600 font-serif">
            Our private concierge team is at your disposal for bespoke styling, wedding commissions, and studio appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-obsidian-950 text-cream-100 p-8 rounded-2xl border border-gold-900/50 shadow-xl space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-gold-200 uppercase">
                  Studio Sankara Atelier
                </h3>
                <p className="text-xs text-cream-300 font-serif mt-1">
                  Private Menswear & Bespoke Gifting Salon
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-cream-200 font-sans font-light">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cream-100 block font-serif">Studio Address:</strong>
                    <span>
                      Studio Sankara<br />
                      Hermitage Apartments, Sector 28<br />
                      Gurgaon 122002, Haryana, India
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <div>
                    <strong className="text-cream-100 block font-serif">Direct Email:</strong>
                    <a href="mailto:raje.maharaje.official@gmail.com" className="text-gold-300 hover:underline">
                      raje.maharaje.official@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <div>
                    <strong className="text-cream-100 block font-serif">Telephone / Hotline:</strong>
                    <span>+91 9910807795 / +91 9820427795</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <div>
                    <strong className="text-cream-100 block font-serif">Concierge Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 7:30 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-4 border-t border-gold-900/50">
                <a
                  href="https://wa.me/919910807795?text=Hello%20Raje%20Maharaje%20Concierge,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-cream-300 shadow-xl">
            <h3 className="font-display text-2xl font-bold uppercase text-obsidian-950 mb-2">
              Send An Atelier Dispatch
            </h3>
            <p className="text-xs text-obsidian-500 font-serif mb-6">
              Complete the form below and an atelier stylist will connect with you promptly.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <h4 className="font-sans font-bold text-lg text-emerald-950 uppercase">
                  Message Dispatched to Concierge
                </h4>
                <p className="text-xs text-emerald-800 font-sans">
                  Thank you, <strong>{contactForm.firstName}</strong>. Your message has been received by our Gurgaon Atelier. We will reply to {contactForm.email} shortly.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setContactForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
                    }}
                    className="px-5 py-2 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.firstName}
                      onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.lastName}
                      onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                    Message / Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500 font-serif"
                    placeholder="How may our concierge assist your wardrobe or gifting needs?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-obsidian-950 text-gold-300 font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-obsidian-950 transition-all shadow-xl"
                >
                  Send Inquiry to Atelier
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold uppercase text-obsidian-950 text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-cream-300 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-sm text-obsidian-900"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-gold-700" /> : <ChevronDown className="w-4 h-4 text-obsidian-400" />}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-0 text-xs text-obsidian-600 font-sans leading-relaxed border-t border-cream-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

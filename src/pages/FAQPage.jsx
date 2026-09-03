import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQPage = () => {
  const { navigateTo } = useShop();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is the difference between the RAJE and MAHARAJE collections?',
      a: 'The RAJE collection represents everyday modern sartorial elegance, crafted in breathable natural Linen, versatile Poly-Satin, and embroidered Hakoba cutwork, arriving in our chic signature pink and blue sliding boxes. The MAHARAJE collection is our master-artisan line featuring 400-year Banarasi Tanchoi brocades with metallic zari, Awadhi Chikankari hand-embroidery on pure Tussar silk, Bhagalpur Raw Silk, and Ajrakh block prints, housed in our small keepsake boxes and grand presentation caskets sealed with molten wax.'
    },
    {
      q: 'How fast is express delivery?',
      a: 'We offer express 4-hour delivery on select apparel, dining, and gifting edits across Delhi NCR, Mumbai, and Bangalore. Standard domestic deliveries arrive within 2 to 4 business days.'
    },
    {
      q: 'What is the return and exchange policy?',
      a: 'We have a hassle-free 15-day return and exchange policy from the date of order delivery. Products must be unused, unwashed, with original tags and packaging intact. You can initiate a return directly from our Shipping & Returns page.'
    },
    {
      q: 'Do you offer international worldwide shipping?',
      a: 'Yes, we ship worldwide to over 190 countries via DHL and FedEx International Express. Delivery timelines range between 4 to 7 business days depending on destination customs clearance.'
    },
    {
      q: 'Is Cash on Delivery (COD) available?',
      a: 'Yes, Cash on Delivery is available across all serviceable Indian pin codes for orders up to ₹15,000.'
    },
    {
      q: 'Can I customize pocket squares and boxes for weddings and corporate gifts?',
      a: 'Yes, absolutely! We specialize in bespoke wedding favors, groomsmen suites, and corporate client gifting. You can customize fabrics, colors, box packaging, and include personalized calligraphy notes or wax-sealed monogram seals. Connect with our Gifting Concierge via WhatsApp (+91 9910807795) or our Concierge page.'
    },
    {
      q: 'How should I care for handcrafted silks and linen apparel?',
      a: 'For Tanchoi Brocades, Chikankari silks, and Bemberg evening wear, dry clean only to preserve delicate zari and embroidery. Pure cottons and linens can be gently hand-washed in cold water and ironed inside out.'
    },
    {
      q: 'Where are your experiential stores located?',
      a: 'Our flagship boutiques and scent sanctuaries are located in Delhi (Khan Market, Meherchand, Ambience Mall), Mumbai (Kala Ghoda, Bandra), Bangalore (Indiranagar, Lavelle Road), Chennai, Hyderabad, Goa, and Jaipur.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-medium">FAQ</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-2">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif uppercase tracking-[0.16em] font-light text-neutral-900 mb-4">
            HELP & CONCIERGE FAQ
          </h1>
          <div className="w-12 h-px bg-[#c5a059] mx-auto mb-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200/80 bg-white transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold text-neutral-900 pr-4">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed border-t border-neutral-100 bg-[#FAF9F5]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-[#FAF9F5] border border-neutral-200 text-center space-y-3">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-900">
            Have a specific requirement?
          </p>
          <p className="text-xs text-neutral-500 font-light">
            Contact Prita Dheer and the Studio Sankara concierge directly on +91 9910807795 or raje.maharaje.official@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

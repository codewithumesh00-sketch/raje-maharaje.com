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
      q: 'Can I customize pocket squares and boxes for weddings and corporate gifts?',
      a: 'Yes, absolutely! We specialize in bespoke wedding favors, groomsmen suites, and corporate client gifting. You can customize the pocket square fabrics, colors, box packaging, and include personalized calligraphy notes or wax-sealed monogram seals. Connect with us on WhatsApp (+91 9910807795) or via our Contact Us page.'
    },
    {
      q: 'How should I care for my handcrafted silk and linen pocket squares?',
      a: 'For Tanchoi Brocades, Chikankari on Tussar, and Raw Silk creations, dry clean only to preserve the hand-embroidery, natural slubs, and delicate zari work. For pure Linen and Poly-Satin pocket squares, gentle hand wash in cold water or mild steam iron on the reverse side is recommended.'
    },
    {
      q: 'What are the dimensions of Raje Maharaje pocket squares?',
      a: 'Our standard pocket squares measure 33 cm x 33 cm (13 x 13 inches) or 32 cm x 32 cm for linen, offering generous fabric for diverse folds—including the classic Presidential fold, the Crown fold, the Puff, and the Winged fold.'
    },
    {
      q: 'Where is Raje Maharaje located?',
      a: 'Raje Maharaje is born from Studio Sankara, located at Hermitage Apartments, Sector 28, Gurgaon 122002, Haryana, India. We ship pan-India with complimentary express delivery on orders above ₹5,000.'
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

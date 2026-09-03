import React from 'react';
import { useShop } from '../context/ShopContext';

const StorePolicyPage = () => {
  const { navigateTo } = useShop();

  return (
    <div className="bg-white min-h-screen text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-medium">Store Policy</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9c783e] font-semibold block mb-2">
            Studio Sankara
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif uppercase tracking-[0.16em] font-light text-neutral-900 mb-4">
            STORE POLICY
          </h1>
          <div className="w-12 h-px bg-[#c5a059] mx-auto" />
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-serif uppercase tracking-wider text-neutral-900 font-medium">
            1. Authenticity & Handcrafting
          </h2>
          <p>
            At Raje Maharaje (Studio Sankara), each pocket square, stole, and neckerchief is handcrafted using authentic Indian textiles, including Varanasi Tanchoi brocades, Awadhi shadow chikankari on tussar silk, Bhagalpur raw silk, and natural-dyed Kutch Ajrakh block prints. Because each creation is made by hand, slight variations in weave, embroidery tension, and natural dye tones are hallmarks of genuine artisan craftsmanship.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-serif uppercase tracking-wider text-neutral-900 font-medium">
            2. Privacy & Data Security
          </h2>
          <p>
            We respect your privacy. All customer contact details, addresses, and transaction information provided for orders or gifting consultations remain strictly confidential and will never be sold or shared with external parties.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-serif uppercase tracking-wider text-neutral-900 font-medium">
            3. Wedding & Corporate Orders
          </h2>
          <p>
            For bespoke bulk orders, wedding favors, and corporate dignitary gifting suites, custom packaging, colors, and monograms require prior confirmation. Our concierge works directly with clients to ensure flawless delivery ahead of event dates.
          </p>
        </div>

        <div className="border-t border-neutral-200 pt-6 text-neutral-500">
          <p>Official Address: Studio Sankara, Hermitage Apartments, Sector 28 Gurgaon 122002, India.</p>
          <p>Email: raje.maharaje.official@gmail.com | Concierge: +91 9910807795</p>
        </div>
      </div>
    </div>
  );
};

export default StorePolicyPage;

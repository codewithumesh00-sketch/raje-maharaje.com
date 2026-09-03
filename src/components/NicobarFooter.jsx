import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import BrandLogo from './BrandLogo';
import { ArrowRight } from 'lucide-react';

const NicobarFooter = () => {
  const { navigateTo, showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Thank you for joining the Raje Maharaje list.', '✨');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#fbfbfa] text-neutral-900 border-t border-neutral-200/80 text-xs font-sans select-none">
      {/* 1. Newsletter: "Get on the list" (Exact Nicobar style) */}
      <div className="border-b border-neutral-200/80 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-serif uppercase tracking-[0.16em] font-medium text-[#22242A]">
            GET ON THE LIST
          </h3>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-500 font-light">
            Be the first to hear about new craft editions, limited weaves, and seasonal gifting previews.
          </p>

          <form onSubmit={handleSubscribe} className="pt-2 max-w-md mx-auto flex items-center border-b border-neutral-800 pb-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 bg-transparent py-2 text-xs sm:text-sm font-sans placeholder-neutral-400 text-neutral-900 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Submit"
              className="p-2 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* 2. Main Footer Links Columns */}
      <div className="max-w-[1366px] mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Intro */}
          <div className="col-span-2 space-y-4">
            <button onClick={() => navigateTo('home')} className="text-left focus:outline-none">
              <BrandLogo className="h-9 sm:h-10" />
            </button>
            <p className="text-xs font-sans text-neutral-500 font-light leading-relaxed max-w-sm">
              Luxury gifts for the modern man &mdash; Raje Maharaje creates handcrafted accessories that celebrate Indian crafts, colors, and contemporary style.
            </p>
            <div className="text-[11px] text-neutral-400 font-light space-y-1">
              <p>Studio Sankara, Hermitage Apartments, Sector 28 Gurgaon 122002</p>
              <p>Email: raje.maharaje.official@gmail.com &bull; Tel: +91 9910807795</p>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-neutral-900">
              MENSWEAR SHOP
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light">
              <li>
                <button onClick={() => navigateTo('men')} className="hover:text-black transition-colors">
                  Pocket Squares
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('men')} className="hover:text-black transition-colors">
                  Stoles & Neckerchiefs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('raje')} className="hover:text-black transition-colors">
                  Raje Line (₹500 — ₹700)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('maharaje')} className="hover:text-black transition-colors">
                  Maharaje Line (₹2.6K — ₹3.6K)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('gifting')} className="hover:text-black transition-colors">
                  Gifting & Wedding Favors
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black transition-colors">
                  All Men's Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-neutral-900">
              ABOUT
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-black transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('raje')} className="hover:text-black transition-colors">
                  RAJE Line
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('maharaje')} className="hover:text-black transition-colors">
                  MAHARAJE Line
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('corporate')} className="hover:text-black transition-colors">
                  Wedding &amp; Corporate
                </button>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-neutral-900">
              HELP
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light">
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-black transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-black transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('store-policy')} className="hover:text-black transition-colors">
                  Store Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shipping-returns')} className="hover:text-black transition-colors">
                  Shipping &amp; Returns
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Credits & Copyright */}
        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-light">
          <p>
            &copy; 2025 Raje Maharaje &bull; Studio Sankara. All rights reserved.
          </p>
          <p>
            Developed by <a href="https://www.thedailysocial.in/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 underline">The Daily Social</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NicobarFooter;

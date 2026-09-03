import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import BrandLogo from './BrandLogo';
import { RotateCcw, Truck, Globe, Banknote, MessageCircle, ArrowRight, Radio } from 'lucide-react';

const NicobarFooter = () => {
  const { navigateTo, showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Welcome to the list. Use code NICOFIRST / RAJEFIRST for 10% off your first order.', '✨');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#FAF8F5] text-[#241A16] border-t border-[#E8E1D3] text-xs font-sans select-none relative">
      {/* 1. Newsletter Box (Get on the list) */}
      <div className="border-b border-[#E8E1D3] py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6]">
        <div className="max-w-xl mx-auto text-center space-y-3">
          <h3 className="text-2xl sm:text-3xl font-serif uppercase tracking-[0.16em] font-medium text-[#241A16]">
            GET ON THE LIST
          </h3>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#7E746F] font-light max-w-lg mx-auto">
            Perks include 10% off your first online order. Be the first to know about new collections, store launches, sales, and much more!
          </p>

          <form onSubmit={handleSubscribe} className="pt-3 max-w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address here"
              className="flex-1 bg-white border border-[#E8E1D3] px-4 py-3 text-xs sm:text-sm font-sans placeholder-[#A89F98] text-[#241A16] focus:outline-none focus:border-[#241A16] rounded-xs"
            />
            <button
              type="submit"
              className="bg-[#241A16] hover:bg-[#8B1E2D] text-white text-xs uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-xs shadow-sm transition-all"
            >
              SIGN ME UP
            </button>
          </form>
        </div>
      </div>

      {/* 2. Brand Guarantee Strip: "We're only a mindful brand if we have..." */}
      <div className="border-b border-[#E8E1D3] py-10 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-[1366px] mx-auto">
          <p className="text-center text-[11px] uppercase tracking-[0.22em] font-medium text-[#7E746F] mb-8">
            We're only a mindful brand if we have
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center sm:text-left">
            {/* Feature 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#8B1E2D] flex-shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-serif uppercase tracking-[0.14em] font-semibold text-[#241A16]">
                  Easy returns
                </h4>
                <p className="text-[11px] text-[#7E746F] font-light mt-0.5">
                  Return within 15 days of order delivery. See T&amp;Cs
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#8B1E2D] flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-serif uppercase tracking-[0.14em] font-semibold text-[#241A16]">
                  Free shipping
                </h4>
                <p className="text-[11px] text-[#7E746F] font-light mt-0.5">
                  Free shipping on orders above ₹1,000
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#8B1E2D] flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-serif uppercase tracking-[0.14em] font-semibold text-[#241A16]">
                  We ship worldwide
                </h4>
                <p className="text-[11px] text-[#7E746F] font-light mt-0.5">
                  Express international delivery to 190+ countries
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#8B1E2D] flex-shrink-0">
                <Banknote className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-serif uppercase tracking-[0.14em] font-semibold text-[#241A16]">
                  Cash on delivery
                </h4>
                <p className="text-[11px] text-[#7E746F] font-light mt-0.5">
                  COD available across all Indian serviceable pin codes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Footer Links Columns (Screenshot 12 exact 4 columns) */}
      <div className="max-w-[1366px] mx-auto py-14 sm:py-18 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Store Near You */}
          <div className="space-y-4">
            <h4 className="text-xs font-serif uppercase tracking-[0.18em] font-semibold text-[#241A16]">
              FIND A STORE NEAR YOU
            </h4>
            <p className="text-xs text-[#7E746F] font-light leading-relaxed">
              Step into our experiential stores in Delhi, Mumbai, Bangalore, Jaipur &amp; Gurgaon atelier.
            </p>
            <button
              onClick={() => navigateTo('stores')}
              className="inline-block text-xs uppercase tracking-[0.18em] font-semibold text-[#8B1E2D] hover:underline underline-offset-4"
            >
              LOCATE ATELIER &rarr;
            </button>
            <div className="pt-2">
              <BrandLogo className="h-8 opacity-90" theme="dark" />
            </div>
          </div>

          {/* Column 2: About Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-[0.18em] font-semibold text-[#241A16]">
              ABOUT US
            </h4>
            <ul className="space-y-2.5 text-xs text-[#7E746F] font-light">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#241A16] transition-colors">
                  Our story
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('press')} className="hover:text-[#241A16] transition-colors">
                  In the press
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('corporate')} className="hover:text-[#241A16] transition-colors">
                  Work with us &bull; Collaborations
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#241A16] transition-colors">
                  Contact us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-[0.18em] font-semibold text-[#241A16]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#7E746F] font-light">
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#241A16] transition-colors">
                  Track your order
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shipping-returns')} className="hover:text-[#241A16] transition-colors">
                  Initiate a return
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shipping-returns')} className="hover:text-[#241A16] transition-colors">
                  Shipping &amp; returns
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-[#241A16] transition-colors">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('store-policy')} className="hover:text-[#241A16] transition-colors">
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('store-policy')} className="hover:text-[#241A16] transition-colors">
                  Privacy policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Nicobar Radio & Customer Care */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-serif uppercase tracking-[0.18em] font-semibold text-[#241A16]">
              <Radio className="w-4 h-4 text-[#8B1E2D]" />
              <span>NICORADIO / ROYAL SANKARA</span>
            </div>
            <p className="text-[11px] text-[#7E746F] font-light">
              A specially curated musical stream for mindful living.
            </p>

            <div className="pt-2 border-t border-[#E8E1D3] space-y-1.5 text-xs text-[#7E746F]">
              <p>
                <a href="mailto:care@nicobar.com" className="hover:text-[#241A16] transition-colors">
                  care@nicobar.com
                </a>
              </p>
              <p>
                <a href="mailto:corporate@nicobar.com" className="hover:text-[#241A16] transition-colors">
                  corporate@nicobar.com
                </a>
              </p>
              <p>
                <a href="mailto:pr@nicobar.com" className="hover:text-[#241A16] transition-colors">
                  pr@nicobar.com
                </a>
              </p>
              <p className="text-[#241A16] font-medium pt-1">
                +91 8588000150
              </p>
              <p className="text-[10px] text-[#A89F98]">
                Mon-Sat 9:30 AM TO 5:30 PM (IST)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Direct Chat Trigger */}
        <div className="border-t border-[#E8E1D3] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E746F]">
          <p>
            Nicobar Design Pvt. Ltd. &amp; Raje Maharaje Luxury. All Rights Reserved &copy; 2026
          </p>

          <div className="flex items-center space-x-6">
            <span>India &bull; Global</span>
            <button
              onClick={() => {
                const win = window.open('https://wa.me/919910807795', '_blank');
                if (win) win.focus();
              }}
              className="inline-flex items-center space-x-1.5 bg-[#241A16] text-white px-3.5 py-1.5 rounded-full hover:bg-[#8B1E2D] transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="text-[10px] font-medium uppercase tracking-wider">CHAT</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NicobarFooter;

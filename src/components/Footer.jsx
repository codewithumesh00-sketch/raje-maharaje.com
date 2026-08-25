import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { RMLogo } from './CrownLogo';
import { MessageCircle, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const { navigateTo, showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Welcome to R&M Royal Circle! Privilege Code: ROYAL10 applied.', '👑');
    setEmail('');
  };

  return (
    <footer className="bg-neutral-100 text-neutral-900 border-t border-neutral-200 text-xs font-sans">
      {/* Top Newsletter / Membership Promo Banner (H&M style) */}
      <div className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              R&amp;M Royal Privileges
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Enjoy 10% Off Your First Order
            </h3>
            <p className="text-xs text-neutral-300">
              Sign up for our atelier dispatch to receive exclusive previews of limited-run master weaves.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full max-w-md flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 bg-neutral-800 border border-neutral-700 rounded-full px-4 py-3 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-colors shadow-sm flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main 4 Columns Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase tracking-wider text-sm text-black">
              Shop Collections
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <button onClick={() => navigateTo('categories')} className="hover:text-black font-semibold text-black transition-colors">
                  Atelier Categories & Crafts ✨
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black transition-colors">
                  All Pocket Squares
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black transition-colors">
                  The Raje Line
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black transition-colors">
                  The Maharaje Line
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black transition-colors">
                  Tanchoi Zari Brocades
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black transition-colors">
                  Chikankari Hand-Embroidery
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('builder')} className="hover:text-black font-bold text-black transition-colors">
                  Bespoke Box Builder →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase tracking-wider text-sm text-black">
              Corporate &amp; Weddings
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <button onClick={() => navigateTo('corporate')} className="hover:text-black transition-colors">
                  Wedding Favours &amp; Groomsmen
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('corporate')} className="hover:text-black transition-colors">
                  Corporate Bespoke Gifting
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-black transition-colors">
                  Prita Dheer &amp; Studio Sankara
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-black transition-colors">
                  Artisan Clusters &amp; Heritage
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase tracking-wider text-sm text-black">
              Help &amp; Concierge
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-black transition-colors">
                  Contact Studio
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-black transition-colors">
                  Delivery &amp; International Shipping
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-black transition-colors">
                  Care &amp; Folding Masterclass
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-black transition-colors">
                  FAQs &amp; Guarantee
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase tracking-wider text-sm text-black">
              Studio Sankara Atelier
            </h4>
            <p className="text-neutral-600 leading-relaxed">
              Hermitage Apartments, Sector 28<br />
              Gurgaon 122002, India
            </p>
            <p className="text-neutral-600">
              Mail: <a href="mailto:raje.maharaje.official@gmail.com" className="text-black font-medium hover:underline">raje.maharaje.official@gmail.com</a>
            </p>
            <p className="text-neutral-600">
              Phone: +91 9910807795 / 9820427795
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/919910807795?text=Hello%20Raje%20Maharaje%20Concierge,%20I%20would%20like%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black text-white hover:bg-neutral-800 text-[11px] font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar (H&M style) */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div className="flex items-center space-x-3">
            <div onClick={() => navigateTo('home')}>
              <RMLogo theme="black" />
            </div>
            <span>© {new Date().getFullYear()} R&amp;M — RAJE MAHARAJE. Studio Sankara. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-4 font-medium text-neutral-600">
            <span>Banarasi Brocades</span>
            <span>•</span>
            <span>Awadhi Chikankari</span>
            <span>•</span>
            <span>Kutch Ajrakh</span>
            <span>•</span>
            <span>Handcrafted in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

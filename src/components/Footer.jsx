import React from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { navigateTo } = useShop();

  return (
    <footer className="bg-[#FAF9F5] text-neutral-900 border-t border-neutral-200/80 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-lg uppercase tracking-[0.24em] font-medium text-neutral-900 block">
              R A J E &bull; M A H A R A J E
            </span>
            <p className="text-xs font-sans text-neutral-600 font-light leading-relaxed max-w-sm">
              Luxury gifts for the modern man &mdash; Raje Maharaje creates handcrafted accessories that celebrate Indian craft, colors, and contemporary style.
            </p>
            <div className="pt-2 text-xs font-sans text-neutral-500 font-light space-y-1.5">
              <p className="font-medium text-neutral-800">Studio Sankara</p>
              <p>Hermitage Apartments, Sector 28 Gurgaon 122002, India</p>
              <p>Mail: <a href="mailto:raje.maharaje.official@gmail.com" className="hover:underline">raje.maharaje.official@gmail.com</a></p>
              <p>Phone: <a href="tel:9910807795" className="hover:underline">9910807795</a> / <a href="tel:9820427795" className="hover:underline">9820427795</a></p>
            </div>
          </div>

          {/* Col 2: RAJE Links (Exact from rajemaharaje.com) */}
          <div className="space-y-3">
            <h4 className="font-serif uppercase tracking-[0.16em] text-xs font-semibold text-neutral-900">
              RAJE
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-600 font-light">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black">
                  Poly Satin
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black">
                  Linen
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black">
                  Hakoba
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black">
                  Brocade
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('raje')} className="font-medium text-black hover:underline">
                  Raje Collection &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: MAHARAJE Links (Exact from rajemaharaje.com) */}
          <div className="space-y-3">
            <h4 className="font-serif uppercase tracking-[0.16em] text-xs font-semibold text-neutral-900">
              MAHARAJE
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-600 font-light">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black">
                  Satin Silk
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black">
                  Raw Silk
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black">
                  Ikkat Silk
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-black">
                  Ajrakh
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('maharaje')} className="font-medium text-black hover:underline">
                  Maharaje Collection &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links (Exact from rajemaharaje.com) */}
          <div className="space-y-3">
            <h4 className="font-serif uppercase tracking-[0.16em] text-xs font-semibold text-neutral-900">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-600 font-light">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-black">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-black">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-black">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('store-policy')} className="hover:text-black">
                  Store Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shipping-returns')} className="hover:text-black">
                  Shipping & Returns
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit & Copyright */}
        <div className="border-t border-neutral-200/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 font-light text-[11px]">
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

export default Footer;

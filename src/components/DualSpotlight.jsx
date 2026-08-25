import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

const DualSpotlight = () => {
  const { navigateTo } = useShop();

  return (
    <section className="py-16 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-400 font-sans">
            The Atelier Edits
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black mt-1">
            Raje vs Maharaje
          </h2>
          <p className="text-sm text-neutral-600 font-sans mt-2">
            Two distinctive collections designed for modern tailoring and regal ceremonial elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* RAJE LINE */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow border border-neutral-200 flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              <img
                src="/images/royal_bandhgala_pink_4k.png"
                alt="The Raje Line"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-xs text-black text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xs">
                  The Daily Atelier
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-500">From Rs.3,150.00</span>
                <h3 className="font-sans text-2xl font-extrabold uppercase tracking-tight text-black mt-1">
                  The Raje Line
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-2 leading-relaxed">
                  Chic, vibrant daily pocket squares and neckerchiefs designed for effortless individuality. Presented in our signature pink &amp; sapphire slide gift boxes.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-500">Pure Linens &amp; Raw Silks</span>
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-6 py-2.5 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
                >
                  Shop Raje
                </button>
              </div>
            </div>
          </div>

          {/* MAHARAJE LINE */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow border border-neutral-200 flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              <img
                src="/images/craft_fan_squares_4k.png"
                alt="The Maharaje Line"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xs">
                  The Heirloom Atelier
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-500">From Rs.3,675.00</span>
                <h3 className="font-sans text-2xl font-extrabold uppercase tracking-tight text-black mt-1">
                  The Maharaje Line
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-2 leading-relaxed">
                  Ceremonial Tanchoi brocades with real zari and Awadhi Chikankari needlework on pure mulberry silk. Encased in rigid magnetic chests with custom wax seals.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-500">Banarasi Zari & Chikankari</span>
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-6 py-2.5 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
                >
                  Shop Maharaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualSpotlight;

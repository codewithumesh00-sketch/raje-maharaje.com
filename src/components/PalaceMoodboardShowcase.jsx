import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';

const PalaceMoodboardShowcase = () => {
  const { navigateTo } = useShop();

  return (
    <section className="w-full bg-[#FAF8F5] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E8E1D3] relative overflow-hidden select-none">
      {/* Decorative subtle checker ribbon accent at top */}
      <div className="absolute top-0 inset-x-0 h-1.5 checker-palladio opacity-70" />

      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FDF2F4] border border-[#C23867]/30 text-[#981A42] text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-semibold mb-3">
            <Sparkles className="w-3 h-3 text-[#C23867]" />
            <span>Curated Sartorial Lineage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif uppercase tracking-[0.16em] text-[#241A16] font-medium leading-tight">
            THE DANDY & THE SOVEREIGN
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-sans tracking-wide text-[#7E746F] font-light leading-relaxed max-w-lg mx-auto">
            From relaxed terracotta hopsack blazers and cocktail-hour linens, to master Banarasi Tanchoi zari weaves fit for royal durbars.
          </p>
        </div>

        {/* 3-Column Palace Triptych */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* 1. Left Card: The Contemporary Dandy (Raje) */}
          <div
            onClick={() => navigateTo('raje')}
            className="group cursor-pointer bg-[#FFFDF9] rounded-2xl border border-[#E8E1D3] hover:border-[#DE6B48] p-5 sm:p-6 transition-all duration-500 hover:shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden mb-5 bg-[#FAF0EB]">
              <img
                src="/images/rajemaharaje_card_raje_4k.jpg"
                alt="The Contemporary Dandy - Raje Collection"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src = '/images/rajemaharaje_hero_gentleman_4k.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3 bg-[#DE6B48] text-white text-[10px] uppercase font-semibold tracking-[0.2em] px-2.5 py-1 rounded-sm shadow-sm">
                RAJE &bull; &infin;
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FFDF78] font-medium block">The Modern Dandy</span>
                <p className="text-sm sm:text-base font-serif font-medium tracking-wide">Bespoke Linen & Everyday Silk</p>
              </div>
            </div>

            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-serif tracking-wide uppercase font-semibold text-[#241A16] group-hover:text-[#DE6B48] transition-colors">
                  Casual Dandyism & Cocktail Hour
                </h3>
                <p className="text-xs font-sans text-[#7E746F] leading-relaxed mt-1.5 font-light">
                  Tailored terracotta linen, crisp Hakoba eyelet cuts, and lightweight poly-satin squares crafted for effortless daytime gatherings and summer celebrations.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E1D3] flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#DE6B48]">₹500 &ndash; ₹1,450</span>
                <span className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-[0.16em] font-medium text-[#241A16] group-hover:text-[#DE6B48] transition-colors">
                  <span>Explore Raje</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          {/* 2. Center Card: Jaipur Palace & Bar Palladio Heart */}
          <div className="relative rounded-2xl bg-[#C23867] text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl overflow-hidden order-first lg:order-none">
            {/* White Scalloped Arch & Filigree Silhouette */}
            <div className="absolute inset-2 border-2 border-white/30 rounded-t-[140px] rounded-b-xl pointer-events-none" />
            
            {/* Checkerboard Floor Accent at the bottom */}
            <div className="absolute bottom-0 inset-x-0 h-10 checker-palladio-crimson opacity-40" />

            <div className="relative z-10 text-center pt-6 sm:pt-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-xs border border-white/40 flex items-center justify-center p-2 mb-4 shadow-lg">
                <img
                  src="/images/rm_logo_4k.png"
                  alt="Royal Crown"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>

              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.3em] font-semibold text-[#FFDF78] block mb-2">
                Jaipur Atelier &bull; Bar Palladio Spirit
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif uppercase tracking-[0.18em] font-medium text-white mb-4">
                HERITAGE MEETS MODERN DANDY
              </h3>
              <p className="text-xs sm:text-sm font-sans tracking-wide text-white/90 font-light leading-relaxed max-w-xs mx-auto mb-6">
                Inspired by the hand-painted strawberry halls, grand arched jharokhas, and harlequin marble floors of royal Rajasthan.
              </p>
            </div>

            {/* Visual moodboard collage slice preview */}
            <div className="relative z-10 my-4 rounded-xl overflow-hidden border border-white/30 shadow-inner bg-black/20">
              <img
                src="/images/client_moodboard_jaipur_royal.jpg"
                alt="Client Moodboard - Jaipur Royal & Dandy"
                className="w-full h-36 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-white/90">
                  The Official Moodboard Lineage
                </span>
              </div>
            </div>

            <div className="relative z-10 text-center pb-4 pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="w-full py-3 px-4 rounded-lg bg-white text-[#981A42] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FDF8EC] transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
              >
                <span>Read Atelier Story</span>
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Right Card: The Classical Sovereign (Maharaje) */}
          <div
            onClick={() => navigateTo('maharaje')}
            className="group cursor-pointer bg-[#FFFDF9] rounded-2xl border border-[#E8E1D3] hover:border-[#C99E54] p-5 sm:p-6 transition-all duration-500 hover:shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden mb-5 bg-[#FDF8EC]">
              <img
                src="/images/rajemaharaje_card_maharaje_4k.jpg"
                alt="The Classical Sovereign - Maharaje Collection"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src = '/images/craft_fan_squares_4k.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3 bg-[#C99E54] text-white text-[10px] uppercase font-semibold tracking-[0.2em] px-2.5 py-1 rounded-sm shadow-sm">
                MAHARAJE &bull; 👑
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FFDF78] font-medium block">The Royal Sovereign</span>
                <p className="text-sm sm:text-base font-serif font-medium tracking-wide">Pure Zari, Pearls & Wax Seals</p>
              </div>
            </div>

            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-serif tracking-wide uppercase font-semibold text-[#241A16] group-hover:text-[#C99E54] transition-colors">
                  Monumental Celebrations & Heirlooms
                </h3>
                <p className="text-xs font-sans text-[#7E746F] leading-relaxed mt-1.5 font-light">
                  400-year Varanasi Tanchoi mulberry silk, delicate Lucknow shadow Chikankari on pure Tussar, and bespoke keepsake chests sealed with molten wax.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E1D3] flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#C99E54]">₹2,625 &ndash; ₹3,675+</span>
                <span className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-[0.16em] font-medium text-[#241A16] group-hover:text-[#C99E54] transition-colors">
                  <span>Explore Maharaje</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalaceMoodboardShowcase;

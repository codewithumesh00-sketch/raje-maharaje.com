import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

const NicobarStylingSeries = () => {
  const { navigateTo } = useShop();

  return (
    <section className="w-full bg-[#1C1614] text-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 select-none relative overflow-hidden border-t border-neutral-800">
      {/* Background Subtle Luxury Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <img
          src="/images/artisan_embroidery_craft_4k.jpg"
          alt="Artisanal Embroidery"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        {/* Left Visual: Moodboard & Atelier Craftsmanship */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xs border border-[#C99E54]/40 shadow-2xl group">
            <img
              src="/images/client_moodboard_jaipur_royal.jpg"
              alt="The Styling Series - Royal Atelier Jaipur Moodboard"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Stamp Badge */}
            <div className="absolute top-4 left-4 bg-[#8B1E2D] text-[#FFDF78] text-[9px] uppercase tracking-[0.24em] font-serif font-bold px-3 py-1.5 rounded-xs border border-[#FFDF78]/40 shadow-lg">
              THE STYLING SERIES &bull; ESTD 2024
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#FFDF78]">
                Bespoke Atelier Consultation
              </span>
              <p className="text-xs sm:text-sm font-serif text-white/90 font-light mt-0.5">
                In collaboration with Studio Sankara craftspeople & generational Banarasi weavers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: The Concierge Invitation */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center space-y-6 lg:pl-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.28em] font-semibold text-[#FFDF78] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE GIFTING & SARTORIAL CONCIERGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.16em] font-light text-white leading-tight">
              THE STYLING SERIES
            </h2>
            <p className="text-xs font-serif uppercase tracking-[0.22em] text-[#DEBA78] mt-1">
              IN COLLABORATION WITH ATELIER DESIGNERS
            </p>
          </div>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-300 font-light leading-relaxed">
            Planning a grand wedding celebration or dressing the groom's inner circle? Our personal stylists work directly with you to curate harmonious pocket squares, bespoke colorways matching wedding trousseaus, and custom molten-wax seals.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full pt-2">
            <div className="border border-white/10 p-3.5 rounded-xs bg-white/5 backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-[#FFDF78] mb-2" />
              <h4 className="text-xs font-serif uppercase tracking-wider text-white font-medium">Bespoke Curation</h4>
              <p className="text-[11px] font-sans text-neutral-400 mt-1">Curated groomsmen palettes & color-matching service.</p>
            </div>
            <div className="border border-white/10 p-3.5 rounded-xs bg-white/5 backdrop-blur-xs">
              <MessageSquare className="w-4 h-4 text-[#FFDF78] mb-2" />
              <h4 className="text-xs font-serif uppercase tracking-wider text-white font-medium">Direct WhatsApp</h4>
              <p className="text-[11px] font-sans text-neutral-400 mt-1">4-hour response concierge for weddings and corporate orders.</p>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigateTo('corporate')}
              className="bg-[#8B1E2D] hover:bg-[#a32435] text-white text-xs uppercase tracking-[0.22em] font-medium px-6 py-3 rounded-xs shadow-lg transition-all flex items-center space-x-2"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="border border-white/40 hover:border-white text-white text-xs uppercase tracking-[0.22em] font-medium px-6 py-3 rounded-xs transition-all"
            >
              BOOK ATELIER APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicobarStylingSeries;

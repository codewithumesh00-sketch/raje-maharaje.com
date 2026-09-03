import React from 'react';
import { useShop } from '../context/ShopContext';
import { MapPin, ArrowRight } from 'lucide-react';

const NicobarStoreCta = () => {
  const { navigateTo } = useShop();

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 select-none border-t border-[#E8E1D3]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Text Column */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center space-y-6 lg:pr-6">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.26em] font-semibold text-[#8B1E2D]">
            The Sensory Boutique Experience
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.16em] font-light text-[#241A16] leading-tight">
            A PLACE YOU CAN<br />REMEMBER BY SCENT
          </h2>

          <div className="space-y-4 text-xs sm:text-sm font-sans tracking-wide text-[#7E746F] font-light leading-relaxed">
            <p>
              Walk into our store and you'll find Neroli and warm amber in the air. It has become a familiar, joyful part of stepping into Nicobar and our Raje Maharaje atelier.
            </p>
            <p>
              There's a personal reason we chose Neroli, as it brings a certain warmth and happiness that's hard to put into words.
            </p>
            <blockquote className="border-l-2 border-[#8B1E2D] pl-4 italic text-[#241A16] font-serif text-sm sm:text-base py-1 my-3">
              &ldquo;It's our favourite scent and it reminds us of royal Indian courtyards and being close to the ocean. It's nostalgic, regal, and fresh.&rdquo;
            </blockquote>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#241A16] not-italic">
              SIMRAN LAL, CO-FOUNDER & PRITA DHEER, CREATIVE DIRECTOR
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-[#241A16] hover:bg-[#8B1E2D] text-white text-xs uppercase tracking-[0.22em] font-medium px-6 py-3 rounded-xs shadow-md transition-all flex items-center space-x-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FFDF78]" />
              <span>FIND YOUR NEAREST STORE</span>
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#241A16] hover:text-[#8B1E2D] border-b border-[#241A16] pb-1 hover:border-[#8B1E2D] transition-all"
            >
              EXPLORE OUR ATELIER &rarr;
            </button>
          </div>
        </div>

        {/* Media Column: Scent Table & Founder Imagery */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden rounded-xs bg-[#E8E1D3] shadow-xl border border-[#E8E1D3] group">
            <img
              src="/images/prita_dheer_owner_4k.png"
              alt="A Place You Can Remember By Scent - Nicobar & Studio Sankara Atelier"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Scent Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.26em] text-[#FFDF78] block mb-1">
                Signature Fragrance Notes
              </span>
              <p className="text-sm sm:text-base font-serif font-light text-white">
                Neroli Blossom &bull; Mysore Sandalwood &bull; Royal Amber
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicobarStoreCta;

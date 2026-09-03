import React from 'react';
import { useShop } from '../context/ShopContext';

const NicobarStoreCta = () => {
  const { navigateTo } = useShop();

  return (
    <section className="w-full bg-[#fbfbfa] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 select-none border-t border-neutral-200/60">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Text Side */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center space-y-5 lg:pr-8">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-semibold text-neutral-500">
            Studio Sankara &bull; Atelier
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.16em] font-light text-[#22242A] leading-snug">
            WALK IN AND WANDER A LITTLE
          </h2>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-600 font-light leading-relaxed">
            The doors open and some things stay with you. A scent that lingers long after you've left. A shaft of sunlight catching a shelf just right. A feeling you can't quite put your finger on.
          </p>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-500 font-light">
            Visit our design atelier at Hermitage Apartments, Sector 28, Gurgaon 122002 to experience our fabrics, hand-embroidery, and bespoke presentation boxes in person.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigateTo('contact')}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-neutral-900 hover:text-neutral-600 underline underline-offset-4 transition-colors"
            >
              VISIT OUR ATELIER
            </button>
          </div>
        </div>

        {/* Media Side */}
        <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-neutral-200 shadow-sm">
          <img
            src="/images/rajemaharaje_hero_unboxing_4k.jpg"
            alt="Studio Sankara Atelier"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default NicobarStoreCta;

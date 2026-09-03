import React from 'react';
import { useShop } from '../context/ShopContext';

const NicobarImageWithText = () => {
  const { navigateTo } = useShop();

  return (
    <section className="w-full bg-[#F4EFE6] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 select-none border-t border-[#E8E1D3]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Editorial Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E8E1D3] rounded-2xl border border-[#E8E1D3] shadow-md">
          <img
            src="/images/sartorial_essentials_product_4k.jpg"
            alt="Handcrafted Raje Maharaje Silk Pocket Squares and Royal Sartorial Essentials"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Block */}
        <div className="flex flex-col items-start justify-center space-y-4 sm:space-y-6 md:pl-6">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-semibold text-[#DE6B48]">
            Timeless Sartorial Detail
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.16em] font-medium text-[#241A16] leading-snug">
            ESSENTIALS FOR EVERY SEASON
          </h2>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#7E746F] font-light leading-relaxed max-w-md">
            From breezy natural linen and lightweight poly-satin for summer garden brunches, to master Banarasi Tanchoi brocades and shadow Chikankari embroidery on pure Tussar silk for monumental festive evenings.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigateTo('shop')}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#8B1E2D] hover:text-[#DE6B48] underline underline-offset-8 transition-colors"
            >
              EXPLORE ATELIER WEAVES &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicobarImageWithText;

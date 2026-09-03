import React from 'react';
import { useShop } from '../context/ShopContext';

const NicobarGiftingWorld = () => {
  const { navigateTo } = useShop();

  const cards = [
    {
      id: 'best-of-raje',
      title: 'BEST OF RAJE GIFTS',
      image: '/images/nicobar_gifting_best_4k.jpg',
      target: 'raje',
    },
    {
      id: 'corporate-gifts',
      title: 'CORPORATE GIFTS',
      image: '/images/nicobar_gifting_corporate_4k.jpg',
      target: 'corporate',
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-t border-[#E8E1D3] select-none">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.26em] font-semibold text-[#DE6B48] block mb-1">
            Artisanal Keepsakes & Wax Seals
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.18em] font-medium text-[#241A16]">
            WELCOME TO OUR GIFTING WORLD
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans text-[#7E746F] font-light max-w-md mx-auto">
            From playful keepsake packaging inspired by vintage Indian folk-art, to regal lacquer caskets sealed with molten wax.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => navigateTo(card.target)}
              className="group cursor-pointer block relative overflow-hidden bg-[#FFFDF9] rounded-t-[100px] sm:rounded-t-[140px] rounded-b-2xl border border-[#E8E1D3] hover:border-[#C99E54] shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-x-0 bottom-6 sm:bottom-8 lg:bottom-10 text-center px-4 z-10">
                  <span className="inline-block text-white text-xs sm:text-sm lg:text-base font-serif uppercase tracking-[0.2em] font-medium border-b border-[#FFDF78] pb-1 group-hover:text-[#FFDF78] transition-all drop-shadow">
                    {card.title}
                  </span>
                  <span className="block text-[10px] uppercase font-sans tracking-[0.2em] text-[#FFDF78]/90 mt-1">
                    Discover Collection &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicobarGiftingWorld;

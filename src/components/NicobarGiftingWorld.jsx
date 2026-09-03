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
    <section className="w-full bg-[#f1f1f0] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 select-none">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif uppercase tracking-[0.18em] font-medium text-[#22242A] text-center mb-8 sm:mb-12">
          WELCOME TO OUR GIFTING WORLD
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-9">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => navigateTo(card.target)}
              className="group cursor-pointer block relative overflow-hidden bg-neutral-200"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-x-0 bottom-4 sm:bottom-8 lg:bottom-10 text-center px-3 z-10">
                  <span className="text-white text-xs sm:text-sm lg:text-base font-sans uppercase tracking-[0.18em] font-medium underline underline-offset-4 decoration-white/90 group-hover:decoration-white transition-all drop-shadow">
                    {card.title}
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

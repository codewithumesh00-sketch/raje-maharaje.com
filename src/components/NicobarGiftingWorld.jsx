import React from 'react';
import { useShop } from '../context/ShopContext';

const NicobarGiftingWorld = () => {
  const { navigateTo } = useShop();

  const cards = [
    {
      id: 'best-of-nicobar',
      title: 'BEST OF NICOBAR GIFTS',
      subtitle: 'Iconic keepsake boxes & silk sets',
      image: '/images/nicobar_gifting_best_4k.jpg',
      target: 'shop',
    },
    {
      id: 'curated-festive',
      title: 'CURATED FESTIVE GIFTS',
      subtitle: 'Molten wax-sealed Banarasi boxes',
      image: '/images/regal_gift_boxes_1787645456584.jpg',
      target: 'gifting',
    },
    {
      id: 'corporate-gifts',
      title: 'CORPORATE GIFTS',
      subtitle: 'Custom monogrammed executive gifts',
      image: '/images/nicobar_gifting_corporate_4k.jpg',
      target: 'corporate',
    },
    {
      id: 'egift-cards',
      title: 'E-GIFT CARDS',
      subtitle: 'The ultimate luxury choice',
      image: '/images/gift_boxes.jpg',
      target: 'shop',
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-t border-[#E8E1D3] select-none">
      <div className="max-w-[1366px] mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.26em] font-semibold text-[#8B1E2D] block mb-1">
            Artisanal Keepsakes & Wax Seals
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.18em] font-medium text-[#241A16]">
            WELCOME TO OUR GIFTING WORLD
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans text-[#7E746F] font-light max-w-lg mx-auto">
            From signature pastel keepsake boxes to grand heirloom caskets sealed with royal molten wax.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => navigateTo(card.target)}
              className="group cursor-pointer block relative overflow-hidden bg-[#FFFDF9] rounded-t-[100px] sm:rounded-t-[120px] rounded-b-xl border border-[#E8E1D3] hover:border-[#8B1E2D] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-x-0 bottom-5 sm:bottom-6 text-center px-3 z-10">
                  <span className="inline-block text-white text-xs sm:text-sm font-serif uppercase tracking-[0.16em] font-medium border-b border-[#FFDF78] pb-1 group-hover:text-[#FFDF78] transition-all drop-shadow">
                    {card.title}
                  </span>
                  <span className="block text-[10px] uppercase font-sans tracking-[0.18em] text-[#FFDF78]/90 mt-1.5">
                    {card.subtitle} &rarr;
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

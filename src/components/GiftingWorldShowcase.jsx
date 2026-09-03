import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight } from 'lucide-react';

const GiftingWorldShowcase = () => {
  const { navigateTo } = useShop();

  const cards = [
    {
      id: 'best-gifts',
      title: 'BEST OF RAJE GIFTS',
      subtitle: 'Connoisseur keepsake chests, bespoke cocktail suites and pure silk accessories',
      image: '/images/nicobar_gifting_best_4k.jpg',
      target: 'gifting',
    },
    {
      id: 'corporate-gifts',
      title: 'CORPORATE GIFTS',
      subtitle: 'Artisanal gift boxes, bespoke monogramming and wedding celebration suites',
      image: '/images/nicobar_gifting_corporate_4k.jpg',
      target: 'corporate',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-2">
            Heirlooms & Keepsakes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-[0.16em] uppercase font-light text-neutral-900">
            WELCOME TO OUR GIFTING WORLD
          </h2>
          <div className="w-12 h-px bg-[#c5a059] mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-600 font-light max-w-xl mx-auto">
            Rooted in royal hospitality and mindful presentation — handcrafted rigid keepsake chests sealed with molten wax and custom monograms.
          </p>
        </div>

        {/* Dual Showcase Cards (Screenshot 5 Replicating Nicobar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => navigateTo(card.target)}
              className="group cursor-pointer flex flex-col bg-white rounded-none border border-neutral-200/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Card Image */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                {/* Centered Overlay Action on Bottom */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center px-4">
                  <span className="bg-white/95 backdrop-blur-sm text-neutral-900 px-6 py-3 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium border border-neutral-200 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 shadow-md inline-flex items-center space-x-2">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Card Caption */}
              <div className="p-6 text-center bg-white border-t border-neutral-100">
                <p className="text-xs text-neutral-500 tracking-wide font-light">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftingWorldShowcase;

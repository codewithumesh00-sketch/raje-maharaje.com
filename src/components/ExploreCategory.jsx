import React from 'react';
import { useShop } from '../context/ShopContext';

const ExploreCategory = () => {
  const { navigateTo } = useShop();

  const categories = [
    {
      id: 'women-silks',
      name: "WOMEN'S SILKS",
      image: '/images/garden_muse_scarf_fuchsia.jpg',
      tag: 'New Arrivals',
      target: 'women'
    },
    {
      id: 'mens-atelier',
      name: "MEN'S ATELIER",
      image: '/images/nicobar_hero_dress_for_every_part_4k.jpg',
      tag: 'Couture',
      target: 'men'
    },
    {
      id: 'tanchoi-brocades',
      name: "TANCHOI BROCADES",
      image: '/images/craft_fan_squares_4k.png',
      tag: 'Varanasi',
      target: 'shop'
    },
    {
      id: 'awadhi-chikankari',
      name: "AWADHI CHIKANKARI",
      image: '/images/hero_chikankari_4k.png',
      tag: 'Shadow Work',
      target: 'shop'
    },
    {
      id: 'gifting-world',
      name: "GIFTING WORLD",
      image: '/images/nicobar_gifting_best_4k.jpg',
      tag: 'Curated Sets',
      target: 'gifting'
    },
    {
      id: 'living-heirlooms',
      name: "LIVING & STARS",
      image: '/images/nicobar_hero_gifts_stars_4k.jpg',
      tag: 'Tableware',
      target: 'living'
    },
    {
      id: 'ajrakh-ikat',
      name: "AJRAKH & IKAT",
      image: '/images/craft_ikat_layers_4k.png',
      tag: 'Hand-Block',
      target: 'shop'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-1">
            Crafted for Kings & Queens
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif uppercase tracking-[0.18em] font-light text-neutral-900">
            EXPLORE THE REPERTOIRE
          </h2>
        </div>

        {/* Circular / Oval Category Bubbles Horizontal Scroll */}
        <div className="flex items-center justify-start sm:justify-center space-x-6 sm:space-x-8 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateTo(cat.target)}
              className="group cursor-pointer flex flex-col items-center flex-shrink-0"
            >
              {/* Circular / Oval Image Ring */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden p-1 border-2 border-neutral-200 group-hover:border-[#d4af37] transition-all duration-300 shadow-xs group-hover:shadow-md bg-white">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Tag */}
              <div className="mt-3 text-center">
                <h3 className="text-xs sm:text-sm font-sans tracking-wide text-neutral-900 font-medium group-hover:text-[#9c783e] transition-colors whitespace-nowrap">
                  {cat.name}
                </h3>
                <span className="text-[10px] font-sans text-neutral-400 font-light tracking-wider uppercase block">
                  {cat.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategory;

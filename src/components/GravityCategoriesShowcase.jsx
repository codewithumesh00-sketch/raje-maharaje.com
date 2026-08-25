import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const GravityCategoriesShowcase = () => {
  const { navigateTo } = useShop();

  // 4 Staggered Luxury Categories (Exact Match for Reference Image 3: Tops, Jeans, Casuals, Formals)
  const categories = [
    {
      id: 'raje',
      title: 'The Raje Line',
      subtitle: 'Elevated everyday silk pocket squares and neckerchiefs made to bring effortless royal style to every outfit.',
      image: '/images/royal_bandhgala_pink_4k.png',
      alt: 'The Raje Everyday Silk Collection',
      offset: 'mt-0',
      target: 'shop'
    },
    {
      id: 'maharaje',
      title: 'The Maharaje Line',
      subtitle: 'Timeless ceremonial Banarasi brocades and real metallic zari with comfortable fits and versatile styles for every celebration.',
      image: '/images/craft_fan_squares_4k.png',
      alt: 'The Maharaje Ceremonial Brocades',
      offset: 'sm:mt-12 lg:mt-16',
      target: 'shop'
    },
    {
      id: 'chikankari',
      title: 'Awadhi Chikankari',
      subtitle: 'Relaxed Mughal shadow-work essentials designed for easy styling, comfort, and an authentic laid-back regal look.',
      image: '/images/hero_chikankari_4k.png',
      alt: 'Awadhi Hand-Embroidered Chikankari',
      offset: 'sm:mt-24 lg:mt-32',
      target: 'shop'
    },
    {
      id: 'formals',
      title: 'Heirloom Formals',
      subtitle: 'Polished essentials designed for refined looks, timeless style, and effortless sophistication at black-tie galas.',
      image: '/images/home_hero_bandhgala_cutout.png',
      alt: 'Heirloom Royal Formals and Bandhgalas',
      offset: 'sm:mt-36 lg:mt-48',
      target: 'shop'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#212121] text-white border-b border-neutral-800 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Staggered 4-Column Layout (Exact Reference Image 3 Look) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start pb-8">
          {categories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateTo(item.target)}
              className={`group relative cursor-pointer overflow-hidden bg-neutral-900 shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-end aspect-[3/4] ${item.offset}`}
            >
              {/* Category Photography */}
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                onError={(e) => {
                  e.target.src = 'https://static.wixstatic.com/media/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png/v1/fill/w_800,h_800,al_c,q_90/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png';
                }}
              />

              {/* Dark Vignette Overlay (Exact Image 3 Scrim) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              {/* Text Information Directly Overlaid at Bottom (Exact Image 3) */}
              <div className="relative z-10 p-6 sm:p-7 space-y-2">
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-neutral-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GravityCategoriesShowcase;

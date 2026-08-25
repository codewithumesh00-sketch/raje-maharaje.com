import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

const ExploreCollection = () => {
  const { navigateTo } = useShop();

  // Exact 5 Portrait Lookbook Cards matching Reference Image 2
  const collections = [
    {
      id: 'empress-silk',
      title: 'The Maharani Empress Line',
      subtitle: 'Pure Mulberry Silks & Gold Zari Drapes',
      badge: null,
      image: '/images/hero_model_slot_3.png',
      alt: 'Royal Maharani Lookbook',
      target: 'shop'
    },
    {
      id: 'yuvaraj-tanchoi',
      title: 'The Yuvaraj Tanchoi Edit',
      subtitle: '400-Year Banarasi Weaving Heritage',
      badge: null,
      image: '/images/hero_model_slot_1.png',
      alt: 'Royal Prince Lookbook',
      target: 'shop'
    },
    {
      id: 'maharaje-ceremonial',
      title: 'The Maharaje Imperial Suite',
      subtitle: 'Ceremonial Velvet & Royal Zari Achkans',
      badge: 'Sold out', // Exact match for Reference Image 2 (Card 3 Sold out)
      image: '/images/home_hero_bandhgala_cutout.png',
      alt: 'Regal Maharaje Velvet Sherwani & Brocade',
      target: 'shop'
    },
    {
      id: 'rajputana-bandhgala',
      title: 'The Rajputana Bandhgala',
      subtitle: 'Structured Midnight Tailoring with Horn Buttons',
      badge: null,
      image: '/images/hero_model_slot_2.png',
      alt: 'Royal Midnight Bandhgala Lookbook',
      target: 'shop'
    },
    {
      id: 'awadhi-couture',
      title: 'Awadhi Chikankari Silk',
      subtitle: 'Generational Mughal Shadow Needlecraft',
      badge: null,
      image: '/images/hero_model_slot_4.png',
      alt: 'Awadhi Chikankari Handcrafted Lookbook',
      target: 'shop'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Exact Shopify Gravity Preset Look - Image 2) */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900">
            Explore // Collection
          </h2>

          <button
            onClick={() => navigateTo('categories')}
            className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-500 transition-colors pb-0.5 border-b border-neutral-900 flex items-center space-x-1.5"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tall Portrait Cards (5-Column Layout matching Image 2) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateTo(item.target)}
              className="group relative cursor-pointer overflow-hidden bg-neutral-900 aspect-[1/2] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
            >
              {/* Vertical Image */}
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                onError={(e) => {
                  e.target.src = 'https://static.wixstatic.com/media/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png/v1/fill/w_800,h_800,al_c,q_90/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png';
                }}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Sold Out Badge (Exact placement on Card 3 matching Image 2) */}
              {item.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-[11px] font-sans font-medium bg-[#333333]/90 text-white border border-neutral-600/50 backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Bottom Subtle Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-10">
                <h3 className="font-sans font-bold text-xs sm:text-sm text-white uppercase tracking-tight line-clamp-1 group-hover:text-neutral-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-neutral-300 font-sans line-clamp-1 mt-0.5 font-light">
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

export default ExploreCollection;

import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

const ExploreCategory = () => {
  const { navigateTo } = useShop();

  const categories = [
    {
      id: 'sherwanis',
      name: "ROYAL SHERWANIS",
      image: '/images/hero_model_slot_2.png',
      alt: 'Royal Sherwanis with Zari Weaves',
      tag: 'Couture',
      target: 'shop'
    },
    {
      id: 'bandhgalas',
      name: "MAHARAJE BANDHGALAS",
      image: '/images/home_hero_bandhgala_cutout.png',
      alt: 'Maharaje Velvet Bandhgala Suit',
      tag: 'Heirloom',
      target: 'shop'
    },
    {
      id: 'pocket-squares',
      name: "BANARASI ZARI POCKET SQUARES",
      image: '/images/craft_fan_squares_4k.png',
      alt: 'Pure Banarasi Mulberry Silk Zari Pocket Squares',
      tag: 'Signature',
      target: 'shop'
    },
    {
      id: 'safas-turbans',
      name: "ROYAL SAFAS & TURBANS",
      image: '/images/royal_bandhgala_pink_4k.png',
      alt: 'Royal Silk Turbans and Safas with Sarpech Brooches',
      tag: 'Ceremonial',
      target: 'shop'
    },
    {
      id: 'chikankari-robes',
      name: "AWADHI CHIKANKARI ROBES",
      image: '/images/hero_chikankari_4k.png',
      alt: 'Awadhi Hand-Embroidered Chikankari on Silk',
      tag: 'Handcrafted',
      target: 'shop'
    },
    {
      id: 'gift-chests',
      name: "BESPOKE GIFT CHESTS",
      image: '/images/hero_boxes_4k.png',
      alt: 'Rigid Presentation Keepsake Boxes with Molten Wax Seals',
      tag: 'Gifting',
      target: 'builder'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Exact Gravity Theme Preset (Image 1) */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900">
            Explore // Category
          </h2>

          <button
            onClick={() => navigateTo('categories')}
            className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-500 transition-colors pb-0.5 border-b border-neutral-900 flex items-center space-x-1.5"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6-Grid Category Cards (Exact 3 columns x 2 rows layout matching Image 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateTo(item.target)}
              className="group relative cursor-pointer overflow-hidden aspect-[4/3] bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Category Image */}
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/images/craft_fan_squares_4k.png';
                }}
              />

              {/* Light gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none group-hover:from-black/75 transition-opacity" />

              {/* Exact Bottom-Left Frosted Dark Box for Category Name (Image 1 Match) */}
              <div className="absolute bottom-0 left-0 bg-[#252525]/85 backdrop-blur-md px-5 py-3.5 sm:px-6 sm:py-4 transition-all duration-300 group-hover:bg-black/95">
                <span className="font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-white">
                  {item.name}
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

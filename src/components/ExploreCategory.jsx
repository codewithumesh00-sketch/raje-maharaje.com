import React from 'react';
import { useShop } from '../context/ShopContext';

const ExploreCategory = () => {
  const { navigateTo } = useShop();

  const categories = [
    {
      id: 'tanchui-silk',
      name: "TANCHUI SILK",
      image: '/images/craft_fan_squares_4k.png',
      tag: 'Banarasi Zari',
      target: 'shop'
    },
    {
      id: 'chikankari-embroidery-on-tussar-silk',
      name: "CHIKANKARI ON TUSSAR",
      image: '/images/hero_chikankari_4k.png',
      tag: 'Lucknow Shadow',
      target: 'shop'
    },
    {
      id: 'raw-silk',
      name: "RAW SILK",
      image: '/images/royal_bandhgala_pink_4k.png',
      tag: 'Handloom Texture',
      target: 'shop'
    },
    {
      id: 'poly-satin',
      name: "POLY SATIN",
      image: '/images/rajemaharaje_card_raje_4k.jpg',
      tag: '₹500 Everyday Chic',
      target: 'shop'
    },
    {
      id: 'linen',
      name: "PURE LINEN",
      image: '/images/rajemaharaje_card_raje_4k.jpg',
      tag: '₹600 Summer Crisp',
      target: 'shop'
    },
    {
      id: 'hakoba',
      name: "HAKOBA",
      image: '/images/rajemaharaje_card_raje_4k.jpg',
      tag: '₹700 Eyelet Cutwork',
      target: 'shop'
    },
    {
      id: 'ajrakh-block-print-on-modal-silk',
      name: "AJRAKH MODAL SILK",
      image: '/images/craft_ikat_layers_4k.png',
      tag: 'Kutch Natural Dye',
      target: 'shop'
    },
    {
      id: 'ikkat-silk',
      name: "IKKAT SILK",
      image: '/images/craft_ikat_layers_4k.png',
      tag: 'Pochampally Weave',
      target: 'shop'
    },
    {
      id: 'madhubani-painting-on-tussar-silk',
      name: "MADHUBANI ON TUSSAR",
      image: '/images/rajemaharaje_hero_craft_4k.jpg',
      tag: 'Hand-Painted Art',
      target: 'shop'
    },
    {
      id: 'maharaje-pocket-square',
      name: "MAHARAJE LINE",
      image: '/images/rajemaharaje_card_maharaje_4k.jpg',
      tag: 'Master Heirlooms',
      target: 'maharaje'
    },
    {
      id: 'raje-pocket-square',
      name: "RAJE LINE",
      image: '/images/rajemaharaje_card_raje_4k.jpg',
      tag: 'Chic Compact Boxes',
      target: 'raje'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-1">
            Handcrafted in India
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif uppercase tracking-[0.18em] font-light text-neutral-900">
            SHOP BY CRAFT &amp; CATEGORY
          </h2>
        </div>

        <div className="flex items-center justify-start sm:justify-center space-x-6 sm:space-x-8 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateTo(cat.target)}
              className="group cursor-pointer flex flex-col items-center flex-shrink-0"
            >
              <div className="relative w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full overflow-hidden p-1 border-2 border-neutral-200 group-hover:border-[#d4af37] transition-all duration-300 shadow-xs group-hover:shadow-md bg-white">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="mt-2.5 text-center">
                <h3 className="text-xs font-sans tracking-wide text-neutral-900 font-medium group-hover:text-[#9c783e] transition-colors whitespace-nowrap">
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

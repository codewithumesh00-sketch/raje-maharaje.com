import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, Eye, ArrowRight } from 'lucide-react';

const occasionsData = {
  '9-to-5': {
    label: 'FOR 9 TO 5',
    tagline: 'Refined minimalism, breathable linen, and crisp everyday structure',
    bannerImage: '/images/rajemaharaje_card_raje_4k.jpg',
    products: [
      {
        id: 'linen-blue',
        name: 'French Blue Pure Linen Square',
        fabric: '100% Breathable European Linen',
        price: 599,
        image: '/images/products/linen-pocket-squares-blue_primary.png',
        target: 'shop',
      },
      {
        id: 'poly-satin-teal',
        name: 'Teal Peacock Poly-Satin Square',
        fabric: 'Featherlight Lustrous Poly-Satin',
        price: 499,
        image: '/images/products/poly-satin-pocket-square-teal_primary.png',
        target: 'shop',
      },
      {
        id: 'chikankari-white',
        name: 'Awadhi Ivory Chikankari Square',
        fabric: 'Hand-Embroidered Sheer Muslin',
        price: 699,
        image: '/images/products/chikankari-embroidered-pocket-square-white_primary.png',
        target: 'shop',
      },
      {
        id: 'hakoba-yellow',
        name: 'Mustard Hakoba Eyelet Square',
        fabric: 'Architectural Cotton Eyelet Weave',
        price: 549,
        image: '/images/products/hakoba-pocket-squares-yellow_primary.png',
        target: 'shop',
      },
    ],
  },
  'after-hours': {
    label: 'FOR AFTER HOURS',
    tagline: 'Velvet dusk, molten amber, and midnight Tanchoi brocades for cocktails',
    bannerImage: '/images/rajemaharaje_hero_gentleman_4k.jpg',
    products: [
      {
        id: 'tanchoi-blue',
        name: 'Midnight Royal Blue Tanchoi Brocade',
        fabric: 'Varanasi Master Silk Jacquard',
        price: 2850,
        image: '/images/products/tanchoi-brocade-pocket-square-blue_primary.png',
        target: 'shop',
      },
      {
        id: 'rawsilk-maroon',
        name: 'Burgundy Crimson Raw Tussar Silk',
        fabric: 'Wild Harvested Slub Luster',
        price: 2650,
        image: '/images/products/raw-silk-pocket-square-maroon_primary.png',
        target: 'shop',
      },
      {
        id: 'ikkat-silk',
        name: 'Pochampally Ikat Resist-Dyed Square',
        fabric: 'Micron-Aligned Handloom Silk',
        price: 2950,
        image: '/images/products/ikkat-silk-pocket-square_primary.png',
        target: 'shop',
      },
      {
        id: 'ajrakh-modal',
        name: 'Indigo & Madder Kutch Ajrakh Square',
        fabric: '16-Stage Natural Resist Dye',
        price: 2750,
        image: '/images/products/ajrakh-modal-silk-pocket-square_primary.png',
        target: 'shop',
      },
    ],
  },
  'festive-days': {
    label: 'FOR FESTIVE DAYS',
    tagline: 'Royal Indian weddings, Banarasi gold zari, and grand wax-sealed gift chests',
    bannerImage: '/images/nicobar_hero_season_of_gold_4k.jpg',
    products: [
      {
        id: 'tanchoi-crimson',
        name: 'Imperial Crimson & Gold Tanchoi',
        fabric: 'Tested Real Gold Zari & Mulberry Silk',
        price: 3675,
        image: '/images/products/tanchoi-brocade-pocket-square-crimson_primary.png',
        target: 'maharaje',
      },
      {
        id: 'grand-chest',
        name: 'Maharaje Grand Gifting Chest',
        fabric: 'Bespoke Lacquered Wood with Wax Seal',
        price: 14500,
        image: '/images/products/maharaje-grand-gift-chest_primary.png',
        target: 'gifting',
      },
      {
        id: 'chikankari-red',
        name: 'Royal Scarlet Awadhi Chikankari',
        fabric: 'Heritage Lucknow Shadow Stitch',
        price: 3450,
        image: '/images/products/chikankari-embroidered-pocket-square-red_primary.png',
        target: 'maharaje',
      },
      {
        id: 'imperial-quad',
        name: 'Imperial Quad Celebration Suite',
        fabric: 'Set of 4 Master Banarasi Squares',
        price: 11200,
        image: '/images/products/imperial-quad-celebration-suite_primary.png',
        target: 'gifting',
      },
    ],
  },
};

const NicobarOccasionsSection = () => {
  const { navigateTo, addToCart, formatPrice, setSelectedProduct, setIsQuickViewOpen } = useShop();
  const [activeTab, setActiveTab] = useState('9-to-5');

  const currentOccasion = occasionsData[activeTab];

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 select-none border-t border-[#E8E1D3]">
      <div className="max-w-[1366px] mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.26em] font-semibold text-[#8B1E2D] block mb-2">
            Curated Sartorial Dressing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.18em] font-medium text-[#241A16]">
            WHAT'S THE OCCASION?
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans text-[#7E746F] font-light max-w-md mx-auto">
            From boardroom precision to starlit wedding celebrations &mdash; tailor your presence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8">
            {Object.keys(occasionsData).map((key) => {
              const tab = occasionsData[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-2.5 sm:px-7 sm:py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-xs ${
                    isActive
                      ? 'bg-[#241A16] text-white shadow-md'
                      : 'bg-white text-[#7E746F] border border-[#E8E1D3] hover:border-[#241A16] hover:text-[#241A16]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <p className="text-[11px] sm:text-xs text-[#8B1E2D] font-sans italic tracking-wide mt-4">
            {currentOccasion.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {currentOccasion.products.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-xs border border-[#E8E1D3] hover:border-[#8B1E2D] transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              <div
                onClick={() => {
                  if (setSelectedProduct) setSelectedProduct(prod);
                  if (setIsQuickViewOpen) setIsQuickViewOpen(true);
                  else navigateTo('shop');
                }}
                className="cursor-pointer relative aspect-square w-full overflow-hidden bg-[#FAF8F5] mb-3"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <span className="p-2 bg-white text-neutral-900 rounded-full shadow-md hover:bg-[#8B1E2D] hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.16em] text-[#7E746F] block truncate">
                  {prod.fabric}
                </span>
                <h3
                  onClick={() => navigateTo('shop')}
                  className="cursor-pointer text-xs sm:text-sm font-serif font-medium text-[#241A16] group-hover:text-[#8B1E2D] transition-colors truncate mt-1"
                >
                  {prod.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-sans font-semibold text-[#241A16]">
                    {formatPrice ? formatPrice(prod.price) : `₹${prod.price.toLocaleString('en-IN')}`}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(prod, 1);
                    }}
                    className="p-1.5 text-[#241A16] hover:text-[#8B1E2D] hover:bg-[#FAF8F5] rounded transition-colors"
                    title="Add to Bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => navigateTo('shop')}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#241A16] hover:text-[#8B1E2D] border-b border-[#241A16] pb-1 hover:border-[#8B1E2D] transition-all"
          >
            <span>DISCOVER FULL {currentOccasion.label} EDIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NicobarOccasionsSection;

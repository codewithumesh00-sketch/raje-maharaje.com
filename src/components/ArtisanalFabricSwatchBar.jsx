import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Layers, ArrowRight, Check } from 'lucide-react';

const swatches = [
  {
    id: 'velvet-crimson',
    name: 'Velvet Wine',
    hex: '#7A1523',
    borderHex: '#5A0F19',
    craft: 'Varanasi Mulberry Silk & Zari',
    origin: 'Varanasi, UP',
    pairing: 'Black Velvet Achkans, Charcoal Bandhgalas & Royal Wedding Receptions',
    description: 'Deep royal crimson with rich light absorption, hand-woven with metallic bullion thread.',
    filterKeywords: ['Tanchoi', 'Red', 'Silk', 'Zari', 'Maharaje'],
  },
  {
    id: 'jaipur-rose',
    name: 'Jaipur Rose',
    hex: '#C23867',
    borderHex: '#981A42',
    craft: 'Vibrant Raw Silk & Royal Brocade',
    origin: 'Jaipur & Bhagalpur',
    pairing: 'Ivory Sherwanis, Navy Blazers & Sangeet Evenings',
    description: 'The iconic Jaipur palace hue, celebrating festive joy and architectural grandeur.',
    filterKeywords: ['Pink', 'Rose', 'Silk', 'Garden', 'Bandhgala'],
  },
  {
    id: 'terracotta-salmon',
    name: 'Terracotta Hopsack',
    hex: '#DE6B48',
    borderHex: '#B54928',
    craft: 'Pure Natural Handloom Linen',
    origin: 'Kolkata Atelier',
    pairing: 'Cream Trousers, Striped Shirts & Cocktail Brunches',
    description: 'Breathable, slubbed natural linen inspired by the tailored dandy aesthetic and Mediterranean warmth.',
    filterKeywords: ['Linen', 'Raje', 'Terracotta', 'Peach', 'Casual'],
  },
  {
    id: 'coral-blush',
    name: 'Blush Tussar',
    hex: '#DE9384',
    borderHex: '#BA6D5E',
    craft: 'Awadhi Shadow Chikankari Needlework',
    origin: 'Lucknow, UP',
    pairing: 'Beige Kurtas, Pastel Suits & Day Weddings',
    description: 'Delicate floral jaal and French knots needle-crafted on textured unbleached Tussar wild silk.',
    filterKeywords: ['Chikankari', 'Tussar', 'Embroidery', 'Blush'],
  },
  {
    id: 'marigold-saffron',
    name: 'Marigold Haldi',
    hex: '#E59500',
    borderHex: '#B37400',
    craft: 'Ajrakh Natural Dye & Modal Silk',
    origin: 'Kutch, Gujarat',
    pairing: 'Brown Hopsack, Olive Jackets & Festive Haldi Ceremonies',
    description: 'Warm golden ochre dyed using natural turmeric, pomegranate rind and madder root.',
    filterKeywords: ['Ajrakh', 'Gold', 'Yellow', 'Modal', 'Festive'],
  },
  {
    id: 'forest-olive',
    name: 'Raw Olive Khadi',
    hex: '#626B52',
    borderHex: '#484F3C',
    craft: 'Hand-Rolled Organic Slub Weave',
    origin: 'Surat & Pan-India',
    pairing: 'Linen Suits, Earthy Tweeds & Bespoke Autumn Layering',
    description: 'Understated botanical tones reflecting vintage heritage textures and slow craft principles.',
    filterKeywords: ['Green', 'Linen', 'Raw', 'Everyday'],
  },
];

const ArtisanalFabricSwatchBar = () => {
  const { products, formatPrice, navigateToProduct, navigateTo } = useShop();
  const [activeSwatch, setActiveSwatch] = useState(swatches[0]);

  // Find products that match this swatch's keywords or collection
  const matchingProducts = products.filter((p) => {
    const text = `${p.title} ${p.category} ${p.description || ''} ${p.collection || ''}`.toLowerCase();
    return activeSwatch.filterKeywords.some((kw) => text.includes(kw.toLowerCase()));
  }).slice(0, 4);

  // Fallback if low count
  const displayProducts = matchingProducts.length >= 2 ? matchingProducts : products.slice(0, 4);

  return (
    <section className="w-full bg-[#F6F2EA] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E8E1D3] select-none">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-semibold text-[#DE6B48] mb-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Tactile Moodboard Palette</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif uppercase tracking-[0.16em] font-medium text-[#241A16]">
              THE ATELIER TEXTILE SWATCHES
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-sans tracking-wide text-[#7E746F] font-light max-w-xl">
              Tap any raw-edge fabric swatch to explore our natural handloom dyes, artisanal textures, and curated pocket square pairings.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => navigateTo('shop')}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#8B1E2D] hover:text-[#DE6B48] transition-colors group"
            >
              <span>View All 24+ Weaves</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* The 6 Frayed Fabric Swatch Selectors */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {swatches.map((swatch) => {
            const isSelected = activeSwatch.id === swatch.id;
            return (
              <button
                key={swatch.id}
                onClick={() => setActiveSwatch(swatch)}
                className={`relative group rounded-xl p-2.5 sm:p-3 text-left transition-all duration-300 flex flex-col items-center sm:items-start ${
                  isSelected
                    ? 'bg-white shadow-lg ring-2 ring-[#8B1E2D] scale-102 sm:scale-104'
                    : 'bg-[#FFFDF9] hover:bg-white border border-[#E8E1D3] hover:shadow-md'
                }`}
              >
                {/* Visual Swatch Color Rectangle with frayed border illusion */}
                <div
                  className="w-full aspect-[4/3] rounded-lg mb-2 relative overflow-hidden transition-transform duration-300 group-hover:scale-102 flex items-center justify-center shadow-inner"
                  style={{ backgroundColor: swatch.hex }}
                >
                  {/* Subtle weave pattern texture */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]" />
                  
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-white/90 text-[#241A16] flex items-center justify-center shadow-xs">
                      <Check className="w-3 h-3 text-[#8B1E2D]" />
                    </div>
                  )}
                </div>

                <span className="text-[11px] sm:text-xs font-serif font-semibold text-[#241A16] truncate w-full text-center sm:text-left">
                  {swatch.name}
                </span>
                <span className="hidden sm:block text-[9px] font-sans uppercase tracking-wider text-[#7E746F] truncate w-full mt-0.5">
                  {swatch.craft.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Swatch Spotlight Banner */}
        <div className="bg-[#FFFDF9] rounded-2xl border border-[#E8E1D3] p-5 sm:p-8 mb-8 sm:mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Swatch Identity */}
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-[#E8E1D3] pb-5 md:pb-0 md:pr-6">
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className="w-8 h-8 rounded-full border border-white shadow-sm flex-shrink-0"
                  style={{ backgroundColor: activeSwatch.hex }}
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-serif uppercase tracking-wide font-semibold text-[#241A16]">
                    {activeSwatch.name}
                  </h3>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-medium text-[#DE6B48]">
                    {activeSwatch.origin}
                  </span>
                </div>
              </div>
              <p className="text-xs font-sans text-[#7E746F] font-light leading-relaxed">
                {activeSwatch.description}
              </p>
            </div>

            {/* Styling & Pairing Notes */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="bg-[#FAF8F5] p-3.5 rounded-lg border border-[#E8E1D3]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#981A42] block mb-1">
                  Craft & Lineage
                </span>
                <p className="text-[#241A16] font-medium leading-snug">
                  {activeSwatch.craft}
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-3.5 rounded-lg border border-[#E8E1D3]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C99E54] block mb-1">
                  Sartorial Pairing
                </span>
                <p className="text-[#241A16] font-medium leading-snug">
                  {activeSwatch.pairing}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Matching Curated Products Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigateToProduct(product.id)}
              className="group cursor-pointer bg-[#FFFDF9] rounded-xl border border-[#E8E1D3] hover:border-[#8B1E2D] p-3 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#FAF8F5] mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/images/garden_muse_scarf_fuchsia.jpg';
                  }}
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-[#FFFDF9]/95 text-[#241A16] text-[9px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-xs shadow-xs border border-[#E8E1D3]">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-sans uppercase tracking-[0.16em] text-[#7E746F] block truncate">
                  {product.category}
                </span>
                <h4 className="text-xs sm:text-sm font-serif font-medium text-[#241A16] group-hover:text-[#8B1E2D] transition-colors line-clamp-1">
                  {product.title}
                </h4>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[#241A16]">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#DE6B48] font-semibold">
                    Explore &rarr;
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

export default ArtisanalFabricSwatchBar;

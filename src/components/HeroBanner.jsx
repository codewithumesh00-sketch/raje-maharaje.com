import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroBanner = () => {
  const { navigateTo } = useShop();

  // 4 Uniformly Sized 1600x2200 Model Cutouts (Matched Scale & Crisp 4K Rendering)
  const categories = [
    {
      id: 0,
      name: 'Tanchoi Zari Brocade',
      tagline: 'Varanasi 400-Year Heritage',
      price: 'Rs. 3,360.00',
      title: 'TANCHOI ZARI BROCADES ON PURE BANARASI SILK',
      description: 'Woven with subtle micro-relief floral motifs and metallic zari threads on pure mulberry silk, delivering an unmatched tactile drape for celebratory occasions.',
      image: '/images/hero_model_slot_1.png',
      alt: 'Navy Bandhgala with Gold Tanchoi Brocade Pocket Square',
      target: 'shop'
    },
    {
      id: 1,
      name: 'Royal Midnight Bandhgala',
      tagline: 'Regal Heritage Atelier',
      price: 'Rs. 3,650.00',
      title: 'LUXURY GIFTING, CRAFTED FOR THE MODERN MAN',
      description: 'We craft pocket squares, stoles, and neckerchiefs that blend Indian heritage with modern design — for effortless sophistication and unforgettable gifting.',
      image: '/images/hero_model_slot_2.png',
      alt: 'Royal Midnight Bandhgala with Gold Pocket Square',
      target: 'shop'
    },
    {
      id: 2,
      name: 'Awadhi Chikankari Silk',
      tagline: 'Hand-Embroidered Finesse',
      price: 'Rs. 3,675.00',
      title: 'AWADHI CHIKANKARI ON PURE MULBERRY SILK',
      description: 'Generational shadow-work and delicate needlecraft handcrafted on lightweight silk — designed for celebratory weddings and distinguished black-tie galas.',
      image: '/images/hero_model_slot_3.png',
      alt: 'Awadhi Chikankari Handcrafted Silk Model',
      target: 'shop'
    },
    {
      id: 3,
      name: 'Bespoke Royal Gift Chests',
      tagline: 'Curated Heirloom Suites',
      price: 'From Rs. 6,200.00',
      title: 'UNBOX THE BESPOKE ROYAL PRESENTATION',
      description: 'Handmade rigid presentation chests finished with molten wax seals, custom monogram cards, and curated 2 to 4 piece artisan pocket square suites.',
      image: '/images/hero_model_slot_4.png',
      alt: 'Bespoke Presentation Gift Chest Model',
      target: 'builder'
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch image every 2.0 seconds (2000ms)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, categories.length]);

  const current = categories[activeCategory];

  return (
    <div
      className="bg-black text-white overflow-hidden relative select-none w-full min-h-[90vh] lg:h-[90vh] flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        GIANT BACKGROUND RUNNING TYPOGRAPHY IN THE MIDDLE
      */}
      <div className="absolute top-10 sm:top-14 inset-x-0 z-0 flex flex-col pointer-events-none overflow-hidden select-none">
        {/* Row 1: Left-to-Right Outlined Giant Text */}
        <div className="whitespace-nowrap flex animate-marquee-reverse">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-sans font-black text-[15vw] sm:text-[13vw] uppercase tracking-tight leading-none mx-6 select-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2.5px rgba(255, 255, 255, 0.35)',
              }}
            >
              LUXURY GIFTING • CRAFTED FOR THE MODERN MAN •
            </span>
          ))}
        </div>

        {/* Row 2: Left-to-Right Solid Letterforms Offset */}
        <div className="whitespace-nowrap flex animate-marquee-reverse -mt-4 sm:-mt-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-sans font-black text-[15vw] sm:text-[13vw] uppercase tracking-tight leading-none mx-6 text-neutral-800/80 select-none"
            >
              RAJE MAHARAJE • BESPOKE HEIRLOOM ATELIER •
            </span>
          ))}
        </div>
      </div>

      {/* MAIN HERO CONTENT CONTAINER (Exact 90vh Layout) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 flex-1 flex flex-col justify-between w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
          {/* Left: Uniformly Sized Larger & Crystal Clear Majestic Model Cutout (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-[520px] sm:h-[600px] lg:h-[680px] xl:h-[740px] flex items-end justify-center">
              <img
                key={current.id}
                src={current.image}
                alt={current.alt}
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.98)] brightness-105 contrast-105 transition-all duration-700 ease-out transform hover:scale-105"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />

              {/* Floating Minimalist Badge */}
              <div className="absolute bottom-2 left-2 sm:left-6 flex items-center space-x-2 bg-black/90 backdrop-blur-md border border-neutral-800 px-4 py-2 rounded-full text-xs shadow-2xl">
                <span className="font-bold text-[10px] sm:text-[11px] uppercase text-white tracking-wider">
                  {current.name}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="font-mono font-bold text-neutral-200 text-xs">
                  {current.price}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Clean Editorial Headline & Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-[10px] uppercase font-bold tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>{current.tagline}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.04]">
                {current.title}
              </h1>

              {/* Subtext */}
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed font-light max-w-xl">
                {current.description}
              </p>
            </div>

            {/* Clean [SHOP NOW] Button */}
            <div className="pt-2">
              <button
                onClick={() => navigateTo(current.target)}
                className="px-10 py-4 bg-white text-black hover:bg-neutral-200 font-sans font-extrabold text-xs uppercase tracking-[0.2em] rounded-xs transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] inline-flex items-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM 4-CATEGORY SWITCHER (Clean 90vh Layout & 2s Progress Indicator) */}
        <div className="pt-4 sm:pt-5 border-t border-neutral-800/80 mt-2 w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 font-sans">
              Featured 4K Model Lookbook (2s):
            </span>
            <span className="text-xs font-mono text-neutral-400">
              0{activeCategory + 1} / 0{categories.length}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(idx);
                  }}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-300 flex items-center space-x-3 relative overflow-hidden ${
                    isActive
                      ? 'bg-neutral-900 border-white shadow-md ring-1 ring-white'
                      : 'bg-black/60 border-neutral-800 hover:border-neutral-600 opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Auto-Play Active Progress Line (2s) */}
                  {isActive && !isPaused && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-white animate-[progress_2s_linear_infinite]"></div>
                  )}

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-neutral-900 border border-neutral-700 flex-shrink-0 flex items-center justify-center p-0.5">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-sans font-bold text-xs uppercase text-white truncate">
                      {cat.name}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-neutral-400 font-sans truncate mt-0.5">
                      {cat.tagline}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-300 font-semibold mt-0.5">
                      {cat.price}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;

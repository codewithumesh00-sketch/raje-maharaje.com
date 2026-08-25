import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { craftsData } from '../data/crafts';
import { MapPin, ArrowRight, Sparkles, X, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

const CraftHeritageGrid = () => {
  const { navigateTo } = useShop();
  const [selectedCraftImage, setSelectedCraftImage] = useState(null);

  const craftItems = [
    {
      id: 'fan',
      title: 'Silk Colourways & Hems',
      subtitle: 'Pure Mulberry Satin & Twill',
      desc: 'Hand-rolled Parisian and Savile Row pocket square hems finished with invisible slip-stitches.',
      image: '/images/craft_fan_squares_4k.png',
      alt: '4K Silk Pocket Squares Fan',
      stats: '16 Momme Mulberry Silk • Hand-Rolled Hems'
    },
    {
      id: 'ikat',
      title: 'Pochampally & Patola Ikat',
      subtitle: 'Resist-Dyed Geometric Precision',
      desc: 'Yarns calculated and tie-dyed in intricate mathematical precision before being handwoven on pit looms.',
      image: '/images/craft_ikat_layers_4k.png',
      alt: '4K Layered Ikat Handlooms',
      stats: 'Double Ikat Technique • Organic Indigo Dyes'
    },
    {
      id: 'raw',
      title: 'Tussar & Raw Slub Silk',
      subtitle: 'Wild Forest Harvested Luster',
      desc: 'Renowned for its organic golden sheen and architectural fold retention that stays crisp all evening.',
      image: '/images/craft_raw_silks_4k.png',
      alt: '4K Raw Silks with Marigolds',
      stats: 'Wild Tussar Silk • Crisp Architectural Fold'
    },
    {
      id: 'rosettes',
      title: 'Ajrakh & Botanical Block Prints',
      subtitle: '16-Stage Celestial Geometry',
      desc: 'Teakwood hand-block prints using madder root, pomegranate rind, and indigo on fluid modal silk.',
      image: '/images/craft_rolled_rosettes_4k.png',
      alt: '4K Rolled Silk Rosettes',
      stats: '16-Stage River Wash • 100% Herbal Dyes'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-300/80 text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-600 mb-3 font-sans">
            <Sparkles className="w-3 h-3 text-black" />
            <span>4K Heritage Lookbook</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-black tracking-tight leading-tight">
            Discover Our Craft
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-3 max-w-lg mx-auto leading-relaxed">
            Blending sacred Indian handlooms with modern Savile Row sophistication.
          </p>
        </div>

        {/* 
          EXACT 8-CARD MODULAR GRID (4 Columns x 2 Rows)
          Upgraded with Simple, Different & Crisp 4K Interactions
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {/* Row 1, Card 1: Photo - Colorful Fan of Silk Pocket Squares */}
          <div
            onClick={() => setSelectedCraftImage(craftItems[0])}
            className="aspect-square rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs group cursor-pointer relative"
          >
            <img
              src="/images/craft_fan_squares_4k.png"
              alt="Handcrafted Silk Pocket Squares Fan in 4K"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-md">
                <Eye className="w-3 h-3" />
                <span>View 4K Weave</span>
              </span>
            </div>
            <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider">
              4K UHD
            </span>
          </div>

          {/* Row 1, Card 2: Text - Inspired by Indian Crafts */}
          <div className="aspect-square rounded-3xl bg-neutral-100/90 border border-neutral-200/60 p-6 sm:p-7 flex flex-col justify-between hover:bg-neutral-100 hover:border-black/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                01 • LINEAGE
              </span>
              <span className="w-2 h-2 rounded-full bg-black/30 group-hover:bg-black transition-colors"></span>
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-900 leading-snug">
                Inspired by<br />Indian Crafts
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed mt-2">
                We celebrate India's artistic legacy with Ikat weaves, Ajrakh prints, Raw Silk textures, and Chikankari finesse.
              </p>
            </div>
            <div className="text-[10px] font-mono text-neutral-500 font-semibold pt-2 border-t border-neutral-200/60">
              Varanasi • Lucknow • Kutch
            </div>
          </div>

          {/* Row 1, Card 3: Photo - Layered Handloom Ikat Textiles */}
          <div
            onClick={() => setSelectedCraftImage(craftItems[1])}
            className="aspect-square rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs group cursor-pointer relative"
          >
            <img
              src="/images/craft_ikat_layers_4k.png"
              alt="Layered Handloom Ikat and Silk Textiles in 4K"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-md">
                <Eye className="w-3 h-3" />
                <span>View 4K Weave</span>
              </span>
            </div>
            <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider">
              4K UHD
            </span>
          </div>

          {/* Row 1, Card 4: Text - Timeless Gifting */}
          <div className="aspect-square rounded-3xl bg-neutral-100/90 border border-neutral-200/60 p-6 sm:p-7 flex flex-col justify-between hover:bg-neutral-100 hover:border-black/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                02 • HEIRLOOM
              </span>
              <span className="w-2 h-2 rounded-full bg-black/30 group-hover:bg-black transition-colors"></span>
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-900 leading-snug">
                Timeless<br />Gifting
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed mt-2">
                Each piece is more than an accessory — it's a modern heirloom that carries culture, artistry, and emotion.
              </p>
            </div>
            <div className="text-[10px] font-mono text-neutral-500 font-semibold pt-2 border-t border-neutral-200/60">
              Rigid Chests • Molten Wax
            </div>
          </div>

          {/* Row 2, Card 5: Text - For the Modern Man */}
          <div className="aspect-square rounded-3xl bg-neutral-100/90 border border-neutral-200/60 p-6 sm:p-7 flex flex-col justify-between hover:bg-neutral-100 hover:border-black/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                03 • BESPOKE
              </span>
              <span className="w-2 h-2 rounded-full bg-black/30 group-hover:bg-black transition-colors"></span>
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-900 leading-snug">
                For the<br />Modern Man
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed mt-2">
                We design for men who express individuality through colour, detail, and contemporary sophistication.
              </p>
            </div>
            <div className="text-[10px] font-mono text-neutral-500 font-semibold pt-2 border-t border-neutral-200/60">
              Savile Row Restraint
            </div>
          </div>

          {/* Row 2, Card 6: Photo - Folded Raw Silks with Marigold */}
          <div
            onClick={() => setSelectedCraftImage(craftItems[2])}
            className="aspect-square rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs group cursor-pointer relative"
          >
            <img
              src="/images/craft_raw_silks_4k.png"
              alt="Rich Raw Silk Pocket Squares with Marigold in 4K"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-md">
                <Eye className="w-3 h-3" />
                <span>View 4K Weave</span>
              </span>
            </div>
            <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider">
              4K UHD
            </span>
          </div>

          {/* Row 2, Card 7: Text - Proudly Made in India */}
          <div className="aspect-square rounded-3xl bg-neutral-100/90 border border-neutral-200/60 p-6 sm:p-7 flex flex-col justify-between hover:bg-neutral-100 hover:border-black/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                04 • ARTISAN
              </span>
              <span className="w-2 h-2 rounded-full bg-black/30 group-hover:bg-black transition-colors"></span>
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-900 leading-snug">
                Proudly Made<br />in India
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed mt-2">
                Every creation is crafted locally, reflecting our country's craftsmanship — from fabric to finishing — with global appeal.
              </p>
            </div>
            <div className="text-[10px] font-mono text-neutral-500 font-semibold pt-2 border-t border-neutral-200/60">
              100% Ethical Guilds
            </div>
          </div>

          {/* Row 2, Card 8: Photo - Rolled Silk Rosettes */}
          <div
            onClick={() => setSelectedCraftImage(craftItems[3])}
            className="aspect-square rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs group cursor-pointer relative"
          >
            <img
              src="/images/craft_rolled_rosettes_4k.png"
              alt="Rolled Silk Rosette Pocket Squares in Jewel Tones in 4K"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-md">
                <Eye className="w-3 h-3" />
                <span>View 4K Weave</span>
              </span>
            </div>
            <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider">
              4K UHD
            </span>
          </div>
        </div>

        {/* 
          3 HERITAGE WEAVE PROFILES
          (Tanchoi, Chikankari, Ajrakh)
        */}
        <div className="border-t border-neutral-200 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 font-sans">
                Artisan Geography
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black mt-1">
                Generational Weaves &amp; Needlework
              </h3>
            </div>
            <button
              onClick={() => navigateTo('about')}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-black hover:underline"
            >
              <span>Our Artisans' Guilds</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Tanchoi Brocade */}
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50/70 overflow-hidden group hover:border-black transition-all flex flex-col justify-between shadow-xs">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-200 relative">
                <img
                  src="https://static.wixstatic.com/media/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png/v1/fill/w_800,h_500,al_c,q_90/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png"
                  alt="Tanchoi Brocade Varanasi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[9px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Varanasi, UP
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-sans font-extrabold text-xl text-black uppercase">
                    Tanchoi Brocade
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed mt-2">
                    A celebrated Chinese-origin silk weaving technique perfected over 400 years by master weavers of Banaras. Woven with subtle micro-relief floral motifs and metallic zari with a satin-smooth tactile finish.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-600">
                  <span>8-12 Days per meter</span>
                  <span className="font-bold text-black">Pure Mulberry Silk</span>
                </div>
              </div>
            </div>

            {/* 2. Chikankari Embroidery */}
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50/70 overflow-hidden group hover:border-black transition-all flex flex-col justify-between shadow-xs">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-200 relative">
                <img
                  src="https://static.wixstatic.com/media/32554b_fad55620764a498792a04f612d4f97ce~mv2.png/v1/fill/w_800,h_500,al_c,q_90/32554b_fad55620764a498792a04f612d4f97ce~mv2.png"
                  alt="Chikankari Embroidery Lucknow"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[9px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Lucknow, UP
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-sans font-extrabold text-xl text-black uppercase">
                    Chikankari Embroidery
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed mt-2">
                    Originating from the Mughal courts of Awadh, delicate shadow work and needlework hand-embroidered by generational women artisans onto sheer muslin and fine silk.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-600">
                  <span>14-20 Days per piece</span>
                  <span className="font-bold text-black">Bakhiya &amp; Murri</span>
                </div>
              </div>
            </div>

            {/* 3. Ajrakh Block Print */}
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50/70 overflow-hidden group hover:border-black transition-all flex flex-col justify-between shadow-xs">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-200 relative">
                <img
                  src="https://static.wixstatic.com/media/32554b_e66f3ec880b7431d8bd2fe287360f5bd~mv2.png/v1/fill/w_800,h_500,al_c,q_90/32554b_e66f3ec880b7431d8bd2fe287360f5bd~mv2.png"
                  alt="Ajrakh Block Print Kutch"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[9px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Kutch, Gujarat
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-sans font-extrabold text-xl text-black uppercase">
                    Ajrakh Block Print
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed mt-2">
                    A 16-stage ancient resist-printing process using carved teakwood blocks, indigo, madder root, and pomegranate rind on fine modal silk, echoing celestial geometry.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-600">
                  <span>16 River-Wash Cycles</span>
                  <span className="font-bold text-black">100% Herbal Dyes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 4K Lightbox Modal */}
      {selectedCraftImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200">
            <button
              onClick={() => setSelectedCraftImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-square sm:aspect-video w-full bg-neutral-900 overflow-hidden">
              <img
                src={selectedCraftImage.image}
                alt={selectedCraftImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3 bg-white">
              <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">
                4K Ultra-High Definition Weave
              </span>
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-black uppercase">
                {selectedCraftImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                {selectedCraftImage.desc}
              </p>
              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-neutral-700">
                  {selectedCraftImage.stats}
                </span>
                <button
                  onClick={() => {
                    setSelectedCraftImage(null);
                    navigateTo('shop');
                  }}
                  className="px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Explore Creations
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CraftHeritageGrid;

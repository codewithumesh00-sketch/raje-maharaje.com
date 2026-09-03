import React from 'react';
import { User, Sparkles, MapPin, Gift } from 'lucide-react';

const CraftHeritageGrid = () => {
  const pillars = [
    {
      icon: User,
      title: 'For the Modern Man',
      description: 'We design for men who express individuality through colour, detail, and contemporary sophistication.',
    },
    {
      icon: Sparkles,
      title: 'Inspired by Indian Crafts',
      description: 'We celebrate India’s artistic legacy with Ikat weaves, Ajrakh prints, Raw Silk textures, and Chikankari finesse.',
    },
    {
      icon: MapPin,
      title: 'Proudly Made in India',
      description: 'Every creation is crafted locally, reflecting our country’s craftsmanship — from fabric to finishing — with global appeal.',
    },
    {
      icon: Gift,
      title: 'Timeless Gifting',
      description: 'Each piece is more than an accessory — it’s a modern heirloom that carries culture, artistry, and emotion.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-2">
            The Philosophy of Studio Sankara
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.16em] font-light text-neutral-900">
            DISCOVER OUR CRAFT
          </h2>
          <div className="w-12 h-px bg-[#c5a059] mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-500 font-light max-w-xl mx-auto">
            A pocket square doesn’t make the man — it reveals the Gentleman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F5] p-8 border border-neutral-200/60 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-5 shadow-xs">
                  <Icon className="w-5 h-5 text-[#9c783e]" />
                </div>
                <h3 className="text-xs sm:text-sm font-serif uppercase tracking-[0.16em] font-semibold text-neutral-900 mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs font-sans text-neutral-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CraftHeritageGrid;

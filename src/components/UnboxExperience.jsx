import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, ArrowRight } from 'lucide-react';

const UnboxExperience = () => {
  const { navigateTo } = useShop();

  const boxes = [
    {
      id: 'raje-boxes',
      title: 'RAJE Boxes',
      subtitle: 'Chic and compact — our pocket squares arrive in elegant pink, and blue boxes that embody effortless charm and perfect gifting.',
      image: '/images/rajemaharaje_card_raje_4k.jpg',
      badge: 'Chic & Compact',
      target: 'raje',
      cta: 'Shop RAJE',
    },
    {
      id: 'maharaje-small',
      title: 'MAHARAJE Small Gift Box',
      subtitle: 'A refined keepsake for single pocket squares — made for the man who values subtlety, luxury, and timeless detail.',
      image: '/images/rajemaharaje_card_maharaje_4k.jpg',
      badge: 'Single Keepsake',
      target: 'maharaje',
      cta: 'Shop MAHARAJE',
    },
    {
      id: 'maharaje-grand',
      title: 'MAHARAJE Grand Gift Box',
      subtitle: 'Crafted for scarves, neckerchiefs, or matching combinations — this signature box brings grandeur to any celebration, big or small.',
      image: '/images/rajemaharaje_hero_unboxing_4k.jpg',
      badge: 'Signature Grand Box',
      target: 'maharaje',
      cta: 'Explore Grand Sets',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-neutral-200/70 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-2">
            The Packaging Artistry
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.16em] font-light text-neutral-900">
            UNBOX THE REGAL EXPERIENCE
          </h2>
          <div className="w-12 h-px bg-[#c5a059] mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-600 font-light max-w-xl mx-auto">
            From our playful sliding dual boxes to our heirloom velvet caskets sealed with molten wax, every parcel is designed to make gifting for men unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boxes.map((box) => (
            <div
              key={box.id}
              onClick={() => navigateTo(box.target)}
              className="group cursor-pointer bg-white border border-neutral-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/95 text-[10px] uppercase font-semibold tracking-widest px-2.5 py-1 text-neutral-900 shadow-xs">
                    {box.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base font-serif uppercase tracking-[0.16em] font-medium text-neutral-900 mb-2">
                    {box.title}
                  </h3>
                  <p className="text-xs font-sans text-neutral-600 font-light leading-relaxed">
                    {box.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100">
                  <span className="text-xs uppercase tracking-widest font-semibold text-neutral-900 group-hover:text-[#9c783e] inline-flex items-center space-x-1.5 transition-colors">
                    <span>{box.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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

export default UnboxExperience;

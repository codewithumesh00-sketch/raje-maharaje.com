import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, ArrowRight, Gift, Sparkles } from 'lucide-react';

const UnboxExperience = () => {
  const { navigateTo } = useShop();
  const [selectedBox, setSelectedBox] = useState(2);

  const boxes = [
    {
      id: 0,
      name: 'RAJE Slide Box',
      tagline: 'Chic, Compact & Vibrant',
      fits: 'Single Pocket Square',
      badge: 'Pink & Sapphire',
      description: 'Sleek slide-out presentation boxes that embody effortless charm, finished with foil typography and parchment wrapping.',
      features: ['Magnetic slide tray', 'Signature foil typography', 'Artisan provenance card'],
      priceNote: 'Included with all Raje items',
      image: '/images/regal_gift_boxes_1787645456584.jpg'
    },
    {
      id: 1,
      name: 'MAHARAJE Keepsake Box',
      tagline: 'Refined Single Keepsake',
      fits: 'Single Silk Square + Monogram',
      badge: 'Royal Navy & Gold',
      description: 'A refined keepsake crafted with a rigid book-style opening, embossed royal crest, and velvet interior lining.',
      features: ['Rigid book-style structure', 'Gold crest embossing', 'Velvet cushion bed', 'Wax seal authentication'],
      priceNote: 'Included with Maharaje singles',
      image: '/images/products/brocade-pocket-squares-assorted-pack_primary.png'
    },
    {
      id: 2,
      name: 'MAHARAJE Grand Royal Chest',
      tagline: 'The Ultimate Heirloom Suite',
      fits: 'Curated 2 to 4 Pieces / Stoles',
      badge: 'Midnight Obsidian & Gold',
      description: 'Crafted for scarves, neckerchiefs, or matching heirloom combinations — bringing grandeur to weddings and milestone gifting.',
      features: ['Rigid presentation chest', 'Molten brass wax seal', 'Calligraphy greeting note', 'Satin ribbons'],
      priceNote: 'Included with all Box Sets',
      image: '/images/hero_boxes_4k.png'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-400 font-sans">
            Signature Presentation
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black mt-1">
            Unbox the Experience
          </h2>
          <p className="text-sm text-neutral-600 font-sans mt-2">
            Every creation arrives in bespoke packaging, hand-sealed with molten wax.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxes.map((box) => (
            <div
              key={box.id}
              onClick={() => setSelectedBox(box.id)}
              className={`rounded-2xl p-6 flex flex-col justify-between border cursor-pointer transition-all ${
                selectedBox === box.id
                  ? 'bg-neutral-50 border-black shadow-md ring-1 ring-black'
                  : 'bg-white border-neutral-200 hover:border-neutral-400'
              }`}
            >
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-neutral-100">
                  <img src={box.image} alt={box.name} className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase tracking-wider">
                    {box.badge}
                  </span>
                </div>

                <h3 className="font-sans text-lg font-bold text-black uppercase">
                  {box.name}
                </h3>
                <p className="text-xs text-neutral-500 font-medium mt-0.5">
                  {box.tagline}
                </p>
                <p className="text-xs text-neutral-600 font-sans mt-3 leading-relaxed">
                  {box.description}
                </p>

                <div className="mt-4 space-y-1.5">
                  {box.features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-neutral-600">
                  {box.priceNote}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo('builder');
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-black hover:underline"
                >
                  Configure →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnboxExperience;

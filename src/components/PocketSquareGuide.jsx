import React, { useState } from 'react';
import { foldStyles } from '../data/crafts';
import { Sparkles, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const PocketSquareGuide = () => {
  const { navigateTo } = useShop();
  const [activeFold, setActiveFold] = useState(foldStyles[0]);

  return (
    <section className="py-20 bg-obsidian-950 text-cream-100 border-b border-gold-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-950 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Sartorial Masterclass</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gold-100 uppercase">
            The Art of the Royal Fold
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mt-4 mb-4"></div>
          <p className="text-sm sm:text-base text-cream-200/80 font-serif">
            A pocket square is a canvas for your mood. Master the four timeless folds that define the modern gentleman.
          </p>
        </div>

        {/* Fold Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {foldStyles.map((fold) => (
            <button
              key={fold.id}
              onClick={() => setActiveFold(fold)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                activeFold.id === fold.id
                  ? 'bg-gold-950 border-gold-400 ring-1 ring-gold-400 text-gold-200 shadow-xl'
                  : 'bg-obsidian-900 border-gold-900/40 text-cream-300 hover:border-gold-700/60'
              }`}
            >
              <span className="text-[10px] uppercase font-mono text-gold-400 tracking-wider">
                {fold.difficulty}
              </span>
              <h4 className="font-display font-bold text-sm sm:text-base text-cream-100 mt-1 uppercase">
                {fold.name}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Fold Presentation Box */}
        <div className="bg-obsidian-900 rounded-2xl border border-gold-900/60 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-gold-900/60 text-gold-300 text-xs font-mono mb-2">
                Ideal For: {activeFold.bestFor}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-200 uppercase">
                {activeFold.name}
              </h3>
            </div>

            <div className="space-y-4">
              {activeFold.steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-obsidian-950/70 p-4 rounded-xl border border-gold-900/40">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-obsidian-950 font-bold text-xs flex-shrink-0 flex items-center justify-center font-mono">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-cream-200 leading-relaxed font-sans font-light">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('shop')}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-gold-300 hover:text-gold-100 transition-colors"
              >
                <span>Find Pocket Squares for this Fold</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-obsidian-950 p-6 rounded-xl border border-gold-900/40 text-center flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gold-950/40 border-2 border-dashed border-gold-500/40 p-4 flex items-center justify-center mb-4">
              <img
                src="/images/logo.jpg"
                alt="Styling Crown"
                className="w-24 h-24 rounded-full opacity-80 animate-pulse-subtle"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-obsidian-950/40 backdrop-blur-[1px] rounded-full">
                <span className="font-serif italic text-gold-200 text-base text-center px-4">
                  "Effortless elegance in every breast pocket"
                </span>
              </div>
            </div>
            <p className="text-xs text-cream-300 font-serif">
              Tested on bespoke Bandhgalas, Tuxedos, and Jodhpuri Jackets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PocketSquareGuide;

import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Quote, ArrowRight } from 'lucide-react';

const pressReviews = [
  {
    publication: 'ELLE',
    quote: 'Nicobar and Raje Maharaje have built a way of dressing that feels both deeply rooted in Indian textile heritage and effortlessly global.',
    author: 'Fashion Features Editor',
    context: 'The New Sartorial India Edit',
  },
  {
    publication: 'GQ INDIA',
    quote: 'The pocket square is no longer an afterthought. With hand-embroidered Awadhi Chikankari and pure Banarasi Tanchoi, this is royal tailoring reborn.',
    author: 'Men’s Style Connoisseur',
    context: 'Gentleman’s Wardrobe Essential',
  },
  {
    publication: 'VOGUE',
    quote: 'Mindful luxury with soul. Every box arrives sealed with molten crimson wax, transforming modern gifting into an intimate heirloom ceremony.',
    author: 'Weddings & Lifestyle Bureau',
    context: 'The Luxury Gifting Guide',
  },
];

const NicobarPressQuote = () => {
  const { navigateTo } = useShop();
  const [activeIdx, setActiveIdx] = useState(0);

  const activeReview = pressReviews[activeIdx];

  return (
    <section className="w-full bg-[#FAF8F5] py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-12 select-none border-t border-[#E8E1D3]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Publication Selector Pills */}
        <div className="flex items-center justify-center space-x-6 sm:space-x-10 mb-8 sm:mb-10">
          {pressReviews.map((rev, idx) => (
            <button
              key={rev.publication}
              onClick={() => setActiveIdx(idx)}
              className={`text-sm sm:text-base md:text-lg font-serif uppercase tracking-[0.24em] font-semibold transition-all duration-300 pb-1.5 ${
                activeIdx === idx
                  ? 'text-[#8B1E2D] border-b-2 border-[#8B1E2D] scale-105'
                  : 'text-[#A89F98] hover:text-[#241A16]'
              }`}
            >
              {rev.publication}
            </button>
          ))}
        </div>

        {/* Large Decorative Quote Icon */}
        <div className="flex justify-center mb-4 text-[#C99E54]/50">
          <Quote className="w-8 h-8 sm:w-10 sm:h-10 rotate-180" />
        </div>

        {/* The Quote */}
        <blockquote className="text-lg sm:text-2xl md:text-3xl font-serif font-light text-[#241A16] leading-relaxed max-w-3xl mx-auto italic">
          &ldquo;{activeReview.quote}&rdquo;
        </blockquote>

        <div className="mt-4 sm:mt-6">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.22em] font-semibold text-[#8B1E2D] block">
            {activeReview.author} &bull; {activeReview.context}
          </span>
        </div>

        {/* Read More Link */}
        <div className="mt-8">
          <button
            onClick={() => navigateTo('about')}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#241A16] hover:text-[#8B1E2D] border-b border-[#241A16] pb-1 hover:border-[#8B1E2D] transition-all"
          >
            <span>READ MORE IN THE PRESS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NicobarPressQuote;

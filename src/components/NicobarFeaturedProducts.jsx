import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NicobarFeaturedProducts = () => {
  const { products, navigateTo } = useShop();

  // Pick top 8 curated bestsellers
  const featured = products.slice(0, 8);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, featured.length - 4) : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev >= featured.length - 4 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1366px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex-1 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif uppercase tracking-[0.18em] font-medium text-[#22242A]">
              NEW THIS SEASON
            </h2>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-14">
          <button
            onClick={() => navigateTo('shop')}
            className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-neutral-900 hover:text-neutral-600 underline underline-offset-4 transition-colors"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default NicobarFeaturedProducts;

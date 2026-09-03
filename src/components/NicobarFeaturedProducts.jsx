import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const NicobarFeaturedProducts = () => {
  const { products, navigateTo } = useShop();

  // Pick top 8 curated bestsellers
  const featured = products.slice(0, 8);
  const [page, setPage] = useState(0);

  const prev = () => {
    setPage((p) => (p === 0 ? 1 : 0));
  };

  const next = () => {
    setPage((p) => (p === 1 ? 0 : 1));
  };

  // On large screens, slice by page (4 items per page).
  const visibleDesktop = featured.slice(page * 4, page * 4 + 4);

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1366px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex-1 text-center">
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-semibold text-[#DE6B48] block mb-1">
              Curated Royal Selection
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif uppercase tracking-[0.18em] font-medium text-[#241A16]">
              NEW THIS SEASON
            </h2>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={prev}
              aria-label="Previous Products"
              className="w-9 h-9 rounded-full border border-[#E8E1D3] hover:border-[#8B1E2D] flex items-center justify-center text-[#241A16] hover:text-[#8B1E2D] bg-[#FFFDF9] transition-colors shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next Products"
              className="w-9 h-9 rounded-full border border-[#E8E1D3] hover:border-[#8B1E2D] flex items-center justify-center text-[#241A16] hover:text-[#8B1E2D] bg-[#FFFDF9] transition-colors shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop View: Paged 4 items */}
        <div className="hidden lg:grid grid-cols-4 gap-6 lg:gap-8 animate-fade-in">
          {visibleDesktop.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* Mobile & Tablet View: 2-column or horizontal swipe carousel */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
          {(page === 0 ? featured.slice(0, 4) : featured.slice(4, 8)).map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* Pagination indicator dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          <button
            onClick={() => setPage(0)}
            aria-label="Page 1"
            className={`transition-all duration-300 rounded-full ${
              page === 0 ? 'w-6 h-1.5 bg-neutral-900' : 'w-1.5 h-1.5 bg-neutral-300 hover:bg-neutral-500'
            }`}
          />
          <button
            onClick={() => setPage(1)}
            aria-label="Page 2"
            className={`transition-all duration-300 rounded-full ${
              page === 1 ? 'w-6 h-1.5 bg-neutral-900' : 'w-1.5 h-1.5 bg-neutral-300 hover:bg-neutral-500'
            }`}
          />
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => navigateTo('shop')}
            className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-neutral-900 hover:text-[#d4af37] underline underline-offset-4 transition-colors"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default NicobarFeaturedProducts;

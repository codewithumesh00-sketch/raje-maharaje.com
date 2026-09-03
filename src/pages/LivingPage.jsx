import React from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const LivingPage = () => {
  const { navigateTo } = useShop();

  const livingProducts = products.filter(
    (p) => p.department === 'living' || p.category.includes('Living') || p.id.includes('celestial') || p.id.includes('mugs')
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-medium">Living & Heirlooms</span>
        </nav>
      </div>

      {/* Hero Banner (Gifts Written in the Stars) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="relative overflow-hidden aspect-[21/9] sm:aspect-[24/7] bg-neutral-900 mb-6">
          <img
            src="/images/nicobar_hero_gifts_stars_4k.jpg"
            alt="Living & Tableware"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent flex items-center p-6 sm:p-12">
            <div className="max-w-xl text-white">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase font-semibold text-[#d4af37] block mb-2">
                Mindful Living
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.16em] font-light mb-3">
                GIFTS WRITTEN IN THE STARS
              </h1>
              <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-200/90 font-light">
                Handcrafted fine porcelain mugs, celestial tableware, and artisanal brass accessories designed to elevate everyday rituals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12">
          {livingProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivingPage;

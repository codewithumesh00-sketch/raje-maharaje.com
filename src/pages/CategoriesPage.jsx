import React, { useState, useMemo, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import categoriesData from '../data/categories';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  SlidersHorizontal,
  Layers,
  Award,
  Crown,
  Gift,
  Feather,
  Check
} from 'lucide-react';

const CategoriesPage = () => {
  const { products, navigateTo, formatPrice } = useShop();
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCraftFilter, setSelectedCraftFilter] = useState('All');

  // Find currently active category object
  const activeCategory = useMemo(() => {
    if (activeCategoryId === 'all') return null;
    return categoriesData.find((c) => c.id === activeCategoryId);
  }, [activeCategoryId]);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (activeCategoryId === 'all') return true;

      if (activeCategoryId === 'tanchoi') {
        return (
          product.craft?.toLowerCase().includes('tanchoi') ||
          product.title?.toLowerCase().includes('tanchoi') ||
          product.fabric?.toLowerCase().includes('tanchoi')
        );
      }

      if (activeCategoryId === 'chikankari') {
        return (
          product.craft?.toLowerCase().includes('chikankari') ||
          product.title?.toLowerCase().includes('chikankari') ||
          product.origin?.toLowerCase().includes('lucknow')
        );
      }

      if (activeCategoryId === 'ajrakh-ikat') {
        return (
          product.craft?.toLowerCase().includes('ajrakh') ||
          product.craft?.toLowerCase().includes('ikat') ||
          product.title?.toLowerCase().includes('ajrakh') ||
          product.title?.toLowerCase().includes('ikat')
        );
      }

      if (activeCategoryId === 'gift-sets') {
        return (
          product.category === 'Gift Sets' ||
          product.title?.toLowerCase().includes('chest') ||
          product.title?.toLowerCase().includes('box') ||
          product.title?.toLowerCase().includes('set')
        );
      }

      if (activeCategoryId === 'raje') {
        return (
          product.collection === 'Raje' ||
          product.category === 'Raje' ||
          product.title?.toLowerCase().includes('poly-satin') ||
          product.title?.toLowerCase().includes('raje')
        );
      }

      if (activeCategoryId === 'maharaje') {
        return (
          product.collection === 'Maharaje' ||
          product.category === 'Maharaje' ||
          product.craft?.toLowerCase().includes('tanchoi') ||
          product.craft?.toLowerCase().includes('chikankari')
        );
      }

      if (activeCategoryId === 'stoles') {
        return (
          product.title?.toLowerCase().includes('stole') ||
          product.title?.toLowerCase().includes('neckerchief') ||
          product.fabric?.toLowerCase().includes('raw silk') ||
          product.craft?.toLowerCase().includes('silk weave')
        );
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
      if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0; // featured default
    });
  }, [products, activeCategoryId, sortBy]);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategoryId]);

  return (
    <div className="bg-[#fcfbf9] min-h-screen text-neutral-900 font-sans pb-24">
      {/* 1. TOP EDITORIAL HERO HEADER */}
      <section className="bg-[#121212] text-white pt-10 pb-14 sm:pb-20 border-b border-neutral-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4">
            <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <span>/</span>
            <span className="text-white font-bold">Categories</span>
            {activeCategory && (
              <>
                <span>/</span>
                <span className="text-neutral-300">{activeCategory.name}</span>
              </>
            )}
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-[10px] uppercase font-bold tracking-[0.2em]">
              <Crown className="w-3 h-3 text-white" />
              <span>Royal Indian Craft Traditions</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Atelier Categories
            </h1>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed font-light">
              Explore our master-crafted categories spanning 400-year Banarasi Tanchoi brocades, Awadhi shadow chikankari, natural indigo Ajrakh, vibrant daily silks, and bespoke heirloom gift chests.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY PILL NAVIGATION BAR */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center space-x-2 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveCategoryId('all')}
              className={`px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategoryId === 'all'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              All Categories ({products.length})
            </button>

            {categoriesData.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-neutral-700 text-white' : 'bg-neutral-200 text-neutral-600'
                  }`}>
                    {cat.productCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* 3. ACTIVE CATEGORY SPOTLIGHT HERO (If category selected) */}
        {activeCategory ? (
          <div className="mb-12 bg-white rounded-xs border border-neutral-200 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Preview */}
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-xs overflow-hidden bg-neutral-900">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = activeCategory.secondaryImage;
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-black/80 text-white text-[10px] font-sans font-bold uppercase tracking-wider rounded-xs backdrop-blur-md">
                    {activeCategory.badge}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block">
                    Origin: {activeCategory.origin}
                  </span>
                  <h2 className="font-sans text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
                    {activeCategory.name}
                  </h2>
                  <p className="text-xs font-mono font-bold text-neutral-500">
                    {activeCategory.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                  {activeCategory.longDescription}
                </p>

                <div className="p-3.5 bg-neutral-50 rounded-xs border border-neutral-200/80 space-y-1 text-xs">
                  <span className="font-bold text-black uppercase tracking-wider block text-[11px]">
                    Sartorial Styling Note:
                  </span>
                  <p className="text-neutral-600 font-light">
                    {activeCategory.stylingTip}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <div className="text-xs font-mono">
                    <span className="text-neutral-500 block">Starting from:</span>
                    <span className="text-base font-bold text-black">
                      ₹{activeCategory.startingPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => navigateTo('builder')}
                    className="px-6 py-2.5 bg-black text-white hover:bg-neutral-800 text-xs font-sans font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    Build Custom Box with this Craft
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ALL CATEGORIES VISUAL GRID SHOWCASE */
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-sans text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-black">
                Explore All {categoriesData.length} Signature Categories
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoriesData.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className="group bg-white rounded-xs border border-neutral-200 overflow-hidden cursor-pointer select-none transition-all duration-300 hover:shadow-xl hover:border-black flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = cat.secondaryImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider bg-black/80 text-white border border-neutral-700/80 backdrop-blur-md rounded-xs">
                        {cat.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-14">
                      <h3 className="font-sans font-bold text-lg text-white uppercase tracking-tight line-clamp-1">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-neutral-300 font-mono truncate">
                        {cat.origin}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed font-light">
                      {cat.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-neutral-100 text-xs font-mono">
                      <span className="text-neutral-500">{cat.productCount} creations</span>
                      <span className="font-bold text-black">From ₹{cat.startingPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PRODUCT LISTING FOR CATEGORY WITH CONTROLS */}
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-neutral-600">
                Showing <strong>{filteredProducts.length}</strong> creations
                {activeCategory ? ` in ${activeCategory.name}` : ''}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs font-sans text-neutral-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-neutral-300 rounded-xs px-3 py-1.5 text-xs text-neutral-900 font-sans focus:outline-none focus:border-black cursor-pointer shadow-2xs"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Product Grid (Shopify Gravity Style) */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xs border border-neutral-200">
              <Sparkles className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <h3 className="font-sans font-bold text-base text-neutral-800">No creations found in this category</h3>
              <p className="text-xs text-neutral-500 mt-1">Try selecting a different atelier category above.</p>
              <button
                onClick={() => setActiveCategoryId('all')}
                className="mt-4 px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xs"
              >
                View All Categories
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const MensCollectionPage = () => {
  const { navigateTo } = useShop();

  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const subcategories = [
    'All',
    'Tanchoi Brocade (₹3,360)',
    'Chikankari Silk (₹3,675)',
    'Raw Silk (₹2,625)',
    'Pure Linen (₹600)',
    'Poly Satin (₹500)',
    'Hakoba Eyelet (₹700)',
    'Ajrakh & Ikkat',
    'Stoles & Neckerchiefs',
    'Gift Boxes'
  ];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeSubcategory !== 'All') {
      if (activeSubcategory === 'Tanchoi Brocade (₹3,360)') {
        list = list.filter((p) => p.category === 'Tanchui Silk' || p.craft?.toLowerCase().includes('tanchoi'));
      } else if (activeSubcategory === 'Chikankari Silk (₹3,675)') {
        list = list.filter((p) => p.category?.toLowerCase().includes('chikankari') || p.craft?.toLowerCase().includes('chikankari'));
      } else if (activeSubcategory === 'Raw Silk (₹2,625)') {
        list = list.filter((p) => p.category === 'Raw Silk' || p.craft?.toLowerCase().includes('raw silk'));
      } else if (activeSubcategory === 'Pure Linen (₹600)') {
        list = list.filter((p) => p.category === 'Linen');
      } else if (activeSubcategory === 'Poly Satin (₹500)') {
        list = list.filter((p) => p.category === 'Poly Satin');
      } else if (activeSubcategory === 'Hakoba Eyelet (₹700)') {
        list = list.filter((p) => p.category === 'Hakoba');
      } else if (activeSubcategory === 'Ajrakh & Ikkat') {
        list = list.filter((p) => p.craft?.toLowerCase().includes('ajrakh') || p.craft?.toLowerCase().includes('ikat') || p.category?.toLowerCase().includes('ikkat'));
      } else if (activeSubcategory === 'Stoles & Neckerchiefs') {
        list = list.filter((p) => p.category === 'Stoles & Neckerchiefs');
      } else if (activeSubcategory === 'Gift Boxes') {
        list = list.filter((p) => p.category?.toLowerCase().includes('gift') || p.category?.toLowerCase().includes('raje pocket square') || p.category?.toLowerCase().includes('maharaje pocket square'));
      }
    }

    if (sortBy === 'price-low-high') {
      list.sort((a, b) => a.priceINR - b.priceINR);
    } else if (sortBy === 'price-high-low') {
      list.sort((a, b) => b.priceINR - a.priceINR);
    }

    return list;
  }, [activeSubcategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">Collections</span>
          <span>/</span>
          <span className="text-neutral-900 font-medium">Men's Royal Atelier</span>
        </nav>
      </div>

      {/* Hero Banner (Dress For Every Part You Play) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="relative overflow-hidden aspect-[21/9] sm:aspect-[24/7] bg-neutral-900 mb-6">
          <img
            src="/images/nicobar_hero_dress_for_every_part_4k.jpg"
            alt="Men's Royal Collection"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent flex items-center p-6 sm:p-12">
            <div className="max-w-xl text-white">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase font-semibold text-[#d4af37] block mb-2">
                The Gentleman's Court
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.16em] font-light mb-3">
                DRESS FOR EVERY PART YOU PLAY
              </h1>
              <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-200/90 font-light">
                Bespoke pure silk bandhgalas, master-crafted kurtas, and artisanal pocket squares born from Varanasi, Awadh, and Kutch.
              </p>
            </div>
          </div>
        </div>

        {/* Subcategory Pills */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 scrollbar-none border-b border-neutral-100">
          {subcategories.map((subcat) => (
            <button
              key={subcat}
              onClick={() => setActiveSubcategory(subcat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                activeSubcategory === subcat
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-[#f6f5f0] text-neutral-700 hover:bg-neutral-200/80'
              }`}
            >
              {subcat}
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-xs font-sans text-neutral-500 tracking-wide font-light">
            {filteredProducts.length} Items Available
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs sm:text-sm uppercase tracking-wider font-medium text-neutral-900 pr-7 pl-2 py-1 border-b border-neutral-300 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensCollectionPage;

import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown, Sparkles } from 'lucide-react';

const WomensCollectionPage = () => {
  const { navigateTo } = useShop();

  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const subcategories = [
    'All',
    'Evening Tanchoi',
    'Awadhi Chikankari',
    'Raw Silk Weaves',
    'Ikat & Ajrakh',
    'Festive Keepsakes',
  ];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeSubcategory !== 'All') {
      if (activeSubcategory === 'Evening Tanchoi') {
        list = list.filter((p) => p.craft?.toLowerCase().includes('tanchoi') || p.category === 'Tanchui Silk');
      } else if (activeSubcategory === 'Awadhi Chikankari') {
        list = list.filter((p) => p.craft?.toLowerCase().includes('chikan') || p.category.includes('Chikankari'));
      } else if (activeSubcategory === 'Raw Silk Weaves') {
        list = list.filter((p) => p.craft?.toLowerCase().includes('raw silk') || p.category === 'Raw Silk');
      } else if (activeSubcategory === 'Ikat & Ajrakh') {
        list = list.filter((p) => p.craft?.toLowerCase().includes('ajrakh') || p.craft?.toLowerCase().includes('ikat'));
      } else if (activeSubcategory === 'Festive Keepsakes') {
        list = list.filter((p) => p.department === 'gifting' || p.id.includes('box') || p.id.includes('chest') || p.id.includes('suite'));
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
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-[#7E746F] font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-[#241A16] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#241A16] font-medium">Women's Evening Edit</span>
        </nav>
      </div>

      {/* Hero Category Banner (Matching Screenshot 2) */}
      <div className="relative w-full h-72 sm:h-96 lg:h-[420px] overflow-hidden bg-neutral-900 select-none">
        <img
          src="/images/nicobar_women_banner_4k.jpg"
          alt="Where The Evening Begins - Women's Festive Edit"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-8 sm:bottom-12 text-center px-4 max-w-2xl mx-auto text-white">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#FFDF78] block mb-2">
            THE EVENING EDIT &bull; NICOSERA
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.16em] font-light leading-tight drop-shadow-md">
            WHERE THE EVENING BEGINS
          </h1>
          <p className="text-xs sm:text-sm font-sans tracking-wider text-neutral-200/90 font-light mt-2 max-w-lg mx-auto">
            Sensual silks, gossamer Awadhi needlework, master Banarasi brocades, and heirloom wax-sealed keepsakes.
          </p>
        </div>
      </div>

      {/* Filters & Subcategories Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[#E8E1D3]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-xs whitespace-nowrap transition-all ${
                  activeSubcategory === sub
                    ? 'bg-[#241A16] text-white shadow-sm'
                    : 'bg-white text-[#7E746F] border border-[#E8E1D3] hover:border-[#241A16] hover:text-[#241A16]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
            <span className="text-xs text-[#7E746F] font-sans">
              {filteredProducts.length} creations
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[#E8E1D3] text-xs font-sans uppercase tracking-wider text-[#241A16] pl-3 pr-8 py-2 rounded-xs cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomensCollectionPage;

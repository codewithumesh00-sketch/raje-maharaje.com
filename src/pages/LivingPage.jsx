import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const LivingPage = () => {
  const { navigateTo } = useShop();
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    'All',
    'Dining & Tableware',
    'Drinkware & Kulhars',
    'Serveware & Platters',
    'Home Decor & Brass',
  ];

  const livingProducts = useMemo(() => {
    let list = products.filter(
      (p) =>
        p.department === 'living' ||
        p.category?.toLowerCase().includes('dining') ||
        p.category?.toLowerCase().includes('decor') ||
        p.category?.toLowerCase().includes('home') ||
        p.id.includes('celestial') ||
        p.id.includes('mugs')
    );

    if (activeFilter !== 'All') {
      if (activeFilter === 'Dining & Tableware') {
        list = list.filter(p => p.title.toLowerCase().includes('dinner') || p.title.toLowerCase().includes('plate') || p.title.toLowerCase().includes('bowl') || p.category.toLowerCase().includes('dining'));
      } else if (activeFilter === 'Drinkware & Kulhars') {
        list = list.filter(p => p.title.toLowerCase().includes('mug') || p.title.toLowerCase().includes('kulhar') || p.title.toLowerCase().includes('glass') || p.title.toLowerCase().includes('drink'));
      } else if (activeFilter === 'Serveware & Platters') {
        list = list.filter(p => p.title.toLowerCase().includes('platter') || p.title.toLowerCase().includes('tray') || p.title.toLowerCase().includes('serve'));
      } else if (activeFilter === 'Home Decor & Brass') {
        list = list.filter(p => p.title.toLowerCase().includes('vase') || p.title.toLowerCase().includes('brass') || p.title.toLowerCase().includes('candle') || p.category.toLowerCase().includes('decor'));
      }
    }

    if (sortBy === 'price-low-high') {
      list.sort((a, b) => a.priceINR - b.priceINR);
    } else if (sortBy === 'price-high-low') {
      list.sort((a, b) => b.priceINR - a.priceINR);
    }

    return list;
  }, [activeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] select-none">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-[#7E746F] font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-[#241A16] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#241A16] font-medium">House &amp; Home</span>
        </nav>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-72 sm:h-96 lg:h-[420px] overflow-hidden bg-neutral-900 select-none">
        <img
          src="/images/nicobar_hero_gifts_stars_4k.jpg"
          alt="Nicobar House and Home Collection"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-8 sm:bottom-12 text-center px-4 max-w-2xl mx-auto text-white">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#FFDF78] block mb-2">
            MINDFUL SANCTUARIES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.16em] font-light leading-tight drop-shadow-md">
            HOUSE &amp; HOME
          </h1>
          <p className="text-xs sm:text-sm font-sans tracking-wider text-neutral-200/90 font-light mt-2 max-w-lg mx-auto">
            From handcrafted stoneware dinner sets and kulhars to celestial brassware and botanical dining accents.
          </p>
        </div>
      </div>

      {/* Filter and Sorting Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[#E8E1D3]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-xs whitespace-nowrap transition-all ${
                  activeFilter === cat
                    ? 'bg-[#241A16] text-white shadow-sm'
                    : 'bg-white text-[#7E746F] border border-[#E8E1D3] hover:border-[#241A16] hover:text-[#241A16]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
            <span className="text-xs text-[#7E746F] font-sans">
              {livingProducts.length} objects
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

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {livingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivingPage;

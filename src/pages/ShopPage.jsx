import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import categoriesData from '../data/categories';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown, X, Check } from 'lucide-react';

const ShopPage = () => {
  const { products, navigateTo } = useShop();

  const [activeCategory, setActiveCategory] = useState('All');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10500);
  const [sortBy, setSortBy] = useState('featured');

  const categoryChips = [
    'All',
    'Tanchui Silk',
    'Chikankari embroidery on Tussar Silk',
    'Raw Silk',
    'Poly Satin',
    'Linen',
    'Hakoba',
    'Ajrakh block print on Modal Silk',
    'Ikkat Silk',
    'Madhubani painting on Tussar silk',
    'Raje Pocket Square',
    'Maharaje Pocket Square'
  ];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category chip filter
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory || p.craft?.toLowerCase().includes(activeCategory.toLowerCase()));
    }

    // Collection filter
    if (selectedCollections.length > 0) {
      list = list.filter((p) => selectedCollections.includes(p.collection));
    }

    // Max price
    list = list.filter((p) => p.priceINR <= maxPrice);

    // Sorting
    if (sortBy === 'price-low-high') {
      list.sort((a, b) => a.priceINR - b.priceINR);
    } else if (sortBy === 'price-high-low') {
      list.sort((a, b) => b.priceINR - a.priceINR);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return list;
  }, [products, activeCategory, selectedCollections, maxPrice, sortBy]);

  const clearAllFilters = () => {
    setActiveCategory('All');
    setSelectedCollections([]);
    setMaxPrice(10500);
  };

  const toggleCollection = (col) => {
    setSelectedCollections((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    );
  };

  const activeFilterCount =
    (activeCategory !== 'All' ? 1 : 0) +
    selectedCollections.length +
    (maxPrice < 10500 ? 1 : 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">Shop</span>
          <span>/</span>
          <span className="text-neutral-900 font-medium">All Products</span>
        </nav>
      </div>

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-2">
            Wedding Favors &bull; Corporate Gifts
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif uppercase tracking-[0.16em] font-light text-neutral-900 mb-2">
            ALL PRODUCTS
          </h1>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-500 font-light">
            We craft pocket squares, stoles, and neckerchiefs that blend Indian heritage with modern design — for effortless sophistication and unforgettable gifting.
          </p>
        </div>

        {/* Category Scrollable Chips (All 13 from rajemaharaje.com) */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 scrollbar-none border-b border-neutral-100">
          {categoryChips.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-[#f6f5f0] text-neutral-700 hover:bg-neutral-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sticky Filter Toolbar */}
      <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => setFilterDrawerOpen(true)}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm uppercase tracking-wider font-medium text-neutral-900 hover:text-black py-1 px-3 border border-neutral-300 hover:border-black transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          <span className="text-xs font-sans text-neutral-500 tracking-wide font-light hidden sm:inline">
            {filteredProducts.length} Items Found
          </span>

          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium hidden md:inline">
              Sort By:
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
                <option value="rating">Customer Rating</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12">
            {filteredProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#faf9f5] max-w-md mx-auto p-8 border border-neutral-200">
            <h3 className="text-base uppercase tracking-widest font-serif text-neutral-800 mb-2">
              No Items Found
            </h3>
            <p className="text-xs text-neutral-500 mb-6 font-light">
              Try adjusting your filter selection to discover more handcrafted creations.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Drawer */}
      {filterDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setFilterDrawerOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
          />

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-left">
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <h3 className="text-sm font-serif uppercase tracking-[0.2em] font-semibold text-neutral-900">
                Filter Products
              </h3>
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 text-neutral-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-3">
                  Collection
                </h4>
                <div className="space-y-2">
                  {['Raje', 'Maharaje'].map((col) => (
                    <label
                      key={col}
                      className="flex items-center space-x-3 text-xs text-neutral-700 cursor-pointer select-none hover:text-black"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCollections.includes(col)}
                        onChange={() => toggleCollection(col)}
                        className="rounded border-neutral-300 text-black focus:ring-black w-4 h-4"
                      />
                      <span>{col} Line</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-900">
                    Max Price
                  </h4>
                  <span className="text-xs font-mono font-medium text-neutral-700">
                    ₹ {maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10500"
                  step="250"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                  <span>₹ 500 (Poly Satin)</span>
                  <span>₹ 10,500 (Grand Chest)</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-neutral-200 flex space-x-3 bg-[#faf9f5]">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-3 text-xs uppercase tracking-widest font-medium text-neutral-700 hover:text-black border border-neutral-300 hover:border-black transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="flex-1 py-3 bg-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;

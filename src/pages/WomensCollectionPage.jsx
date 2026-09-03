import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, X, ChevronDown, Check } from 'lucide-react';

const WomensCollectionPage = () => {
  const { navigateTo } = useShop();

  // Active Category Chip Filter
  const [activeSubcategory, setActiveSubcategory] = useState('All');

  // Slide-out Filter Drawer State
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Filter criteria
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCrafts, setSelectedCrafts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(15000);

  // Sorting
  const [sortBy, setSortBy] = useState('featured');

  // Subcategories / Chips
  const subcategories = [
    'All',
    'Scarves & Stoles',
    'Kurtas & Tunics',
    'Chikankari Silks',
    'Tanchoi Weaves',
    'Gift Sets',
  ];

  const sizeOptions = ['Free Size', 'XS', 'S', 'M', 'L', 'XL'];
  const colorOptions = [
    { name: 'Fuchsia Pink', hex: '#D6226B' },
    { name: 'Mustard Gold', hex: '#D4AF37' },
    { name: 'Royal Emerald', hex: '#1B4D3E' },
    { name: 'Pearl Ivory', hex: '#FAF0E6' },
    { name: 'Rani Pink', hex: '#E0115F' },
    { name: 'Sapphire Blue', hex: '#0F52BA' },
    { name: 'Imperial Burgundy', hex: '#67162E' },
  ];
  const craftOptions = [
    'Pure Mulberry Silk Hand-Print',
    'Awadhi Shadow Chikankari',
    'Banarasi Kadhwa Weave',
    'Tanchoi Brocade',
    'Bespoke Curated Set',
  ];

  // Filter logic: match women department or women-suitable items
  const filteredProducts = useMemo(() => {
    let list = products.filter(
      (p) =>
        p.department === 'women' ||
        p.collection === "Women's New Arrivals" ||
        p.category === 'Scarves & Stoles' ||
        p.category === 'Kurtas & Tunics' ||
        p.category === 'Gift Sets' ||
        p.craft?.toLowerCase().includes('chikankari')
    );

    // Subcategory chip filter
    if (activeSubcategory !== 'All') {
      if (activeSubcategory === 'Chikankari Silks') {
        list = list.filter((p) => p.craft?.toLowerCase().includes('chikankari') || p.title.toLowerCase().includes('chikankari'));
      } else if (activeSubcategory === 'Tanchoi Weaves') {
        list = list.filter((p) => p.craft?.toLowerCase().includes('tanchoi') || p.title.toLowerCase().includes('tanchoi'));
      } else {
        list = list.filter((p) => p.category === activeSubcategory);
      }
    }

    // Size filter
    if (selectedSizes.length > 0) {
      list = list.filter((p) => {
        const pSizes = p.sizes || ['Free Size'];
        return selectedSizes.some((s) => pSizes.includes(s));
      });
    }

    // Color filter
    if (selectedColors.length > 0) {
      list = list.filter((p) => {
        if (!p.colors) return false;
        return selectedColors.some((sc) => p.colors.some((c) => c.name.toLowerCase().includes(sc.toLowerCase())));
      });
    }

    // Craft filter
    if (selectedCrafts.length > 0) {
      list = list.filter((p) => selectedCrafts.includes(p.craft));
    }

    // Max Price filter
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
  }, [activeSubcategory, selectedSizes, selectedColors, selectedCrafts, maxPrice, sortBy]);

  const activeFilterCount =
    selectedSizes.length +
    selectedColors.length +
    selectedCrafts.length +
    (maxPrice < 15000 ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedCrafts([]);
    setMaxPrice(15000);
    setActiveSubcategory('All');
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (colorName) => {
    setSelectedColors((prev) =>
      prev.includes(colorName) ? prev.filter((c) => c !== colorName) : [...prev, colorName]
    );
  };

  const toggleCraft = (craft) => {
    setSelectedCrafts((prev) =>
      prev.includes(craft) ? prev.filter((c) => c !== craft) : [...prev, craft]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">Collections</span>
          <span>/</span>
          <span className="text-neutral-900 font-medium">Women's New Arrivals</span>
        </nav>
      </div>

      {/* Editorial Collection Banner & Story (Matches Nicobar PLP Header) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="relative overflow-hidden aspect-[21/9] sm:aspect-[24/7] bg-neutral-100 mb-6">
          <img
            src="/images/nicobar_women_banner_4k.jpg"
            alt="Women's New Arrivals Collection"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center p-6 sm:p-12">
            <div className="max-w-xl text-white">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase font-semibold text-[#d4af37] block mb-2">
                New Season Heritage
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.16em] font-light mb-3">
                WOMEN'S NEW ARRIVALS
              </h1>
              <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-200/90 font-light line-clamp-2 sm:line-clamp-none">
                Rooted in thoughtful royal design, creating a modern Indian way of living and dressing — through pure mulberry silks, hand-embroidered chikankari, and heritage scarves made to last.
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Subcategory Chips (Nicobar PLP Pill Filter Row) */}
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

      {/* Sticky Filter & Sort Toolbar */}
      <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Filter Trigger Button */}
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

          {/* Center: Total Count */}
          <span className="text-xs font-sans text-neutral-500 tracking-wide font-light hidden sm:inline">
            {filteredProducts.length} Products Found
          </span>

          {/* Right: Sort By Dropdown */}
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

      {/* Main Collection Product Grid (Exact Nicobar 4-Column Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#faf9f5] max-w-md mx-auto p-8 border border-neutral-200">
            <h3 className="text-base uppercase tracking-widest font-serif text-neutral-800 mb-2">
              No Treasures Match Filters
            </h3>
            <p className="text-xs text-neutral-500 mb-6 font-light">
              Try adjusting your filter selection or price slider to explore our royal artisan repertoire.
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

      {/* Slide-out Filter Drawer (Full Nicobar Filter Suite) */}
      {filterDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setFilterDrawerOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-left">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-serif uppercase tracking-[0.2em] font-semibold text-neutral-900">
                  Filter Products
                </h3>
                {activeFilterCount > 0 && (
                  <span className="text-xs text-neutral-400 font-sans">({activeFilterCount} Active)</span>
                )}
              </div>
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 text-neutral-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Filter Section: Size */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-3">
                  Size
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((size) => {
                    const isSelected = selectedSizes.includes(size);
                    return (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-wider border transition-all ${
                          isSelected
                            ? 'bg-black text-white border-black font-semibold'
                            : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filter Section: Color */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-3">
                  Color
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {colorOptions.map((c) => {
                    const isSelected = selectedColors.includes(c.name);
                    return (
                      <button
                        key={c.name}
                        onClick={() => toggleColor(c.name)}
                        className={`flex items-center space-x-2 px-3 py-2 border text-xs font-sans text-left transition-all ${
                          isSelected
                            ? 'border-black bg-neutral-50 font-medium'
                            : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="truncate text-neutral-800">{c.name}</span>
                        {isSelected && <Check className="w-3 h-3 ml-auto shrink-0 text-black" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filter Section: Craft */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-3">
                  Craft & Origin
                </h4>
                <div className="space-y-2">
                  {craftOptions.map((craft) => {
                    const isSelected = selectedCrafts.includes(craft);
                    return (
                      <label
                        key={craft}
                        className="flex items-center space-x-3 text-xs text-neutral-700 cursor-pointer select-none hover:text-black"
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleCraft(craft)}
                          className="rounded border-neutral-300 text-black focus:ring-black w-4 h-4"
                        />
                        <span>{craft}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Filter Section: Price Range */}
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
                  min="2000"
                  max="15000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                  <span>₹ 2,000</span>
                  <span>₹ 15,000</span>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
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

export default WomensCollectionPage;

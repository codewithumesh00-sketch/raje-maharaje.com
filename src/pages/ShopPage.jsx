import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, Grid3X3, LayoutGrid, X, Check, ArrowUpDown, Sparkles } from 'lucide-react';

const ShopPage = () => {
  const { products, formatPrice, navigateTo } = useShop();

  // Filter states
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [selectedCraft, setSelectedCraft] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [gridColumns, setGridColumns] = useState(4); // 2, 3, or 4
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Crafts available
  const craftOptions = ['All', 'Tanchoi Brocade', 'Chikankari Hand-Embroidery', 'Ajrakh Hand-Block Print', 'Pochampally Ikat Weave', 'Tussar & Raw Silk Weave', 'Bespoke Curated Set'];
  const collectionOptions = ['All', 'Raje', 'Maharaje', 'Gift Sets'];
  const priceOptions = [
    { id: 'All', label: 'All Prices' },
    { id: 'under-3500', label: 'Under ₹3,500', min: 0, max: 3500 },
    { id: '3500-5000', label: '₹3,500 – ₹5,000', min: 3500, max: 5000 },
    { id: 'above-5000', label: 'Above ₹5,000 (Gift Suites)', min: 5000, max: 999999 },
  ];

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Collection filter
      if (selectedCollection !== 'All' && p.collection !== selectedCollection && p.category !== selectedCollection) {
        return false;
      }
      // Craft filter
      if (selectedCraft !== 'All' && !p.craft.toLowerCase().includes(selectedCraft.toLowerCase())) {
        return false;
      }
      // Price range filter
      if (selectedPriceRange !== 'All') {
        const option = priceOptions.find((o) => o.id === selectedPriceRange);
        if (option && (p.priceINR < option.min || p.priceINR > option.max)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
      if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [products, selectedCollection, selectedCraft, selectedPriceRange, sortBy]);

  const activeFiltersCount = (selectedCollection !== 'All' ? 1 : 0) + (selectedCraft !== 'All' ? 1 : 0) + (selectedPriceRange !== 'All' ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCollection('All');
    setSelectedCraft('All');
    setSelectedPriceRange('All');
  };

  return (
    <div className="bg-cream-50 min-h-screen py-10 sm:py-14 text-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-xs font-serif text-obsidian-500 uppercase tracking-widest mb-2">
            <button onClick={() => navigateTo('home')} className="hover:text-gold-700">Home</button>
            <span>/</span>
            <span className="text-gold-800 font-semibold">The Sovereign Atelier</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-obsidian-900 uppercase">
            The Complete Atelier
          </h1>
          <p className="text-sm text-obsidian-600 font-serif mt-2 max-w-2xl">
            Explore 100% pure silk pocket squares, master brocades, hand-embroidered chikankari, and bespoke presentation chests.
          </p>
        </div>

        {/* Filter & View Control Bar (Shopify Gravity Theme Style) */}
        <div className="bg-white p-4 rounded-xl border border-cream-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Left: Filter Toggle & Active Count */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-obsidian-950 text-gold-300 text-xs uppercase tracking-wider font-semibold"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters ({activeFiltersCount})</span>
            </button>

            <span className="text-xs font-mono text-obsidian-600">
              Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> creations
            </span>
          </div>

          {/* Right: Sort & Grid Layout */}
          <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
            {/* Sort Select */}
            <div className="flex items-center space-x-2 text-xs font-sans">
              <span className="text-obsidian-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-cream-100 border border-cream-300 rounded-lg px-3 py-1.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500 font-sans cursor-pointer"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Patron Rating</option>
              </select>
            </div>

            {/* Grid Column Selector */}
            <div className="hidden sm:flex items-center space-x-1 border-l border-cream-300 pl-3">
              <button
                onClick={() => setGridColumns(3)}
                className={`p-1.5 rounded transition-colors ${
                  gridColumns === 3 ? 'bg-obsidian-950 text-gold-400' : 'text-obsidian-400 hover:text-obsidian-800'
                }`}
                title="3 Columns"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                className={`p-1.5 rounded transition-colors ${
                  gridColumns === 4 ? 'bg-obsidian-950 text-gold-400' : 'text-obsidian-400 hover:text-obsidian-800'
                }`}
                title="4 Columns"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs uppercase font-serif text-gold-800 font-semibold mr-1">
              Active Filters:
            </span>
            {selectedCollection !== 'All' && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-obsidian-950 text-gold-300 text-xs font-mono">
                <span>Line: {selectedCollection}</span>
                <X onClick={() => setSelectedCollection('All')} className="w-3 h-3 cursor-pointer hover:text-white" />
              </span>
            )}
            {selectedCraft !== 'All' && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-obsidian-950 text-gold-300 text-xs font-mono">
                <span>Craft: {selectedCraft}</span>
                <X onClick={() => setSelectedCraft('All')} className="w-3 h-3 cursor-pointer hover:text-white" />
              </span>
            )}
            {selectedPriceRange !== 'All' && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-obsidian-950 text-gold-300 text-xs font-mono">
                <span>Price: {priceOptions.find(o => o.id === selectedPriceRange)?.label}</span>
                <X onClick={() => setSelectedPriceRange('All')} className="w-3 h-3 cursor-pointer hover:text-white" />
              </span>
            )}
            <button
              onClick={clearAllFilters}
              className="text-xs text-rose-700 hover:underline font-serif ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar (3 cols) */}
          <div className="hidden lg:block lg:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-cream-300 shadow-sm sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-cream-200">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-obsidian-950">
                Refine Collection
              </h3>
              {activeFiltersCount > 0 && (
                <button onClick={clearAllFilters} className="text-xs text-gold-800 hover:underline font-serif">
                  Reset
                </button>
              )}
            </div>

            {/* Collection Filter */}
            <div>
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-gold-900 mb-2.5">
                Atelier Line
              </h4>
              <div className="space-y-1.5">
                {collectionOptions.map((col) => (
                  <button
                    key={col}
                    onClick={() => setSelectedCollection(col)}
                    className={`w-full flex items-center justify-between text-xs py-1 px-2 rounded transition-colors ${
                      selectedCollection === col
                        ? 'bg-obsidian-950 text-gold-300 font-semibold'
                        : 'text-obsidian-700 hover:bg-cream-100'
                    }`}
                  >
                    <span>{col === 'All' ? 'All Collections' : `${col} Line`}</span>
                    {selectedCollection === col && <Check className="w-3 h-3 text-gold-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Craft Filter */}
            <div className="pt-4 border-t border-cream-200">
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-gold-900 mb-2.5">
                Indian Heritage Weave
              </h4>
              <div className="space-y-1.5">
                {craftOptions.map((cr) => (
                  <button
                    key={cr}
                    onClick={() => setSelectedCraft(cr)}
                    className={`w-full flex items-center justify-between text-xs py-1 px-2 rounded transition-colors ${
                      selectedCraft === cr
                        ? 'bg-obsidian-950 text-gold-300 font-semibold'
                        : 'text-obsidian-700 hover:bg-cream-100'
                    }`}
                  >
                    <span className="truncate">{cr}</span>
                    {selectedCraft === cr && <Check className="w-3 h-3 text-gold-400 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="pt-4 border-t border-cream-200">
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-gold-900 mb-2.5">
                Price Range
              </h4>
              <div className="space-y-1.5">
                {priceOptions.map((pr) => (
                  <button
                    key={pr.id}
                    onClick={() => setSelectedPriceRange(pr.id)}
                    className={`w-full flex items-center justify-between text-xs py-1 px-2 rounded transition-colors ${
                      selectedPriceRange === pr.id
                        ? 'bg-obsidian-950 text-gold-300 font-semibold'
                        : 'text-obsidian-700 hover:bg-cream-100'
                    }`}
                  >
                    <span>{pr.label}</span>
                    {selectedPriceRange === pr.id && <Check className="w-3 h-3 text-gold-400" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid Area (9 cols) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-cream-300 text-center space-y-4">
                <p className="font-serif text-lg text-obsidian-700">
                  No creations matched your selected criteria.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 rounded-full bg-obsidian-950 text-gold-300 text-xs uppercase tracking-widest font-semibold hover:bg-gold-500 hover:text-obsidian-950"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  gridColumns === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}
              >
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white p-6 shadow-2xl flex flex-col justify-between z-50">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-cream-300">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-obsidian-950">
                  Refine Collection
                </h3>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-obsidian-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Collections */}
              <div className="mt-4 space-y-4 overflow-y-auto max-h-[70vh]">
                <div>
                  <h4 className="font-serif font-bold text-xs uppercase text-gold-900 mb-2">Atelier Line</h4>
                  <div className="space-y-1">
                    {collectionOptions.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedCollection(c)}
                        className={`w-full text-left text-xs p-2 rounded ${
                          selectedCollection === c ? 'bg-obsidian-950 text-gold-300 font-semibold' : 'text-obsidian-700'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-xs uppercase text-gold-900 mb-2">Weave / Craft</h4>
                  <div className="space-y-1">
                    {craftOptions.map((cr) => (
                      <button
                        key={cr}
                        onClick={() => setSelectedCraft(cr)}
                        className={`w-full text-left text-xs p-2 rounded ${
                          selectedCraft === cr ? 'bg-obsidian-950 text-gold-300 font-semibold' : 'text-obsidian-700'
                        }`}
                      >
                        {cr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 rounded-full bg-obsidian-950 text-gold-300 font-bold text-xs uppercase tracking-widest"
            >
              Apply Filters ({filteredProducts.length} Results)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;

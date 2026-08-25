import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, X, ArrowRight } from 'lucide-react';

const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, products, formatPrice, navigateToProduct } = useShop();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const results = searchTerm.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.craft.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.fabric.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.collection.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const quickTags = ['Tanchoi Brocade', 'Chikankari', 'Ajrakh', 'Ikat Weave', 'Gift Chest', 'Blue', 'Gold'];

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto flex items-start justify-center pt-16 sm:pt-24 p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      ></div>

      {/* Search Box Container */}
      <div className="relative bg-white text-black rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 z-[101]">
        {/* Search Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div className="flex items-center space-x-2 text-black">
            <Search className="w-5 h-5" />
            <span className="font-sans text-base font-extrabold uppercase tracking-wider">
              Search Products
            </span>
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-full text-neutral-500 hover:text-black transition-colors"
          >
            <div className="w-7 h-7 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center">
              <X className="w-4 h-4 text-black" />
            </div>
          </button>
        </div>

        {/* Input */}
        <div className="mt-4 relative">
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by weave, fabric, craft, or color (e.g. Tanchoi, Chikankari, Blue)..."
            className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black font-sans"
          />
        </div>

        {/* Quick Tag Recommendations */}
        {!searchTerm && (
          <div className="mt-6">
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-2.5 font-sans">
              Popular Searches:
            </p>
            <div className="flex flex-wrap gap-2">
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-800 hover:bg-black hover:text-white transition-colors font-sans"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {searchTerm && (
          <div className="mt-6 max-h-96 overflow-y-auto space-y-2 pr-1">
            <div className="text-xs font-mono text-neutral-500 mb-2">
              Found {results.length} creations matching "{searchTerm}"
            </div>
            {results.length === 0 ? (
              <div className="p-8 text-center text-neutral-500 font-sans text-xs">
                No matching creations found. Try searching for "Tanchoi", "Chikankari", or "Silk".
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigateToProduct(product.id);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center space-x-4 p-3 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-black cursor-pointer transition-all group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-14 h-14 object-cover rounded-lg bg-white border border-neutral-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                      {product.craft} • {product.collection}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-black truncate group-hover:underline">
                      {product.title}
                    </h4>
                    <p className="text-xs text-black font-mono font-semibold">
                      {formatPrice(product.priceINR)}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;

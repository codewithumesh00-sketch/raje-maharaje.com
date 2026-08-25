import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

const ProductGrid = () => {
  const { products, navigateTo } = useShop();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'bestsellers', label: 'Best Sellers' },
    { id: 'tanchoi', label: 'Tanchoi Brocades' },
    { id: 'chikankari', label: 'Chikankari' },
    { id: 'ajrakh-ikat', label: 'Ajrakh & Ikat' },
    { id: 'gift-sets', label: 'Gift Chests' },
  ];

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'bestsellers') return p.isBestSeller || p.badge?.includes('Best') || p.badge?.includes('Signature');
    if (activeTab === 'tanchoi') return p.craft.includes('Tanchoi') || p.title.toLowerCase().includes('tanchoi');
    if (activeTab === 'chikankari') return p.craft.includes('Chikankari') || p.title.toLowerCase().includes('chikankari');
    if (activeTab === 'ajrakh-ikat') return p.craft.includes('Ajrakh') || p.craft.includes('Ikat') || p.title.toLowerCase().includes('ikat') || p.title.toLowerCase().includes('ajrakh');
    if (activeTab === 'gift-sets') return p.category === 'Gift Sets' || p.title.toLowerCase().includes('gift') || p.title.toLowerCase().includes('chest');
    return true;
  });

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-400 font-sans block mb-1">
              New In • Handcrafted Collection
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">
              Trending Treasures
            </h2>
          </div>

          <button
            onClick={() => navigateTo('shop')}
            className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-500 transition-colors pb-1 border-b border-black self-start sm:self-auto"
          >
            <span>View All ({products.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clean Filter Tabs (H&M style) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 content-visibility-auto">
          {filteredProducts.slice(0, 8).map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

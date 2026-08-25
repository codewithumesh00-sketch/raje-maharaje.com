import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const TrendingNow = () => {
  const { products, navigateTo } = useShop();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Royal Edits' },
    { id: 'tanchoi', label: 'Tanchoi Brocades' },
    { id: 'chikankari', label: 'Awadhi Chikankari' },
    { id: 'ajrakh-ikat', label: 'Ajrakh & Ikat' },
    { id: 'maharaje', label: 'The Maharaje Line' },
    { id: 'gift-chests', label: 'Bespoke Chests' },
  ];

  // Specific badges matching Reference Image 4
  const image4Badges = [
    { badge: '14% OFF', isSoldOut: false },
    { badge: '16% OFF', isSoldOut: false },
    { badge: 'Sold out', isSoldOut: true },
    { badge: '4% OFF', isSoldOut: false },
    { badge: '23% OFF', isSoldOut: false },
    { badge: '21% OFF', isSoldOut: false },
    { badge: '6% OFF', isSoldOut: false },
    { badge: '15% OFF', isSoldOut: false }
  ];

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'tanchoi') return p.craft?.toLowerCase().includes('tanchoi') || p.title?.toLowerCase().includes('tanchoi');
    if (activeTab === 'chikankari') return p.craft?.toLowerCase().includes('chikankari') || p.title?.toLowerCase().includes('chikankari');
    if (activeTab === 'ajrakh-ikat') return p.craft?.toLowerCase().includes('ajrakh') || p.craft?.toLowerCase().includes('ikat') || p.title?.toLowerCase().includes('ikat');
    if (activeTab === 'maharaje') return p.collection === 'Maharaje';
    if (activeTab === 'gift-chests') return p.category === 'Gift Sets' || p.title?.toLowerCase().includes('chest') || p.title?.toLowerCase().includes('box');
    return true;
  });

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Exact Shopify Gravity Preset Look - Image 4) */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900">
            Trending // Now
          </h2>

          <button
            onClick={() => navigateTo('shop')}
            className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-500 transition-colors pb-0.5 border-b border-neutral-900 flex items-center space-x-1.5"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-sans font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 8 Product Cards Grid (4 columns x 2 rows matching Image 4) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 content-visibility-auto">
          {filteredProducts.slice(0, 8).map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              customDiscountBadge={image4Badges[idx]?.badge}
              isSoldOut={image4Badges[idx]?.isSoldOut}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;

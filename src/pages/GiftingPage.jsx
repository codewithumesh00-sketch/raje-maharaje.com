import React from 'react';
import { useShop } from '../context/ShopContext';
import GiftingWorldShowcase from '../components/GiftingWorldShowcase';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Gift, ShieldCheck, Sparkles, Send } from 'lucide-react';

const GiftingPage = () => {
  const { navigateTo } = useShop();

  const giftProducts = products.filter(
    (p) => p.category === 'Gift Sets' || p.department === 'gifting' || p.badge?.toLowerCase().includes('set')
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-medium">Gifting World</span>
        </nav>
      </div>

      {/* Dual Showcase Section (Screenshot 5 Replica) */}
      <GiftingWorldShowcase />

      {/* Gifting Repertoire Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium block mb-1">
            Handmade Heirloom Suites
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif uppercase tracking-wider text-neutral-900">
            Curated Presentation Chests
          </h2>
          <div className="w-12 h-px bg-neutral-300 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12">
          {giftProducts.map((p, idx) => (
            <ProductCard key={p.id} product={p} index={idx} />
          ))}
        </div>
      </section>

      {/* Bespoke Box Builder CTA Banner */}
      <section className="bg-[#111622] text-white py-16 px-4 sm:px-6 my-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Sparkles className="w-8 h-8 text-[#d4af37] mx-auto" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.18em] font-light">
            BUILD YOUR OWN BESPOKE PRESENTATION BOX
          </h3>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-300 font-light max-w-xl mx-auto">
            Select your favourite pocket squares or silk scarves, choose your luxury rigid chest colour, and add a molten brass wax seal with custom monogram initials.
          </p>
          <div>
            <button
              onClick={() => navigateTo('builder')}
              className="px-8 py-3.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4af37] hover:text-black transition-all shadow-xl"
            >
              Open Box Builder
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftingPage;

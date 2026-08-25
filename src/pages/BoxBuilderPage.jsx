import React from 'react';
import BespokeBoxBuilder from '../components/BespokeBoxBuilder';
import UnboxExperience from '../components/UnboxExperience';
import { Sparkles, Gift, Crown } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const BoxBuilderPage = () => {
  const { navigateTo } = useShop();

  return (
    <div className="bg-obsidian-950 text-cream-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="border-b border-gold-900/40 py-16 px-4 sm:px-6 lg:px-8 bg-obsidian-900/80 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-950 border border-gold-500/40 text-gold-300 text-xs uppercase tracking-[0.25em]">
            <Crown className="w-3.5 h-3.5 text-gold-400" />
            <span>The Bespoke Gifting Atelier</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-gold-100">
            Curate A Royal Heirloom
          </h1>

          <p className="text-sm sm:text-base text-cream-300 font-serif max-w-2xl mx-auto leading-relaxed">
            Design a personalized presentation chest for grooms, celebratory wedding favours, or distinguished executive gifting. Handcrafted in India with complimentary calligraphy cards and molten wax seal authentication.
          </p>
        </div>
      </div>

      {/* Main Interactive Configurator */}
      <BespokeBoxBuilder />

      {/* Packaging Styles Overview */}
      <UnboxExperience />
    </div>
  );
};

export default BoxBuilderPage;

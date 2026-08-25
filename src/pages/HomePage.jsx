import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ExploreCategory from '../components/ExploreCategory';
import ExploreCollection from '../components/ExploreCollection';
import GravityCategoriesShowcase from '../components/GravityCategoriesShowcase';
import TrendingNow from '../components/TrendingNow';
import FeaturedProductQuickBuy from '../components/FeaturedProductQuickBuy';
import RoyalAtelierVideoSection from '../components/RoyalAtelierVideoSection';
import DualSpotlight from '../components/DualSpotlight';
import UnboxExperience from '../components/UnboxExperience';
import BespokeBoxBuilder from '../components/BespokeBoxBuilder';
import CraftHeritageGrid from '../components/CraftHeritageGrid';
import PocketSquareGuide from '../components/PocketSquareGuide';
import ReviewsSection from '../components/ReviewsSection';

const HomePage = () => {
  return (
    <div className="space-y-0 selection:bg-black selection:text-white">
      {/* 1. Hero Lookbook Showcase with 4K Cutout Switcher */}
      <HeroBanner />

      {/* 2. EXPLORE // CATEGORY (Shopify Gravity Preset Reference Image 1) */}
      <ExploreCategory />

      {/* 3. EXPLORE // COLLECTION (Shopify Gravity Preset Reference Image 2) */}
      <ExploreCollection />

      {/* 4. Dark Staggered Categories Showcase (Shopify Gravity Preset Reference Image 3) */}
      <GravityCategoriesShowcase />

      {/* 5. TRENDING // NOW Glassmorphic Products Grid (Shopify Gravity Preset Reference Image 4) */}
      <TrendingNow />

      {/* 6. FEATURED // SIGNATURE PRODUCT QUICK BUY (Shopify Gravity Preset Reference Image 5) */}
      <FeaturedProductQuickBuy />

      {/* 7. Cinema // Royal Atelier Video Craftsmanship & Runway */}
      <RoyalAtelierVideoSection />

      {/* 8. Dual Spotlight: The Raje Line vs The Maharaje Line */}
      <DualSpotlight />

      {/* 9. Unboxing Experience & Rigid Presentation Chest Preview */}
      <UnboxExperience />

      {/* 10. Interactive Bespoke Box Builder */}
      <BespokeBoxBuilder />

      {/* 11. Pan-India Craft Heritage & Artisan Guilds */}
      <CraftHeritageGrid />

      {/* 12. Sartorial Pocket Square Folding Guide */}
      <PocketSquareGuide />

      {/* 13. Customer Reviews & Atelier Ratings */}
      <ReviewsSection />
    </div>
  );
};

export default HomePage;

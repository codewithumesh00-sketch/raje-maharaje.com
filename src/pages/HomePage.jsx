import React from 'react';
import HeroBanner from '../components/HeroBanner';
import GiftingWorldShowcase from '../components/GiftingWorldShowcase';
import ExploreCategory from '../components/ExploreCategory';
import TrendingNow from '../components/TrendingNow';
import UnboxExperience from '../components/UnboxExperience';
import CraftHeritageGrid from '../components/CraftHeritageGrid';
import BespokeBoxBuilder from '../components/BespokeBoxBuilder';
import PocketSquareGuide from '../components/PocketSquareGuide';
import ReviewsSection from '../components/ReviewsSection';

const HomePage = () => {
  return (
    <div className="space-y-0 selection:bg-black selection:text-white bg-white">
      {/* 1. Hero Carousel with Authentic 4K rajemaharaje.com Visuals & Slogans */}
      <HeroBanner />

      {/* 2. Two Signature Collections (RAJE vs MAHARAJE) */}
      <GiftingWorldShowcase />

      {/* 3. Shop by Craft & Category (All 13 Categories from rajemaharaje.com) */}
      <ExploreCategory />

      {/* 4. Best Sellers (Tanchoi, Chikankari on Tussar, Poly Satin, Linen, Hakoba, Raw Silk) */}
      <TrendingNow />

      {/* 5. Unbox the Regal Experience (RAJE Pink & Blue Boxes, MAHARAJE Small & Grand Boxes) */}
      <UnboxExperience />

      {/* 6. Discover Our Craft (The 4 Pillars of Studio Sankara) */}
      <CraftHeritageGrid />

      {/* 7. Interactive Bespoke Box Builder */}
      <BespokeBoxBuilder />

      {/* 8. Pocket Square Folding Guide */}
      <PocketSquareGuide />

      {/* 9. Praise from Patrons (Verified Testimonials from rajemaharaje.com) */}
      <ReviewsSection />
    </div>
  );
};

export default HomePage;

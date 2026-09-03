import React from 'react';
import HeroBanner from '../components/HeroBanner';
import GiftingWorldShowcase from '../components/GiftingWorldShowcase';
import ExploreCategory from '../components/ExploreCategory';
import TrendingNow from '../components/TrendingNow';
import DualSpotlight from '../components/DualSpotlight';
import UnboxExperience from '../components/UnboxExperience';
import BespokeBoxBuilder from '../components/BespokeBoxBuilder';
import CraftHeritageGrid from '../components/CraftHeritageGrid';
import PocketSquareGuide from '../components/PocketSquareGuide';
import ReviewsSection from '../components/ReviewsSection';

const HomePage = () => {
  return (
    <div className="space-y-0 selection:bg-black selection:text-white bg-white">
      {/* 1. Hero Carousel (The Season of Gold, Dress For Every Part, Gifts Written in Stars) */}
      <HeroBanner />

      {/* 2. Welcome to Our Gifting World (Dual Editorial Showcase Cards - Screenshot 5) */}
      <GiftingWorldShowcase />

      {/* 3. Explore Repertoire (Nicobar Circular/Oval Category Bubbles) */}
      <ExploreCategory />

      {/* 4. Trending Now / Curated Luxury New Arrivals */}
      <TrendingNow />

      {/* 5. Dual Spotlight: The Raje Line vs The Maharaje Line */}
      <DualSpotlight />

      {/* 6. Unboxing Experience & Rigid Presentation Chest Preview */}
      <UnboxExperience />

      {/* 7. Interactive Bespoke Box Builder */}
      <BespokeBoxBuilder />

      {/* 8. Pan-India Craft Heritage & Generational Lineage */}
      <CraftHeritageGrid />

      {/* 9. Pocket Square Folding Guide */}
      <PocketSquareGuide />

      {/* 10. Customer Reviews & Atelier Ratings */}
      <ReviewsSection />
    </div>
  );
};

export default HomePage;

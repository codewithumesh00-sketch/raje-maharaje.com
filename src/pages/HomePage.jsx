import React from 'react';
import NicobarHeroBanner from '../components/NicobarHeroBanner';
import PalaceMoodboardShowcase from '../components/PalaceMoodboardShowcase';
import ArtisanalFabricSwatchBar from '../components/ArtisanalFabricSwatchBar';
import NicobarGiftingWorld from '../components/NicobarGiftingWorld';
import NicobarOccasionsSection from '../components/NicobarOccasionsSection';
import NicobarStylingSeries from '../components/NicobarStylingSeries';
import NicobarPressQuote from '../components/NicobarPressQuote';
import NicobarFeaturedProducts from '../components/NicobarFeaturedProducts';
import NicobarImageWithText from '../components/NicobarImageWithText';
import NicobarCommunityCta from '../components/NicobarCommunityCta';
import NicobarStoreCta from '../components/NicobarStoreCta';

const HomePage = () => {
  return (
    <div className="w-full bg-[#FAF8F5] space-y-0 selection:bg-[#8B1E2D] selection:text-white">
      {/* 1. SECTION 1 (Screenshot 1): NICOSERA / THE SEASON OF GOLD Hero */}
      <NicobarHeroBanner
        id="hero_banner_1"
        video="/videos/Video Project 9.mp4"
        mobileVideo="/videos/hero_runway_mobile_portrait.mp4"
        image="/images/hero_runway_poster_desktop.jpg"
        mobileImage="/images/hero_runway_poster_mobile.jpg"
        tag="NEW ARRIVALS | DISCOVER NICOSERA"
        title="NICOSERA • THE EVENING EDIT"
        subtitle="20% off limited edition Wedding Season pocket squares & master Banarasi weaves"
        ctas={[
          { label: 'SHOP COLLECTION', target: 'shop' },
          { label: 'DISCOVER MORE', target: 'about' },
        ]}
        minFullViewport={true}
        aspectRatioDesktop="2.1"
        videoObjectPosition="center top"
      />

      {/* 2. SECTION 2 (Screenshot 2): WHERE THE EVENING BEGINS (Women's Edit & Silk Weaves) */}
      <NicobarHeroBanner
        id="hero_banner_women"
        image="/images/nicobar_women_banner_4k.jpg"
        tag="FESTIVE SILKS & EVENING COUTURE"
        title="WHERE THE EVENING BEGINS"
        subtitle="Sensual silks, delicate zari threads, and master Banarasi weaves tailored for starlit celebrations"
        ctas={[
          { label: 'SHOP WOMEN', target: 'women' },
        ]}
        aspectRatioDesktop="2.1"
      />

      {/* 3. SECTION 3 (Screenshot 3): FOR THE MAN OF THE HOUR (Bespoke Menswear) */}
      <NicobarHeroBanner
        id="hero_banner_men"
        image="/images/rajemaharaje_hero_gentleman_4k.jpg"
        tag="ROYAL SARTORIAL ATELIER"
        title="FOR THE MAN OF THE HOUR"
        subtitle="Bespoke Bandhgalas, silk-embroidered kurtas, and handcrafted pocket squares designed for royalty"
        ctas={[
          { label: 'SHOP MEN', target: 'men' },
        ]}
        aspectRatioDesktop="2.1"
      />

      {/* 4. SECTION 4 (Screenshot 4): THE FINAL FLOURISH (Pocket Squares & Accessories) */}
      <NicobarHeroBanner
        id="hero_banner_flourish"
        image="/images/craft_raw_silks_4k.png"
        tag="THE SARTORIAL FINISHING TOUCH"
        title="THE FINAL FLOURISH"
        subtitle="Awadhi Chikankari, Banarasi Tanchoi, and artisanal brooches sealed with royal wax"
        ctas={[
          { label: 'SHOP JEWELLERY', target: 'shop' },
          { label: 'SHOP ACCESSORIES', target: 'shop' },
        ]}
        aspectRatioDesktop="2.1"
      />

      {/* Moodboard Pillar: The Dandy & The Sovereign (Jaipur Palace / Bar Palladio Aesthetic) */}
      <PalaceMoodboardShowcase />

      {/* Featured Products Carousel: NEW THIS SEASON */}
      <NicobarFeaturedProducts />

      {/* 5. SECTION 5 (Screenshot 5 & 6): WELCOME TO OUR GIFTING WORLD (4 Pillars) */}
      <NicobarGiftingWorld />

      {/* 6. SECTION 6 (Screenshot 6 & 7): WHAT'S THE OCCASION? (Interactive 9-to-5, After Hours, Festive Days) */}
      <NicobarOccasionsSection />

      {/* Interactive Artisanal Fabric Swatches Bar */}
      <ArtisanalFabricSwatchBar />

      {/* 7. SECTION 7 (Screenshot 8): THE STYLING SERIES ESTD 2024 / CONCIERGE */}
      <NicobarStylingSeries />

      {/* 8. SECTION 8 (Screenshot 9): PRESS SPOTLIGHT (ELLE / GQ / VOGUE) */}
      <NicobarPressQuote />

      {/* 9. SECTION 9 (Screenshot 9): ESSENTIALS FOR EVERY SEASON */}
      <NicobarImageWithText />

      {/* 10. SECTION 10 (Screenshot 10): WE MAKE QUITE A TEAM (Community & Patron Showcase) */}
      <NicobarCommunityCta />

      {/* 11. SECTION 11 (Screenshot 11): A PLACE YOU CAN REMEMBER BY SCENT (Boutique Scent Experience) */}
      <NicobarStoreCta />

      {/* 12. SECTION 12 (Screenshot 12): Global Nicobar Footer is mounted in App.jsx */}
    </div>
  );
};

export default HomePage;

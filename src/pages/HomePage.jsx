import React from 'react';
import NicobarHeroBanner from '../components/NicobarHeroBanner';
import NicobarGiftingWorld from '../components/NicobarGiftingWorld';
import NicobarFeaturedProducts from '../components/NicobarFeaturedProducts';
import NicobarImageWithText from '../components/NicobarImageWithText';
import NicobarCommunityCta from '../components/NicobarCommunityCta';
import NicobarStoreCta from '../components/NicobarStoreCta';
import NicobarTestimonials from '../components/NicobarTestimonials';

const HomePage = () => {
  return (
    <div className="w-full bg-white space-y-0 selection:bg-black selection:text-white">
      {/* 1. Hero Banner 1: THE SEASON OF GOLD (Full viewport video) */}
      <NicobarHeroBanner
        id="hero_banner_1"
        video="https://res.cloudinary.com/douc8uat5/video/upload/v1788437555/Video_Project_9_tgxfo3.mp4"
        image="/images/hero_season_of_gold_video_poster.jpg"
        title="THE SEASON OF GOLD"
        subtitle="20% off limited edition Wedding Season pocket squares & master Banarasi weaves"
        ctas={[
          { label: 'SHOP COLLECTION', target: 'shop' },
          { label: 'DISCOVER MORE', target: 'about' },
        ]}
        minFullViewport={true}
        aspectRatioDesktop="2.1"
      />

      {/* 2. Featured Products Carousel: NEW THIS SEASON (Provides immediate visual relief & shopping) */}
      <NicobarFeaturedProducts />

      {/* 3. Hero Banner 2: READY FOR EVERY INVITE (Bottom-anchored text with tall portrait mobile height) */}
      <NicobarHeroBanner
        id="hero_banner_2"
        image="/images/nicobar_hero_ready_for_invite_4k.jpg"
        title="READY FOR EVERY INVITE"
        subtitle="Breathable Linen, versatile Poly-Satin, and Awadhi needlework"
        ctas={[
          { label: 'SHOP RAJE (₹500-₹700)', target: 'raje' },
          { label: 'SHOP MAHARAJE (₹2,625-₹3,675)', target: 'maharaje' },
        ]}
        aspectRatioDesktop="2.1"
      />

      {/* 4. Curated Category Dual Grid: WELCOME TO OUR GIFTING WORLD */}
      <NicobarGiftingWorld />

      {/* 5. Hero Banner 3: DRESS FOR EVERY PART YOU PLAY */}
      <NicobarHeroBanner
        id="hero_banner_3"
        image="/images/nicobar_hero_dress_for_every_part_4k.jpg"
        title="DRESS FOR EVERY PART YOU PLAY"
        subtitle="A pocket square doesn't make the man — it reveals the Gentleman"
        ctas={[
          { label: 'SHOP MEN', target: 'men' },
          { label: 'EXPLORE CRAFTS', target: 'shop' },
        ]}
        aspectRatioDesktop="2.1"
      />

      {/* 6. Split Editorial: ESSENTIALS FOR EVERY SEASON */}
      <NicobarImageWithText />

      {/* 7. Hero Banner 4: GIFTS WRITTEN IN THE STARS */}
      <NicobarHeroBanner
        id="hero_banner_4"
        video="/videos/generate_with_vedio_by_wearing.mp4"
        image="/images/nicobar_hero_gifts_stars_4k.jpg"
        title="GIFTS WRITTEN IN THE STARS"
        subtitle="Signature pink & blue RAJE boxes to grand MAHARAJE caskets sealed with molten wax"
        ctas={[
          { label: 'SHOP GIFTING', target: 'gifting' },
        ]}
        aspectRatioDesktop="2.1"
        videoClassName="scale-[1.23] origin-center"
      />

      {/* 8. Community Showcase: WE MAKE QUITE A TEAM */}
      <NicobarCommunityCta />

      {/* 9. Store Section: WALK IN AND WANDER A LITTLE */}
      <NicobarStoreCta />

      {/* 10. Minimalist Testimonials Slider */}
      <NicobarTestimonials />

      {/* 11. Hero Banner 5: GET IN TOUCH */}
      <NicobarHeroBanner
        id="hero_banner_touch"
        image="/images/rajemaharaje_hero_gentleman_bespoke_4k.jpg"
        title="GET IN TOUCH"
        subtitle="Bespoke wedding favors, groomsmen suites & corporate collaborations"
        ctas={[
          { label: 'CONTACT ATELIER', target: 'contact' },
        ]}
        aspectRatioDesktop="2.1"
      />
    </div>
  );
};

export default HomePage;

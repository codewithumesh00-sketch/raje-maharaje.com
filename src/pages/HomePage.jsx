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
      {/* 1. Nicobar Hero Banner 1: THE SEASON OF GOLD (Full viewport video) */}
      <NicobarHeroBanner
        id="hero_banner_1"
        video="https://res.cloudinary.com/douc8uat5/video/upload/v1788437555/Video_Project_9_tgxfo3.mp4"
        image="/images/nicobar_hero_season_of_gold_4k.jpg"
        title="THE SEASON OF GOLD"
        subtitle="20% off limited edition Wedding Season pocket squares & master Banarasi weaves"
        ctas={[
          { label: 'SHOP COLLECTION', target: 'shop' },
          { label: 'DISCOVER MORE', target: 'about' },
        ]}
        minFullViewport={true}
        aspectRatioDesktop="2.1"
      />

      {/* 2. Nicobar Hero Banner 2: READY FOR EVERY INVITE */}
      <NicobarHeroBanner
        id="hero_banner_2"
        image="/images/nicobar_hero_ready_for_invite_4k.jpg"
        title="READY FOR EVERY INVITE"
        subtitle="Effortless elegance in breathable Linen, versatile Poly Satin and Awadhi needlework"
        ctas={[
          { label: 'SHOP RAJE', target: 'raje' },
          { label: 'SHOP MAHARAJE', target: 'maharaje' },
        ]}
        aspectRatioDesktop="2.1"
      />

      {/* 3. Nicobar Hero Banner 3: DRESS FOR EVERY PART YOU PLAY */}
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

      {/* 4. Nicobar Hero Banner 4: GIFTS WRITTEN IN THE STARS */}
      <NicobarHeroBanner
        id="hero_banner_4"
        image="/images/nicobar_hero_gifts_stars_4k.jpg"
        title="GIFTS WRITTEN IN THE STARS"
        subtitle="From chic pink & blue RAJE boxes to grand MAHARAJE presentation caskets sealed with molten wax"
        ctas={[
          { label: 'SHOP GIFTING', target: 'gifting' },
        ]}
        aspectRatioDesktop="2.1"
      />

      {/* 5. Nicobar Category 2: WELCOME TO OUR GIFTING WORLD */}
      <NicobarGiftingWorld />

      {/* 6. Nicobar Featured Products Carousel: NEW THIS SEASON */}
      <NicobarFeaturedProducts />

      {/* 7. Nicobar Hero Banner 5: GET IN TOUCH */}
      <NicobarHeroBanner
        id="hero_banner_touch"
        image="/images/rajemaharaje_hero_gentleman_4k.jpg"
        title="GET IN TOUCH"
        subtitle="Bespoke wedding favors, groomsmen suites & corporate collaborations"
        ctas={[
          { label: 'CONTACT ATELIER', target: 'contact' },
        ]}
        aspectRatioDesktop="2.1"
      />

      {/* 8. Nicobar Split Section: ESSENTIALS FOR EVERY SEASON */}
      <NicobarImageWithText />

      {/* 9. Nicobar Community Showcase: WE MAKE QUITE A TEAM */}
      <NicobarCommunityCta />

      {/* 10. Nicobar Store Section: WALK IN AND WANDER A LITTLE */}
      <NicobarStoreCta />

      {/* 11. Nicobar Testimonials: Minimalist Quote Slider */}
      <NicobarTestimonials />
    </div>
  );
};

export default HomePage;

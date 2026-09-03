import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const { navigateTo } = useShop();

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-medium">About Us</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-[#9c783e] uppercase font-semibold block mb-3">
          Our Story
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif uppercase tracking-[0.16em] font-light text-neutral-900 mb-6">
          ABOUT RAJE MAHARAJE
        </h1>
        <div className="w-12 h-px bg-[#c5a059] mx-auto mb-6" />
        <p className="text-base sm:text-lg font-serif italic text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          "A pocket square doesn't make the man — it reveals the Gentleman."
        </p>
      </section>

      {/* Narrative Section (Exact Story from rajemaharaje.com/about-us) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] bg-neutral-100 border border-neutral-200 shadow-sm overflow-hidden">
              <img
                src="/images/prita_dheer_owner_4k.png"
                alt="Prita Dheer - Founder of Studio Sankara & Raje Maharaje"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif uppercase tracking-[0.14em] text-neutral-900 font-light">
              A Woman's Spark, A Gentleman's Sartorial World
            </h2>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed">
              <p>
                Raje Maharaje began with a simple spark — and a woman rediscovering her creative rhythm.
              </p>
              <p>
                After years in design, visual merchandising, and running a packaging business, <strong>Prita Dheer</strong>, founder of <strong>Studio Sankara</strong>, found herself ready for a second innings filled with colour, craft, and joy.
              </p>
              <p>
                A few weddings, countless gift boxes, and one playful idea later — she noticed something missing. <em>Wedding favours were always made for women. But what about the men?</em>
              </p>
              <p>
                That spark led to <strong>Raje Maharaje</strong> — pocket squares, neckerchiefs, and scarves handcrafted for men who appreciate detail, individuality, and design with meaning.
              </p>
              <p>
                From the finesse of <strong>Chikankari</strong> and the geometry of <strong>Ikat</strong>, to the depth of <strong>Ajrakh</strong>, the vibrance of <strong>Madhubani</strong>, and the luster of <strong>Raw Silk</strong>. Each creation brings together India’s traditional artistry and contemporary aesthetics, resulting in accessories that feel personal, refined, and full of story.
              </p>
              <p className="font-serif italic text-neutral-800 text-sm sm:text-base pt-2">
                Raje Maharaje celebrates the art of Indian craftsmanship and the spirit of the modern man — confident, cultured, and effortlessly elegant.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <p className="text-sm font-serif uppercase tracking-widest font-semibold text-neutral-900">
                Prita Dheer
              </p>
              <p className="text-xs font-sans text-neutral-500">
                Founder, STUDIO SANKARA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Verbatim from rajemaharaje.com) */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-neutral-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 sm:p-10 border border-neutral-200/70">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9c783e] font-semibold block mb-2">
              Our Vision
            </span>
            <h3 className="text-xl sm:text-2xl font-serif uppercase tracking-wider text-neutral-900 mb-4 font-light">
              Gifts That Tell A Story
            </h3>
            <p className="text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed">
              We believe luxury is personal — it lives in the details, the craftsmanship, and the care behind every creation. Our vision is to make gifting for men meaningful again by creating timeless pieces that carry emotion, heritage, colour, and artistry in every fold.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 border border-neutral-200/70">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9c783e] font-semibold block mb-2">
              Our Mission
            </span>
            <h3 className="text-xl sm:text-2xl font-serif uppercase tracking-wider text-neutral-900 mb-4 font-light">
              Indian Crafts in New Avatars
            </h3>
            <p className="text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed">
              To take Indian traditional weaves and crafts to the world in new avatars. We work with artisans across India to transform traditional textiles into modern accessories that celebrate individuality and refined design. Every piece is imagined with intention — crafted with precision, finished impeccably, and presented as a thoughtful expression of contemporary Indian luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h3 className="text-xl sm:text-2xl font-serif uppercase tracking-[0.16em] text-neutral-900 mb-4 font-light">
          EXPLORE THE ATELIER
        </h3>
        <p className="text-xs sm:text-sm font-sans text-neutral-500 mb-6 font-light">
          Discover our two collections, RAJE and MAHARAJE, or configure custom gift chests for upcoming weddings.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigateTo('shop')}
            className="px-6 py-3 bg-black text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
          >
            Explore All Products
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="px-6 py-3 border border-neutral-300 text-neutral-900 text-xs uppercase tracking-widest font-medium hover:border-black transition-colors"
          >
            Contact Atelier
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

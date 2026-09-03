import React from 'react';
import { useShop } from '../context/ShopContext';

const NicobarStoreCta = () => {
  const { navigateTo } = useShop();

  return (
    <section className="w-full bg-[#fbfbfa] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 select-none border-t border-neutral-200/60">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Text Side */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center space-y-5 lg:pr-8">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-semibold text-neutral-500">
            Studio Sankara &bull; The Founder
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.16em] font-light text-[#22242A] leading-snug">
            A WOMAN'S SPARK, A GENTLEMAN'S WORLD
          </h2>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-600 font-light leading-relaxed">
            "Wedding favours were always made for women. But what about the men?" &mdash; That single playful question led <strong>Prita Dheer</strong>, founder of <strong>Studio Sankara</strong>, to create Raje Maharaje.
          </p>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-500 font-light leading-relaxed">
            Handcrafted in our Gurgaon atelier, each piece unites generational Indian weaves &mdash; Chikankari, Banarasi Tanchoi, and Kutch Ajrakh &mdash; with contemporary sartorial elegance.
          </p>

          <div className="pt-2 flex items-center space-x-6">
            <button
              onClick={() => navigateTo('about')}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-neutral-900 hover:text-neutral-600 underline underline-offset-4 transition-colors"
            >
              READ OUR STORY
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-neutral-500 hover:text-neutral-900 underline underline-offset-4 transition-colors"
            >
              VISIT OUR ATELIER
            </button>
          </div>
        </div>

        {/* Media Side: Founder Portrait */}
        <div className="lg:col-span-6 relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden bg-neutral-200 shadow-md border border-neutral-200/80">
          <img
            src="/images/prita_dheer_owner_4k.png"
            alt="Prita Dheer - Founder of Studio Sankara & Raje Maharaje"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default NicobarStoreCta;

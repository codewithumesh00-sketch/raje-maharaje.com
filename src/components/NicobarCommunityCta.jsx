import React from 'react';
import { useShop } from '../context/ShopContext';

const NicobarCommunityCta = () => {
  const { navigateTo } = useShop();

  const looks = [
    {
      id: 1,
      image: '/images/rajemaharaje_hero_gentleman_4k.jpg',
      caption: 'Tanchoi Banarasi in Midnight Black Bandhgala',
      author: '@vikram_sartorial',
    },
    {
      id: 2,
      image: '/images/royal_bandhgala_pink_4k.png',
      caption: 'Rani Pink Raw Silk with Ivory Jacket',
      author: '@rajputana_style',
    },
    {
      id: 3,
      image: '/images/nicobar_hero_ready_for_invite_4k.jpg',
      caption: 'Summer Wedding Festive Look',
      author: '@weddings_by_sankara',
    },
    {
      id: 4,
      image: '/images/rajemaharaje_card_raje_4k.jpg',
      caption: 'Pastel Linens & Sliding Keepsake Box',
      author: '@dheer_lifestyle',
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 select-none border-t border-neutral-100">
      <div className="max-w-[1366px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-semibold text-neutral-500 block mb-2">
            The Raje Maharaje Circle
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.16em] font-light text-[#22242A] mb-3">
            WE MAKE QUITE A TEAM
          </h2>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-neutral-600 font-light">
            Share how you wear and gift your Raje Maharaje pocket squares. Tag @rajedotmaharaje to be featured.
          </p>
        </div>

        {/* 4-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {looks.map((look) => (
            <div
              key={look.id}
              onClick={() => navigateTo('shop')}
              className="group cursor-pointer relative aspect-square overflow-hidden bg-neutral-100 shadow-xs"
            >
              <img
                src={look.image}
                alt={look.caption}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <p className="text-xs font-sans font-medium line-clamp-2 mb-1 drop-shadow">
                  {look.caption}
                </p>
                <span className="text-[10px] text-neutral-300 font-mono">
                  {look.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigateTo('contact')}
            className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-neutral-900 hover:text-neutral-600 underline underline-offset-4 transition-colors"
          >
            JOIN THE COMMUNITY
          </button>
        </div>
      </div>
    </section>
  );
};

export default NicobarCommunityCta;

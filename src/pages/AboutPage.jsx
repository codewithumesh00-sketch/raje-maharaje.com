import React from 'react';
import { useShop } from '../context/ShopContext';
import { craftsData } from '../data/crafts';
import { Sparkles, Heart, Award, MapPin, Feather, Compass, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const { navigateTo } = useShop();

  return (
    <div className="bg-cream-50 text-obsidian-950 min-h-screen">
      {/* Editorial Story Hero */}
      <section className="relative py-20 lg:py-28 bg-obsidian-950 text-cream-100 border-b border-gold-900/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-serif font-semibold">
              The Genesis of Raje Maharaje
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-cream-50 mt-3 leading-tight">
              A Woman's Spark, <br />
              <span className="text-gold-gradient font-serif italic capitalize">
                A Gentleman's Distinction
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-cream-200/90 font-serif leading-relaxed">
              "Wedding favours were always made for women. But what about the men? That simple question ignited a movement to bring India's ancient textile mastery into modern haute menswear."
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section with Portrait */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-obsidian-900">
              <img
                src="https://static.wixstatic.com/media/32554b_35f22ceead704ac4a733f2a315e8559a~mv2.jpg/v1/fill/w_800,h_1000,fp_0.46_0.38,q_90/WhatsApp%20Image%202025-10-15%20at%2013_00_21_2cffa0a6.jpg"
                alt="Prita Dheer - Founder of Studio Sankara & Raje Maharaje"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-obsidian-950 text-cream-100 p-5 rounded-xl border border-gold-500/50 shadow-xl hidden sm:block">
              <p className="font-display font-bold text-gold-300 text-sm uppercase">Prita Dheer</p>
              <p className="text-xs text-cream-300 font-serif">Founder, STUDIO SANKARA</p>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-800 font-serif font-bold">
              <Feather className="w-4 h-4 text-gold-600" />
              <span>The Journey of Studio Sankara</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-obsidian-900">
              Gifts That Tell A Story
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-obsidian-700 font-serif leading-relaxed">
              <p>
                Raje Maharaje began with a simple spark — and a woman rediscovering her creative rhythm. After years in design, visual merchandising, and running a specialized packaging atelier, Prita Dheer found herself ready for a second innings filled with colour, craft, and joy.
              </p>
              <p>
                A few weddings, countless gift boxes, and one playful idea later — she noticed something missing. Wedding favours were always designed exclusively for women. Men received predictable, uninspired tokens.
              </p>
              <p>
                That epiphany led to <strong>Raje Maharaje</strong>: pocket squares, neckerchiefs, and scarves handcrafted for men who appreciate nuance, individuality, and design infused with sacred heritage.
              </p>
            </div>

            <div className="pt-4 border-t border-cream-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-cream-300">
                <h4 className="font-display font-bold text-xs uppercase text-gold-900">Our Vision</h4>
                <p className="text-xs text-obsidian-600 font-sans mt-1">
                  To take Indian traditional handloom weaves to the global stage as the premier standard in luxury gifting.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-cream-300">
                <h4 className="font-display font-bold text-xs uppercase text-gold-900">Our Mission</h4>
                <p className="text-xs text-obsidian-600 font-sans mt-1">
                  Empowering generational master artisan guilds across Banaras, Lucknow, Kutch, and Telangana through ethical patronage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Clusters Map / Showcase */}
      <section className="py-20 bg-obsidian-950 text-cream-100 border-t border-gold-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-serif font-semibold">
              The Artisan Geography
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-gold-100 mt-2">
              Pan-India Heritage Clusters
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 mb-4"></div>
            <p className="text-sm text-cream-300 font-serif">
              We travel directly to the source to preserve master techniques passed down through dynasties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftsData.map((c) => (
              <div key={c.id} className="p-6 rounded-2xl bg-obsidian-900 border border-gold-900/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gold-400 font-mono mb-2">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{c.region}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-gold-950 border border-gold-500/30 text-[10px] uppercase font-bold">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-cream-100 uppercase mt-1">
                    {c.name}
                  </h3>
                  <p className="text-xs text-cream-300/80 font-sans leading-relaxed mt-2">
                    {c.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-900/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gold-400">{c.stats.warp || c.stats.precision || c.stats.dyes}</span>
                  <button
                    onClick={() => navigateTo('shop')}
                    className="text-xs uppercase tracking-wider text-gold-300 hover:text-white font-semibold"
                  >
                    View Weaves →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

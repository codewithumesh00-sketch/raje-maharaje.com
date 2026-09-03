import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Newspaper, ExternalLink, Quote, Sparkles } from 'lucide-react';

const pressArticles = [
  {
    id: 1,
    publication: 'ELLE INDIA',
    headline: 'Nicobar and the Art of Tropical Mindful Dressing',
    excerpt: 'Nicobar has built a way of dressing that feels both authentically rooted in Indian textile heritage and effortlessly global. Their breathable natural linens and evening edits define contemporary aesthetic ease.',
    date: 'Autumn / Winter Edition',
    category: 'Fashion & Lifestyle',
    badge: 'Cover Feature',
    link: 'https://elle.in',
  },
  {
    id: 2,
    publication: 'GQ INDIA',
    headline: 'Redefining the Modern Gentleman’s Sartorial Arsenal',
    excerpt: 'The pocket square and bandhgala are no longer afterthoughts. With intricate Awadhi Chikankari needlework and master Banarasi Tanchoi weaves, the brand reclaims Indian royalty for the modern cosmopolitan man.',
    date: 'Gentlemen’s Special',
    category: 'Men’s Style',
    badge: 'Style Essential',
    link: 'https://gqindia.com',
  },
  {
    id: 3,
    publication: 'VOGUE INDIA',
    headline: 'The Grand Indian Wedding Gifting Revolution',
    excerpt: 'Every box arrives sealed with molten wax and wrapped in signature heritage pastel cases. Discover how Nicobar and Studio Sankara transformed traditional wedding favours into deeply cherished keepsakes.',
    date: 'Wedding Festive Issue',
    category: 'Weddings & Gifting',
    badge: 'Editor’s Choice',
    link: 'https://vogue.in',
  },
  {
    id: 4,
    publication: 'ARCHITECTURAL DIGEST',
    headline: 'Dining and Living Rooted in Generational Indian Crafts',
    excerpt: 'From stoneware dinner sets inspired by coastal tides to handcrafted brass candle holders and botanical table runners, Nicobar creates sanctuaries of warmth and soulful living.',
    date: 'Design & Living Annual',
    category: 'Home & Living',
    badge: 'Design Spotlight',
    link: 'https://architecturaldigest.in',
  },
  {
    id: 5,
    publication: 'MINT LOUNGE',
    headline: 'Craftsmanship Over Fast Fashion: The Mindful Indian Brand Journey',
    excerpt: 'An insightful look into how sustainable, craft-conscious design bridges the gap between millennial aspirations and generational handloom clusters across Varanasi, Kutch, and Awadh.',
    date: 'Business of Luxury',
    category: 'Craft & Heritage',
    badge: 'Sustainability Focus',
    link: 'https://livemint.com',
  },
  {
    id: 6,
    publication: 'GRAZIA',
    headline: 'Sensual Silks and Starlit Soirées: The First Evening Edit',
    excerpt: 'Dramatic jewel tones, gossamer zari embroidery, and effortless silhouettes designed for festive cocktail hours and moonlight celebrations under the stars.',
    date: 'Festive Preview',
    category: 'Evening Wear',
    badge: 'Trending Edit',
    link: 'https://grazia.co.in',
  },
];

const PressPage = () => {
  const { navigateTo } = useShop();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fashion & Lifestyle', 'Men’s Style', 'Weddings & Gifting', 'Home & Living', 'Craft & Heritage'];

  const filtered = selectedCategory === 'All'
    ? pressArticles
    : pressArticles.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5] select-none">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-[#7E746F] font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-[#241A16] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#241A16] font-medium">In The Press</span>
        </nav>
      </div>

      {/* Hero Header */}
      <div className="py-14 sm:py-20 text-center px-4 bg-[#F4EFE6] border-b border-[#E8E1D3]">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.28em] font-semibold text-[#8B1E2D]">
            Editorial Features &bull; Global Recognition
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-[0.16em] font-light text-[#241A16]">
            IN THE PRESS
          </h1>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#7E746F] font-light max-w-lg mx-auto">
            Celebrated by leading voices in fashion, architectural design, and modern mindful living across India and the globe.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[#E8E1D3]">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-xs whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#241A16] text-white shadow-sm'
                  : 'bg-white text-[#7E746F] border border-[#E8E1D3] hover:border-[#241A16] hover:text-[#241A16]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E8E1D3] rounded-xs p-6 sm:p-8 flex flex-col justify-between hover:border-[#8B1E2D] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#8B1E2D]">
                    {item.publication}
                  </span>
                  <span className="text-[10px] uppercase font-sans tracking-wider bg-[#FAF8F5] border border-[#E8E1D3] text-[#7E746F] px-2.5 py-1 rounded-xs">
                    {item.badge}
                  </span>
                </div>

                <div className="mb-3 text-[#C99E54]/40">
                  <Quote className="w-5 h-5 rotate-180" />
                </div>

                <h3 className="text-base sm:text-lg font-serif font-medium text-[#241A16] group-hover:text-[#8B1E2D] transition-colors leading-snug mb-3">
                  {item.headline}
                </h3>

                <p className="text-xs sm:text-sm font-sans tracking-wide text-[#7E746F] font-light leading-relaxed mb-6">
                  &ldquo;{item.excerpt}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E1D3] flex items-center justify-between text-xs">
                <span className="text-[11px] font-sans text-[#A89F98]">
                  {item.date}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#241A16] hover:text-[#8B1E2D] transition-colors"
                >
                  <span>READ ARTICLE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressPage;

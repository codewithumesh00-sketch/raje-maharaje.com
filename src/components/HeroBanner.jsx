import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroBanner = () => {
  const { navigateTo } = useShop();

  const slides = [
    {
      id: 0,
      image: '/images/nicobar_hero_season_of_gold_4k.jpg',
      title: 'THE SEASON OF GOLD',
      subtitle: 'Festive silks, heirloom weaves and golden moments handcrafted for royalty',
      primaryBtn: 'SHOP COLLECTION',
      secondaryBtn: 'DISCOVER MORE',
      primaryTarget: 'women',
      secondaryTarget: 'shop',
      position: 'center',
      theme: 'gold',
    },
    {
      id: 1,
      image: '/images/nicobar_hero_dress_for_every_part_4k.jpg',
      title: 'DRESS FOR EVERY PART YOU PLAY',
      subtitle: 'Bespoke bandhgalas, pure silk kurtas and tailored royal menswear',
      primaryBtn: 'SHOP MEN',
      secondaryBtn: null,
      primaryTarget: 'men',
      position: 'bottom-center',
      theme: 'burgundy',
    },
    {
      id: 2,
      image: '/images/nicobar_hero_gifts_stars_4k.jpg',
      title: 'GIFTS WRITTEN IN THE STARS',
      subtitle: 'Handcrafted fine porcelain mugs, celestial tableware and treasured keepsakes',
      primaryBtn: 'SHOP LIVING',
      secondaryBtn: 'EXPLORE GIFTING',
      primaryTarget: 'living',
      secondaryTarget: 'gifting',
      position: 'center',
      theme: 'celestial',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slide transitions
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none bg-[#0a0d14] text-white"
      style={{ minHeight: 'calc(100vh - 110px)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Cross-Fade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            {/* 4K Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-7000 ease-out"
              style={{
                filter: slide.id === 0 ? 'brightness(0.95)' : 'brightness(0.92)',
              }}
            />

            {/* Subtle Gradient Overlays for Luxury Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-14 sm:pb-20 z-20 max-w-5xl mx-auto">
              {/* Luxury Display Headline */}
              <h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-[0.18em] sm:tracking-[0.22em] uppercase font-light text-white drop-shadow-md mb-3"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
              >
                {slide.title}
              </h1>

              {/* Subtitle Line */}
              {slide.subtitle && (
                <p className="text-xs sm:text-sm md:text-base font-sans tracking-wide text-neutral-200/90 max-w-2xl mb-6 font-light">
                  {slide.subtitle}
                </p>
              )}

              {/* Action Buttons (Nicobar Style: Underlined Caps / Framed Links) */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-1">
                <button
                  onClick={() => navigateTo(slide.primaryTarget)}
                  className="group relative inline-flex items-center text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-white hover:text-[#d4af37] transition-all duration-300 py-2 border-b border-white hover:border-[#d4af37]"
                >
                  <span>{slide.primaryBtn}</span>
                </button>

                {slide.secondaryBtn && (
                  <>
                    <span className="text-neutral-400 font-light text-xs hidden sm:inline">|</span>
                    <button
                      onClick={() => navigateTo(slide.secondaryTarget)}
                      className="group relative inline-flex items-center text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-white hover:text-[#d4af37] transition-all duration-300 py-2 border-b border-white hover:border-[#d4af37]"
                    >
                      <span>{slide.secondaryBtn}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-30 flex justify-center items-center space-x-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? 'w-8 h-1.5 bg-white'
                : 'w-2 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Floating WhatsApp Concierge Button (Matches Nicobar live site) */}
      <a
        href="https://wa.me/919650308945?text=Hello%20Raje%20Maharaje%20Concierge%2C%20I%20would%20like%20assistance%20with%20your%20luxury%20collection"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-2xl hover:shadow-[#25D366]/50 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
        style={{ width: '56px', height: '56px' }}
      >
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
          className="fill-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
};

export default HeroBanner;

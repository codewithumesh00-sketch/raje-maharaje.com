import React, { useRef, useEffect, useState } from 'react';
import { useShop } from '../context/ShopContext';

const NicobarHeroBanner = ({
  id,
  image,
  video,
  mobileVideo,
  mobileImage,
  title,
  subtitle,
  ctas = [],
  aspectRatioDesktop = '2.1',
  aspectRatioMobile = '0.75',
  minFullViewport = false,
  videoObjectPosition = 'center center',
  videoClassName = '',
}) => {
  const { navigateTo } = useShop();
  const videoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = (e) => setIsMobile(e.matches);
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    } else if (mql.addListener) {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, []);

  const activeVideo = isMobile && mobileVideo ? mobileVideo : video;
  const activePoster = isMobile && (mobileImage || image) ? (mobileImage || image) : image;

  // Guarantee seamless video autoplay on iOS Safari / Mobile Chrome / Desktop
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy prevented playback, poster image will display cleanly
        });
      }
    }
  }, [activeVideo]);

  return (
    <section className="relative w-full overflow-hidden select-none bg-black">
      <div
        className={`relative w-full overflow-hidden ${
          minFullViewport
            ? 'h-[calc(100svh-88px)] min-h-[540px] max-h-[960px] md:h-[calc(100vh-106px)] md:max-h-none'
            : 'h-[500px] sm:h-[560px] md:h-auto md:aspect-[2.1/1] md:min-h-0'
        }`}
      >
        {/* Media (Video or Picture) absolutely positioned to cover full container with no black letterboxing */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {activeVideo ? (
            <video
              key={`${id}-${activeVideo}`}
              ref={videoRef}
              src={activeVideo}
              poster={activePoster}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={`w-full h-full object-cover ${videoClassName}`}
              style={{
                objectPosition: videoObjectPosition,
                filter: 'brightness(0.92)',
              }}
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          ) : (
            <picture className="w-full h-full block">
              {mobileImage && (
                <source media="(max-width: 767px)" srcSet={mobileImage} />
              )}
              <img
                src={image}
                alt={title || "Raje Maharaje"}
                loading="lazy"
                className="w-full h-full object-cover object-center"
                style={{
                  filter: 'brightness(0.93)',
                }}
              />
            </picture>
          )}
        </div>

        {/* Enhanced Bottom Vignette: Deep gradient anchored strictly to the bottom 45% */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-40% to-transparent pointer-events-none" />

        {/* Top Vignette (Subtle) for optimal contrast on bright backgrounds */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

        {/* Bottom Anchored Content - Never covers subject's faces */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end items-center text-center px-4 sm:px-8 md:px-12 pb-8 sm:pb-10 md:pb-14 pointer-events-none">
          {title && (
            <h2
              className="text-white uppercase font-serif tracking-[0.15em] sm:tracking-[0.18em] font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl drop-shadow-md mb-2 leading-snug"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}
            >
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="text-neutral-200/90 text-[11px] sm:text-xs md:text-sm font-sans tracking-wider max-w-lg mb-3.5 font-light drop-shadow leading-relaxed">
              {subtitle}
            </p>
          )}

          {ctas && ctas.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 pt-1 pointer-events-auto">
              {ctas.map((cta, idx) => (
                <React.Fragment key={idx}>
                  <button
                    onClick={() => navigateTo(cta.target)}
                    className="text-white hover:text-[#d4af37] text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] font-medium underline underline-offset-4 decoration-white/80 hover:decoration-[#d4af37] transition-all px-1 py-1"
                  >
                    {cta.label}
                  </button>
                  {idx < ctas.length - 1 && (
                    <span className="text-white/40 text-xs select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NicobarHeroBanner;

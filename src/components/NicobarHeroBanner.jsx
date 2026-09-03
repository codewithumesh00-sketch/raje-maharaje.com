import React from 'react';
import { useShop } from '../context/ShopContext';

const NicobarHeroBanner = ({
  id,
  image,
  video,
  mobileImage,
  title,
  subtitle,
  ctas = [],
  aspectRatioDesktop = '2.1',
  aspectRatioMobile = '0.75',
  minFullViewport = false,
}) => {
  const { navigateTo } = useShop();

  return (
    <section className="relative w-full overflow-hidden select-none bg-black">
      <div
        className={`relative w-full block ${
          minFullViewport
            ? 'h-screen min-h-[640px] md:min-h-[720px]'
            : 'min-h-[520px] sm:min-h-[560px] md:min-h-0'
        }`}
      >
        {/* Media (Video or Picture) with responsive mobile portrait height */}
        <div
          className={`w-full h-full ${
            minFullViewport
              ? 'h-screen min-h-[640px] md:min-h-[720px]'
              : 'min-h-[520px] sm:min-h-[560px] md:min-h-0 md:aspect-[2.1/1]'
          }`}
        >
          {video ? (
            <video
              src={video}
              poster={image}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center top',
                filter: 'brightness(0.92)',
              }}
            />
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-45% to-transparent pointer-events-none" />

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

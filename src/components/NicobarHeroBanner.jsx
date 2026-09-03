import React from 'react';
import { useShop } from '../context/ShopContext';

const NicobarHeroBanner = ({
  id,
  image,
  mobileImage,
  title,
  subtitle,
  ctas = [],
  aspectRatioDesktop = '2.1',
  aspectRatioMobile = '0.64',
  minFullViewport = false,
}) => {
  const { navigateTo } = useShop();

  return (
    <section className="relative w-full overflow-hidden select-none bg-black">
      <div
        className="relative w-full block"
        style={{
          minHeight: minFullViewport ? 'calc(100vh - 110px)' : undefined,
          aspectRatio: aspectRatioDesktop ? `${aspectRatioDesktop}` : '2.1',
        }}
      >
        <picture className="w-full h-full block">
          {mobileImage && (
            <source media="(max-width: 767px)" srcSet={mobileImage} />
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            style={{
              minHeight: minFullViewport ? 'calc(100vh - 110px)' : undefined,
              filter: 'brightness(0.94)',
            }}
          />
        </picture>

        {/* Subtle Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

        {/* Centered Overlay Content strictly aligned to Nicobar */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end items-center text-center p-6 sm:p-12 md:p-16 pointer-events-none">
          {title && (
            <h2
              className="text-white uppercase font-serif tracking-[0.14em] sm:tracking-[0.18em] font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl drop-shadow-md mb-2 sm:mb-3"
              style={{ textShadow: '0 2px 14px rgba(0,0,0,0.6)' }}
            >
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="text-neutral-200/90 text-xs sm:text-sm font-sans tracking-wide max-w-xl mb-4 font-light drop-shadow">
              {subtitle}
            </p>
          )}

          {ctas && ctas.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-y-2 pt-1 pointer-events-auto">
              {ctas.map((cta, idx) => (
                <React.Fragment key={idx}>
                  <button
                    onClick={() => navigateTo(cta.target)}
                    className="text-white hover:text-neutral-200 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium underline underline-offset-4 decoration-white hover:decoration-neutral-300 transition-all px-2 py-1"
                  >
                    {cta.label}
                  </button>
                  {idx < ctas.length - 1 && (
                    <span className="text-white/70 mx-3 hidden sm:inline select-none font-light">
                      |
                    </span>
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

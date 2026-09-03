import React from 'react';

const BrandLogo = ({ className = "h-9 sm:h-10", showText = true, textClassName = "" }) => {
  return (
    <div className="flex items-center space-x-2.5 select-none whitespace-nowrap group flex-shrink-0">
      {/* Official Crown Emblem Image from rajemaharaje */}
      <img
        src="/images/rm_logo_4k.png"
        alt="Raje Maharaje Logo"
        className={`${className} w-auto object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform duration-200 flex-shrink-0`}
      />

      {showText && (
        <div className="flex flex-col justify-center leading-tight text-left flex-shrink-0">
          <span className={`font-serif text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-neutral-900 group-hover:text-neutral-600 transition-colors whitespace-nowrap ${textClassName}`}>
            RAJE &bull; MAHARAJE
          </span>
          <span className="text-[8px] sm:text-[9px] font-sans uppercase tracking-[0.26em] text-neutral-400 font-medium whitespace-nowrap">
            STUDIO SANKARA
          </span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;

import React from 'react';

export const CrownIcon = ({ className = "w-6 h-6", filled = true }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? "0.6" : "1.5"}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* 5-Point Regal Crown silhouette matching reference */}
    <path d="M2.5 18h19v2.5h-19z" />
    <path d="M3.5 17.5l1.5-9.5 5 4.5 2-6.5 2 6.5 5-4.5 1.5 9.5z" />
    <circle cx="5" cy="7.5" r="1.1" />
    <circle cx="12" cy="5" r="1.2" />
    <circle cx="19" cy="7.5" r="1.1" />
    <circle cx="9.5" cy="12.5" r="0.75" />
    <circle cx="14.5" cy="12.5" r="0.75" />
  </svg>
);

export const RMLogo = ({ variant = "centered", theme = "white", color, className = "" }) => {
  const isDark = theme === "black" || theme === "dark" || color === "black" || color === "dark" || variant === "dark";
  const iconColor = isDark ? "text-black" : "text-white";
  const textColor = isDark ? "text-black" : "text-white";
  const subtextColor = isDark ? "text-neutral-600 border-neutral-300" : "text-neutral-400 border-neutral-700";

  return (
    <div className={`inline-flex items-center space-x-2.5 select-none cursor-pointer group ${className}`}>
      {/* Crown Icon */}
      <CrownIcon className={`w-6 h-6 ${iconColor} group-hover:scale-110 transition-transform flex-shrink-0`} />

      {/* Bold Clean R&M Brand Text matching the Gravity typography */}
      {variant !== "icon-only" && (
        <div className="flex items-center space-x-2">
          <span className={`font-sans font-black text-xl sm:text-2xl tracking-[0.2em] ${textColor} uppercase leading-none`}>
            R&amp;M
          </span>
          <span className={`hidden sm:inline-block text-[10px] uppercase tracking-[0.3em] font-medium font-sans border-l pl-2 ${subtextColor}`}>
            RAJE MAHARAJE
          </span>
        </div>
      )}
    </div>
  );
};

export default RMLogo;

import React, { useState, useRef, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingCart, Heart, Eye, Check, Sparkles } from 'lucide-react';

const ProductCard = ({ product, customDiscountBadge = null, isSoldOut = false, aspect = 'aspect-[3/4]', index = 0 }) => {
  const {
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    navigateToProduct
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const isFavorite = isInWishlist(product.id);

  // Fast Intersection Observer for Gravity Staggered Entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '40px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Discount percentage calculation
  const calculatedDiscount = product.originalPriceINR && product.originalPriceINR > product.priceINR
    ? Math.round(((product.originalPriceINR - product.priceINR) / product.originalPriceINR) * 100)
    : null;

  const displayBadge = customDiscountBadge || (isSoldOut || !product.inStock ? 'Sold out' : calculatedDiscount ? `${calculatedDiscount}% OFF` : product.badge);

  const secondaryImg = product.secondaryImage || (product.images && product.images[1]) || null;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    if (!product.inStock && !isSoldOut) return;
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div
      ref={cardRef}
      onClick={() => navigateToProduct(product.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: `${Math.min((index % 8) * 40, 280)}ms`
      }}
      className={`group relative select-none cursor-pointer flex flex-col justify-between overflow-hidden bg-neutral-900 shadow-sm gpu-accelerate transition-all duration-500 ease-gravity transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } hover:-translate-y-1.5 hover:shadow-2xl`}
    >
      {/* Media & Card Container */}
      <div className={`relative ${aspect} w-full bg-neutral-950 overflow-hidden`}>
        {/* Fast Shimmer Skeleton Placeholder while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton-loading z-0" />
        )}

        {/* Primary Product Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-gravity ${
            isHovered && secondaryImg ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          } ${isHovered && !secondaryImg ? 'scale-106' : ''}`}
          onError={(e) => {
            e.target.src = 'https://static.wixstatic.com/media/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png/v1/fill/w_800,h_800,al_c,q_90/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png';
          }}
        />

        {/* Gravity Secondary Image Rollover Crossfade */}
        {secondaryImg && (
          <img
            src={secondaryImg}
            alt={`${product.title} Alternate View`}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-gravity pointer-events-none ${
              isHovered ? 'opacity-100 scale-106' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Subtle Dark Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Top-Left Gravity Badge with Shimmer Sheen */}
        {displayBadge && (
          <div className="absolute top-3 left-3 z-10 overflow-hidden shadow-md">
            {displayBadge === 'Sold out' ? (
              <span className="relative block px-2.5 py-1 text-[10px] sm:text-[11px] font-sans font-medium bg-[#2a2a2a]/95 text-neutral-300 border border-neutral-600/50 backdrop-blur-xs">
                Sold out
              </span>
            ) : (
              <span className="relative block px-2.5 py-1 text-[10px] sm:text-[11px] font-sans font-bold bg-[#e5e5e5] text-neutral-950 backdrop-blur-xs overflow-hidden">
                <span className="relative z-10">{displayBadge}</span>
                <span className="absolute inset-0 animate-badge-shimmer pointer-events-none" />
              </span>
            )}
          </div>
        )}

        {/* Top-Right Action Buttons: Wishlist & Quick Add */}
        <div className="absolute top-3 right-3 flex items-center space-x-1.5 z-10">
          <button
            onClick={handleWishlist}
            className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ${
              isFavorite
                ? 'bg-white text-rose-600 shadow-md'
                : 'bg-[#1e1e1e]/80 text-white/90 hover:bg-white hover:text-rose-600 opacity-80 group-hover:opacity-100'
            }`}
            aria-label="Toggle wishlist"
            title="Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 transition-transform duration-300 ${isFavorite ? 'fill-rose-600 scale-110' : 'group-hover:scale-105'}`} />
          </button>

          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock || isSoldOut}
            className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ${
              justAdded 
                ? 'bg-emerald-600 text-white scale-110' 
                : 'bg-[#1e1e1e]/90 hover:bg-black text-white hover:scale-105 active:scale-95'
            }`}
            aria-label="Add to cart"
            title="Quick Add"
          >
            {justAdded ? (
              <Check className="w-4 h-4 animate-bounce" />
            ) : (
              <ShoppingCart className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Hover Quick View Eye Pill in Center with Spring Physics */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-400 ease-spring ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
          }`}
        >
          <button
            onClick={handleQuickView}
            className="px-4 py-2 rounded-full bg-white/95 text-black font-sans font-bold text-[11px] uppercase tracking-wider flex items-center space-x-1.5 shadow-2xl hover:bg-white hover:shadow-black/50 transition-all transform hover:scale-105 active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Bottom Glassmorphic Frosted Overlay Panel (Exact Gravity Signature Look) */}
        <div className="absolute inset-x-3 bottom-3 z-10 p-3.5 bg-[#252525]/85 backdrop-blur-md transition-all duration-300 group-hover:bg-[#181818]/95 group-hover:shadow-lg border border-white/5">
          <div className="space-y-1.5">
            {/* Product Title */}
            <h3 className="font-sans font-medium text-xs sm:text-sm text-white line-clamp-1 leading-snug tracking-tight group-hover:text-gold-300 transition-colors">
              {product.title}
            </h3>

            {/* Price Row: Rs. 2,999.00  Rs. 3,500.00 */}
            <div className="flex items-baseline justify-between pt-0.5">
              <div className="flex items-baseline space-x-2">
                <span className="font-sans font-bold text-xs sm:text-sm text-white tracking-tight">
                  {formatPrice(product.priceINR)}
                </span>
                {product.originalPriceINR && (
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-400 line-through">
                    {formatPrice(product.originalPriceINR)}
                  </span>
                )}
              </div>

              {/* In-Card Mini Craft Tag */}
              {product.craft && (
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 truncate max-w-[90px] text-right font-sans">
                  {product.craft.split(' ')[0]}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

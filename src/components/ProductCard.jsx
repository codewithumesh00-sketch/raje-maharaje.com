import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingCart, Heart, Eye, Check } from 'lucide-react';

const ProductCard = ({ product, customDiscountBadge = null, isSoldOut = false, aspect = 'aspect-[3/4]' }) => {
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

  const isFavorite = isInWishlist(product.id);

  // Discount percentage calculation
  const calculatedDiscount = product.originalPriceINR && product.originalPriceINR > product.priceINR
    ? Math.round(((product.originalPriceINR - product.priceINR) / product.originalPriceINR) * 100)
    : null;

  const displayBadge = customDiscountBadge || (isSoldOut || !product.inStock ? 'Sold out' : calculatedDiscount ? `${calculatedDiscount}% OFF` : product.badge);

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
      onClick={() => navigateToProduct(product.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative select-none cursor-pointer flex flex-col justify-between overflow-hidden bg-neutral-900 shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      {/* Media & Card Container */}
      <div className={`relative ${aspect} w-full bg-neutral-900 overflow-hidden`}>
        {/* Main Product Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-106' : 'scale-100'
          }`}
          onError={(e) => {
            e.target.src = 'https://static.wixstatic.com/media/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png/v1/fill/w_800,h_800,al_c,q_90/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png';
          }}
        />

        {/* Subtle Dark Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-85 group-hover:opacity-95 transition-opacity" />

        {/* Top-Left Discount/Status Badge (Exact Shopify Gravity Match - Image 4) */}
        {displayBadge && (
          <div className="absolute top-3 left-3 z-10">
            {displayBadge === 'Sold out' ? (
              <span className="px-2.5 py-1 text-[10px] sm:text-[11px] font-sans font-medium bg-[#363636]/90 text-neutral-200 border border-neutral-600/50 backdrop-blur-xs">
                Sold out
              </span>
            ) : (
              <span className="px-2.5 py-1 text-[10px] sm:text-[11px] font-sans font-medium bg-[#d6d6d6]/95 text-neutral-950 backdrop-blur-xs">
                {displayBadge}
              </span>
            )}
          </div>
        )}

        {/* Top-Right Action Icon: Dark Square Quick Cart / Eye Icon (Exact Image 4 Match) */}
        <div className="absolute top-3 right-3 flex items-center space-x-1.5 z-10">
          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock || isSoldOut}
            className={`w-8 h-8 flex items-center justify-center transition-all bg-[#1e1e1e]/90 hover:bg-black text-white ${
              justAdded ? 'bg-emerald-600 text-white' : ''
            }`}
            aria-label="Add to cart"
            title="Quick Add"
          >
            {justAdded ? (
              <Check className="w-4 h-4" />
            ) : (
              <ShoppingCart className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Hover Quick View Eye Pill in Center */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <button
            onClick={handleQuickView}
            className="px-4 py-2 rounded-full bg-white/95 text-black font-sans font-bold text-[11px] uppercase tracking-wider flex items-center space-x-1.5 shadow-2xl hover:bg-white transition-all transform hover:scale-105"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Bottom Glassmorphic Frosted Overlay Panel (Exact Image 4 Signature Look) */}
        <div className="absolute inset-x-3 bottom-3 z-10 p-3.5 bg-[#252525]/85 backdrop-blur-md transition-all duration-300 group-hover:bg-[#1a1a1a]/95">
          <div className="space-y-1">
            {/* Product Title */}
            <h3 className="font-sans font-medium text-xs sm:text-sm text-white line-clamp-1 leading-snug tracking-tight">
              {product.title}
            </h3>

            {/* Price Row: Rs. 2,999.00  Rs. 3,500.00 */}
            <div className="flex items-baseline space-x-2 pt-0.5">
              <span className="font-sans font-bold text-xs sm:text-sm text-white tracking-tight">
                {formatPrice(product.priceINR)}
              </span>
              {product.originalPriceINR && (
                <span className="font-sans text-[11px] sm:text-xs text-neutral-400 line-through">
                  {formatPrice(product.originalPriceINR)}
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

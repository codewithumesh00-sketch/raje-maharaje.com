import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Check, Eye } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  const {
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    navigateToProduct
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0]?.name : null);
  const [addedSize, setAddedSize] = useState(null);

  const isFavorite = isInWishlist(product.id);
  const secondaryImg = product.secondaryImage || null;

  // Available sizes (defaults to Free Size or XS-XL if apparel)
  const availableSizes = product.sizes || (product.category === 'Kurtas & Tunics' || product.department === 'men'
    ? ['XS', 'S', 'M', 'L', 'XL']
    : ['Free Size']);

  // Handle Quick Size Add to Bag
  const handleSizeSelect = (e, size) => {
    e.stopPropagation();
    if (!product.inStock) return;
    addToCart({ ...product, selectedSize: size, selectedColor }, 1);
    setAddedSize(size);
    setTimeout(() => setAddedSize(null), 1800);
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
      className="group cursor-pointer flex flex-col select-none bg-[#FFFDF9] rounded-xl border border-[#E8E1D3]/90 hover:border-[#C99E54] transition-all duration-300 overflow-hidden hover:shadow-lg"
    >
      {/* 4:5 Portrait Image Container */}
      <div className="relative aspect-[4/5] w-full bg-[#F6F2EA] overflow-hidden">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered && secondaryImg ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          onError={(e) => {
            e.target.src = '/images/garden_muse_scarf_fuchsia.jpg';
          }}
        />

        {/* Secondary Hover Image Rollover */}
        {secondaryImg && (
          <img
            src={secondaryImg}
            alt={`${product.title} alternate view`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out pointer-events-none ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Top-Left Badge (Nicobar style: subtle Text--subdued caps) */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-white/95 backdrop-blur-xs text-neutral-800 text-[10px] uppercase tracking-[0.16em] font-medium px-2.5 py-1 shadow-xs border border-neutral-200/40">
              {product.badge}
            </span>
          </div>
        )}

        {/* Top-Right Wishlist Heart Button */}
        <button
          onClick={handleWishlist}
          aria-label="Wishlist"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-800 flex items-center justify-center shadow-xs transition-transform duration-200 hover:scale-110"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-[#c53030] text-[#c53030]' : 'text-neutral-700'
            }`}
          />
        </button>

        {/* Quick View Button on Center Hover */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <button
            onClick={handleQuickView}
            className="px-4 py-2 bg-white/95 text-neutral-900 text-[11px] font-sans font-medium uppercase tracking-[0.18em] shadow-lg hover:bg-black hover:text-white transition-colors flex items-center space-x-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Nicobar Signature: Slide-up Quick Size Selector on Hover */}
        <div
          className={`absolute inset-x-0 bottom-0 z-20 bg-white/95 backdrop-blur-md p-2.5 border-t border-neutral-200/60 transition-transform duration-300 ease-out ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">
              Quick Add Size:
            </span>
            {addedSize && (
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center space-x-1">
                <Check className="w-3 h-3" />
                <span>Added {addedSize}</span>
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {availableSizes.map((size) => (
              <button
                key={size}
                onClick={(e) => handleSizeSelect(e, size)}
                className={`flex-1 min-w-[36px] py-1 text-[11px] font-sans font-medium tracking-wider uppercase border transition-all ${
                  addedSize === size
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-neutral-800 border-neutral-300 hover:border-black hover:bg-neutral-50'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details (Below Image) */}
      <div className="p-3.5 flex flex-col space-y-1">
        {/* Product Title */}
        <h3 className="text-[13px] sm:text-[14px] font-serif font-medium text-[#241A16] tracking-wide line-clamp-1 group-hover:text-[#8B1E2D] transition-colors">
          {product.title}
        </h3>

        {/* Fabric & Origin Subtitle */}
        <p className="text-[11px] sm:text-[12px] font-sans text-[#7E746F] font-light line-clamp-1">
          {product.fabric || product.craft || 'Pure Mulberry Silk'}
        </p>

        {/* Price Row */}
        <div className="flex items-baseline space-x-2 pt-0.5">
          <span className="text-[13px] sm:text-[14px] font-mono font-semibold text-[#241A16] tracking-tight">
            {formatPrice(product.priceINR)}
          </span>
          {product.originalPriceINR && product.originalPriceINR > product.priceINR && (
            <span className="text-[11px] font-mono text-[#7E746F] line-through">
              {formatPrice(product.originalPriceINR)}
            </span>
          )}
        </div>

        {/* Color Swatch Dots */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-1.5 pt-1">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(c.name);
                }}
                className={`w-3 h-3 rounded-full border transition-all ${
                  selectedColor === c.name
                    ? 'ring-1 ring-offset-1 ring-black scale-110'
                    : 'border-neutral-300 hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

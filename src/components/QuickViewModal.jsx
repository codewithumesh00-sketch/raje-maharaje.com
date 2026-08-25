import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Check, ArrowRight } from 'lucide-react';

const QuickViewModal = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateToProduct,
    navigateTo
  } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Midnight Navy');
  const [selectedSize, setSelectedSize] = useState('L');
  const [justAdded, setJustAdded] = useState(false);

  if (!quickViewProduct) return null;

  const isFav = isInWishlist(quickViewProduct.id);

  const colors = [
    { name: 'Midnight Navy', hex: '#0B1726', bg: 'bg-[#0B1726]' },
    { name: 'Imperial Crimson', hex: '#8B0000', bg: 'bg-[#8B0000]' },
    { name: 'Ivory Mulberry', hex: '#FDFBF7', bg: 'bg-[#FDFBF7] border border-neutral-300' },
    { name: 'Royal Emerald', hex: '#0F3E2E', bg: 'bg-[#0F3E2E]' }
  ];

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const handleAdd = () => {
    addToCart(quickViewProduct, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
    navigateTo('checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8 select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Box (Clean Gravity Minimalist Styling) */}
      <div className="relative bg-white max-w-3xl w-full overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 z-20 p-2 bg-white/90 text-black hover:bg-black hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Product Image */}
        <div className="relative bg-neutral-100 aspect-square md:aspect-auto flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-neutral-200">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.title}
            className="w-full h-full object-contain max-h-80"
            onError={(e) => {
              e.target.src = 'https://static.wixstatic.com/media/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png/v1/fill/w_800,h_800,al_c,q_90/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png';
            }}
          />
          {quickViewProduct.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider bg-black text-white">
              {quickViewProduct.badge}
            </span>
          )}
        </div>

        {/* Right: Product Details & Controls (Shopify Gravity Format) */}
        <div className="p-6 flex flex-col justify-between max-h-[85vh] overflow-y-auto space-y-4">
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 font-sans block">
              {quickViewProduct.craft} • {quickViewProduct.origin}
            </span>

            <h2 className="font-sans text-xl sm:text-2xl font-extrabold uppercase text-neutral-900 tracking-tight leading-snug">
              {quickViewProduct.title}
            </h2>

            {/* Price */}
            <div className="flex items-baseline space-x-2.5">
              <span className="font-sans text-xl font-bold text-neutral-900">
                {formatPrice(quickViewProduct.priceINR)}
              </span>
              {quickViewProduct.originalPriceINR && (
                <span className="font-sans text-xs text-neutral-400 line-through">
                  {formatPrice(quickViewProduct.originalPriceINR)}
                </span>
              )}
            </div>

            <p className="text-xs text-neutral-500 font-sans">
              <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
            </p>

            <div className="w-full h-[1px] bg-neutral-200" />

            {/* Description */}
            <p className="text-xs text-neutral-600 font-sans leading-relaxed line-clamp-3">
              {quickViewProduct.description}
            </p>

            {/* Color Swatches */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-sans font-semibold text-neutral-900">
                Color: <span className="font-normal text-neutral-600">{selectedColor}</span>
              </span>
              <div className="flex items-center space-x-2.5">
                {colors.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-6 h-6 rounded-full ${c.bg} transition-all relative flex items-center justify-center ${
                        isSelected ? 'ring-2 ring-neutral-900 ring-offset-2' : 'opacity-85 hover:opacity-100'
                      }`}
                      title={c.name}
                    />
                  );
                })}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-sans font-semibold text-neutral-900">
                Size: <span className="font-normal text-neutral-600">{selectedSize}</span>
              </span>
              <div className="flex items-center space-x-2">
                {sizes.map((s) => {
                  const isSelected = selectedSize === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-[38px] h-9 px-2.5 flex items-center justify-center text-xs font-sans font-bold border transition-colors ${
                        isSelected
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-neutral-800 border-neutral-300 hover:border-neutral-500'
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-sans font-semibold text-neutral-900 block">
                Quantity
              </span>
              <div className="inline-flex items-center border border-neutral-300 bg-neutral-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-neutral-700 hover:bg-neutral-200 font-sans text-xs"
                >
                  –
                </button>
                <span className="px-4 py-1.5 font-sans font-bold text-xs text-neutral-900 bg-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-neutral-700 hover:bg-neutral-200 font-sans text-xs"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Row: Dual Buttons (Add to Cart + Cyan Buy Now) */}
          <div className="pt-3 border-t border-neutral-200 space-y-2.5">
            <div className="flex items-center space-x-2">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3 bg-[#252525] hover:bg-black text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                  justAdded ? 'bg-emerald-700' : ''
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added</span>
                  </>
                ) : (
                  <span>Add to cart</span>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                className={`p-3 border border-neutral-300 hover:border-black transition-colors ${
                  isFav ? 'bg-rose-50 text-rose-600 border-rose-300' : 'bg-white text-neutral-800'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-600' : ''}`} />
              </button>
            </div>

            {/* Vibrant Cyan Buy It Now Button */}
            <button
              onClick={handleBuyNow}
              className="w-full py-3 bg-[#0084B4] hover:bg-[#00739c] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              Buy it now
            </button>

            <button
              onClick={() => {
                navigateToProduct(quickViewProduct.id);
                setQuickViewProduct(null);
              }}
              className="w-full text-center text-xs text-neutral-600 hover:text-black underline pt-1"
            >
              View full details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;

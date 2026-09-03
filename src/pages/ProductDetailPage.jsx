import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import {
  ShoppingBag,
  Heart,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
  Gift,
  ChevronDown,
  ChevronUp,
  Award,
  Check,
  Maximize2
} from 'lucide-react';

const ProductDetailPage = () => {
  const {
    products,
    selectedProductId,
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateTo,
    triggerConfetti
  } = useShop();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Midnight Navy');
  const [selectedSize, setSelectedSize] = useState('L');
  const [monogram, setMonogram] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('craft');
  const [personalGiftNote, setPersonalGiftNote] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [product.id]);

  const isFavorite = isInWishlist(product.id);

  const images = [
    product.image,
    product.secondaryImage || product.image,
    '/images/craft_fan_squares_4k.png',
    '/images/hero_model_slot_2.png'
  ];

  const colors = [
    { name: 'Midnight Navy', bg: 'bg-[#0B1726]' },
    { name: 'Imperial Crimson', bg: 'bg-[#8B0000]' },
    { name: 'Ivory Mulberry', bg: 'bg-[#FDFBF7] border border-neutral-300' },
    { name: 'Royal Emerald', bg: 'bg-[#0F3E2E]' }
  ];

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const handleAddToCart = () => {
    addToCart(product, quantity, monogram ? monogram.toUpperCase() : null, personalGiftNote);
    setJustAdded(true);
    triggerConfetti();
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyItNow = () => {
    addToCart(product, quantity, monogram ? monogram.toUpperCase() : null, personalGiftNote);
    navigateTo('checkout');
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  // Related products
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.craft === product.craft || p.collection === product.collection))
    .slice(0, 4);

  return (
    <div className="bg-[#fbfbfa] min-h-screen py-8 sm:py-12 text-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-sans text-neutral-500 uppercase tracking-widest mb-6">
          <button onClick={() => navigateTo('home')} className="hover:text-black">Home</button>
          <span>/</span>
          <button onClick={() => navigateTo('shop')} className="hover:text-black">Atelier</button>
          <span>/</span>
          <span className="text-black font-semibold truncate max-w-xs">{product.title}</span>
        </div>

        {/* Main PDP Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Gallery Area (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Large Image with Zoom */}
            <div
              className="relative aspect-square overflow-hidden bg-neutral-100 shadow-md cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={images[activeImageIndex]}
                alt={product.title}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                  isZoomed ? 'scale-125' : 'scale-100'
                }`}
                onError={(e) => {
                  e.target.src = '/images/craft_fan_squares_4k.png';
                }}
              />

              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-black text-white shadow-md">
                  {product.badge}
                </span>
              )}

              {/* Dynamic Live Monogram Preview Overlay */}
              {monogram.trim() && (
                <div className="absolute bottom-6 right-6 bg-[#122D3E]/90 border border-[#A8CEE8] backdrop-blur-md px-3 py-1.5 rounded-lg shadow-2xl flex items-center space-x-1.5 animate-in fade-in">
                  <Sparkles className="w-3 h-3 text-[#A8CEE8]" />
                  <span className="font-mono font-black text-xs uppercase tracking-[0.25em] text-white">
                    [{monogram.toUpperCase()}]
                  </span>
                  <span className="text-[9px] text-[#A8CEE8] uppercase font-sans font-semibold">Gold Embroidered</span>
                </div>
              )}

              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 p-2.5 shadow-md backdrop-blur-md transition-all ${
                  isFavorite
                    ? 'bg-white text-rose-600'
                    : 'bg-white/90 text-neutral-700 hover:text-rose-600'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-rose-600' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-square overflow-hidden bg-neutral-100 border transition-all ${
                    activeImageIndex === idx
                      ? 'border-black shadow-md'
                      : 'border-neutral-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-neutral-200 text-center">
              <div className="p-3 bg-white border border-neutral-200">
                <Truck className="w-4 h-4 text-neutral-800 mx-auto mb-1" />
                <span className="text-[11px] font-sans font-bold text-neutral-900 block uppercase tracking-wider">Complimentary Shipping</span>
                <span className="text-[10px] text-neutral-500">Orders above Rs. 5,000</span>
              </div>
              <div className="p-3 bg-white border border-neutral-200">
                <Award className="w-4 h-4 text-neutral-800 mx-auto mb-1" />
                <span className="text-[11px] font-sans font-bold text-neutral-900 block uppercase tracking-wider">GI Certified Weave</span>
                <span className="text-[10px] text-neutral-500">Authentic artisan lineage</span>
              </div>
              <div className="p-3 bg-white border border-neutral-200">
                <Gift className="w-4 h-4 text-neutral-800 mx-auto mb-1" />
                <span className="text-[11px] font-sans font-bold text-neutral-900 block uppercase tracking-wider">Royal Gift Chest</span>
                <span className="text-[10px] text-neutral-500">Molten wax sealed</span>
              </div>
            </div>
          </div>

          {/* Product Purchasing & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 font-sans block mb-1">
                {product.craft} • {product.origin}
              </span>

              <h1 className="font-sans text-2xl sm:text-4xl font-extrabold uppercase text-neutral-900 tracking-tight leading-tight">
                {product.title}
              </h1>

              {/* Price */}
              <div className="mt-3 flex items-baseline space-x-3">
                <span className="font-sans text-2xl font-bold text-neutral-900">
                  {formatPrice(product.priceINR)}
                </span>
                {product.originalPriceINR && (
                  <span className="font-sans text-sm text-neutral-400 line-through">
                    {formatPrice(product.originalPriceINR)}
                  </span>
                )}
              </div>

              <p className="text-xs text-neutral-500 font-sans mt-1">
                <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
              </p>
            </div>

            <div className="w-full h-[1px] bg-neutral-200" />

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-sans font-semibold text-neutral-900">
                Color: <span className="font-normal text-neutral-600">{selectedColor}</span>
              </span>
              <div className="flex items-center space-x-3">
                {colors.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full ${c.bg} transition-all relative flex items-center justify-center ${
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
                      className={`min-w-[44px] h-10 px-3 flex items-center justify-center text-xs font-sans font-bold border transition-colors ${
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

            {/* Monogram Option */}
            <div className="p-3.5 bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-900">
                  Custom Gold Thread Monogramming
                </span>
                <span className="text-xs font-sans font-bold text-neutral-900">+Rs. 450.00</span>
              </div>
              <input
                type="text"
                maxLength={3}
                value={monogram}
                onChange={(e) => setMonogram(e.target.value)}
                placeholder="Enter 2-3 Initials (e.g. VKS)"
                className="w-full bg-white border border-neutral-300 px-3 py-1.5 text-xs uppercase font-mono tracking-widest text-neutral-900 focus:outline-none focus:border-black"
              />
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-2">
              <div className="space-y-1.5">
                <span className="text-xs font-sans font-semibold text-neutral-900 block">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-neutral-300 bg-neutral-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 text-neutral-700 hover:bg-neutral-200 font-sans text-sm"
                  >
                    –
                  </button>
                  <span className="px-5 py-2.5 font-sans font-bold text-xs text-neutral-900 bg-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 text-neutral-700 hover:bg-neutral-200 font-sans text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart (Dark) & Buy it now (Cyan Blue) */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 bg-[#252525] hover:bg-black text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                    justAdded ? 'bg-emerald-700' : ''
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Royal Bag</span>
                    </>
                  ) : (
                    <span>Add to cart</span>
                  )}
                </button>

                {/* Vibrant Cyan Blue Buy It Now Button */}
                <button
                  onClick={handleBuyItNow}
                  className="w-full py-3.5 bg-[#0084B4] hover:bg-[#00739c] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Buy it now
                </button>
              </div>
            </div>

            {/* Accordion Specification Tabs */}
            <div className="pt-4 border-t border-neutral-200 space-y-2">
              {/* Accordion 1: Craft */}
              <div className="border border-neutral-200 bg-white">
                <button
                  onClick={() => toggleAccordion('craft')}
                  className="w-full p-3.5 flex items-center justify-between text-left font-sans font-bold text-xs uppercase tracking-wider text-neutral-900"
                >
                  <span>The Craft & Artisan Heritage</span>
                  {openAccordion === 'craft' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === 'craft' && (
                  <div className="p-3.5 pt-0 text-xs text-neutral-600 space-y-1.5 border-t border-neutral-100 font-sans">
                    <p><strong>Craft Discipline:</strong> {product.craft}</p>
                    <p><strong>Artisan Origin:</strong> {product.origin}</p>
                    <p><strong>Fabric Composition:</strong> {product.fabric}</p>
                    <p><strong>Finishing:</strong> {product.edge}</p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Dimensions */}
              <div className="border border-neutral-200 bg-white">
                <button
                  onClick={() => toggleAccordion('styling')}
                  className="w-full p-3.5 flex items-center justify-between text-left font-sans font-bold text-xs uppercase tracking-wider text-neutral-900"
                >
                  <span>Dimensions & Styling Guide</span>
                  {openAccordion === 'styling' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordion === 'styling' && (
                  <div className="p-3.5 pt-0 text-xs text-neutral-600 space-y-1.5 border-t border-neutral-100 font-sans">
                    <p><strong>Measurements:</strong> {product.dimensions}</p>
                    <p><strong>Recommended Folds:</strong> The Presidential, Royal Crown, Sovereign Puff</p>
                    <p><strong>Styling Tip:</strong> {product.stylingNotes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="font-sans text-2xl font-extrabold text-neutral-900 uppercase tracking-tight mb-6">
              Trending // Related Creations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Gravity Signature Sticky Floating Quick-Buy Bar */}
      <div
        className={`fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-2xl z-40 p-3 sm:p-4 transition-all duration-400 ease-gravity transform ${
          showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3 truncate">
            <img
              src={images[0]}
              alt={product.title}
              className="w-10 h-10 object-cover rounded-sm border border-neutral-200"
            />
            <div className="truncate">
              <h4 className="font-sans font-bold text-xs sm:text-sm text-neutral-900 truncate">
                {product.title}
              </h4>
              <span className="font-sans font-bold text-xs text-neutral-700">
                {formatPrice(product.priceINR)}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={handleAddToCart}
              className={`px-4 sm:px-6 py-2.5 bg-[#252525] hover:bg-black text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 ${
                justAdded ? 'bg-emerald-700' : ''
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Added</span>
                </>
              ) : (
                <span>Add to cart</span>
              )}
            </button>

            <button
              onClick={handleBuyItNow}
              className="px-4 sm:px-6 py-2.5 bg-[#0084B4] hover:bg-[#00739c] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              Buy it now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

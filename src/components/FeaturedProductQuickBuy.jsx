import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Maximize2, X, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const FeaturedProductQuickBuy = () => {
  const { formatPrice, addToCart, navigateToProduct, navigateTo } = useShop();

  // Selected State
  const [selectedColor, setSelectedColor] = useState('Midnight Navy');
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const [justAdded, setJustAdded] = useState(false);

  // Gallery 4 Images (2x2 Grid matching Reference Image 5)
  const galleryImages = [
    {
      id: 1,
      src: '/images/hero_model_slot_2.png',
      alt: 'Royal Bandhgala Front Silhouette'
    },
    {
      id: 2,
      src: '/images/craft_fan_squares_4k.png',
      alt: 'Banarasi Zari Micro-Relief Weave'
    },
    {
      id: 3,
      src: '/images/hero_model_slot_1.png',
      alt: 'Royal Model Profile'
    },
    {
      id: 4,
      src: '/images/home_hero_bandhgala_cutout.png',
      alt: 'Midnight Velvet Master Craftsmanship'
    }
  ];

  // Color Swatches
  const colors = [
    { name: 'Midnight Navy', hex: '#0B1726', bg: 'bg-[#0B1726]' },
    { name: 'Imperial Crimson', hex: '#8B0000', bg: 'bg-[#8B0000]' },
    { name: 'Ivory Mulberry', hex: '#FDFBF7', bg: 'bg-[#FDFBF7] border border-neutral-300' },
    { name: 'Royal Emerald', hex: '#0F3E2E', bg: 'bg-[#0F3E2E]' }
  ];

  // Sizes
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const product = {
    id: 'maharaje-regal-bandhgala-ensemble',
    title: 'The Maharaje Royal Midnight Bandhgala & Zari Ensemble',
    priceINR: 4999,
    originalPriceINR: 5999,
    image: '/images/hero_model_slot_2.png',
    craft: 'Banarasi Silk & Royal Velvet',
    origin: 'Varanasi & Pan-India Atelier',
    inStock: true
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyItNow = () => {
    addToCart(product, quantity);
    navigateTo('checkout');
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left 2x2 Image Grid + Right Product Info (Exact Image 5 Match) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left: 2x2 Gallery Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-square bg-neutral-100 overflow-hidden cursor-pointer"
                onClick={() => setZoomImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://static.wixstatic.com/media/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png/v1/fill/w_800,h_800,al_c,q_90/32554b_41c0dd2ec0dd41c5a3c90f316f76b745~mv2.png';
                  }}
                />

                {/* Square Expand/Zoom Icon in Top-Right (Exact Image 5) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomImage(img.src);
                  }}
                  className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 text-neutral-800 hover:bg-black hover:text-white transition-colors shadow-xs"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Right: Product Details & Controls (6 cols) */}
          <div className="lg:col-span-6 space-y-5 lg:pl-4">
            {/* Title */}
            <h1 className="font-sans text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight">
              {product.title}
            </h1>

            {/* Price */}
            <div>
              <span className="font-sans font-bold text-xl sm:text-2xl text-neutral-900 tracking-tight">
                {formatPrice(product.priceINR)}
              </span>
              <p className="text-xs text-neutral-500 font-sans mt-1">
                <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-neutral-200" />

            {/* Description with Read More Toggle */}
            <div className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed">
              <p>
                Make a bold royal statement in this opulent handcrafted Bandhgala and Banarasi Zari silk pocket square ensemble.
                Crafted for ultimate ceremonial poise and distinguished contemporary style, this coordinated royal set features a structured silhouette,
                real horn buttons, and micro-relief gold zari brocade.
                {isExpanded && (
                  <span className="block mt-2 text-neutral-600">
                    Finished with hand-rolled silk borders, custom wax-sealed authentication certificate, and breathable mulberry silk lining for monumental celebrations.
                  </span>
                )}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs font-semibold text-neutral-900 underline hover:text-neutral-600"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* Color Swatches */}
            <div className="space-y-2 pt-2">
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
                        isSelected
                          ? 'ring-2 ring-neutral-900 ring-offset-2'
                          : 'opacity-85 hover:opacity-100'
                      }`}
                      title={c.name}
                    >
                      {isSelected && c.name === 'Ivory Mulberry' && (
                        <div className="w-2 h-2 rounded-full bg-neutral-900" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2 pt-2">
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

            {/* Quantity Selector */}
            <div className="space-y-2 pt-2">
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

            {/* Action Buttons: Add to cart (Dark) & Buy it now (Vibrant Cyan Blue - Exact Image 5) */}
            <div className="pt-3 space-y-3">
              <button
                onClick={handleAddToCart}
                className={`w-full py-3.5 bg-[#252525] hover:bg-black text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                  justAdded ? 'bg-emerald-700' : ''
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <span>Add to cart</span>
                )}
              </button>

              {/* Exact Cyan Blue Buy It Now Button from Reference Image 5 */}
              <button
                onClick={handleBuyItNow}
                className="w-full py-3.5 bg-[#0084B4] hover:bg-[#00739c] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Buy it now
              </button>
            </div>

            {/* View Full Details Link */}
            <div className="pt-2">
              <button
                onClick={() => navigateToProduct(product.id)}
                className="text-xs font-sans text-neutral-700 hover:text-black underline flex items-center space-x-1"
              >
                <span>View full details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setZoomImage(null)}
        >
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={zoomImage}
            alt="Zoomed Detail"
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default FeaturedProductQuickBuy;

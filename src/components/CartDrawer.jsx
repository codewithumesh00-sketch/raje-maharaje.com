import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, ShoppingBag, Trash2, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateCartQuantity,
    removeFromCart,
    cartSubtotalINR,
    discountAmountINR,
    shippingCostINR,
    cartTotalINR,
    freeShippingThresholdINR,
    appliedDiscount,
    discountCode,
    discountError,
    applyPromoCode,
    formatPrice,
    navigateTo
  } = useShop();

  const [promoInput, setPromoInput] = useState('');

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingLeftINR = Math.max(0, freeShippingThresholdINR - cartSubtotalINR);
  const freeShippingProgressPercent = Math.min(100, Math.round((cartSubtotalINR / freeShippingThresholdINR) * 100));

  const handleApplyCode = (e) => {
    e.preventDefault();
    if (!promoInput) return;
    applyPromoCode(promoInput);
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigateTo('checkout');
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-[101]">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-200 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 pt-7 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-black" />
              <h2 className="font-sans text-base font-bold text-black uppercase tracking-wider">
                Shopping Bag ({cart.length})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-neutral-500 hover:text-black transition-colors"
            >
              <div className="w-7 h-7 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center">
                <X className="w-4 h-4 text-black" />
              </div>
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3.5 bg-black text-white border-b border-neutral-800">
            {freeShippingLeftINR > 0 ? (
              <div className="space-y-1.5 text-xs">
                <p className="text-neutral-300 font-sans flex items-center justify-between">
                  <span>Add <strong className="text-white font-mono">{formatPrice(freeShippingLeftINR)}</strong> for free delivery</span>
                  <span className="font-mono text-white">{freeShippingProgressPercent}%</span>
                </p>
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-500"
                    style={{ width: `${freeShippingProgressPercent}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-xs text-white font-sans font-medium">
                <Sparkles className="w-4 h-4 text-white" />
                <span>You unlocked <strong>Complimentary Express Delivery</strong></span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-black uppercase">
                    Your Bag is Empty
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-1 max-w-xs">
                    Explore our handcrafted silk pocket squares and bespoke gift suites.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('shop');
                  }}
                  className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartId}
                  className="flex gap-4 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 relative group"
                >
                  <div className="w-18 h-18 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-neutral-200">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0 pr-6">
                    <div>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-black truncate">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-neutral-500 font-mono">
                        {item.craft}
                      </p>
                      {item.monogram && (
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-neutral-200 text-black text-[9px] font-mono font-bold">
                          Initials: {item.monogram}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-200">
                      <div className="flex items-center border border-neutral-300 rounded bg-white text-xs font-mono">
                        <button
                          onClick={() => updateCartQuantity(item.cartId, item.quantity - 1)}
                          className="px-2 py-0.5 text-neutral-700 hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.cartId, item.quantity + 1)}
                          className="px-2 py-0.5 text-neutral-700 hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-mono text-xs sm:text-sm font-bold text-black">
                        {formatPrice(item.priceINR * item.quantity)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="absolute top-3 right-3 text-neutral-400 hover:text-black transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-neutral-200 bg-neutral-50 space-y-4">
              <form onSubmit={handleApplyCode} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Code (try ROYAL10)"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-neutral-300 rounded-lg bg-white uppercase font-mono focus:outline-none focus:border-black"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedDiscount > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md">
                  <span>Privilege Code ({discountCode})</span>
                  <span>-{(appliedDiscount * 100)}%</span>
                </div>
              )}

              {discountError && (
                <p className="text-[11px] text-rose-600 font-sans">{discountError}</p>
              )}

              <div className="space-y-1.5 text-xs text-neutral-700 pt-1 border-t border-neutral-200">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-black font-bold">{formatPrice(cartSubtotalINR)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span className="font-mono font-bold">-{formatPrice(discountAmountINR)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Shipping</span>
                  <span className="font-mono font-semibold">
                    {shippingCostINR === 0 ? <strong className="text-emerald-700">Free</strong> : formatPrice(shippingCostINR)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-black pt-2 border-t border-neutral-200">
                  <span>Estimated Total</span>
                  <span className="font-mono text-base">{formatPrice(cartTotalINR)}</span>
                </div>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-md flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

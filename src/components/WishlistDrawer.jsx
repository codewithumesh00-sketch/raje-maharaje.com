import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

const WishlistDrawer = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    formatPrice,
    navigateToProduct
  } = useShop();

  useEffect(() => {
    if (isWishlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isWishlistOpen]);

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-[101]">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-200 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 pt-7 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
              <h2 className="font-sans text-base font-bold text-black uppercase tracking-wider">
                Saved Items ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1 rounded-full text-neutral-500 hover:text-black transition-colors"
            >
              <div className="w-7 h-7 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center">
                <X className="w-4 h-4 text-black" />
              </div>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-black uppercase">
                    Your Wishlist is Empty
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-1 max-w-xs">
                    Save your favorite silk brocades and hand-embroidered pieces while browsing.
                  </p>
                </div>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 relative group"
                >
                  <div
                    onClick={() => {
                      navigateToProduct(item.id);
                      setIsWishlistOpen(false);
                    }}
                    className="w-18 h-18 rounded-lg overflow-hidden bg-white flex-shrink-0 cursor-pointer border border-neutral-200"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0 pr-6">
                    <div>
                      <h4
                        onClick={() => {
                          navigateToProduct(item.id);
                          setIsWishlistOpen(false);
                        }}
                        className="font-sans font-bold text-xs sm:text-sm text-black truncate cursor-pointer hover:underline"
                      >
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-neutral-500 font-mono">
                        {item.craft}
                      </p>
                      <p className="font-mono text-xs font-bold text-black mt-1">
                        {formatPrice(item.priceINR)}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-neutral-200 flex items-center justify-between">
                      <button
                        onClick={() => {
                          addToCart(item, 1);
                          toggleWishlist(item);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-black text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 flex items-center space-x-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        onClick={() => toggleWishlist(item)}
                        className="text-neutral-400 hover:text-rose-600 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistDrawer;

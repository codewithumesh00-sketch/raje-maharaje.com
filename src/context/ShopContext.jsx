import React, { createContext, useContext, useState, useEffect } from 'react';
import productsData from '../data/products';
import { currencies } from '../data/crafts';
import confetti from 'canvas-confetti';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Navigation & Page routing
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Currency selection
  const [currentCurrency, setCurrentCurrency] = useState('INR');

  // Cart state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('rm_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('rm_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Discount code state
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // e.g. 0.10 for 10%
  const [discountError, setDiscountError] = useState('');

  // Persist cart & wishlist
  useEffect(() => {
    try {
      localStorage.setItem('rm_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('rm_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Price conversion helper matching Shopify Gravity theme (Rs. 2,999.00 format)
  const formatPrice = (priceINR) => {
    if (!priceINR && priceINR !== 0) return '';
    const curr = currencies[currentCurrency] || currencies.INR;
    const converted = priceINR * curr.rate;
    if (currentCurrency === 'INR') {
      return `Rs. ${Math.round(converted).toLocaleString('en-IN')}.00`;
    }
    return `${curr.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Toast notification
  const showToast = (msg, icon = '✨') => {
    setToastMessage({ text: msg, icon, id: Date.now() });
    setTimeout(() => {
      setToastMessage(prev => (prev?.id === prev?.id ? null : prev));
    }, 3800);
  };

  // Cart operations
  const addToCart = (product, quantity = 1, monogram = null, giftNote = '') => {
    setCart(prev => {
      const cartItemId = monogram ? `${product.id}-mono-${monogram}` : product.id;
      const existing = prev.find(item => item.cartId === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.cartId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prev,
          {
            ...product,
            cartId: cartItemId,
            quantity,
            monogram,
            giftNote,
            priceINR: monogram ? product.priceINR + 450 : product.priceINR
          }
        ];
      }
    });

    showToast(`Added "${product.title}" to your royal collection.`, '🛍️');
    setIsCartOpen(true);
  };

  const updateCartQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCart(prev => prev.map(item => item.cartId === cartId ? { ...item, quantity } : item));
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
    showToast('Item removed from bag.', '🗑️');
  };

  const clearCart = () => {
    setCart([]);
    setAppliedDiscount(0);
    setDiscountCode('');
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed from your wishlist.`, '🤍');
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Saved "${product.title}" to your wishlist.`, '❤️');
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Discount code application
  const applyPromoCode = (code) => {
    setDiscountError('');
    const clean = code.trim().toUpperCase();
    if (clean === 'ROYAL10' || clean === 'GRAVITY10') {
      setAppliedDiscount(0.10);
      setDiscountCode(clean);
      showToast('10% Royal Welcome Privilege Applied!', '👑');
      return true;
    } else if (clean === 'REGAL20' || clean === 'WEDDING20') {
      setAppliedDiscount(0.20);
      setDiscountCode(clean);
      showToast('20% Grand Celebration Privilege Applied!', '✨');
      return true;
    } else {
      setDiscountError('Invalid code. Try "ROYAL10" for 10% privilege discount.');
      return false;
    }
  };

  // Cart calculations
  const cartSubtotalINR = cart.reduce((sum, item) => sum + item.priceINR * item.quantity, 0);
  const discountAmountINR = Math.round(cartSubtotalINR * appliedDiscount);
  const freeShippingThresholdINR = 5000;
  const shippingCostINR = cartSubtotalINR >= freeShippingThresholdINR || cartSubtotalINR === 0 ? 0 : 350;
  const cartTotalINR = Math.max(0, cartSubtotalINR - discountAmountINR + shippingCostINR);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Trigger celebratory confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#E5C158', '#FAF8F5', '#0B1726', '#B2853E']
      });
    } catch (e) {
      console.error(e);
    }
  };


  // Check URL on load for direct collection routes
  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('raje') && !path.includes('maharaje')) {
      setCurrentPage('raje');
    } else if (path.includes('maharaje')) {
      setCurrentPage('maharaje');
    } else if (path.includes('about')) {
      setCurrentPage('about');
    } else if (path.includes('contact')) {
      setCurrentPage('contact');
    } else if (path.includes('shop') || path.includes('category')) {
      setCurrentPage('shop');
    } else if (path.includes('faq')) {
      setCurrentPage('faq');
    } else if (path.includes('store-policy')) {
      setCurrentPage('store-policy');
    } else if (path.includes('shipping')) {
      setCurrentPage('shipping-returns');
    } else if (path.includes('builder')) {
      setCurrentPage('builder');
    }
  }, []);

  const navigateToProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
    try {
      if (pageName === 'home') {
        window.history.pushState({}, '', '/');
      } else if (pageName === 'shop') {
        window.history.pushState({}, '', '/category/shop');
      } else if (pageName === 'raje') {
        window.history.pushState({}, '', '/raje');
      } else if (pageName === 'maharaje') {
        window.history.pushState({}, '', '/maharaje');
      } else if (pageName === 'about') {
        window.history.pushState({}, '', '/about-us');
      } else if (pageName === 'contact') {
        window.history.pushState({}, '', '/contact-us');
      } else if (pageName === 'faq') {
        window.history.pushState({}, '', '/faq');
      } else if (pageName === 'store-policy') {
        window.history.pushState({}, '', '/store-policy');
      } else if (pageName === 'shipping-returns') {
        window.history.pushState({}, '', '/shipping-and-returns');
      } else if (pageName === 'corporate') {
        window.history.pushState({}, '', '/corporate-gifting');
      }
    } catch {
      // Ignore if pushState fails in some sandboxed iframes
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ShopContext.Provider
      value={{
        products: productsData,
        currentPage,
        setCurrentPage,
        navigateTo,
        selectedProductId,
        setSelectedProductId,
        navigateToProduct,
        currentCurrency,
        setCurrentCurrency,
        formatPrice,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartItemCount,
        cartSubtotalINR,
        discountAmountINR,
        shippingCostINR,
        cartTotalINR,
        freeShippingThresholdINR,
        appliedDiscount,
        discountCode,
        discountError,
        applyPromoCode,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        toastMessage,
        showToast,
        triggerConfetti
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
export default ShopContext;

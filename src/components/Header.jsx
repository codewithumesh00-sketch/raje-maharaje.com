import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import BrandLogo from './BrandLogo';
import {
  Search,
  ShoppingBag,
  Heart,
  X,
  ChevronDown,
  User,
  Menu,
  ArrowRight
} from 'lucide-react';

const Header = () => {
  const {
    currentPage,
    navigateTo,
    cartItemCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    currentCurrency,
    setCurrentCurrency
  } = useShop();

  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuDrawerOpen]);

  // Exact Nicobar primary desktop navigation links (Home, Women, Men, Living, Gifting, Stories)
  const navLinks = [
    { label: 'HOME', page: 'home' },
    { label: 'WOMEN', page: 'women' },
    { label: 'MEN', page: 'men' },
    { label: 'LIVING', page: 'living' },
    { label: 'GIFTING', page: 'gifting' },
    { label: 'STORIES', page: 'about' },
    { label: 'STORES', page: 'stores' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 select-none transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/40 md:bg-[#FAF8F5]/45 backdrop-blur-md text-neutral-900 border-b border-neutral-200/40 shadow-xs'
            : 'bg-[#FAF8F5] text-neutral-900 border-b border-[#E8E1D3]'
        }`}
      >
        <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-18'
            }`}
          >
            {/* Left: Hamburger & Brand Identity */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button
                onClick={() => setMenuDrawerOpen(true)}
                className="p-1 -ml-1 text-neutral-900 hover:text-[#8B1E2D] focus:outline-none transition-colors group flex items-center space-x-2"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-800 group-hover:scale-105 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('home')}
                className="group text-left focus:outline-none flex items-center"
              >
                <BrandLogo
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-7 sm:h-8 md:h-9' : 'h-8 sm:h-9 md:h-10'
                  }`}
                  theme="dark"
                />
              </button>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.label}
                    onClick={() => navigateTo(item.page)}
                    className={`text-xs uppercase tracking-[0.2em] font-medium transition-all py-1 border-b-2 ${
                      item.isSale
                        ? 'text-[#C02633] border-transparent hover:border-[#C02633] font-semibold'
                        : isActive
                        ? 'text-[#8B1E2D] border-[#8B1E2D] font-semibold'
                        : 'text-neutral-700 border-transparent hover:text-[#8B1E2D] hover:border-[#C99E54]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Utility Suite */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Country Flag / Currency */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className="flex items-center space-x-1.5 text-xs font-sans text-neutral-700 hover:text-black py-1 px-2 border border-neutral-200 hover:border-neutral-400 transition-colors"
                >
                  <span className="text-sm">🇮🇳</span>
                  <span className="uppercase tracking-wider font-medium text-[11px]">India</span>
                  <ChevronDown className="w-3 h-3 text-neutral-400" />
                </button>

                {currencyDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white border border-neutral-200 shadow-xl py-1 z-50 animate-fade-in text-neutral-900">
                    <button
                      onClick={() => {
                        setCurrentCurrency('INR');
                        setCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-sans hover:bg-neutral-50 flex items-center justify-between"
                    >
                      <span>🇮🇳 India (INR)</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentCurrency('USD');
                        setCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-sans hover:bg-neutral-50 flex items-center justify-between"
                    >
                      <span>🌍 Global (USD)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 text-neutral-700 hover:text-black transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Account */}
              <button
                onClick={() => navigateTo('contact')}
                className="p-1.5 text-neutral-700 hover:text-black transition-colors hidden sm:block"
                aria-label="Account / Concierge"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="p-1.5 text-neutral-700 hover:text-black transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-1.5 text-neutral-700 hover:text-black transition-colors relative"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Drawer (Exact Nicobar sidebar menu) */}
      {menuDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={() => setMenuDrawerOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          />

          <div className="relative w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl flex flex-col z-10 animate-slide-right">
            <div className="p-5 border-b border-neutral-200/70 flex items-center justify-between bg-white">
              <button
                onClick={() => {
                  navigateTo('home');
                  setMenuDrawerOpen(false);
                }}
                className="text-left focus:outline-none"
              >
                <BrandLogo className="h-8" theme="dark" />
              </button>
              <button
                onClick={() => setMenuDrawerOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 text-neutral-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {[
                { label: 'HOME', page: 'home' },
                { label: 'WOMEN', page: 'women' },
                { label: 'MEN', page: 'men' },
                { label: 'LIVING', page: 'living' },
                { label: 'GIFTING', page: 'gifting' },
                { label: 'OUR STORES (LOCATOR)', page: 'stores' },
                { label: 'IN THE PRESS', page: 'press' },
                { label: 'RAJE (₹500 - ₹700)', page: 'raje' },
                { label: 'MAHARAJE (₹2,625 - ₹3,675)', page: 'maharaje' },
                { label: 'ALL PRODUCTS', page: 'shop' },
                { label: 'STORIES (ABOUT US)', page: 'about' },
                { label: 'CONTACT US', page: 'contact' },
              ].map((item) => (
                <div key={item.label} className="border-b border-neutral-200/60 pb-3">
                  <button
                    onClick={() => {
                      navigateTo(item.page);
                      setMenuDrawerOpen(false);
                    }}
                    className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-black flex items-center justify-between w-full text-left"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </button>
                </div>
              ))}

              <div className="pt-6">
                <button
                  onClick={() => {
                    navigateTo('shop');
                    setMenuDrawerOpen(false);
                  }}
                  className="w-full py-3 bg-neutral-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-colors text-center block"
                >
                  SHOP WEDDING COLLECTION
                </button>
              </div>

              {/* Direct Atelier Details */}
              <div className="pt-6 border-t border-neutral-200/60 text-xs text-neutral-500 font-sans space-y-1">
                <p className="font-serif uppercase tracking-wider text-neutral-800 font-medium">Studio Sankara, Gurgaon</p>
                <p>Sector 28, Gurgaon 122002</p>
                <p>WhatsApp Concierge: +91 9910807795</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

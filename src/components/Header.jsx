import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import categoriesData from '../data/categories';
import {
  Search,
  ShoppingBag,
  Heart,
  X,
  ChevronDown,
  ChevronUp,
  User,
  Menu,
  Sparkles
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
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [openDrawerAccordion, setOpenDrawerAccordion] = useState('categories');

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

  const navLinks = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP', page: 'shop', hasDropdown: true },
    { label: 'RAJE', page: 'raje' },
    { label: 'MAHARAJE', page: 'maharaje' },
    { label: 'ABOUT US', page: 'about' },
    { label: 'CONTACT US', page: 'contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-neutral-900 border-b border-neutral-200/80 transition-all duration-300 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Left: Hamburger & Brand Identity */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button
                onClick={() => setMenuDrawerOpen(true)}
                className="p-1 -ml-1 text-neutral-900 hover:text-black focus:outline-none transition-colors group flex items-center space-x-2"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-800 group-hover:scale-105 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('home')}
                className="group text-left focus:outline-none flex items-center space-x-2"
              >
                <span className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-[0.24em] sm:tracking-[0.28em] uppercase text-neutral-900 hover:text-[#9c783e] transition-colors">
                  R A J E &bull; M A H A R A J E
                </span>
              </button>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item) => {
                const isActive = currentPage === item.page;
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setCategoriesDropdownOpen(true)}
                      onMouseLeave={() => setCategoriesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => navigateTo('shop')}
                        className={`text-xs uppercase tracking-[0.2em] font-medium transition-all py-1 flex items-center space-x-1 border-b-2 ${
                          isActive
                            ? 'text-black border-black font-semibold'
                            : 'text-neutral-600 border-transparent hover:text-black hover:border-neutral-400'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3 h-3 text-neutral-400 group-hover:rotate-180 transition-transform duration-200" />
                      </button>

                      {/* Mega Dropdown with all 13 Categories from rajemaharaje.com */}
                      {categoriesDropdownOpen && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[480px] z-50 animate-fade-in">
                          <div className="bg-white border border-neutral-200/90 shadow-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-2.5">
                            <div className="col-span-2 pb-2 mb-2 border-b border-neutral-100 flex items-center justify-between">
                              <span className="text-[10px] font-sans uppercase tracking-widest font-semibold text-[#9c783e]">
                                All Categories
                              </span>
                              <button
                                onClick={() => {
                                  navigateTo('shop');
                                  setCategoriesDropdownOpen(false);
                                }}
                                className="text-[11px] font-sans text-neutral-500 hover:text-black underline"
                              >
                                View All Products
                              </button>
                            </div>
                            {categoriesData.map((cat) => (
                              <button
                                key={cat.id}
                                onClick={() => {
                                  navigateTo('shop');
                                  setCategoriesDropdownOpen(false);
                                }}
                                className="text-left text-xs font-sans text-neutral-700 hover:text-black hover:translate-x-0.5 transition-all line-clamp-1 py-1"
                              >
                                {cat.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => navigateTo(item.page)}
                    className={`text-xs uppercase tracking-[0.2em] font-medium transition-all py-1 border-b-2 ${
                      isActive
                        ? 'text-black border-black font-semibold'
                        : 'text-neutral-600 border-transparent hover:text-black hover:border-neutral-400'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Utility Suite */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Country Flag */}
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
                  <div className="absolute right-0 mt-2 w-36 bg-white border border-neutral-200 shadow-xl py-1 z-50 animate-fade-in">
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

      {/* Slide-out Menu Drawer */}
      {menuDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={() => setMenuDrawerOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          />

          <div className="relative w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl flex flex-col z-10 animate-slide-right">
            <div className="p-6 border-b border-neutral-200/70 flex items-center justify-between bg-white">
              <span className="font-serif text-sm uppercase tracking-[0.24em] font-medium text-neutral-900">
                R A J E &bull; M A H A R A J E
              </span>
              <button
                onClick={() => setMenuDrawerOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 text-neutral-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="border-b border-neutral-200/60 pb-3">
                <button
                  onClick={() => {
                    navigateTo('home');
                    setMenuDrawerOpen(false);
                  }}
                  className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#9c783e] block w-full text-left"
                >
                  HOME
                </button>
              </div>

              {/* Categories Accordion */}
              <div className="border-b border-neutral-200/60 pb-3">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      navigateTo('shop');
                      setMenuDrawerOpen(false);
                    }}
                    className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#9c783e] text-left"
                  >
                    SHOP (ALL CATEGORIES)
                  </button>
                  <button
                    onClick={() => setOpenDrawerAccordion(openDrawerAccordion === 'categories' ? null : 'categories')}
                    className="p-1 text-neutral-400 hover:text-black"
                  >
                    {openDrawerAccordion === 'categories' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {openDrawerAccordion === 'categories' && (
                  <div className="mt-3 pl-3 space-y-2 border-l-2 border-neutral-300 max-h-56 overflow-y-auto">
                    {categoriesData.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          navigateTo('shop');
                          setMenuDrawerOpen(false);
                        }}
                        className="block text-xs font-sans tracking-wide text-neutral-600 hover:text-black font-light transition-colors text-left"
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-neutral-200/60 pb-3">
                <button
                  onClick={() => {
                    navigateTo('raje');
                    setMenuDrawerOpen(false);
                  }}
                  className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#9c783e] block w-full text-left"
                >
                  RAJE COLLECTION
                </button>
              </div>

              <div className="border-b border-neutral-200/60 pb-3">
                <button
                  onClick={() => {
                    navigateTo('maharaje');
                    setMenuDrawerOpen(false);
                  }}
                  className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#9c783e] block w-full text-left"
                >
                  MAHARAJE COLLECTION
                </button>
              </div>

              <div className="border-b border-neutral-200/60 pb-3">
                <button
                  onClick={() => {
                    navigateTo('corporate');
                    setMenuDrawerOpen(false);
                  }}
                  className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#9c783e] block w-full text-left"
                >
                  WEDDING FAVORS & CORPORATE GIFTS
                </button>
              </div>

              <div className="border-b border-neutral-200/60 pb-3">
                <button
                  onClick={() => {
                    navigateTo('about');
                    setMenuDrawerOpen(false);
                  }}
                  className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#9c783e] block w-full text-left"
                >
                  ABOUT US (OUR STORY)
                </button>
              </div>

              <div className="border-b border-neutral-200/60 pb-3">
                <button
                  onClick={() => {
                    navigateTo('contact');
                    setMenuDrawerOpen(false);
                  }}
                  className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#9c783e] block w-full text-left"
                >
                  CONTACT US
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    navigateTo('builder');
                    setMenuDrawerOpen(false);
                  }}
                  className="w-full py-3 bg-neutral-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-colors flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Bespoke Box Builder</span>
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-neutral-200/70 bg-white space-y-3 text-xs text-neutral-500 font-light">
              <p className="text-neutral-700 font-medium">Studio Sankara, Sector 28 Gurgaon</p>
              <div className="flex items-center justify-between">
                <span>Phone: 9910807795</span>
                <a
                  href="https://wa.me/919910807795?text=Hello%20Raje%20Maharaje%20Concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-medium hover:underline"
                >
                  WhatsApp Concierge
                </a>
              </div>
              <p className="text-[11px] text-neutral-400">
                &copy; 2025 Raje Maharaje. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import {
  Search,
  ShoppingBag,
  Heart,
  X,
  ChevronDown,
  ChevronUp,
  User,
  Menu,
  Globe,
  ArrowRight,
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
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  // Prevent background scrolling when menu drawer is open
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

  const toggleSubmenu = (menuId) => {
    setOpenSubmenu(openSubmenu === menuId ? null : menuId);
  };

  const navLinks = [
    { label: 'HOME', page: 'home' },
    { label: 'WOMEN', page: 'women' },
    { label: 'MEN', page: 'men' },
    { label: 'GIFTING', page: 'gifting' },
    { label: 'LIVING', page: 'living' },
    { label: 'COLLECTIONS', page: 'shop' },
  ];

  const drawerSections = [
    {
      id: 'women',
      title: 'WOMEN',
      page: 'women',
      sublinks: [
        { label: "Women's New Arrivals", page: 'women' },
        { label: 'Mulberry Silk Scarves', page: 'women' },
        { label: 'Chanderi Kurtas & Tunics', page: 'women' },
        { label: 'Awadhi Shadow Chikankari', page: 'women' },
        { label: 'Banarasi Zari Stoles', page: 'women' },
      ]
    },
    {
      id: 'men',
      title: 'MEN',
      page: 'men',
      sublinks: [
        { label: "Men's Royal Atelier", page: 'men' },
        { label: 'Tailored Bandhgalas & Kurtas', page: 'men' },
        { label: 'Tanchoi Brocade Pocket Squares', page: 'men' },
        { label: 'Awadhi Chikankari Pocket Squares', page: 'men' },
        { label: 'Ajrakh & Ikat Weaves', page: 'men' },
      ]
    },
    {
      id: 'gifting',
      title: 'GIFTING WORLD',
      page: 'gifting',
      sublinks: [
        { label: 'Best of Raje Gifts', page: 'gifting' },
        { label: 'Corporate & Wedding Heirlooms', page: 'corporate' },
        { label: 'Bespoke Box Builder', page: 'builder' },
        { label: 'Monogrammed Keepsake Chests', page: 'gifting' },
      ]
    },
    {
      id: 'living',
      title: 'LIVING & TABLEWARE',
      page: 'living',
      sublinks: [
        { label: 'Gifts Written in the Stars', page: 'living' },
        { label: 'Celestial Porcelain Mugs', page: 'living' },
        { label: 'Artisanal Brassware & Linen', page: 'living' },
      ]
    },
    {
      id: 'about',
      title: 'ABOUT & CRAFT ATELIER',
      page: 'about',
      sublinks: [
        { label: 'Our Heritage & Philosophy', page: 'about' },
        { label: 'Master Weavers of Varanasi & Awadh', page: 'about' },
        { label: 'Pocket Square Folding Guide', page: 'home' },
        { label: 'Contact & Concierge', page: 'contact' },
      ]
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-neutral-900 border-b border-neutral-200/70 transition-all duration-300 shadow-xs">
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

              {/* Nicobar-Style Logo Text: R A J E   M A H A R A J E */}
              <button
                onClick={() => navigateTo('home')}
                className="group text-left focus:outline-none flex items-center space-x-2"
              >
                <span className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-[0.24em] sm:tracking-[0.28em] uppercase text-neutral-900 hover:text-[#9c783e] transition-colors">
                  R A J E &bull; M A H A R A J E
                </span>
              </button>
            </div>

            {/* Center: Desktop Navigation Links (Exact Nicobar Header) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item) => {
                const isActive = currentPage === item.page;
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

            {/* Right: Country, Search, Account, Wishlist, Cart */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Country Selector (India / Global) */}
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

              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 text-neutral-700 hover:text-black transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Account / User Icon */}
              <button
                onClick={() => navigateTo('contact')}
                className="p-1.5 text-neutral-700 hover:text-black transition-colors hidden sm:block"
                aria-label="Account / Concierge"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Wishlist Heart with Badge */}
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

              {/* Shopping Bag with Counter Badge */}
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

      {/* Slide-out Navigation Drawer (Matches Nicobar Sidebar Menu) */}
      {menuDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setMenuDrawerOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl flex flex-col z-10 animate-slide-right">
            {/* Drawer Top Header */}
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

            {/* Navigation Links Accordion */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {drawerSections.map((sec) => (
                <div key={sec.id} className="border-b border-neutral-200/60 pb-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        navigateTo(sec.page);
                        setMenuDrawerOpen(false);
                      }}
                      className="text-sm font-serif uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#9c783e] transition-colors text-left"
                    >
                      {sec.title}
                    </button>
                    {sec.sublinks && (
                      <button
                        onClick={() => toggleSubmenu(sec.id)}
                        className="p-1 text-neutral-400 hover:text-black"
                      >
                        {openSubmenu === sec.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Sublinks Dropdown */}
                  {sec.sublinks && openSubmenu === sec.id && (
                    <div className="mt-3 pl-3 space-y-2.5 border-l-2 border-neutral-300">
                      {sec.sublinks.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            navigateTo(sub.page);
                            setMenuDrawerOpen(false);
                          }}
                          className="block text-xs font-sans tracking-wide text-neutral-600 hover:text-black font-light transition-colors text-left"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Direct Quick Nav */}
              <div className="pt-4 space-y-3">
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

            {/* Drawer Footer */}
            <div className="p-6 border-t border-neutral-200/70 bg-white space-y-3 text-xs text-neutral-500 font-light">
              <div className="flex items-center justify-between">
                <span>Currency: {currentCurrency}</span>
                <a
                  href="https://wa.me/919650308945?text=Hello%20Raje%20Maharaje%20Concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-medium hover:underline"
                >
                  WhatsApp Concierge
                </a>
              </div>
              <p className="text-[11px] text-neutral-400">
                &copy; {new Date().getFullYear()} Raje Maharaje Luxury. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

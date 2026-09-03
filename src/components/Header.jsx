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
  ArrowRight,
  Sparkles,
  PhoneCall,
  Gift
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
  const [pocketSquaresMenuOpen, setPocketSquaresMenuOpen] = useState(false);

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

  // Pure Men's Fashion & Gifting Navigation
  const navLinks = [
    { label: 'POCKET SQUARES', page: 'men', hasDropdown: true },
    { label: 'STOLES & NECKERCHIEFS', page: 'men' },
    { label: 'RAJE LINE (₹500-₹700)', page: 'raje' },
    { label: 'MAHARAJE (₹2.6K-₹3.6K)', page: 'maharaje' },
    { label: 'GIFTING & WEDDINGS', page: 'gifting' },
    { label: 'ATELIER STORIES', page: 'about' },
    { label: 'SALE 20% OFF', page: 'shop', isSale: true },
  ];

  // Craft Families for Mega Dropdown
  const craftCategories = [
    {
      group: "The Raje Collection (Everyday Luxury)",
      price: "₹500 — ₹700",
      items: [
        { name: "Poly-Satin Pocket Squares", price: "₹500", desc: "Glossy, structured folds in vibrant hues" },
        { name: "Pure Linen Pocket Squares", price: "₹600", desc: "Crisp, airy weave for summer tailoring" },
        { name: "Hakoba Eyelet Cutwork", price: "₹700", desc: "Tactile scalloped needlework embroidery" }
      ]
    },
    {
      group: "The Maharaje Collection (Ceremonial Mastercraft)",
      price: "₹2,625 — ₹3,675",
      items: [
        { name: "Banarasi Tanchoi Brocade", price: "₹3,360", desc: "Metallic tested gold zari on pure silk" },
        { name: "Awadhi Chikankari on Tussar", price: "₹3,675", desc: "Master shadow needlework from Lucknow" },
        { name: "Handloom Raw Silk Squares", price: "₹2,625", desc: "Textured natural slubs and regal drape" },
        { name: "Kutch Ajrakh Block Prints", price: "₹1,450", desc: "16-stage mineral & herbal dye heritage" },
        { name: "Madhubani Miniature Art", price: "₹3,850", desc: "Hand-painted folk motifs on pure tussar" }
      ]
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-neutral-900 border-b border-neutral-200/80 transition-all duration-300 shadow-xs select-none">
        <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* Left: Mobile Hamburger & Brand Identity */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              <button
                onClick={() => setMenuDrawerOpen(true)}
                className="p-1 -ml-1 text-neutral-900 hover:text-black focus:outline-none transition-colors group flex items-center space-x-2"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-800 group-hover:scale-105 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('home')}
                className="group text-left focus:outline-none flex items-center"
              >
                <BrandLogo className="h-8 sm:h-9 md:h-10" />
              </button>
            </div>

            {/* Center: Awwwards + Nicobar-Inspired Menswear Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6">
              {navLinks.map((item) => {
                const isActive = currentPage === item.page;
                
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative group py-5"
                      onMouseEnter={() => setPocketSquaresMenuOpen(true)}
                      onMouseLeave={() => setPocketSquaresMenuOpen(false)}
                    >
                      <button
                        onClick={() => navigateTo('men')}
                        className={`flex items-center space-x-1 text-[11px] uppercase tracking-[0.2em] font-medium transition-all py-1 border-b-2 ${
                          isActive
                            ? 'text-black border-black font-semibold'
                            : 'text-neutral-700 border-transparent hover:text-black hover:border-neutral-400'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3 h-3 text-neutral-400 group-hover:rotate-180 transition-transform duration-200" />
                      </button>

                      {/* Mega Dropdown Panel */}
                      {pocketSquaresMenuOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/3 w-[680px] bg-white border border-neutral-200 shadow-2xl p-6 grid grid-cols-2 gap-8 z-50 animate-fade-in">
                          {craftCategories.map((col, idx) => (
                            <div key={idx} className="space-y-4">
                              <div className="border-b border-neutral-100 pb-2">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-900 block">
                                  {col.group}
                                </span>
                                <span className="text-[11px] text-[#c5a059] font-medium font-sans">
                                  {col.price}
                                </span>
                              </div>
                              <ul className="space-y-3">
                                {col.items.map((cat, i) => (
                                  <li key={i}>
                                    <button
                                      onClick={() => {
                                        navigateTo('men');
                                        setPocketSquaresMenuOpen(false);
                                      }}
                                      className="text-left group/item block w-full"
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-serif text-neutral-900 group-hover/item:text-[#c5a059] transition-colors font-medium">
                                          {cat.name}
                                        </span>
                                        <span className="text-[10px] font-sans text-neutral-400 font-medium">
                                          {cat.price}
                                        </span>
                                      </div>
                                      <span className="text-[10px] text-neutral-400 font-sans block leading-tight font-light">
                                        {cat.desc}
                                      </span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          
                          {/* Bottom Banner inside Dropdown */}
                          <div className="col-span-2 pt-3 border-t border-neutral-100 flex items-center justify-between bg-neutral-50 p-3">
                            <div className="flex items-center space-x-2">
                              <Sparkles className="w-4 h-4 text-[#c5a059]" />
                              <span className="text-xs font-sans text-neutral-700">
                                <strong>Everyday (₹500) to Ceremonial (₹3,675)</strong> — Hand-rolled in Gurgaon atelier
                              </span>
                            </div>
                            <button
                              onClick={() => {
                                navigateTo('men');
                                setPocketSquaresMenuOpen(false);
                              }}
                              className="text-[11px] uppercase tracking-wider font-semibold text-neutral-900 hover:underline flex items-center space-x-1"
                            >
                              <span>Explore All (38 Items)</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
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
                    className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all py-1 border-b-2 ${
                      item.isSale
                        ? 'text-red-700 border-transparent hover:border-red-700 font-semibold'
                        : isActive
                        ? 'text-black border-black font-semibold'
                        : 'text-neutral-700 border-transparent hover:text-black hover:border-neutral-400'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Utility Suite */}
            <div className="flex items-center space-x-2.5 sm:space-x-4">
              
              {/* Currency Toggle [INR / USD] */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className="flex items-center space-x-1.5 text-xs font-sans text-neutral-700 hover:text-black py-1 px-2.5 border border-neutral-200 hover:border-neutral-400 transition-colors"
                >
                  <span className="text-xs">{currentCurrency === 'INR' ? '🇮🇳' : '🌍'}</span>
                  <span className="uppercase tracking-wider font-semibold text-[11px]">{currentCurrency}</span>
                  <ChevronDown className="w-3 h-3 text-neutral-400" />
                </button>

                {currencyDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-neutral-200 shadow-lg py-1 z-50 text-xs font-sans">
                    <button
                      onClick={() => {
                        setCurrentCurrency('INR');
                        setCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 hover:bg-neutral-50 flex items-center justify-between"
                    >
                      <span>🇮🇳 INR (₹)</span>
                      {currentCurrency === 'INR' && <span className="text-xs font-bold text-black">&bull;</span>}
                    </button>
                    <button
                      onClick={() => {
                        setCurrentCurrency('USD');
                        setCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 hover:bg-neutral-50 flex items-center justify-between"
                    >
                      <span>🌍 USD ($)</span>
                      {currentCurrency === 'USD' && <span className="text-xs font-bold text-black">&bull;</span>}
                    </button>
                  </div>
                )}
              </div>

              {/* Minimal Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 text-xs font-sans text-neutral-600 hover:text-black py-1.5 px-2.5 sm:bg-neutral-100/80 sm:hover:bg-neutral-200/80 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-neutral-700" />
                <span className="hidden md:inline text-[11px] text-neutral-500 tracking-wide font-light">Search pocket squares...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] font-mono text-neutral-400 bg-white border border-neutral-200 rounded">⌘K</kbd>
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-neutral-800 hover:text-black focus:outline-none transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist && wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#c5a059] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button with Counter Badge */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-neutral-900 hover:text-black focus:outline-none transition-colors"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-scale-up">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Menu Drawer (100% Menswear & Gifting Focus) */}
      {menuDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={() => setMenuDrawerOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          />

          <div className="relative w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl flex flex-col z-10 animate-slide-right">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-neutral-200/70 flex items-center justify-between bg-white">
              <button
                onClick={() => {
                  navigateTo('home');
                  setMenuDrawerOpen(false);
                }}
                className="text-left focus:outline-none"
              >
                <BrandLogo className="h-8" />
              </button>
              <button
                onClick={() => setMenuDrawerOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 text-neutral-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Main Menswear Sections */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-3">
                  MEN'S ATELIER COLLECTIONS
                </span>
                <nav className="space-y-3 font-serif text-lg tracking-wider text-neutral-900">
                  <button
                    onClick={() => {
                      navigateTo('men');
                      setMenuDrawerOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-left py-1 hover:text-[#c5a059] transition-colors border-b border-neutral-100 pb-2"
                  >
                    <span>POCKET SQUARES (ALL CRAFTS)</span>
                    <span className="text-xs font-sans text-[#c5a059] font-medium">₹500 — ₹3,675</span>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('men');
                      setMenuDrawerOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-left py-1 hover:text-[#c5a059] transition-colors border-b border-neutral-100 pb-2"
                  >
                    <span>STOLES & NECKERCHIEFS</span>
                    <span className="text-xs font-sans text-neutral-400">Gentleman's Silk</span>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('raje');
                      setMenuDrawerOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-left py-1 hover:text-[#c5a059] transition-colors border-b border-neutral-100 pb-2"
                  >
                    <span>RAJE LINE (EVERYDAY LUXURY)</span>
                    <span className="text-xs font-sans text-neutral-400">₹500 — ₹700</span>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('maharaje');
                      setMenuDrawerOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-left py-1 hover:text-[#c5a059] transition-colors border-b border-neutral-100 pb-2"
                  >
                    <span>MAHARAJE (CEREMONIAL SILKS)</span>
                    <span className="text-xs font-sans text-neutral-400">₹2,625 — ₹3,675</span>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('gifting');
                      setMenuDrawerOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-left py-1 hover:text-[#c5a059] transition-colors border-b border-neutral-100 pb-2"
                  >
                    <span>GIFTING WORLD & WEDDINGS</span>
                    <span className="text-xs font-sans text-neutral-400">Keepsake Boxes</span>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('about');
                      setMenuDrawerOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-left py-1 hover:text-[#c5a059] transition-colors border-b border-neutral-100 pb-2"
                  >
                    <span>OUR STORY & PRITA DHEER</span>
                    <span className="text-xs font-sans text-neutral-400">Studio Sankara</span>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('shop');
                      setMenuDrawerOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-left py-1 text-red-700 hover:text-red-900 transition-colors"
                  >
                    <span>WEDDING SEASON SALE</span>
                    <span className="text-xs font-sans font-bold text-red-700">20% OFF</span>
                  </button>
                </nav>
              </div>

              {/* Craft Focus Pills */}
              <div className="bg-white p-4 border border-neutral-200/80 space-y-2.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold block">
                  SHOP BY INDIAN CRAFT
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Tanchoi Brocade', 'Chikankari Silk', 'Handloom Raw Silk', 'Pure Linen', 'Poly Satin', 'Hakoba Eyelet', 'Kutch Ajrakh'].map((craft) => (
                    <button
                      key={craft}
                      onClick={() => {
                        navigateTo('men');
                        setMenuDrawerOpen(false);
                      }}
                      className="text-[11px] font-sans bg-neutral-100 hover:bg-black hover:text-white px-2.5 py-1 text-neutral-700 transition-colors"
                    >
                      {craft}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wedding Favors / Corporate Inquiries Banner */}
              <div className="bg-[#1C1B1B] text-white p-5 space-y-3">
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-serif uppercase tracking-widest text-[#d4af37]">
                    Bespoke Wedding Favors
                  </span>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Curate custom pocket square gift boxes with personalized monogram wax seals for groomsmen and wedding guests.
                </p>
                <button
                  onClick={() => {
                    navigateTo('contact');
                    setMenuDrawerOpen(false);
                  }}
                  className="text-xs uppercase tracking-wider font-semibold text-white underline underline-offset-4 hover:text-[#d4af37] transition-colors"
                >
                  Contact Concierge Atelier &rarr;
                </button>
              </div>

              {/* Direct Atelier Details */}
              <div className="text-xs text-neutral-500 font-sans space-y-1">
                <p>Studio Sankara, Hermitage Apartments, Sector 28, Gurgaon</p>
                <p>Telephone: +91 98101 23456 &bull; atelier@rajemaharaje.com</p>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Header;

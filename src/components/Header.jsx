import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { RMLogo } from './CrownLogo';
import {
  Search,
  ShoppingCart,
  Heart,
  X,
  ChevronDown,
  ChevronUp,
  User,
  Instagram,
  Facebook,
  MessageCircle,
  Youtube,
  Twitter,
  Sparkles,
  Layers
} from 'lucide-react';

const Header = () => {
  const {
    currentPage,
    navigateTo,
    cartItemCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen
  } = useShop();

  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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

  const menuItems = [
    {
      id: 'categories',
      title: 'CATEGORIES & CRAFTS',
      isAccordion: true,
      badge: 'Signature',
      sublinks: [
        { label: 'Explore All Categories', page: 'categories' },
        { label: 'Tanchoi Zari Brocades', page: 'categories' },
        { label: 'Awadhi Chikankari Silk', page: 'categories' },
        { label: 'Ajrakh & Ikat Weaves', page: 'categories' },
        { label: 'The Raje Line (Daily Chic)', page: 'categories' },
        { label: 'The Maharaje Line (Regal Heirlooms)', page: 'categories' },
        { label: 'Bespoke Gift Chests', page: 'categories' },
        { label: 'Stoles & Neckerchiefs', page: 'categories' },
      ]
    },
    {
      id: 'collection',
      title: 'THE COLLECTION',
      isAccordion: true,
      sublinks: [
        { label: 'All Treasures', page: 'shop' },
        { label: 'Best Sellers', page: 'shop' },
        { label: 'Tanchoi Zari Brocades', page: 'shop' },
        { label: 'Chikankari Hand-Embroidery', page: 'shop' },
        { label: 'Ajrakh & Ikat Weaves', page: 'shop' },
        { label: 'Raw Silks & Stoles', page: 'shop' },
        { label: 'Grand Gift Sets', page: 'shop' },
      ]
    },
    {
      id: 'raje',
      title: 'THE RAJE LINE',
      isAccordion: true,
      sublinks: [
        { label: 'Chic Daily Pocket Squares', page: 'shop' },
        { label: 'Silk Neckerchiefs', page: 'shop' },
        { label: 'Vibrant Slide Boxes', page: 'shop' },
        { label: 'Explore Full Raje Atelier', page: 'categories' },
      ]
    },
    {
      id: 'maharaje',
      title: 'THE MAHARAJE LINE',
      isAccordion: true,
      sublinks: [
        { label: 'Ceremonial Brocades with Zari', page: 'shop' },
        { label: 'Awadhi Chikankari Silk', page: 'shop' },
        { label: 'Grand Presentation Chests', page: 'builder' },
        { label: 'Explore Full Maharaje Atelier', page: 'categories' },
      ]
    },
    {
      id: 'builder',
      title: 'BESPOKE BOX BUILDER',
      isAccordion: false,
      isHighlight: true,
      page: 'builder',
    },
    {
      id: 'weddings',
      title: 'WEDDINGS & CORPORATE',
      isAccordion: true,
      sublinks: [
        { label: 'Groomsmen Bespoke Suites', page: 'corporate' },
        { label: 'Destination Wedding Favours', page: 'corporate' },
        { label: 'Corporate Dignitary Gifting', page: 'corporate' },
        { label: 'Request Swatch Presentation', page: 'corporate' },
      ]
    },
    {
      id: 'about',
      title: 'ABOUT & OUR CRAFT',
      isAccordion: true,
      sublinks: [
        { label: 'Our Story (Prita Dheer)', page: 'about' },
        { label: 'Studio Sankara Mission', page: 'about' },
        { label: 'Pan-India Artisan Clusters', page: 'about' },
        { label: 'Pocket Square Folding Guide', page: 'home' },
      ]
    },
    {
      id: 'contact',
      title: 'CONTACT & CONCIERGE',
      isAccordion: false,
      page: 'contact',
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-black text-white border-b border-neutral-800 transition-colors shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMenuDrawerOpen(true)}
                className="p-1.5 -ml-1.5 text-white hover:text-neutral-300 focus:outline-none transition-colors group flex items-center space-x-2.5"
                aria-label="Open Navigation Menu"
              >
                {/* 3-bar Hamburger matching reference image */}
                <div className="w-6 flex flex-col space-y-1.5">
                  <span className="w-6 h-0.5 bg-white rounded-full transition-transform group-hover:w-5"></span>
                  <span className="w-6 h-0.5 bg-white rounded-full"></span>
                  <span className="w-4 h-0.5 bg-white rounded-full transition-all group-hover:w-6"></span>
                </div>
                <span className="hidden md:inline-block text-[11px] font-bold uppercase tracking-widest text-neutral-300 font-sans">
                  Menu
                </span>
              </button>
            </div>

            {/* Center: Brand Logo with Crown Emblem & R&M (Matches Reference) */}
            <div
              onClick={() => navigateTo('home')}
              className="cursor-pointer transform hover:scale-105 transition-transform flex items-center justify-center"
            >
              <RMLogo />
            </div>

            {/* Right: Search + Wishlist + Cart (Matches Reference) */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-neutral-300 transition-colors"
                aria-label="Search Collection"
              >
                <Search className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
              </button>

              {/* Wishlist Heart Icon */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="p-2 text-white hover:text-neutral-300 transition-colors relative hidden sm:block"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 bg-white text-black font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Cart Icon with Circular Badge Counter */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-white hover:text-neutral-300 transition-colors relative flex items-center"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
                <span className="absolute -top-0.5 -right-0.5 bg-white text-black font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono shadow-xs">
                  {cartItemCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Full-Height Slide-out Menu Drawer with Highest Z-Index (z-[100]) */}
      {menuDrawerOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMenuDrawerOpen(false)}
          ></div>

          {/* White Drawer Container */}
          <div className="fixed inset-y-0 left-0 max-w-sm sm:max-w-md w-full bg-white text-black shadow-2xl z-[101] flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pt-7 pb-5 px-6 sm:px-8 border-b border-neutral-200 bg-white sticky top-0 z-10">
                <div className="flex items-center space-x-2">
                  <h2 className="font-sans text-2xl font-extrabold tracking-tight text-neutral-900 leading-none">
                    Menu
                  </h2>
                </div>
                <button
                  onClick={() => setMenuDrawerOpen(false)}
                  className="p-1 rounded-full text-neutral-500 hover:text-black transition-colors"
                  aria-label="Close Menu"
                >
                  <div className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center transition-colors">
                    <X className="w-4 h-4 text-black" />
                  </div>
                </button>
              </div>

              {/* Drawer Navigation List */}
              <div className="px-6 sm:px-8 py-4 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.id} className="border-b border-neutral-100 pb-1">
                    {item.isAccordion ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.id)}
                          className="w-full py-3.5 flex items-center justify-between text-left font-sans font-extrabold text-sm uppercase tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="px-2 py-0.5 bg-black text-white text-[9px] font-mono rounded-full uppercase">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {openSubmenu === item.id ? (
                            <ChevronUp className="w-4 h-4 text-neutral-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-neutral-500" />
                          )}
                        </button>

                        {/* Expandable Sublinks */}
                        {openSubmenu === item.id && (
                          <div className="pb-3 pl-3 space-y-2.5">
                            {item.sublinks.map((sub, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => {
                                  navigateTo(sub.page);
                                  setMenuDrawerOpen(false);
                                }}
                                className="block w-full text-left text-xs font-medium text-neutral-600 hover:text-black transition-colors py-1"
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          navigateTo(item.page);
                          setMenuDrawerOpen(false);
                        }}
                        className={`w-full py-3.5 flex items-center justify-between text-left font-sans font-extrabold text-sm uppercase tracking-wider transition-colors ${
                          item.isHighlight
                            ? 'text-black flex items-center justify-between font-black'
                            : 'text-neutral-900 hover:text-neutral-600'
                        }`}
                      >
                        <span>{item.title}</span>
                        {item.isHighlight && (
                          <span className="px-2 py-0.5 text-[9px] bg-black text-white rounded-full font-mono uppercase tracking-wider">
                            Custom Suite
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Drawer Bottom Section: Account + Social Icons */}
            <div className="p-6 sm:p-8 border-t border-neutral-200 bg-neutral-50 space-y-4">
              {/* Account Link */}
              <button
                onClick={() => {
                  navigateTo('contact');
                  setMenuDrawerOpen(false);
                }}
                className="flex items-center space-x-2.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <User className="w-4 h-4 text-neutral-700" />
                <span>Patron Account / Bespoke Concierge</span>
              </button>

              {/* "Get In Touch:" and Social Icons */}
              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <span className="text-[11px] font-sans font-bold text-neutral-700 block">
                  Get In Touch:
                </span>
                <div className="flex items-center space-x-4 text-neutral-800">
                  <a
                    href="https://wa.me/919910807795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors p-1"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors p-1"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors p-1"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors p-1"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors p-1"
                    title="X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Studio Address */}
              <div className="text-[10px] text-neutral-500 font-sans">
                Studio Sankara • Hermitage Apartments, Sector 28, Gurgaon 122002
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

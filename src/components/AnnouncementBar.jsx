import React from 'react';
import { useShop } from '../context/ShopContext';
import { currencies } from '../data/crafts';

const AnnouncementBar = () => {
  const { currentCurrency, setCurrentCurrency } = useShop();

  const tickerItems = [
    "Use ROYAL10 for 10% OFF Entire Order",
    "Complimentary Heritage Presentation Chest on Orders Above ₹5,000",
    "Fast Express Delivery, Secure Payments, Authenticity Guaranteed",
    "Handcrafted in India • 100% Pure Certified Mulberry Silk & Zari",
    "Bespoke Wedding Favours & Corporate Gifting Available",
  ];

  return (
    <div className="bg-black text-white text-[11px] font-sans border-b border-neutral-800 overflow-hidden select-none py-2 relative z-30">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Continuous Smooth Infinite Marquee Ticker */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 4 }).map((_, repeatIdx) => (
              <div key={repeatIdx} className="flex items-center space-x-6 mx-4">
                {tickerItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-medium tracking-wide text-neutral-200">
                      {item.includes('ROYAL10') ? (
                        <>
                          Use <strong className="text-white font-extrabold font-mono">ROYAL10</strong> for 10% OFF Entire Order
                        </>
                      ) : (
                        item
                      )}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block flex-shrink-0"></span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Currency Switcher on the Right */}
        <div className="hidden sm:flex items-center space-x-2 pl-4 border-l border-neutral-800 ml-4 flex-shrink-0">
          <span className="text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Currency:</span>
          <select
            value={currentCurrency}
            onChange={(e) => setCurrentCurrency(e.target.value)}
            className="bg-neutral-900 text-white border border-neutral-700 rounded px-1.5 py-0.5 text-[10px] font-mono cursor-pointer focus:outline-none focus:border-white"
          >
            {Object.keys(currencies).map((code) => (
              <option key={code} value={code} className="bg-neutral-900 text-white">
                {currencies[code].label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

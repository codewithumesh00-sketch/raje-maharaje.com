import React from 'react';
import { useShop } from '../context/ShopContext';
import { currencies } from '../data/crafts';

const AnnouncementBar = () => {
  const { currentCurrency, setCurrentCurrency } = useShop();

  const tickerItems = [
    "ROYAL ATELIER DISPATCH • JAIPUR • AWADH • VARANASI",
    "20% OFF Limited Edition Royal Wedding Season Weaves",
    "Complimentary Heritage Keepsake Chest on Orders Above ₹3,000",
    "Handcrafted in India • Pure Tanchoi Silk, Awadhi Chikankari & Zari",
    "Bespoke Groomsmen Monogramming & Custom Wax-Sealed Boxes",
  ];

  return (
    <div className="bg-[#721524] text-[#FDF8EC] text-[11px] font-sans border-b border-[#C99E54]/30 overflow-hidden select-none py-2 relative z-30 shadow-xs">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Continuous Infinite Marquee */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 4 }).map((_, repeatIdx) => (
              <div key={repeatIdx} className="flex items-center space-x-6 mx-4">
                {tickerItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-medium tracking-wide text-[#F8EBD3]">
                      {item.includes('20% OFF') ? (
                        <>
                          <strong className="text-[#FFDF78] font-bold uppercase tracking-wider">20% off</strong> Limited Edition Royal Wedding Season Weaves.
                        </>
                      ) : (
                        item
                      )}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99E54] inline-block flex-shrink-0"></span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="hidden sm:flex items-center space-x-2 pl-4 border-l border-[#C99E54]/30 ml-4 flex-shrink-0">
          <span className="text-[#DEBA78] text-[10px] uppercase font-bold tracking-wider">Currency:</span>
          <select
            value={currentCurrency}
            onChange={(e) => setCurrentCurrency(e.target.value)}
            className="bg-[#57101C] text-[#FFFDF9] border border-[#C99E54]/50 rounded px-1.5 py-0.5 text-[10px] font-mono cursor-pointer focus:outline-none focus:border-[#FFDF78]"
          >
            {Object.keys(currencies).map((code) => (
              <option key={code} value={code} className="bg-[#57101C] text-white">
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

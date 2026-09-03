import React from 'react';
import { useShop } from '../context/ShopContext';

const ShippingReturnsPage = () => {
  const { navigateTo } = useShop();

  return (
    <div className="bg-white min-h-screen text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 font-sans tracking-wide">
          <button onClick={() => navigateTo('home')} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-neutral-900 font-medium">Shipping & Returns</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9c783e] font-semibold block mb-2">
            Pan-India & Global Delivery
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif uppercase tracking-[0.16em] font-light text-neutral-900 mb-4">
            SHIPPING & RETURNS
          </h1>
          <div className="w-12 h-px bg-[#c5a059] mx-auto" />
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-serif uppercase tracking-wider text-neutral-900 font-medium">
            1. Domestic Shipping Across India
          </h2>
          <p>
            We offer complimentary express shipping across India on all orders above ₹5,000. Standard orders are dispatched within 24 to 48 business hours from our Gurgaon atelier via reputed courier partners (BlueDart, Delhivery, DTDC). Delivery typically takes 2 to 5 business days depending on location.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-serif uppercase tracking-wider text-neutral-900 font-medium">
            2. Wedding Favors & Bulk Shipments
          </h2>
          <p>
            For large event and wedding favor orders, shipments are scheduled and coordinated to reach the destination venue or hotel well ahead of the wedding ceremonies with special transit insurance and rigid carton packaging.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-serif uppercase tracking-wider text-neutral-900 font-medium">
            3. Returns & Exchanges
          </h2>
          <p>
            Due to the delicate, handcrafted nature of our pure silk pocket squares, stoles, and presentation boxes, returns are accepted only in the rare event of transit damage or manufacturing defect reported within 48 hours of delivery. Customized or monogrammed items are non-refundable.
          </p>
        </div>

        <div className="border-t border-neutral-200 pt-6 text-neutral-500">
          <p>Support Helpline: +91 9910807795 / +91 9820427795</p>
          <p>Email: raje.maharaje.official@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;

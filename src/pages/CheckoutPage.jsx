import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Truck, Lock, CheckCircle2, Sparkles, ArrowLeft, CreditCard, Landmark, QrCode } from 'lucide-react';

const CheckoutPage = () => {
  const {
    cart,
    cartSubtotalINR,
    discountAmountINR,
    shippingCostINR,
    cartTotalINR,
    appliedDiscount,
    discountCode,
    formatPrice,
    clearCart,
    navigateTo,
    triggerConfetti
  } = useShop();

  const [paymentMethod, setPaymentMethod] = useState('upi'); // upi, card, netbanking, cod
  const [formData, setFormData] = useState({
    firstName: 'Devendra',
    lastName: 'Rathore',
    email: 'rathore.dev@gmail.com',
    phone: '+91 98765 43210',
    address: '42 Heritage Villa, Golf Course Road',
    city: 'Gurgaon',
    state: 'Haryana',
    pincode: '122002',
    country: 'India'
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedOrderNo = `RM-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(generatedOrderNo);
    setOrderConfirmed(true);
    triggerConfetti();
  };

  if (cart.length === 0 && !orderConfirmed) {
    return (
      <div className="bg-cream-50 min-h-screen py-20 flex flex-col items-center justify-center text-center p-4">
        <h2 className="font-display text-2xl font-bold uppercase text-obsidian-950">
          Your Royal Bag is Empty
        </h2>
        <p className="text-xs text-obsidian-500 font-serif mt-2 mb-6">
          Please add creations to your bag before proceeding to checkout.
        </p>
        <button
          onClick={() => navigateTo('shop')}
          className="px-8 py-3 rounded-full bg-obsidian-950 text-gold-300 text-xs uppercase font-bold tracking-widest hover:bg-gold-500 hover:text-obsidian-950 transition-all"
        >
          Return to Atelier
        </button>
      </div>
    );
  }

  // Order Confirmed Screen
  if (orderConfirmed) {
    return (
      <div className="bg-cream-50 min-h-screen py-16 text-obsidian-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center mx-auto ring-8 ring-gold-50 shadow-inner">
              <Sparkles className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-800 font-serif font-bold">
                Order Authenticated & Commissioned
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-obsidian-950 mt-1">
                Thank You, Esteemed Patron
              </h1>
              <p className="text-sm font-mono text-gold-800 font-semibold mt-1">
                Order Tracking ID: {orderNumber}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-950 text-cream-100 text-left border border-gold-900/40 space-y-4">
              <div className="flex justify-between items-center border-b border-gold-900/40 pb-3">
                <span className="font-serif text-gold-300 text-sm">Estimated Delivery:</span>
                <span className="font-mono text-xs text-cream-200">2-4 Business Days Express</span>
              </div>
              <div className="flex justify-between items-center border-b border-gold-900/40 pb-3">
                <span className="font-serif text-gold-300 text-sm">Delivery Address:</span>
                <span className="font-sans text-xs text-cream-200 text-right">
                  {formData.address}, {formData.city}, {formData.state} - {formData.pincode}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-serif text-gold-300 text-sm">Total Paid:</span>
                <span className="font-mono text-base font-bold text-gold-400">{formatPrice(cartTotalINR)}</span>
              </div>
            </div>

            <div className="text-xs text-obsidian-600 font-serif leading-relaxed">
              A dispatch confirmation with your artisan authentication certificate has been sent to <strong>{formData.email}</strong>. Our packaging team is now hand-sealing your presentation box with molten wax.
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  clearCart();
                  navigateTo('home');
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-obsidian-950 text-gold-300 font-bold text-xs uppercase tracking-widest hover:bg-gold-500 hover:text-obsidian-950 transition-all shadow-md"
              >
                Return to Sovereign Atelier
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-50 min-h-screen py-10 sm:py-14 text-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center space-x-2 text-xs uppercase font-serif text-obsidian-600 hover:text-gold-700 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form: Checkout Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Step 1: Contact Information */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-cream-200">
                  <span className="w-6 h-6 rounded-full bg-obsidian-950 text-gold-300 text-xs font-mono font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-display font-bold text-base uppercase tracking-wider text-obsidian-950">
                    Esteemed Customer Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      Email Address (For Tracking) *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      Phone Number (For Express Courier) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Destination */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-cream-200">
                  <span className="w-6 h-6 rounded-full bg-obsidian-950 text-gold-300 text-xs font-mono font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-display font-bold text-base uppercase tracking-wider text-obsidian-950">
                    Delivery Address
                  </h3>
                </div>

                <div>
                  <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                    Street Address / Villa / Suite *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-serif text-obsidian-700 font-bold mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-2.5 text-xs text-obsidian-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Payment Method */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-cream-200">
                  <span className="w-6 h-6 rounded-full bg-obsidian-950 text-gold-300 text-xs font-mono font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-display font-bold text-base uppercase tracking-wider text-obsidian-950">
                    Payment Gateway
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 text-center transition-all ${
                      paymentMethod === 'upi'
                        ? 'bg-gold-50 border-gold-500 text-gold-950 font-bold ring-1 ring-gold-500'
                        : 'bg-cream-50 border-cream-300 text-obsidian-700'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-gold-700" />
                    <span className="text-xs uppercase font-mono">Instant UPI / QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-gold-50 border-gold-500 text-gold-950 font-bold ring-1 ring-gold-500'
                        : 'bg-cream-50 border-cream-300 text-obsidian-700'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-gold-700" />
                    <span className="text-xs uppercase font-mono">Credit / Debit Card</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-cream-200">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-[0.25em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Authorize Royal Payment • {formatPrice(cartTotalINR)}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Summary Column (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-cream-300 shadow-xl space-y-5">
              <h3 className="font-display text-lg font-bold uppercase text-obsidian-950 border-b border-cream-200 pb-3">
                Order Summary ({cart.length})
              </h3>

              {/* Items preview list */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex items-center space-x-3 text-xs">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg bg-cream-100 border border-cream-300 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-serif font-bold text-obsidian-900 truncate">{item.title}</div>
                      <div className="text-[10px] text-obsidian-500">Qty: {item.quantity} {item.monogram && `• [${item.monogram}]`}</div>
                    </div>
                    <span className="font-mono font-bold text-obsidian-900">
                      {formatPrice(item.priceINR * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="space-y-2 pt-4 border-t border-cream-200 text-xs">
                <div className="flex justify-between text-obsidian-600">
                  <span>Subtotal</span>
                  <span className="font-mono text-obsidian-900 font-semibold">{formatPrice(cartSubtotalINR)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Privilege Discount ({discountCode})</span>
                    <span className="font-mono font-bold">-{formatPrice(discountAmountINR)}</span>
                  </div>
                )}
                <div className="flex justify-between text-obsidian-600">
                  <span>Complimentary Gift Box & Wax Seal</span>
                  <span className="text-emerald-700 font-semibold font-mono">Free</span>
                </div>
                <div className="flex justify-between text-obsidian-600">
                  <span>Express Insured Courier</span>
                  <span className="font-mono font-semibold">
                    {shippingCostINR === 0 ? <strong className="text-emerald-700">Free</strong> : formatPrice(shippingCostINR)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-obsidian-950 pt-3 border-t border-cream-200">
                  <span className="font-display uppercase tracking-wider">Total</span>
                  <span className="font-mono text-gold-800 text-lg">{formatPrice(cartTotalINR)}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-obsidian-500 font-serif flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Backed by the Raje Maharaje Heritage & Authenticity Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

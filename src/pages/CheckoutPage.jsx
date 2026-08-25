import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShieldCheck, 
  Truck, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft, 
  CreditCard, 
  Landmark, 
  QrCode,
  Printer,
  Copy,
  Check,
  PackageCheck,
  Flame,
  Award
} from 'lucide-react';

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

  // Card form state
  const [cardData, setCardData] = useState({
    number: '4532 •••• •••• 8892',
    name: 'Devendra Rathore',
    expiry: '08/29',
    cvv: '•••'
  });

  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [confirmedItems, setConfirmedItems] = useState([]);
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedOrderNo = `RM-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(generatedOrderNo);
    setOrderDate(new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }));
    setConfirmedItems([...cart]);
    setConfirmedTotal(cartTotalINR);
    setOrderConfirmed(true);
    triggerConfetti();
  };

  const copyUpiId = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('rajmaharaje@icici');
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (cart.length === 0 && !orderConfirmed) {
    return (
      <div className="bg-[#FAF3ED] min-h-screen py-20 flex flex-col items-center justify-center text-center p-4">
        <h2 className="font-sans text-2xl font-black uppercase text-[#122D3E]">
          Your Royal Bag is Empty
        </h2>
        <p className="text-xs text-[#7E482B] font-sans mt-2 mb-6">
          Please add creations to your bag before proceeding to checkout.
        </p>
        <button
          onClick={() => navigateTo('shop')}
          className="px-8 py-3 rounded-full bg-[#122D3E] text-[#A8CEE8] text-xs uppercase font-bold tracking-widest hover:bg-[#285C7D] hover:text-white transition-all shadow-md"
        >
          Return to Atelier
        </button>
      </div>
    );
  }

  // Order Confirmed Screen with Printable Invoice
  if (orderConfirmed) {
    return (
      <div className="bg-[#FAF3ED] min-h-screen py-12 text-[#122D3E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#285C7D]/30 shadow-2xl space-y-6 print:p-0 print:border-none print:shadow-none">
            
            {/* Header / Brand Logo */}
            <div className="text-center space-y-2 pb-6 border-b border-[#285C7D]/20">
              <div className="w-16 h-16 rounded-full bg-[#122D3E] text-[#A8CEE8] flex items-center justify-center mx-auto shadow-md">
                <Sparkles className="w-8 h-8" />
              </div>

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#7E482B] font-bold block">
                Official Commission Receipt & Certificate
              </span>
              <h1 className="font-sans text-2xl sm:text-3xl font-black uppercase text-[#122D3E] tracking-tight">
                Thank You, Esteemed Patron
              </h1>
              <p className="text-xs font-mono font-bold text-[#285C7D]">
                Order Tracking ID: {orderNumber} • Date: {orderDate}
              </p>
            </div>

            {/* Consignment Status Timeline */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF3ED] border border-[#285C7D]/20 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold font-sans">
                <span className="text-[#122D3E]">Dispatch Status:</span>
                <span className="text-[#285C7D] font-mono">Commissioned & In Atelier Queue</span>
              </div>
              <div className="grid grid-cols-4 gap-2 pt-2 text-center text-[10px] font-sans font-semibold">
                <div className="space-y-1 text-emerald-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-500 flex items-center justify-center mx-auto">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Authorized</span>
                </div>
                <div className="space-y-1 text-[#285C7D]">
                  <div className="w-6 h-6 rounded-full bg-[#285C7D] text-white flex items-center justify-center mx-auto animate-pulse">
                    <Flame className="w-3.5 h-3.5" />
                  </div>
                  <span>Wax Sealing</span>
                </div>
                <div className="space-y-1 text-neutral-400">
                  <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mx-auto">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <span>Air Courier</span>
                </div>
                <div className="space-y-1 text-neutral-400">
                  <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center mx-auto">
                    <PackageCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Delivered</span>
                </div>
              </div>
            </div>

            {/* Itemized Order Details */}
            <div className="space-y-3">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#122D3E]">
                Artisan Ensembles In This Consignment:
              </h4>
              <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden bg-[#FAF3ED]/40">
                {confirmedItems.map((item, idx) => (
                  <div key={idx} className="p-3.5 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center space-x-3 min-w-0">
                      <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded bg-white border border-neutral-300" />
                      <div className="min-w-0">
                        <div className="font-bold text-[#122D3E] truncate">{item.title}</div>
                        <div className="text-[10px] text-[#7E482B]">
                          Qty: {item.quantity} {item.monogram && `• Monogram: [${item.monogram}]`}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-[#122D3E]">
                      {formatPrice(item.priceINR * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary & Shipping Details Box */}
            <div className="p-5 rounded-2xl bg-[#122D3E] text-white space-y-3 font-sans text-xs">
              <div className="flex justify-between items-center border-b border-[#285C7D]/60 pb-2.5">
                <span className="text-[#A8CEE8]">Estimated Delivery:</span>
                <span className="font-mono text-white">2–4 Business Days Express Insured</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#285C7D]/60 pb-2.5">
                <span className="text-[#A8CEE8]">Recipient & Destination:</span>
                <span className="text-right text-white max-w-xs truncate">
                  {formData.firstName} {formData.lastName}, {formData.address}, {formData.city} - {formData.pincode}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-[#285C7D]/60 pb-2.5">
                <span className="text-[#A8CEE8]">Payment Method:</span>
                <span className="font-mono uppercase text-[#FAF3ED]">
                  {paymentMethod === 'upi' ? 'UPI Transfer (rajmaharaje@icici)' : paymentMethod === 'card' ? 'Credit/Debit Card' : paymentMethod === 'netbanking' ? selectedBank : 'Cash on Delivery'}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold pt-1">
                <span className="text-[#FAF3ED]">Total Amount Paid:</span>
                <span className="font-mono text-[#A8CEE8] text-base">{formatPrice(confirmedTotal)}</span>
              </div>
            </div>

            {/* Actions: Print & Return */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 print:hidden">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#285C7D] text-[#122D3E] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF3ED] flex items-center justify-center space-x-2 transition-all shadow-xs"
              >
                <Printer className="w-4 h-4 text-[#285C7D]" />
                <span>Print / Save Invoice</span>
              </button>

              <button
                onClick={() => {
                  clearCart();
                  navigateTo('home');
                }}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#122D3E] text-[#A8CEE8] font-bold text-xs uppercase tracking-widest hover:bg-[#285C7D] hover:text-white transition-all shadow-md"
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
    <div className="bg-[#FAF3ED] min-h-screen py-10 sm:py-14 text-[#122D3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center space-x-2 text-xs uppercase font-sans font-bold text-[#7E482B] hover:text-[#122D3E] mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form: Checkout Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Step 1: Contact Information */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#285C7D]/20 shadow-xs space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-neutral-200">
                  <span className="w-6 h-6 rounded-full bg-[#122D3E] text-[#A8CEE8] text-xs font-mono font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-sans font-extrabold text-base uppercase tracking-wider text-[#122D3E]">
                    Esteemed Customer Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-sans text-[#7E482B] font-bold mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-[#FAF3ED] border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-sans text-[#7E482B] font-bold mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-[#FAF3ED] border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-sans text-[#7E482B] font-bold mb-1">
                      Email Address (For Tracking & Invoice) *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF3ED] border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-sans text-[#7E482B] font-bold mb-1">
                      Phone Number (For Express Courier) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF3ED] border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Destination */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#285C7D]/20 shadow-xs space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-neutral-200">
                  <span className="w-6 h-6 rounded-full bg-[#122D3E] text-[#A8CEE8] text-xs font-mono font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-sans font-extrabold text-base uppercase tracking-wider text-[#122D3E]">
                    Delivery Address
                  </h3>
                </div>

                <div>
                  <label className="block text-xs uppercase font-sans text-[#7E482B] font-bold mb-1">
                    Street Address / Villa / Suite *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#FAF3ED] border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-sans text-[#7E482B] font-bold mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#FAF3ED] border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-sans text-[#7E482B] font-bold mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-[#FAF3ED] border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-sans text-[#7E482B] font-bold mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full bg-[#FAF3ED] border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Payment Gateway */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#285C7D]/20 shadow-xs space-y-5">
                <div className="flex items-center space-x-3 pb-3 border-b border-neutral-200">
                  <span className="w-6 h-6 rounded-full bg-[#122D3E] text-[#A8CEE8] text-xs font-mono font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-sans font-extrabold text-base uppercase tracking-wider text-[#122D3E]">
                    Payment Gateway & Authorization
                  </h3>
                </div>

                {/* Method selector tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1.5 text-center transition-all ${
                      paymentMethod === 'upi'
                        ? 'bg-[#122D3E] text-white border-[#122D3E] shadow-sm'
                        : 'bg-[#FAF3ED] border-neutral-200 text-[#122D3E] hover:border-neutral-400'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span className="text-[11px] font-sans font-bold uppercase">Instant UPI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1.5 text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-[#122D3E] text-white border-[#122D3E] shadow-sm'
                        : 'bg-[#FAF3ED] border-neutral-200 text-[#122D3E] hover:border-neutral-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span className="text-[11px] font-sans font-bold uppercase">Cards</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1.5 text-center transition-all ${
                      paymentMethod === 'netbanking'
                        ? 'bg-[#122D3E] text-white border-[#122D3E] shadow-sm'
                        : 'bg-[#FAF3ED] border-neutral-200 text-[#122D3E] hover:border-neutral-400'
                    }`}
                  >
                    <Landmark className="w-4 h-4" />
                    <span className="text-[11px] font-sans font-bold uppercase">Net Banking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1.5 text-center transition-all ${
                      paymentMethod === 'cod'
                        ? 'bg-[#122D3E] text-white border-[#122D3E] shadow-sm'
                        : 'bg-[#FAF3ED] border-neutral-200 text-[#122D3E] hover:border-neutral-400'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span className="text-[11px] font-sans font-bold uppercase">Pay on Delivery</span>
                  </button>
                </div>

                {/* Payment Detail Panes */}
                {paymentMethod === 'upi' && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#FAF3ED] border border-[#285C7D]/20 space-y-3">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      {/* Live Dynamic QR */}
                      <div className="p-2.5 bg-white rounded-xl border border-neutral-300 shadow-sm flex flex-col items-center flex-shrink-0">
                        <svg viewBox="0 0 100 100" className="w-24 h-24">
                          <rect x="0" y="0" width="30" height="30" fill="#122D3E" />
                          <rect x="5" y="5" width="20" height="20" fill="white" />
                          <rect x="10" y="10" width="10" height="10" fill="#122D3E" />
                          <rect x="70" y="0" width="30" height="30" fill="#122D3E" />
                          <rect x="75" y="5" width="20" height="20" fill="white" />
                          <rect x="80" y="10" width="10" height="10" fill="#122D3E" />
                          <rect x="0" y="70" width="30" height="30" fill="#122D3E" />
                          <rect x="5" y="75" width="20" height="20" fill="white" />
                          <rect x="10" y="80" width="10" height="10" fill="#122D3E" />
                          <rect x="40" y="15" width="10" height="20" fill="#122D3E" />
                          <rect x="40" y="45" width="20" height="10" fill="#122D3E" />
                          <rect x="70" y="45" width="15" height="15" fill="#122D3E" />
                          <rect x="45" y="70" width="25" height="15" fill="#122D3E" />
                          <rect x="80" y="75" width="15" height="15" fill="#122D3E" />
                        </svg>
                        <span className="text-[9px] font-mono font-bold text-[#285C7D] mt-1">Scan &amp; Pay</span>
                      </div>

                      <div className="flex-1 space-y-2 text-center sm:text-left">
                        <span className="text-xs font-bold text-[#122D3E] block">
                          Scan with any UPI App (GPay, PhonePe, Paytm, CRED)
                        </span>
                        <div className="flex items-center justify-center sm:justify-start space-x-2">
                          <span className="px-3 py-1 bg-white border border-neutral-300 rounded font-mono text-xs text-[#122D3E] font-bold">
                            rajmaharaje@icici
                          </span>
                          <button
                            type="button"
                            onClick={copyUpiId}
                            className="p-1.5 bg-white border border-neutral-300 rounded hover:bg-neutral-100 transition-colors text-xs flex items-center space-x-1"
                            title="Copy UPI ID"
                          >
                            {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-neutral-600" />}
                          </button>
                        </div>
                        <p className="text-[11px] text-[#7E482B]">
                          Amount: <strong>{formatPrice(cartTotalINR)}</strong> • Instant Zero Surcharge
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#FAF3ED] border border-[#285C7D]/20 space-y-3">
                    <div>
                      <label className="block text-[11px] uppercase font-bold text-[#7E482B] mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardData.number}
                        onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                        className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs font-mono text-[#122D3E] focus:outline-none focus:border-[#285C7D]"
                        placeholder="•••• •••• •••• ••••"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase font-bold text-[#7E482B] mb-1">
                          Expiry Date (MM/YY)
                        </label>
                        <input
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                          className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs font-mono text-[#122D3E] focus:outline-none focus:border-[#285C7D]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase font-bold text-[#7E482B] mb-1">
                          CVV Security Code
                        </label>
                        <input
                          type="password"
                          value={cardData.cvv}
                          onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                          className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs font-mono text-[#122D3E] focus:outline-none focus:border-[#285C7D]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#FAF3ED] border border-[#285C7D]/20 space-y-2">
                    <label className="block text-xs font-bold uppercase text-[#7E482B]">
                      Select Your Authorized Bank
                    </label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-lg p-2.5 text-xs text-[#122D3E] focus:outline-none focus:border-[#285C7D] font-sans"
                    >
                      <option value="HDFC Bank">HDFC Bank (Instant 256-bit)</option>
                      <option value="ICICI Bank">ICICI Bank</option>
                      <option value="State Bank of India">State Bank of India</option>
                      <option value="Axis Bank">Axis Bank</option>
                      <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                      <option value="Punjab National Bank">Punjab National Bank</option>
                    </select>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#FAF3ED] border border-[#285C7D]/20 space-y-1.5 text-xs">
                    <span className="font-bold text-[#122D3E] flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-[#285C7D]" />
                      <span>Complimentary Cash / UPI on Delivery</span>
                    </span>
                    <p className="text-[11px] text-[#7E482B]">
                      Pay by Cash or Scan QR with our courier delivery executive at your doorstep upon receiving your rigid presentation chest.
                    </p>
                  </div>
                )}

                <div className="pt-2 border-t border-neutral-200">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#122D3E] hover:bg-[#285C7D] text-[#A8CEE8] hover:text-white font-bold text-xs uppercase tracking-[0.25em] shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 cursor-pointer"
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
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#285C7D]/20 shadow-xl space-y-5">
              <h3 className="font-sans text-base font-extrabold uppercase text-[#122D3E] border-b border-neutral-200 pb-3">
                Order Summary ({cart.length})
              </h3>

              {/* Items preview list */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex items-center space-x-3 text-xs">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg bg-white border border-neutral-200 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[#122D3E] truncate">{item.title}</div>
                      <div className="text-[10px] text-[#7E482B]">Qty: {item.quantity} {item.monogram && `• [${item.monogram}]`}</div>
                    </div>
                    <span className="font-mono font-bold text-[#122D3E]">
                      {formatPrice(item.priceINR * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="space-y-2 pt-4 border-t border-neutral-200 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#122D3E] font-semibold">{formatPrice(cartSubtotalINR)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Privilege Discount ({discountCode})</span>
                    <span className="font-mono font-bold">-{formatPrice(discountAmountINR)}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-600">
                  <span>Complimentary Presentation Chest &amp; Wax Seal</span>
                  <span className="text-emerald-700 font-semibold font-mono">Free</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Express Insured Courier</span>
                  <span className="font-mono font-semibold">
                    {shippingCostINR === 0 ? <strong className="text-emerald-700">Free</strong> : formatPrice(shippingCostINR)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#122D3E] pt-3 border-t border-neutral-200">
                  <span className="font-sans uppercase tracking-wider">Total</span>
                  <span className="font-mono text-[#285C7D] text-lg">{formatPrice(cartTotalINR)}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#7E482B] font-sans flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Backed by the Raje Maharaje Authenticity Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Check, Gift, Plus, Trash2, ShieldCheck } from 'lucide-react';
import { CrownIcon } from './CrownLogo';

const BespokeBoxBuilder = () => {
  const { products, formatPrice, addToCart, triggerConfetti } = useShop();

  const boxOptions = [
    {
      id: 'duo-chest',
      name: 'Raje Duo Presentation Box',
      slots: 2,
      boxPriceINR: 500,
      color: 'Sapphire & Rose Gold',
      description: 'Ideal for refined pairings — a Tanchoi Brocade with a contrasting Chikankari.',
    },
    {
      id: 'grand-chest',
      name: 'Maharaje Grand Royal Chest',
      slots: 3,
      boxPriceINR: 900,
      color: 'Midnight Obsidian & Gold',
      description: 'Our signature bespoke suite for grooms and luxury gifting.',
    },
    {
      id: 'monarch-chest',
      name: 'Monarch Imperial Treasury',
      slots: 4,
      boxPriceINR: 1200,
      color: 'Imperial Emerald & Gold',
      description: 'A 4-piece heritage suite spanning core weaves of the subcontinent.',
    },
  ];

  const waxSealOptions = [
    { id: 'gold', name: 'Imperial Gold', colorHex: '#C99E54' },
    { id: 'ruby', name: 'Royal Crimson', colorHex: '#9B111E' },
    { id: 'sapphire', name: 'Midnight Navy', colorHex: '#0F2537' },
    { id: 'emerald', name: 'Forest Green', colorHex: '#1B4D3E' },
  ];

  const [selectedBox, setSelectedBox] = useState(boxOptions[1]);
  const [selectedItems, setSelectedItems] = useState([
    products.find((p) => p.craft.includes('Tanchoi')) || products[0],
    products.find((p) => p.craft.includes('Chikankari')) || products[1],
    products.find((p) => p.craft.includes('Ajrakh') || p.craft.includes('Ikat')) || products[2],
  ]);
  const [selectedWaxSeal, setSelectedWaxSeal] = useState(waxSealOptions[0]);
  const [personalNote, setPersonalNote] = useState('To a gentleman of exquisite taste — wishing you timeless elegance.');
  const [recipientName, setRecipientName] = useState('Distinguished Gentleman');
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);

  const handleBoxChange = (box) => {
    setSelectedBox(box);
    const newItems = [...selectedItems];
    if (newItems.length < box.slots) {
      while (newItems.length < box.slots) {
        const remaining = products.filter((p) => !newItems.some((ni) => ni?.id === p.id));
        newItems.push(remaining[0] || products[0]);
      }
    } else if (newItems.length > box.slots) {
      newItems.length = box.slots;
    }
    setSelectedItems(newItems);
  };

  const handleSelectItemForSlot = (product) => {
    const next = [...selectedItems];
    next[activeSlotIndex] = product;
    setSelectedItems(next);
    if (activeSlotIndex < selectedBox.slots - 1) {
      setActiveSlotIndex(activeSlotIndex + 1);
    }
  };

  const handleRemoveFromSlot = (idx) => {
    const next = [...selectedItems];
    next[idx] = null;
    setSelectedItems(next);
    setActiveSlotIndex(idx);
  };

  const itemsTotalINR = selectedItems.reduce((sum, item) => sum + (item?.priceINR || 0), 0);
  const totalCustomBoxINR = itemsTotalINR + selectedBox.boxPriceINR;
  const isComplete = selectedItems.every((item) => item !== null) && selectedItems.length === selectedBox.slots;

  const handleAddCustomBoxToCart = () => {
    if (!isComplete) return;

    const customProduct = {
      id: `custom-box-${Date.now()}`,
      slug: `custom-box-${Date.now()}`,
      title: `${selectedBox.name} (Curated ${selectedBox.slots}-Piece Set)`,
      priceINR: totalCustomBoxINR,
      image: '/images/gift_boxes.jpg',
      category: 'Gift Sets',
      collection: 'Maharaje',
      craft: 'Bespoke Curated Set',
      fabric: selectedItems.map((i) => i.title).join(', '),
      description: `Bespoke set containing: ${selectedItems.map((i) => i.title).join(' • ')}. Wax Seal: ${selectedWaxSeal.name}. Recipient: ${recipientName}. Note: "${personalNote}"`,
      badge: 'Bespoke Box',
      rating: 5.0,
      reviewsCount: 1,
      isBestSeller: false,
    };

    addToCart(customProduct, 1, null, personalNote);
    triggerConfetti();
  };

  return (
    <section className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-400 font-sans">
            Custom Gifting Configurator
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black mt-1">
            Bespoke Box Builder
          </h2>
          <p className="text-sm text-neutral-600 font-sans mt-2">
            Select your presentation box, pick silk pocket squares, and personalize your gift message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1 */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200 shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-black text-white font-mono font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h3 className="font-sans text-base font-bold uppercase tracking-wide text-black">
                  Choose Presentation Box
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {boxOptions.map((box) => (
                  <button
                    key={box.id}
                    onClick={() => handleBoxChange(box)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedBox.id === box.id
                        ? 'bg-neutral-900 text-white border-black shadow-sm'
                        : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-bold font-mono">
                      <span>{box.slots} Pieces</span>
                      {selectedBox.id === box.id && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="font-sans font-bold text-sm mt-1">{box.name}</div>
                    <p className={`text-[11px] mt-1 ${selectedBox.id === box.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {box.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-black text-white font-mono font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-sans text-base font-bold uppercase tracking-wide text-black">
                    Assign Items to Slots
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-neutral-500">
                  Editing Slot {activeSlotIndex + 1} of {selectedBox.slots}
                </span>
              </div>

              {/* Slot buttons */}
              <div className="flex space-x-2 mb-4">
                {Array.from({ length: selectedBox.slots }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlotIndex(idx)}
                    className={`flex-1 py-2.5 px-2 rounded-lg border text-center transition-colors text-xs ${
                      activeSlotIndex === idx
                        ? 'bg-black text-white font-bold border-black'
                        : selectedItems[idx]
                        ? 'bg-neutral-100 text-neutral-900 border-neutral-300'
                        : 'bg-neutral-50 text-neutral-400 border-dashed border-neutral-300'
                    }`}
                  >
                    <div className="font-mono text-[10px] uppercase">Slot {idx + 1}</div>
                    <div className="truncate font-semibold mt-0.5">
                      {selectedItems[idx] ? selectedItems[idx].title.split(' ')[0] : 'Empty'}
                    </div>
                  </button>
                ))}
              </div>

              {/* Products picker list */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-neutral-500">
                  Select item for Slot #{activeSlotIndex + 1}:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto pr-1">
                  {products.slice(0, 15).map((p) => {
                    const isSelected = selectedItems[activeSlotIndex]?.id === p.id;
                    return (
                      <div
                        key={p.id}
                        onClick={() => handleSelectItemForSlot(p)}
                        className={`p-2 rounded-lg border cursor-pointer flex flex-col justify-between transition-colors ${
                          isSelected
                            ? 'bg-neutral-900 text-white border-black'
                            : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <div className="aspect-square rounded overflow-hidden mb-1.5 bg-neutral-100">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold line-clamp-1">{p.title}</div>
                          <div className={`text-[10px] font-mono mt-0.5 flex justify-between ${isSelected ? 'text-neutral-300' : 'text-neutral-600'}`}>
                            <span>{formatPrice(p.priceINR)}</span>
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200 shadow-xs space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-black text-white font-mono font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h3 className="font-sans text-base font-bold uppercase tracking-wide text-black">
                  Wax Seal & Gift Note
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-2">
                  Wax Seal Stamp Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {waxSealOptions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedWaxSeal(s)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-colors ${
                        selectedWaxSeal.id === s.id
                          ? 'bg-neutral-900 text-white border-black'
                          : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: s.colorHex }}></span>
                      <span>{s.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Recipient Name
                  </label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-black font-sans"
                    placeholder="Recipient Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">
                    Gift Note
                  </label>
                  <input
                    type="text"
                    value={personalNote}
                    onChange={(e) => setPersonalNote(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-black font-serif italic"
                    placeholder="Message on parchment card..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Live Preview (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-300 shadow-lg space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center space-x-2">
                  <CrownIcon className="w-5 h-5 text-black" />
                  <span className="font-sans font-bold text-sm uppercase tracking-wide">
                    Live Box Preview
                  </span>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-neutral-100 rounded text-neutral-700">
                  {selectedBox.slots} Items
                </span>
              </div>

              {/* Box Preview Grid */}
              <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200">
                <div className="flex items-center justify-between text-xs pb-2 mb-3 border-b border-neutral-200">
                  <span className="font-bold text-neutral-900">{selectedBox.name}</span>
                  <span className="text-[10px] font-mono uppercase text-neutral-500">
                    Seal: {selectedWaxSeal.name}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Array.from({ length: selectedBox.slots }).map((_, idx) => {
                    const item = selectedItems[idx];
                    return (
                      <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-white border border-neutral-300 group shadow-2xs">
                        {item ? (
                          <>
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-1.5 text-white">
                              <span className="text-[9px] font-bold line-clamp-1">{item.title}</span>
                              <span className="text-[8px] font-mono">{formatPrice(item.priceINR)}</span>
                            </div>
                            <button
                              onClick={() => handleRemoveFromSlot(idx)}
                              className="absolute top-1 right-1 p-1 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Remove"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </>
                        ) : (
                          <div
                            onClick={() => setActiveSlotIndex(idx)}
                            className="w-full h-full flex flex-col items-center justify-center p-2 text-center border border-dashed border-neutral-300 cursor-pointer hover:bg-neutral-50"
                          >
                            <Plus className="w-4 h-4 text-neutral-400 mb-0.5" />
                            <span className="text-[8px] font-bold uppercase text-neutral-500">Add Item</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Gift card preview */}
                <div className="mt-3 p-2.5 rounded bg-white border border-neutral-200 text-xs">
                  <div className="text-[9px] uppercase font-bold text-neutral-400 mb-0.5">For: {recipientName}</div>
                  <div className="font-serif italic text-neutral-800 text-[11px]">"{personalNote}"</div>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-neutral-600 pt-1">
                <div className="flex justify-between">
                  <span>Selected Pieces</span>
                  <span className="font-mono text-black font-semibold">{formatPrice(itemsTotalINR)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gift Chest Box</span>
                  <span className="font-mono text-black font-semibold">{formatPrice(selectedBox.boxPriceINR)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Molten Wax Seal & Custom Parchment</span>
                  <span className="font-semibold text-emerald-700">Free</span>
                </div>
                <div className="flex justify-between text-base font-bold text-black pt-2 border-t border-neutral-200">
                  <span>Total Box Price</span>
                  <span className="font-mono">{formatPrice(totalCustomBoxINR)}</span>
                </div>
              </div>

              {/* Add to Bag CTA */}
              <button
                disabled={!isComplete}
                onClick={handleAddCustomBoxToCart}
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  isComplete
                    ? 'bg-black text-white hover:bg-neutral-800 shadow-md'
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                }`}
              >
                {isComplete ? 'Add Custom Box to Bag' : `Fill All ${selectedBox.slots} Slots`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeBoxBuilder;

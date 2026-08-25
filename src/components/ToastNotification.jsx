import React from 'react';
import { useShop } from '../context/ShopContext';

const ToastNotification = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center space-x-3 bg-obsidian-950 text-cream-100 px-5 py-3.5 rounded-2xl shadow-2xl border border-gold-500/50 backdrop-blur-md">
        <span className="text-lg">{toastMessage.icon}</span>
        <span className="text-xs font-serif font-medium text-cream-100 tracking-wide">
          {toastMessage.text}
        </span>
      </div>
    </div>
  );
};

export default ToastNotification;

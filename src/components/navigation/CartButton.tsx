import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function CartButton() {
  return (
    <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 bg-emerald-500 text-white 
                      w-5 h-5 rounded-full text-xs flex items-center justify-center">
        0
      </span>
    </button>
  );
}
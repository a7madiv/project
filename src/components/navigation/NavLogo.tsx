import React from 'react';
import { Pen } from 'lucide-react';

export default function NavLogo() {
  return (
    <a href="/" className="flex items-center gap-2 text-white">
      <Pen className="w-8 h-8 text-emerald-500" />
      <span className="text-xl font-bold">Noto</span>
    </a>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

interface LoginButtonProps {
  onClick: () => void;
}

export default function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 
                 text-white px-6 py-2 rounded-full transition-colors"
    >
      <LogIn size={18} />
      <span className="hidden sm:inline">Sign In</span>
    </motion.button>
  );
}
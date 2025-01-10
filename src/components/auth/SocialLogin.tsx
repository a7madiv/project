import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocialLogin() {
  return (
    <div className="flex gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 
                   bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                   transition-colors duration-300"
      >
        <Github size={20} />
        <span>GitHub</span>
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 
                   bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                   transition-colors duration-300"
      >
        <Twitter size={20} />
        <span>Twitter</span>
      </motion.button>
    </div>
  );
}
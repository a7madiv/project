import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const [ref, controls] = useScrollAnimation();

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Noto: Redefining Modern Innovation
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed"
        >
          Experience the future of technology with our revolutionary platform
        </motion.p>
        <motion.button
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 
                   rounded-full font-semibold text-lg transition-shadow 
                   hover:shadow-lg hover:shadow-emerald-500/20"
        >
          Get Started
        </motion.button>
      </div>
      <motion.button
        onClick={scrollToFeatures}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        aria-label="Scroll to features"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.button>
    </motion.div>
  );
}
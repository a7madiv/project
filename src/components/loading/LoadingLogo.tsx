import React from 'react';
import { motion } from 'framer-motion';
import { Pen } from 'lucide-react';

export default function LoadingLogo() {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ 
        scale: [0.8, 1.1, 1],
        rotate: [0, 360]
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.6, 1]
      }}
      className="relative z-10"
    >
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="text-emerald-500"
      >
        <Pen size={64} />
      </motion.div>
    </motion.div>
  );
}
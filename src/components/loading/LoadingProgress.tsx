import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingProgress() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute -inset-4"
    >
      <svg
        className="w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
        viewBox="0 0 100 100"
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="stroke-emerald-500"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="2"
          strokeDasharray="0 1"
          transform="rotate(-90 50 50)"
        />
      </svg>
    </motion.div>
  );
}
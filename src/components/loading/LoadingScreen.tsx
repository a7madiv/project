import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingLogo from './LoadingLogo';
import LoadingProgress from './LoadingProgress';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
        >
          <div className="relative">
            <LoadingLogo />
            <LoadingProgress />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
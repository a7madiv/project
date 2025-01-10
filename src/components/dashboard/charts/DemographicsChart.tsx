import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Users } from 'lucide-react';

export default function DemographicsChart() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Demographics</h3>
        <PieChart className="text-emerald-500" size={24} />
      </div>

      <div className="relative h-64">
        {/* Placeholder for actual chart implementation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Users className="text-emerald-500" size={64} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">65%</div>
          <div className="text-gray-400">Female</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">35%</div>
          <div className="text-gray-400">Male</div>
        </div>
      </div>
    </motion.div>
  );
}
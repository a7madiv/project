import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, TrendUp } from 'lucide-react';

export default function PatientVisitsChart() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Patient Visits</h3>
        <LineChart className="text-emerald-500" size={24} />
      </div>
      
      <div className="h-64 flex items-end space-x-2">
        {/* Placeholder for actual chart implementation */}
        {[40, 70, 45, 90, 65, 85, 50].map((height, index) => (
          <div
            key={index}
            className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      
      <div className="mt-4 flex items-center text-emerald-500">
        <TrendUp size={20} className="mr-2" />
        <span>12% increase this week</span>
      </div>
    </motion.div>
  );
}
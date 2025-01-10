import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Calendar, FileText, MessageSquare } from 'lucide-react';

export default function PatientPortal() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold text-white mb-6">Patient Portal</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: Calendar, label: 'Book Appointment' },
          { icon: FileText, label: 'View Records' },
          { icon: MessageSquare, label: 'Send Message' },
          { icon: UserCircle, label: 'Update Profile' }
        ].map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-4 bg-gray-700 
                     rounded-lg hover:bg-gray-600 transition-colors"
          >
            <item.icon className="text-emerald-500 mb-2" size={24} />
            <span className="text-gray-200 text-sm">{item.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-700 rounded-lg">
        <h4 className="text-white font-medium mb-2">Recent Feedback</h4>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              whileHover={{ scale: 1.2 }}
              className="text-emerald-500"
            >
              ★
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
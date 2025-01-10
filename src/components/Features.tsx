import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Globe } from 'lucide-react';
import { slideIn, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Unmatched performance with cutting-edge technology'
  },
  {
    icon: Shield,
    title: 'Ultra Secure',
    description: 'Enterprise-grade security for peace of mind'
  },
  {
    icon: Cpu,
    title: 'AI Powered',
    description: 'Advanced algorithms that adapt to your needs'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Seamless operation across continents'
  }
];

export default function Features() {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
      id="features"
      className="bg-gray-900 py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={slideIn}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Why Choose Noto?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={slideIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 
                       transition-colors duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br 
                         from-blue-500 to-emerald-500 flex items-center 
                         justify-center text-white"
              >
                <feature.icon size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
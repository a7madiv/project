import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-gray-900 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Future?
        </h2>
        <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
          Join thousands of innovative companies already using Noto to revolutionize their approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 
                           rounded-full font-semibold text-lg transition-transform hover:scale-105 
                           hover:shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2">
            Get Started Now
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-gray-700 text-white px-8 py-4 rounded-full 
                           font-semibold text-lg transition-all hover:border-emerald-500">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
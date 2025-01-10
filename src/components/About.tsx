import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Brain, Clock } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeIn, staggerContainer } from "../utils/animations";

export default function About() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="about" className="bg-gray-900 py-24 px-4">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">About Noto</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              At Noto, we're revolutionizing healthcare documentation with
              AI-powered solutions. Our system streamlines workflows, reduces
              errors, and integrates seamlessly with hospital management
              systems.
            </p>
            <p>
              Tailored for the Jordanian healthcare market, we focus on
              minimizing administrative burdens, enabling doctors to spend more
              time caring for patients.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: Brain,
              title: "AI-Powered",
              description: "Advanced speech-to-text with accent adaptability",
            },
            {
              icon: Clock,
              title: "Real-Time",
              description: "Instant e-signatures and document processing",
            },
            {
              icon: Stethoscope,
              title: "Healthcare Focus",
              description: "Seamless integration with hospital systems",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

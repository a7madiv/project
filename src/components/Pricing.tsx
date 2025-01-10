import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeIn, staggerContainer } from "../utils/animations";

const plans = [
  {
    name: "Silver",
    price: "13000",
    features: [
      "40 Users",
      "Speech-to-text",
      "In-person training",
      "6 months of free maintenance",
      "Business hours support",
    ],
    highlight: false,
    tier: "silver",
  },
  {
    name: "Gold",
    price: "14000",
    features: [
      "60 Users",
      "Speech-to-text",
      "In-person training",
      "Statistics",
      "1 year of free maintenance",
      "Business hours support",
    ],
    highlight: true,
    tier: "gold",
  },
  {
    name: "Platinum",
    price: "16000",
    features: [
      "100 Users",
      "Speech-to-text",
      "In-person training",
      "Statistics",
      "1 year of free maintenance",
      "Support 24/7",
      "Priority Support",
    ],
    highlight: false,
    tier: "platinum",
  },
];

export default function Pricing() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="pricing" className="bg-gray-900 py-24 px-4">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              className={`
                rounded-2xl p-8 relative overflow-hidden
                ${
                  plan.tier === "silver" &&
                  "bg-gradient-to-br from-gray-700 to-gray-800 shadow-[0_0_15px_rgba(192,192,192,0.3)] hover:shadow-[0_0_25px_rgba(192,192,192,0.4)]"
                }
                ${
                  plan.tier === "gold" &&
                  "bg-gradient-to-br from-amber-600 to-amber-800 shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]"
                }
                ${
                  plan.tier === "platinum" &&
                  "bg-gradient-to-br from-slate-500 to-slate-700 shadow-[0_0_15px_rgba(229,228,226,0.3)] hover:shadow-[0_0_25px_rgba(229,228,226,0.4)]"
                }
                before:absolute before:inset-0 before:rounded-2xl before:border
                ${
                  plan.tier === "silver" &&
                  "before:border-gray-400/30 before:animate-pulse"
                }
                ${
                  plan.tier === "gold" &&
                  "before:border-amber-400/30 before:animate-shimmer"
                }
                ${
                  plan.tier === "platinum" &&
                  "before:border-slate-300/30 before:animate-glow"
                }
              `}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {plan.name}
              </motion.h3>
              <div className="flex items-baseline mb-6">
                <span className="text-gray-400 text-2xl">$</span>
                <span className="text-5xl font-bold text-white mx-1">
                  {plan.price}
                </span>
                <span className="text-gray-400">/Annual</span>
              </div>

              <div
                className={`h-px w-full mb-6 ${
                  plan.tier === "silver"
                    ? "bg-gray-400/30"
                    : plan.tier === "gold"
                    ? "bg-amber-400/30"
                    : "bg-slate-300/30"
                }`}
              />

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <Check
                      className={`w-5 h-5 mr-2 flex-shrink-0 ${
                        plan.tier === "silver"
                          ? "text-gray-400"
                          : plan.tier === "gold"
                          ? "text-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300
                  ${
                    plan.tier === "silver"
                      ? "bg-gray-400 hover:bg-gray-500 text-gray-900"
                      : plan.tier === "gold"
                      ? "bg-amber-400 hover:bg-amber-500 text-amber-900"
                      : "bg-slate-300 hover:bg-slate-400 text-slate-900"
                  }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

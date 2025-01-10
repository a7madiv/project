import React from 'react';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { X } from 'lucide-react';

interface LoginPageProps {
  onClose: () => void;
}

export default function LoginPage({ onClose }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-black bg-opacity-90 flex items-center justify-center p-4">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors"
          aria-label="Close login"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue to Noto</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
          <LoginForm />
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 border-t border-gray-800" />
            <span className="text-gray-500 text-sm">or continue with</span>
            <div className="flex-1 border-t border-gray-800" />
          </div>
          <SocialLogin />
          <p className="text-center mt-6 text-gray-400">
            Don't have an account?{' '}
            <a href="/signup" className="text-emerald-500 hover:text-emerald-400 transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
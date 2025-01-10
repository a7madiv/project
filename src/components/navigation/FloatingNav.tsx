import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import CartButton from './CartButton';
import LoginButton from './LoginButton';

interface FloatingNavProps {
  onLoginClick: () => void;
}

export default function FloatingNav({ onLoginClick }: FloatingNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(17, 24, 39, 0.5)', 'rgba(17, 24, 39, 0.95)']
  );

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <motion.nav
      style={{ background }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl 
                backdrop-blur-md rounded-full py-4 px-6 
                flex items-center justify-between z-50
                border border-gray-800 transition-all duration-300
                ${isScrolled ? 'py-3' : 'py-4'}`}
    >
      <NavLogo />
      <NavLinks />
      <div className="flex items-center gap-4">
        <CartButton />
        <LoginButton onClick={onLoginClick} />
      </div>
    </motion.nav>
  );
}
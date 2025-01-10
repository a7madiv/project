import React from 'react';

const links = ['Features', 'Testimonials', 'Pricing', 'About'];

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  );
}
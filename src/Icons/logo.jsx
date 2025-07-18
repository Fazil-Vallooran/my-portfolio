'use client';
import Link from 'next/link';
import React from 'react';

const Logo = ({ size = 42 }) => {
  return (
    <Link
      href="/"
      className="relative group inline-block transition-transform duration-300 hover:scale-110 cursor-pointer"
      style={{ width: size, height: size, minWidth: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-label="Logo"
      >
        <circle cx="32" cy="32" r="29" fill="#0a192f" stroke="#36ccc2" strokeWidth="3" />
        <text x="32" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="58" fill="#36ccc2" fontFamily="Arial, sans-serif" fontWeight="bold">F</text>
      </svg>
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-accent text-primary text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
        Go to Homepage
      </span>
    </Link>
  );
};

export default Logo;

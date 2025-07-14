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
      <img
        src="/favicon.ico"
        alt="Logo"
        width={size}
        height={size}
        className="rounded-sm w-full h-full object-contain"
      />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-accent text-primary text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
        Go to Homepage
      </span>
    </Link>
  );
};

export default Logo;

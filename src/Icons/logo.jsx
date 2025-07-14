'use client';
import Link from 'next/link';
import React from 'react';

const Logo = ({ size = 42 }) => {
  return (
    <Link href="/" className="inline-block transition-transform duration-300 hover:scale-110 cursor-pointer">
      <img
        src="/favicon.ico"
        alt="Logo"
        width={size}
        height={size}
        className="rounded-sm"
        style={{ minWidth: size }}
      />
    </Link>
  );
};

export default Logo;

// components/Logo.jsx
import React from "react";

const Logo = ({ size = 28 }) => (
  <img
    src="/favicon.ico"
    alt="Logo"
    width={size}
    height={size}
    className="rounded-sm"
    style={{ minWidth: size }}
  />
);

export default Logo;

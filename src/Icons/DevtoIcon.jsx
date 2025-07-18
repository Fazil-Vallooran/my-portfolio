import React from "react";

const DevtoIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="42" height="42" rx="8" fill="currentColor" />
    <text
      x="25"
      y="29"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="20"
      fill="#111"
      fontFamily="Montserrat, Inter, Arial, sans-serif"
      letterSpacing="2"
      dominantBaseline="middle"
    >
      DEV
    </text>
  </svg>
);

export default DevtoIcon;

import React from "react";

const SubstackIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="6" y="5" width="20" height="4" rx="1" />
    <rect x="6" y="12" width="20" height="4" rx="1" />
    <polyline points="6,21 16,29 26,21" />
    <rect x="6" y="21" width="20" height="0" />
  </svg>
);

export default SubstackIcon;

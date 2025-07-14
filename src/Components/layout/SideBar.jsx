"use client";
import React from "react";
// import removed
import socialLinks from "@constants/SocialLinks";

const ClickableIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative flex items-center"
  >
    <Icon className="w-8 h-8 text-secondary hover:text-accent transition-all duration-300 dark:text-secondary-light dark:hover:text-accent group-hover:scale-125 group-hover:-translate-y-2" />
    <span className="absolute left-8 opacity-0 group-hover:opacity-100 bg-primary text-accent text-xs rounded px-2 py-1 transition-opacity duration-300 whitespace-nowrap z-10 dark:bg-primary dark:text-accent" >
      {label}
    </span>
  </a>
);

const SideBar = ({ className = "" }) => {
  return (
    <div
      className={`${className} fixed left-12 top-40 h-screen flex flex-col justify-center items-center px-2 py-4 group/sidebar transition-all duration-300 hover:bg-primary z-50 w-16 rounded-tr-2xl rounded-br-2xl dark:bg-primary`}
      style={{ minHeight: '200px' }}
    >
      <div className="flex flex-col space-y-8 mb-4 items-center">
        {socialLinks.map(({ href, icon: Icon, label }, index) => (
          <ClickableIcon key={index} href={href} Icon={Icon} label={label} />
        ))}
      </div>
      {/* Vertical line for separation */}
      <div className="w-1 h-40 bg-gray-400 mt-6" />
    </div>
  );
};

export default SideBar;

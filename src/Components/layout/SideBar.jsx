"use client";
import React from "react";
import socialLinks from "@constants/SocialLinks";
import { useLanding } from "@contexts/landingContext";

const ClickableIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative flex items-center"
  >
    <Icon className="w-8 h-8 text-secondary hover:text-accent transition-all duration-300 dark:text-secondary-light dark:hover:text-accent group-hover:scale-125 group-hover:-translate-y-2" />
    <span className="absolute left-8 opacity-0 group-hover:opacity-100 bg-primary text-accent text-xs rounded px-2 py-1 transition-opacity duration-300 whitespace-nowrap z-10 dark:bg-primary dark:text-accent">
      {label}
    </span>
  </a>
);

const SideBar = ({ className = "" }) => {
  const { showLanding } = useLanding();
console.log("showLanding:", showLanding);

  if (showLanding) return null; // Hide sidebar while landing shows

  return (
    <div
      className={`${className} static lg:fixed w-full md:w-16 md:left-12 md:top-40 md:h-screen h-16 flex flex-row md:flex-col justify-center items-center px-2 py-2 md:py-4 group/sidebar transition-all duration-300 bg-primary z-40 md:z-50 rounded-none md:rounded-tr-2xl md:rounded-br-2xl dark:bg-primary`}
      style={{ minHeight: "56px" }}
    >
      <div className="flex flex-row lg:flex-col space-x-4 md:space-x-0 md:space-y-8 mb-0 md:mb-4 items-center w-full justify-center">
        {socialLinks.map(({ href, icon: Icon, label }, index) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative flex items-center"
            key={index}
          >
            <Icon className="w-6 h-6 md:w-8 lg:h-8 text-secondary hover:text-accent transition-all duration-300 dark:text-secondary-light dark:hover:text-accent group-hover:scale-110 md:group-hover:scale-125 group-hover:-translate-y-1 md:group-hover:-translate-y-2" />
            <span className="absolute left-8 opacity-0 group-hover:opacity-100 bg-primary text-accent text-xs rounded px-2 py-1 transition-opacity duration-300 whitespace-nowrap z-10 dark:bg-primary dark:text-accent hidden md:block">
              {label}
            </span>
          </a>
        ))}
      </div>
      <div className="hidden lg:block w-1 h-40 bg-gray-400 mt-6" />
    </div>
  );
};

export default SideBar;

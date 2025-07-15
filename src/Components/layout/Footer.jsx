"use client";
import React from "react";
import { useLanding } from "@contexts/landingContext";

export default function Footer({ link, className }) {
  const { showLanding } = useLanding();
  console.log("showLanding:", showLanding);

  if (showLanding) return null; // Hide sidebar while landing shows

  return (
    <footer
      className={`${className} w-full flex justify-center items-center py-4 bg-primary`}
    >
      <a href={link} target="_blank" rel="noreferrer" className="w-full">
        <div className="group font-mono text-xs md:text-sm text-secondary text-center w-full px-2 md:px-0">
          <span className="group-hover:text-accent transition-all duration-300 block">
            Designed & Built by Mohammed Fazil
          </span>
        </div>
      </a>
    </footer>
  );
}

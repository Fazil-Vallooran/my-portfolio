import React from "react";

export default function Footer({ link, className }) {
  return (
    <footer className={`${className} w-full flex justify-center items-center py-6 bg-primary`}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="group font-mono text-xs text-secondary text-center">
          <span className="group-hover:text-accent transition-all duration-300">
            Designed & Built by Mohammed Fazil
          </span>
        </div>
      </a>
    </footer>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../Icons/logo"; // Adjust the import path as necessary
import { useLanding } from "@contexts/landingContext";

const navLinks = [
  {
    number: "01",
    label: "About Me",
    href: "#about",
    id: "about",
  },
  {
    number: "02",
    label: "Experience",
    href: "#experience",
    id: "experience",
  },
  {
    number: "03",
    label: "Work",
    href: "#work",
    id: "work",
  },
  {
    number: "04",
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];

const MainHeader = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = navLinks.map((link) => document.getElementById(link.id));
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const { showLanding } = useLanding();
    console.log("showLanding:", showLanding);
  
    if (showLanding) return null; // Hide sidebar while landing shows
  

  return (
    <div className="bg-primary w-full flex items-center justify-between px-4 md:px-6 py-3 md:py-4 fixed top-2 md:top-4 z-50 shadow-md md:shadow-none">
      <div className="relative z-50 mb-6 hidden md:block ml-8">
        <Logo size={42} />
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-accent focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-9 h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-primary/95 md:bg-transparent backdrop-blur p-4 md:p-0 z-40`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-base md:text-lg font-bold cursor-pointer transition-colors duration-200 group flex items-center font-mono ${
              activeSection === link.id ? "text-white" : "text-accent"
            }`}
            onClick={(e) => {
              if (link.href.startsWith("#")) {
                const section = document.getElementById(link.id);
                if (section) {
                  e.preventDefault();
                  section.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", link.href);
                  setIsMenuOpen(false); // Close menu on mobile
                }
              }
            }}
          >
            <span
              style={{ color: "#2bb3a6" }}
              className="font text-sm md:text-base mr-1"
            >
              {link.number}.
            </span>
            <span className="transition-colors duration-200 group-hover:text-[#2bb3a6] text-sm md:text-base">
              {link.label}
            </span>
          </a>
        ))}

        {/* Resume Button */}
        <a
          href="/Mohammed Fazil.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-0 md:ml-4 px-4 md:px-5 py-2 border-2 border-accent text-accent rounded-lg bg-primary shadow-sm text-sm md:text-base font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent text-center"
          style={{ letterSpacing: "1px" }}
        >
          <span className="inline-block align-middle">Resume</span>
          <svg
            className="inline-block ml-2 align-middle transition-transform duration-300 group-hover:translate-x-1"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15M15 10L11 6M15 10L11 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default MainHeader;

"use client";
import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "01. About Me", href: "#about", id: "about" },
  { name: "02. Experience", href: "#experience", id: "experience" },
  { name: "03. Work", href: "#work", id: "work" },
  { name: "04. Contact", href: "#contact", id: "contact" },
];

const MainHeader = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% of the section must be visible to be active
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

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

  return (
    <div className="bg-primary w-full flex items-center justify-between px-6 py-4 fixed top-4 z-50">
      <div className="text-accent font-bold text-xl"></div>
      <nav className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-lg font-bold cursor-pointer transition-colors duration-200 ${
              activeSection === link.id
                ? "text-white underline underline-offset-4 decoration-accent"
                : "text-accent hover:underline"
            }`}
            onClick={(e) => {
              if (link.href.startsWith("#")) {
                const section = document.getElementById(link.id);
                if (section) {
                  e.preventDefault();
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-1 border border-accent text-accent rounded hover:bg-accent hover:text-primary transition-colors duration-200 text-sm"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};

export default MainHeader;

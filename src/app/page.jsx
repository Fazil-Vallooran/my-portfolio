"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "@components/landing"; // adjust path if needed
import Intro from "@sections/Intro";
import About from "@sections/About";
import Experience from "@sections/Experience";
import Work from "@sections/Work";
import Contact from "@sections/Contact";

const HomePage = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
      document.body.style.overflow = "auto";
    }, 3000);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showLanding ? (
        <Landing key="landing" />
      ) : (
        <div
          key="main"
          className="min-h-screen flex flex-col justify-center items-center px-4"
        >
          <Intro />
          <About />
          <Experience />
          <Work />
          <Contact />
        </div>
      )}
    </AnimatePresence>
  );
};

export default HomePage;

"use client";

import React, { useState, useEffect } from "react";
import Landing from "@components/landing";
import Intro from "@sections/Intro";
import About from "@sections/About";
import Experience from "@sections/Experience";
import Work from "@sections/Work";
import Contact from "@sections/Contact";
import Particles from "@components/particles";

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

  if (showLanding) {
    return <Landing />;
  }

  return (    
    <div className="min-h-screen flex flex-col justify-center items-center px-4">      
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;

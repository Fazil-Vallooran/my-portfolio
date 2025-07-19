"use client";

import React, { useState, useEffect } from "react";
import Landing from "@components/landing";
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

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!showLanding) {
      setTimeout(() => setFadeIn(true), 50);
    } else {
      setFadeIn(false);
    }
  }, [showLanding]);

  if (showLanding) return <Landing />;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className={`fade-in${fadeIn ? ' show' : ''}`}><Intro /></div>
      <div className={`fade-in${fadeIn ? ' show' : ''}`}><About /></div>
      <div className={`fade-in${fadeIn ? ' show' : ''}`}><Experience /></div>
      <div className={`fade-in${fadeIn ? ' show' : ''}`}><Work /></div>
      <div className={`fade-in${fadeIn ? ' show' : ''}`}><Contact /></div>
    </div>
  );
};

export default HomePage;

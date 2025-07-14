"use client";
import React from "react";
import Intro from "@layout/Intro";
import About from "@layout/About";
import Experience from "@layout/Experience";
import Work from "@layout/Work";
import Contact from "@layout/Contact";

const HomePage = () => {
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

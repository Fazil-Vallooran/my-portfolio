"use client";
import React from "react";
import Intro from "@sections/Intro";
import About from "@sections/About";
import Experience from "@sections/Experience";
import Work from "@sections/Work";
import Contact from "@sections/Contact";

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

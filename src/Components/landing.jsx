"use client";
import React from "react";
import Particles from "./particles";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black" style={{position: "relative"}}>
      <Particles />
      <div className="hidden w-screen h-px animate-fade-glow md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />      
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        mohammed fazil
      </h1>
      <div className="hidden w-screen h-px animate-fade-glow md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </div>
  );
};
export default Landing;

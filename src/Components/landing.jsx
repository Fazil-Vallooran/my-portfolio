"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "../components/particles";
import Link from "next/link";

export default function Landing() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ rotate: 90, scaleX: 0, opacity: 0 }}
        animate={{ rotate: 0, scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden w-screen h-px md:block origin-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
      />


      {/* Logo with animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="z-10"
      >
        <h1
          className="text-[120px] font-bold bg-clip-text text-transparent bg-white "
          style={{ color: "#3de9da" }}
        >
          Mohammed Fazil
        </h1>
      </motion.div>

      <motion.div
        initial={{ rotate: -90, scaleX: 0, opacity: 0 }}
        animate={{ rotate: 0, scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="hidden w-screen h-px md:block origin-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
      />
    </motion.div>
  );
}

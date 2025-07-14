import React from "react";

const Intro = () => (
  <section className="mb-100 max-w-4xl w-full text-left ml-4 mt-64">
    <p className="text-accent text-lg mb-6" style={{ color: "#3de9da" }}>
      Hi, my name is
    </p>
    <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl text-secondary mb-4 leading-tight">
      Mohammed Fazil.
      <br />
      <span
        className="block text-2xl sm:text-2xl md:text-4xl mb-10"
        style={{ color: "#2bb3a6" }}
      >
        I break things (so users don’t have to).
      </span>
    </h1>
    <p className="text-lg text-secondary mb-8 max-w-2xl">
      I'm a software tester who loves digging deep, catching bugs early, and
      making sure everything works exactly as it should — under any condition.
    </p>
    <a
      href="/Mohammed Fazil.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-50 inline-flex items-center px-6 py-3 border-2 border-[#3de9da] bg-transparent text-[#3de9da] font-mono font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3de9da] hover:border-[#2bb3a6] hover:bg-[#2bb3a6] hover:text-primary hover:shadow-lg"
      style={{ letterSpacing: "1px" }}
    >
      <span className="inline-block align-middle">Check out my resume!</span>
      <svg
        className="inline-block ml-2 align-middle"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4v8m0 0l-3-3m3 3l3-3m-9 7h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </section>
);

export default Intro;

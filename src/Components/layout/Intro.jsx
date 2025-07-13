import React from "react";

const Intro = () => (
  <section className="mb-100 max-w-4xl w-full text-left ml-4 mt-64">
    <p className="text-accent text-lg mb-6" style={{ color: '#3de9da' }}>Hi, my name is</p>
    <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl text-secondary mb-4 leading-tight">
      Mohammed Fazil.
      <br />
      <span className="block text-2xl sm:text-2xl md:text-4xl mb-10" style={{ color: '#2bb3a6' }}>I break things (so users don’t have to).</span>
    </h1>
    <p className="text-lg text-secondary mb-8 max-w-2xl">
      I'm a software tester who loves digging deep, catching bugs early, and making sure everything works exactly as it should — under any condition.
    </p>
  </section>
);

export default Intro;


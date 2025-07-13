"use client";
import React from "react";
import Intro from "@layout/Intro";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <Intro />
      {/* About Section */}
      <section id="about" className=" bg-primary rounded-xl shadow-lg p-6 mb-80 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">About</h2>
        <p className="text-base text-secondary">
          I’m a software tester passionate about ensuring quality and 
          reliability in every product I work on. With a keen eye for detail 
          and a commitment to continuous learning, I strive to bridge the gap between 
          development and user experience. My journey in tech has equipped me with a 
          strong foundation in both manual and automated testing, and I enjoy collaborating 
          with cross-functional teams to deliver exceptional results.
        </p>
      </section>
      <section id="experience" className="bg-primary rounded-xl shadow-lg p-6 mb-100 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Experience</h2>
        <p className="text-base text-secondary">
          Experience content goes here.
        </p>
      </section>
      <section id="work" className="bg-primary rounded-xl shadow-lg p-6 mb-100 mt-50 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Work</h2>
        <p className="text-base text-secondary">
          Work content goes here.
        </p>
      </section>
      <section id="contact" className="bg-primary rounded-xl shadow-lg p-6 mb-100 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Contact</h2>
        <p className="text-base text-secondary">
          Contact content goes here.
        </p>
      </section>
    </div>
  );
};

export default HomePage;

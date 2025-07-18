
import React from "react";

const technologies = [
  "Playwright",
  "Selenium",
  "C#",
  "Java",
  "TestNG",
  "Postman"
];

const About = () => (
  <>
    <section id="about" className="bg-primary rounded-xl shadow-lg p-4 md:p-8 mb-40 md:mb-80 max-w-xs sm:max-w-md md:max-w-5xl w-full flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <div className="w-full md:flex-1 relative z-50 mb-8 md:mb-0">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-secondary flex items-center gap-2 md:gap-4 border-b border-[#2bb3a6]/30 pb-2">
          <span className="font-mono text-xl font-bold block" style={{color: '#2bb3a6'}}>01.</span>
          <span className="text-[#eafaf8]">About Me</span>
        </h2>
        <div className="space-y-4 md:space-y-5 text-sm md:text-base text-secondary">
          <p>
            Hello! My name is Mohammed Fazil. I’m a Software QA with 3 years of experience at <a href="https://www.infosys.com/" className="text-[#2bb3a6] underline font-semibold">Infosys Limited.</a> I’ve worked on a variety of intiatives, ensuring quality, functionality, and reliability across multiple platforms and environments. I focus on designing and executing test strategies that ensure the functionality, performance, and accessibility of modern web applications across devices and platforms.
          </p>
          <p>
            Outside of work, I enjoy exploring the latest technologies and like to experiment with them to better understand how they work in real-world scenarios.
          </p>
          <div className="mt-6">
            <span className="text-secondary font-semibold mb-2 block">Here are a few technologies I’ve been working with recently:</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-2 mt-2">
              {technologies.map((tech, idx) => (
                <span key={tech} className="font-mono text-[#3de9da] text-sm">▸ {tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:flex-1 flex justify-center items-center mt-6 md:mt-0 relative z-50">
        <div className="group rounded-lg overflow-hidden border-2 border-[#2bb3a6] bg-[#2bb3a6]/10 shadow-lg w-40 h-40 md:w-64 md:h-64 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#3de9da] z-10">
          <img src="/Fazil.jpeg" alt="Profile" className="object-cover w-full h-full transition-all duration-300 group-hover:brightness-110 group-hover:scale-105" />
        </div>
      </div>
    </section>
  </>
);

export default About;
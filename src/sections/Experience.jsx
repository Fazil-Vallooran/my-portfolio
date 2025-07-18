"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "@components/SectionWrapper";

const jobs = [
  {
    position: "Software Quality Analyst",
    company: "Infosys Ltd",
    title: "Software Quality Analyst",
    duration: "July 2024 – Present",
    points: [
      "Designed and implemented a new test automation framework using Playwright with C#, converting over 95% of manual test scenarios into automated tests.",
      "Integrated automation jobs into TeamCity and maintained detailed logs in Report Portal for traceability and reporting.",
      "Developed a robust regression testing framework, reducing regression time from 5 days to 1.5 days and accelerating release cycles.",
    ],
  },
  {
    position: "Software Quality Engineer",
    company: "Infosys Ltd",
    title: "Software Quality Engineer",
    duration: "July 2024 – Present",
    points: [
      "Designed and implemented a new test automation framework using Playwright with C#, converting over 95% of manual test scenarios into automated tests.",
    ],
  },
  {
    position: "Test Engineer",
    company: "Infosys Ltd",
    title: "Test Engineer",
    duration: "July 2022 – July 2024",
    points: [
      "Contributed to a leading freight transportation service provider by managing and restructuring over 200 automation scenarios in Selenium with Jenkins integration.",
      "Improved automation pass rates from 46% to 87% through script restructuring and optimization.",
      "Implemented QA processes across Scrum teams, including test quality metrics that reduced production defects and improved workflows.",
    ],
  },
  {
    position: "Test Engineer Trainee",
    company: "Infosys Ltd",
    title: "Test Engineer Trainee",
    duration: "March 2022 – July 2022",
    points: [
      "Completed training in automation testing with Selenium WebDriver.",
      "Built a data-driven testing framework using Selenium and Excel for efficient test case management.",
      "Created a BDD framework with Cucumber, improving collaboration between technical and non-technical team members.",
    ],
  },
];


const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobileIndex, setOpenMobileIndex] = useState(null);

  return (
    <SectionWrapper>
    <section
      className="w-full max-w-5xl xl:max-w-6xl mx-auto px-6 mt-24 mb-32 scroll-mt-32"
      id="experience"
    >
      <h2 className="text-2xl font-semibold mb-8 text-secondary">
        <span className="text-[#3de9da] font-mono">02.</span> Positions I’ve
        Held
      </h2>
      <div className="hidden md:flex gap-8">
        <div className="flex flex-col border-l-2 border-gray-700">
          {jobs.map((job, index) => (
            <button
              key={index}
              className={`text-left px-4 py-2 font-mono text-sm transition-all ${
                activeIndex === index
                  ? "text-accent border-l-2 border-accent bg-gray-900"
                  : "text-secondary"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {job.position}
            </button>
          ))}
        </div>

        <div className="ml-6 flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
            >
              <h3 className="text-lg font-semibold">
                {jobs[activeIndex].title}{" "}
                <span className="text-accent">
                  @ {jobs[activeIndex].position}
                </span>
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {jobs[activeIndex].duration}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {jobs[activeIndex].points.map((point, idx) => (
                  <li key={idx} className="text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {jobs.map((job, index) => {
          const isOpen = openMobileIndex === index;
          return (
            <div key={index} className="border border-gray-700 rounded-lg">
              <button
                onClick={() => setOpenMobileIndex(isOpen ? null : index)}
                className="w-full px-4 py-2 text-left text-accent font-mono bg-primary"
              >
                {job.position}
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <h3 className="text-base font-semibold mt-2">
                      {job.title}{" "}
                      <span className="text-accent">@ {job.company}</span>
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">{job.duration}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {job.points.map((point, idx) => (
                        <li key={idx} className="text-gray-300">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
    </SectionWrapper>
  );
};

export default WorkExperience;

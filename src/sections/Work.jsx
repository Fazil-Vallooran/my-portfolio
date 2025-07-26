import React from "react";
import SectionWrapper from "@components/SectionWrapper";

const projects = [
  {
    title: "Test Automation Framework",
    description: "Designed and implemented a comprehensive test automation framework using Playwright with C#, converting over 95% of manual test scenarios into automated tests.",
    technologies: ["Playwright", "C#", "TeamCity", "Report Portal"],
    github: "#", // Add your actual links
    demo: "#",
    featured: true
  },
  {
    title: "Regression Testing Suite", 
    description: "Developed a robust regression testing framework that reduced regression time from 5 days to 1.5 days, accelerating release cycles significantly.",
    technologies: ["Selenium", "Jenkins", "Java", "TestNG"],
    github: "#",
    demo: "#", 
    featured: true
  },
  {
    title: "QA Process Implementation",
    description: "Implemented QA processes across Scrum teams, including test quality metrics that reduced production defects and improved development workflows.",
    technologies: ["Agile", "Scrum", "Test Metrics", "Quality Assurance"],
    github: "#",
    demo: "#",
    featured: false
  }
];

const Work = () => (
  <SectionWrapper>
    <section
      id="work" 
      className="w-full max-w-5xl xl:max-w-6xl mx-auto px-6 mt-24 mb-32 scroll-mt-32"
    >
      <h2 className="text-2xl font-semibold mb-8 text-secondary">
        <span className="text-[#3de9da] font-mono">03.</span> Some Projects I've Built
      </h2>
      
      <div className="space-y-24">
        {projects.filter(project => project.featured).map((project, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
            <div className="lg:w-3/5 relative">
              <div className="bg-[#112240] rounded-lg p-8 border border-[#2bb3a6]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-[#3de9da] font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-xl font-bold text-secondary mb-4">{project.title}</h3>
                <p className="text-secondary/80 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-[#3de9da] font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="text-secondary hover:text-[#3de9da] transition-colors"
                    aria-label="View source code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.287-.012-1.243-.018-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.832 2.807 1.303 3.493.996.108-.775.418-1.303.762-1.603-2.665-.303-5.466-1.333-5.466-5.933 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.137 3 .405 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.803 5.628-5.475 5.922.43.372.823 1.102.823 2.222 0 1.605-.015 2.898-.015 3.293 0 .324.216.702.825.582C20.565 22.296 24 17.796 24 12.5c0-6.63-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href={project.demo}
                    className="text-secondary hover:text-[#3de9da] transition-colors"
                    aria-label="View live demo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="bg-[#2bb3a6]/10 rounded-lg h-64 border-2 border-[#2bb3a6]/30 flex items-center justify-center">
                <span className="text-[#3de9da] font-mono">Project Screenshot</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-lg font-semibold mb-6 text-secondary">Other Notable Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div key={index} className="bg-[#112240] rounded-lg p-6 border border-[#2bb3a6]/20 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-secondary mb-3">{project.title}</h4>
              <p className="text-secondary/80 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-[#3de9da] font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </SectionWrapper>
);

export default Work;
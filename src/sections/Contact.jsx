import SectionWrapper from "@components/SectionWrapper";
import React from "react";

const Contact = () => (
  <SectionWrapper>
  <section id="contact" className="flex flex-col items-center justify-center py-16 md:py-32 px-2 md:px-4 w-full">
    <h2 className="text-[#3de9da] font-mono text-base md:text-lg font-bold mb-2 md:mb-4 tracking-wide">04. What's Next?</h2>
    <h3 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4 md:mb-6 text-center">Get In Touch</h3>
    <p className="text-base md:text-lg text-secondary max-w-xs md:max-w-2xl text-center mb-6 md:mb-10">
      I’m actively looking for new opportunities where I can contribute, grow, and make an impact. Feel free to reach out — I’d be happy to connect and explore how I can help.
    </p>
    <a
      href="mailto:fazilvallooran@gmail.com"
      className="inline-block px-6 md:px-8 py-3 md:py-4 border-2 border-[#3de9da] rounded-md text-[#3de9da] font-mono text-base md:text-lg font-semibold transition-all duration-300 hover:bg-[#2bb3a6] hover:text-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3de9da]"
    >
      Say Hello
    </a>
  </section>
  </SectionWrapper>
);

export default Contact;

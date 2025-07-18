"use client";
import { motion } from "framer-motion";

const SectionWrapper = ({
  children,
  className = "",
  fullHeight = true,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`
      w-full px-6 py-20
      ${fullHeight ? "min-h-screen" : "min-h-fit"}
      ${className}
    `}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;

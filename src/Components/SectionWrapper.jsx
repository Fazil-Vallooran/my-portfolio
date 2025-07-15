const SectionWrapper = ({ children, className = "" }) => (
  <section className={`max-w-4xl w-full px-4 mb-24 ${className}`}>
    {children}
  </section>
);

export default SectionWrapper;

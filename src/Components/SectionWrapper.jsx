const SectionWrapper = ({ children, className = "" }) => (
  <section className="min-h-screen w-full px-6 py-20 border border-red-500">   
    {children}
  </section>
);

export default SectionWrapper;

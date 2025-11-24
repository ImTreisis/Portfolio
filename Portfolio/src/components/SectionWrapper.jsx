import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`min-h-screen py-20 px-6 relative ${className}`}
    >
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;



import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <motion.div
      className={`
        bg-cyber-card border border-cyber-card rounded-lg p-6
        backdrop-blur-sm
        ${hoverEffect ? 'hover:border-neon-purple hover:shadow-neon-purple' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;



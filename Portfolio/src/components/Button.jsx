import { motion } from 'framer-motion';

const Button = ({ children, variant = 'pink', onClick, type = 'button', className = '', ...props }) => {
  const variants = {
    pink: 'border-neon-pink text-neon-pink hover:bg-neon-pink/10 shadow-neon-pink',
    blue: 'border-neon-blue text-neon-blue hover:bg-neon-blue/10 shadow-neon-blue',
    purple: 'border-neon-purple text-neon-purple hover:bg-neon-purple/10 shadow-neon-purple',
    cyan: 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 shadow-neon-cyan',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 border-2 rounded-lg font-semibold
        transition-all duration-300
        ${variants[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px currentColor' }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;


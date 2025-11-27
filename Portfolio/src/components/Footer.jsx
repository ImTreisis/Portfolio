import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-card py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-4"
        >
          © {new Date().getFullYear()} Treisis Gakas. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-neon-cyan text-sm"
        >
          Built with <span className="text-neon-pink">React</span> +{' '}
          <span className="text-neon-purple">Node.js</span> +{' '}
          <span className="text-neon-cyan">TailwindCSS</span>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;


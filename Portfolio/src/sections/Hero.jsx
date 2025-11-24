import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Treisis+Gakas+CV.pdf';
    link.download = 'Treisis_Gakas_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SectionWrapper id="home" className="flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.div
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-neon-pink shadow-neon-pink"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '0 0 20px #ff00ff, 0 0 40px #ff00ff',
                '0 0 30px #ff00ff, 0 0 60px #ff00ff',
                '0 0 20px #ff00ff, 0 0 40px #ff00ff',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src="/Treisis.jpeg"
              alt="Treisis Gakas"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Animated Text */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-neon-cyan">Hello, I'm</span>
          <br />
          <motion.span
            className="text-neon-pink inline-block"
            animate={{
              textShadow: [
                '0 0 10px #ff00ff, 0 0 20px #ff00ff',
                '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff',
                '0 0 10px #ff00ff, 0 0 20px #ff00ff',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Treisis Gakas
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-2"
        >
          <span className="text-neon-purple">Full Stack Developer</span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
        
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="pink" onClick={scrollToContact}>
            Get In Touch
          </Button>
          <Button variant="cyan" onClick={downloadResume}>
            Download Resume
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-neon-cyan cursor-pointer"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Hero;


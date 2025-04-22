import { motion } from 'framer-motion';

const AboutPrimateSection = () => {
  return (
    <motion.section
      id="about-primate"
      style={{ backgroundColor: '#111', padding: '60px 0' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          style={{ color: 'orange' }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Primate
        </motion.h2>
        <motion.p
          style={{ color: 'white' }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Primate is all about helping you become the best version of yourself, focusing on fitness, health, and performance. Our mission is to provide tailored strategies that deliver real, measurable results.
        </motion.p>
        <motion.p
          style={{ color: 'white' }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our approach combines scientific insights with practical experience, offering you a comprehensive framework for success.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutPrimateSection;

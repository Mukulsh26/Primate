import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-black text-white py-16 px-4 overflow-hidden"
    >


      {/* Content */}
      <div className="absolute inset-0 z-0 mt-10">
        <img
          src="/images/BG-image.jpeg" 
          alt="CTA Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16 mt-10">
        <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-12"></div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-400">
          I only work with a handful of clients each month <br /> to give you my full focus
        </h2>
        <p className="text-lg mb-8">
          Let’s hop on a quick call, understand your goals, and build a plan around your lifestyle.
          No pressure, Just possibilities.
        </p>

        <motion.div
  initial={{ opacity: 0, scale: 0.5, y: 30 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{
    delay: 1,
    duration: 0.5,
    ease: 'easeOut',
    type: 'spring',
    stiffness: 300,
    damping: 15,
  }}
>
  <a
    href="https://calendly.com/teamprimate/consultation"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.button
      animate={{ y: [0, -9, 0] }}
      transition={{
        delay: 2.6,
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1.2,
        ease: 'easeInOut',
      }}
      className="mt-8 px-8 py-4 border-2 border-orange-500 bg-black text-orange-500 font-semibold rounded-full shadow-lg"
    >
      BOOK YOUR FREE STRATEGY CALL NOW
    </motion.button>
  </a>
</motion.div>

      </div>
    </motion.section>
  );
};

export default FinalCTA;

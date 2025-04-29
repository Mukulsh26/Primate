import React from 'react';
import { motion } from 'framer-motion';

const AboutPrimate = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d0d0d] text-[#ff6a00] py-24 px-4 text-center"
    >
      <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-12"></div>
      <h2 className="text-3xl sm:text-4xl font-bold font-peckham-press mb-8">About PRIMATE</h2>

      <div className="max-w-4xl mx-auto text-orange-300 text-lg space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          PRIMATE isn’t just a brand — it’s a mindset.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          It’s about returning to your most natural state: powerful, agile, lean, and in control.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Every strategy we use is built on principles of real human performance — drawn from sport, science, and nature.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We believe CEOs and high-performers don’t need more fluff. They need function. And they need it fast.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-semibold text-white"
        >
          PRIMATE is a symbol of high-functioning evolution. Less noise. More results.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutPrimate;

import React from 'react';
import { motion } from 'framer-motion';

const HighPerformerFramework = () => {
  const features = [
    {
      title: 'Custom Nutrition Plans',
      description: 'No templates. Everything is based on your schedule, your preferences, and what actually works for your body.',
    },
    {
      title: 'Efficient Training',
      description: '3 sessions/week, 45 minutes each. Designed to burn fat, build muscle, and boost energy.',
    },
    {
      title: 'Full Support',
      description: 'Weekly check-ins, progress tracking, 24/7 chat access. You’re never doing this alone.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black text-[#ff6a00] py-20 px-4"
    >
      <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-12"></div>
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Fitness That Works Like You Do —
        </h2>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          <span className="text-[#ff6a00]">Efficient, Strategic, Powerful</span>
        </h2>
        <p className="text-orange-400 max-w-3xl mx-auto text-lg">
          No fluff. No complexity. Just a system that fits you — and actually gets results.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0d0d0d] border border-[#ff6a00] p-8 rounded-2xl hover:bg-[#ff6a00] hover:text-black transition duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-orange-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HighPerformerFramework;

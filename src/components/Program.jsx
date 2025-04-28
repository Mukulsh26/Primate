import React from 'react';
import { motion } from 'framer-motion';

const ProgramBreakdown = () => {
  const features = [
    "Deep-Dive Consultation: We map out your goals, roadblocks, and lifestyle in detail.",
    "Custom Diet Plan: Based on your food preferences, work timings, and fitness goals.",
    "Smart Workout Programming: 3 weekly sessions that torch fat and build muscle without killing your calendar.",
    "Private Coaching Access: Weekly check-ins and daily support via chat. You’re never alone in this.",
    "Progress Tracking Dashboard: Track metrics like weight, energy, sleep, and more — all in one place.",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d0d0d] text-[#ff6a00] py-24 px-4 text-center"
    >
      <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-12"></div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">The High Performer Fitness Program</h2>
      <p className="max-w-3xl mx-auto text-orange-300 mb-12">
        Built for leaders. Backed by science. Customized for your life.
      </p>

      <div className="max-w-5xl mx-auto grid gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black border border-[#ff6a00] rounded-xl p-6 text-left hover:bg-[#ff6a00] hover:text-black transition duration-300"
          >
            <p className="text-lg">{feature}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-orange-300 mt-12 max-w-3xl mx-auto">
        This isn’t a generic plan. It’s your high-performance blueprint.
      </p>
    </motion.section>
  );
};

export default ProgramBreakdown;

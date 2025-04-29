import React from 'react';
import { motion } from 'framer-motion';

const ProgramBreakdown = () => {
  const features = [
    {
      title: 'Deep-Dive Consultation',
      description: 'We map out your goals, roadblocks, and lifestyle in detail.',
    },
    {
      title: 'Custom Diet Plan',
      description: 'Based on your food preferences, work timings, and fitness goals.',
    },
    {
      title: 'Smart Workout Programming',
      description: '3 weekly sessions that torch fat and build muscle without killing your calendar.',
    },
    {
      title: 'Private Coaching Access',
      description: 'Weekly check-ins and daily support via chat. You’re never alone in this.',
    },
    {
      title: 'Progress Tracking Dashboard',
      description: 'Track metrics like weight, energy, sleep, and more — all in one place.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black text-[#ff6a00] py-16 px-4"
    >
      <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-12"></div>
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">The High Performer Fitness Program</h2>
        <p className="text-orange-400 max-w-3xl mx-auto text-lg">
          Built for leaders. Backed by science. Customized for your life.
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
            className="bg-[#0d0d0d] border border-[#ff6a00] p-8 rounded-2xl hover:shadow-[0_0_20px_#fff] transition-all duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-orange-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-orange-300 mt-12 max-w-3xl mx-auto text-center">
        This isn’t a generic plan. It’s your high-performance blueprint.
      </p>
    </motion.section>
  );
};

export default ProgramBreakdown;

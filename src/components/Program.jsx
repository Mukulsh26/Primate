import React from 'react';
import { motion } from 'framer-motion';

const ProgramBreakdown = ({ openModal }) => {
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

      <div className="max-w-6xl mx-auto space-y-10">
        {/* First row with 3 boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.slice(0, 3).map((feature, index) => (
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

        {/* Second row with 2 centered boxes */}
        <div className="flex justify-center gap-10 flex-wrap">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.7, delay: (index + 3) * 0.2 }}
              viewport={{ once: true }}
              className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33%-20px)] bg-[#0d0d0d] border border-[#ff6a00] p-8 rounded-2xl hover:shadow-[0_0_20px_#fff] transition-all duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-orange-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>



      <p className="text-orange-300 mt-12 max-w-3xl mx-auto text-center">
        This isn’t a generic plan. It’s your high-performance blueprint.
      </p>
      <div className="text-center">
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
    <motion.button
      animate={{ y: [0, -9, 0] }}
      transition={{
        delay: 2.6,
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1.2,
        ease: 'easeInOut',
      }}
      className="mt-16 px-8 py-4 border-2 border-orange-500 bg-black text-orange-500 font-semibold rounded-full shadow-lg"  onClick={(e) => {
        e.preventDefault(); 
        openModal(); 
      }}
    >
      LET'S DO THIS
    </motion.button>
  </motion.div>
</div>
    </motion.section>
  );
};

export default ProgramBreakdown;

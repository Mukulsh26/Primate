import React from 'react';
import { motion } from 'framer-motion';

const framework = [
  {
    title: '1. Mindset Reset',
    description: 'Build the mental discipline to execute your fitness strategy like a CEO.',
  },
  {
    title: '2. Custom Training Plan',
    description: 'Tailored workouts that match your lifestyle, goals, and time capacity.',
  },
  {
    title: '3. High-Performance Nutrition',
    description: 'Fuel your body with simple, sustainable meals that get results.',
  },
  {
    title: '4. Accountability & Coaching',
    description: 'Weekly check-ins, real-time adjustments, and support that keeps you on track.',
  },
];

const FitnessFramework = () => {
  return (
    <section className="bg-[#0d0d0d] text-orange-500 py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="h-1 bg-orange-500 w-20 mx-auto mb-12"></div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          High Performer Fitness Framework
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {framework.map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black border border-orange-500 rounded-xl p-6 shadow-lg hover:scale-105 hover:bg-orange-500 text-orange-500 transition-all duration-300 group"
          >
            <h3 className="text-xl group-hover:text-black font-semibold mb-3">{item.title}</h3>
            <p className="text-orange-400 group-hover:text-black transition-colors duration-300">
              {item.description}
            </p>
          </motion.div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessFramework;

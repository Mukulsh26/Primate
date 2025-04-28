import React from 'react';
import { motion } from 'framer-motion';

const MyStory = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-black text-[#ff6a00] py-16 px-4 overflow-hidden"
    >
      {/* Blurred Background Logo */}
      <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-12"></div>
      <div className="absolute inset-0 flex justify-center items-center opacity-5">
        <img src="/images/Owner.jpeg" alt="Background Logo" className="w-[70%] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
            <img
              src="/images/Owner.jpeg" 
              alt="Vaibhav Story"
              className="rounded-2xl w-full max-w-sm mx-auto md:mx-0 bg-black p-4 border-4 border-gray-500"
            />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-orange-400">
            From Athlete to Coach for High Performers
          </h2>
          <div className="space-y-6 text-orange-400 text-lg leading-relaxed">
            <p>
              I’m Vaibhav — a professional-level tennis player turned performance coach.
            </p>
            <p>
              With half a decade of experience in fitness and nutrition, I help ambitious people reclaim their
              energy, build lean muscle, and finally feel in control of their health.
            </p>
            <p>
              From my engineering background to my years on the court, discipline and results have always
              defined me. Now, I bring that same science and structure to people like you — so your body stops slowing you down.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MyStory;

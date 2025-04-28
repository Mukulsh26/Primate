import React from 'react';
import { motion } from 'framer-motion';

const WhoIWorkWith = () => {
  const clients = [
    {
      title: 'CEOs Juggling Meetings',
      description:
        'You’re building something meaningful and want your body to reflect the discipline and mindset you bring to your business.',
    },
    {
      title: 'Founders Scaling Companies',
      description:
        'Your time is packed with deadlines and goals — but you still want to look and feel like a leader inside and out.',
    },
    {
      title: 'Professionals Seeking Strength',
      description:
        'You want to feel as strong, energized, and unstoppable as you are successful.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d0d0d] text-[#ff6a00] py-20 px-4 text-center relative overflow-hidden"
    >
      {/* Background Logo Blur */}
      <div className="absolute inset-0 flex justify-center items-center opacity-5">
        <img src="/images/bg-logo.png" alt="Background Logo" className="w-[70%] blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-12"></div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">You’re Building an Empire. Let’s Build the Body to Match.</h2>

        <p className="mb-12 text-lg text-orange-400">
          I work with high-achievers who don’t have time to waste:
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-black rounded-xl border border-[#ff6a00] hover:bg-[#ff6a00] hover:text-black transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{client.title}</h3>
              <p className="text-white">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhoIWorkWith;

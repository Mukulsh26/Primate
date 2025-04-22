import React from 'react';
import { motion } from 'framer-motion';

const WhoIWorkWith = () => {
  const clients = [
    {
      title: 'Ambitious Entrepreneurs',
      description:
        'You’re building something meaningful and want your body to reflect the discipline and mindset you bring to your business.',
    },
    {
      title: 'Busy Professionals',
      description:
        'Your time is limited but you’re committed to getting in the best shape of your life without sacrificing career or family.',
    },
    {
      title: 'High Performers',
      description:
        'You’re already operating at a high level, but want the energy, physique, and health to match your output.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d0d0d] text-[#ff6a00] pb-24 px-4 text-center"
    >
      <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-12"></div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Who I Work With</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-black rounded-xl border border-[#ff6a00] hover:bg-[#ff6a00] hover:text-black transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{client.title}</h3>
            <p>{client.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhoIWorkWith;

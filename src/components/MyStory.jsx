import React from 'react';
import { motion } from 'framer-motion';

const MyStory = () => {
  return (
    <section className="bg-black text-orange-500 py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <img
            src="/images/bg-logo.png"
            alt="My Story"
            className="rounded-xl w-full max-w-sm mx-auto md:mx-0"
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Story</h2>
          <p className="mb-4 text-lg leading-relaxed text-orange-400">
            I wasn’t always in shape. In fact, just a few years ago, I was stuck in a cycle of bad habits, low energy, and poor health.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-orange-400">
            Through relentless effort, mentorship, and a systems-based approach to fitness — I transformed not just my body, but my mindset and life.
          </p>
          <p className="text-lg leading-relaxed text-orange-400">
            Now, I help others unlock that same transformation — especially high performers who demand more from themselves in every area of life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyStory;

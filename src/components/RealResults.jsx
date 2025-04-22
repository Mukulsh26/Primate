import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    quote:
      'This program completely changed my life. I feel stronger, more confident, and more focused than ever before.',
    image: '/images/user1.jpg',
  },
  {
    name: 'Sarah Lee',
    quote:
      'The systems-based approach is next-level. I saw visible results in just a few weeks!',
    image: '/images/user2.jpg',
  },
  {
    name: 'Mark Johnson',
    quote:
      'I’ve never had this much energy while managing work and training. Best decision I made this year.',
    image: '/images/user3.jpg',
  },
];

const RealResults = () => {
  return (
    <section className="bg-black text-orange-500 py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Real Results</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0d0d0d] p-6 rounded-xl border border-orange-500 shadow-lg hover:scale-105 hover:shadow-orange-500/40 transition-transform duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-orange-500"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-orange-400 text-sm">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealResults;

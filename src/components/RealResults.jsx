import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    image: '/images/Testimonial1.jpeg',
    quote: 'Dropped 10kg in 12 weeks — and still closed the biggest deal of my life.',
    name: 'Arjun',
    // title: 'SaaS Founder',
  },
  {
    image: '/images/Testimonial2.jpeg',
    quote: 'The most energy I’ve had in years. I feel like I’m 10 years younger.',
    name: 'Raghav',
    // title: 'VC Executive',
  },
  {
    image: '/images/Testimonial3.jpeg',
    quote: 'Didn’t think I could get in shape without sacrificing work. I was wrong.',
    name: 'John',
    // title: 'Fintech CEO',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="h-1 bg-[#ff6a00] w-20 mx-auto mb-6"></div>
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-6">
          Testimonials
        </h2>
      </div>

      <div className="relative w-full overflow-hidden max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-6"
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="rounded-xl border-2 border-[#ff6a00] w-80 h-80 object-cover" 
            />
            <p className="italic max-w-md text-center px-4">
              "{testimonials[current].quote}"
            </p>
            <div className="text-orange-400 font-semibold">{testimonials[current].name}</div>
            <div className="text-sm">{testimonials[current].title}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;

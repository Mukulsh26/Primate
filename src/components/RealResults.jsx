import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    image: '/images/Testimonial3.jpeg',
    quote: 'Working with Vaibhav changed the game for me. I’m not a fitness freak, but he made it simple and doable. I’ve dropped weight, gained strength, and feel way more in control of my health without flipping my life upside down.',
    name: 'Ben, 35',
    title: 'Product Manager (San Diego, CA)',
  },
  {
    image: '/images/Testimonial1.jpeg',
    quote: 'Honestly, I wasn’t expecting this to work so well. I’ve got a desk job, live with family, and love my food. But Vaibhav made it work for me. No crazy restrictions, just smart coaching. I’m leaner, more confident, and lifting heavier than ever',
    name: 'Arjun, 30',
    title: 'Software Engineer (Bangalore, India)',
  },
  {
    image: '/images/Testimonial2.jpeg',
    quote: 'I sit in meetings all day, travel often, and used to think I had no time to train. Vaibhav didn’t just give me a plan—he helped me stick to it. I’m down 12 pounds and feel sharper than I’ve felt in years',
    name: 'Ryan, 42',
    title: 'Startup COO (Bristol, UK)',
  },
  {
    image: '/images/Testimonial4.jpeg',
    quote: 'I’ve worked with a couple trainers before, but Vaibhav is on a different level. Everything with Primate is efficient, no fluff, and actually built around my life. Down 15 pounds, sleeping better, and I’m sharper at work too.',
    name: 'Jake, 36',
    title: 'Tech Founder (Austin, TX)',
  },
  {
    image: '/images/Testimonial5.jpeg',
    quote: 'Didn’t think I’d ever enjoy training again, but here I am. Primate’s approach is simple, effective, and actually sustainable. Vaibhav kept me accountable without being annoying—and now I’ve got a body I’m proud of.',
    name: 'Matt, 31',
    title: 'Sales Director (Chicago, IL)',
  },
  {
    image: '/images/Testimonial6.jpeg',
    quote: 'Honestly? I was burned out and just wanted to feel good in my own skin again. Vaibhav worked around my schedule, my injuries, and still got me real results. More energy, fewer inches, and no crash dieting.',
    name: 'Laura, 45',
    title: 'Corporate Attorney & Mom (New York, NY)',
  },
  {
    image: '/images/Testimonial7.jpeg',
    quote: 'Not your average fitness coach. Vaibhav’s chill but focused, and the plan actually made sense. I leaned out, built muscle, and kept eating the stuff I like. No crazy rules. Just results.',
    name: 'Chris, 28',
    title: 'Software Engineer (San Francisco, CA)',
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
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-6">Testimonials</h2>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-4"
            >
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="rounded-xl border-2 border-[#ff6a00] w-96 h-96 object-cover"
              />
              <div className="max-w-lg md:text-left text-center mt-10">
                <p className="italic mb-4 text-lg leading-relaxed">
                  "{testimonials[current].quote}"
                </p>
                <div className="text-orange-400 font-semibold text-lg">{testimonials[current].name}</div>
                <div className="text-sm text-gray-300">{testimonials[current].title}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

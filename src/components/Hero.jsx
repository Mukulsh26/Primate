import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ openModal }) => {
  return (
    <section className="bg-black text-orange-500 min-h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden pt-24">
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/images/bg-logo.png"
          alt="Background Logo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-full opacity-[0.3] pointer-events-none object-contain"
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8 animate-fade-in-down">
          You just came a step closer<br />
          to being in the <span className='text-orange-400'>Best Shape</span> of your life
        </h1>

        <p className="text-lg md:text-xl text-white mb-8 animate-fade-in-up">
          In Less Than 12 Weeks — With Our Science-Backed Online Fitness Program
        </p>

        <p className="text-md md:text-lg text-white mb-10 animate-fade-in-up delay-200">
          No more burnout. No more guesswork. Just a tailored plan that fits your calendar — and delivers real results.
        </p>

        <p className="text-md md:text-lg text-white mb-10 animate-fade-in-up delay-400">
          Let’s make your health your best business decision yet.
        </p>

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
            className="mt-6 px-8 py-4 border-2 border-orange-500 bg-black text-orange-500 font-semibold rounded-full shadow-lg"  onClick={(e) => {
              e.preventDefault(); 
              openModal(); 
            }}
          > 
            LET'S CHAT OVER A VIRTUAL COFFEE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

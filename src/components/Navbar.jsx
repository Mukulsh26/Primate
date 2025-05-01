// src/components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Navbar = ({ openModal }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d0d0d] flex items-center justify-between px-6 py-4 fixed w-full z-50 shadow-md backdrop-blur-md"
    >
      <div className="flex items-center">
        <div className="h-12 w-12 sm:h-16 sm:w-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374 386" fill="none">
            <path d="M202.474 108.776L247.408 122.276L327.058 273.776H230.615L177.058 214.776L202.474 108.776Z" fill="#DEDEDE" />
            <path d="M25.0576 197.776L59.0576 163.776L110.058 214.776L94.5576 273.776H25.0576V197.776Z" fill="#DEDEDE" />
            <path d="M260.226 52.7761L296.251 15.8071L359.443 75.1206L359.947 114.117L317.507 157.67L260.226 52.7761Z" fill="white" />
            <path d="M102.967 127.186L158.058 63.776L251.058 41.6859L327.558 181.776L327.558 273.776L251.058 273.776L177.013 84.4359L214.035 179.106L135.374 217.106L145.558 273.776L68.5578 273.776L30.5577 195.276L43.5576 153.776L102.967 127.186Z" fill="white" />
            <path d="M103.058 127.276L158.058 63.776L214.058 179.276L135.058 216.776L103.058 127.276Z" fill="#EDEDED" />
            <path d="M337.606 77.0335L351.909 85.5L351.909 87.0778L336.053 82.8291L337.606 77.0335Z" fill="#181818" />
          </svg>
        </div>
      </div>

      <div className="flex flex-grow justify-center">
        <div className="text-white text-3xl md:text-3xl font-bold font-peckham-press hidden sm:block">
          PRIMATE
        </div>
      </div>

      <a
        href="#lets-chat"
        className="flex items-center gap-2 text-black font-semibold rounded-full bg-gradient-to-br from-[#ff6a00] to-[#ff8800] hover:from-[#ff8800] hover:to-[#ff6a00] px-5 py-2 shadow-lg transition-all duration-300 hover:scale-105"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          openModal(); // Open modal when the button is clicked
        }}
      >
        <MessageCircle className="w-5 h-5" />
        <span>Let’s Chat</span>
      </a>
    </motion.nav>
  );
};

export default Navbar;

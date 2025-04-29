import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d0d0d] flex items-center justify-between px-6 py-4 fixed w-full z-50 shadow-md backdrop-blur-md"
    >
      {/* Logo Image and PRIMATE Text */}
      <div className="flex items-center">
        <img 
          src="/images/logo.png" 
          alt="PRIMATE Logo"
          className="h-16 w-auto"
        />
        <div className="ml-4 text-white text-2xl font-bold font-peckham-press">
          PRIMATE
        </div>
      </div>

      <a
        href="#lets-chat"
        className="flex items-center gap-2 text-black font-semibold rounded-full bg-gradient-to-br from-[#ff6a00] to-[#ff8800] hover:from-[#ff8800] hover:to-[#ff6a00] px-5 py-2 shadow-lg transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Let’s Chat</span>
      </a>
    </motion.nav>
  );
};

export default Navbar;

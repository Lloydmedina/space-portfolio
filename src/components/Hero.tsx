"use client";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/FFFFFF/png?text=Space+Background')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-2xl mb-8">I build amazing things for the web.</p>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

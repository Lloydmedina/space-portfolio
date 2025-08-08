"use client";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I am a passionate and creative web developer with a love for building beautiful and functional websites. I have experience with a variety of technologies, including React, Next.js, and Tailwind CSS. I am always eager to learn new things and take on new challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

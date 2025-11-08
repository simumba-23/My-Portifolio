import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 text-white px-6 text-center overflow-hidden">
      
      {/* Animated background circles */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-600 rounded-full opacity-20 top-20 left-10 animate-pulse-slow"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, duration: 8, yoyo: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-15 bottom-10 right-20 animate-pulse-slow"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, duration: 10, yoyo: Infinity }}
      ></motion.div>

      {/* Main Content */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Eng.Emansi Simumba
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-6 text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Full-stack Developer | Mobile Developer | Django | React & React Native
      </motion.p>
      <span >
        <motion.a
        href="/Emansi Simumba resume.pdf"
        download="Engneer_Resume.pdf"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 mx-3 rounded-md font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Download Resume
      </motion.a>
      <motion.a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        View Projects
      </motion.a>
 

      </span>
        </section>
  );
};

export default Hero;

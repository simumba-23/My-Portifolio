import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Python", "Django", "React", "React Native",
  "PostgreSQL", "Firebase", "REST APIs", "Docker", "Git"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          💻 Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-lg font-medium shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

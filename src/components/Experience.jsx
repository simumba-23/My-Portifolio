import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelancing jobs",
    duration: "October 2023 - Present",
    description:
      "Developed web and mobile applications using Django, React, and React Native. Built REST APIs and integrated PostgreSQL and Firebase for scalable solutions.",
  },
  {
    role: "Field Student as Intern Developer",
    company: "Vlirous Mzumbe University",
    duration: "July 2023 - September 2023",
    description:
      "Collaborated with a team to gather requirements and prepare technical documentation for the Mu-Updates tool — a platform that notifies students about university events.",
  },
  {
    role: "Field Student as Intern Developer",
    company: "Vlirous Mzumbe University",
    duration: "August 2022 - October 2022",
    description:
      "Assisted in developing a Field Management System using PHP, HTML, CSS, and Bootstrap, while maintaining internal tools. Gained hands-on experience with Agile workflows and version control using Git, and received training on preparing and producing effective podcasts.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-800 text-gray-100 px-6"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💼 Experience
        </motion.h2>
        <p className="mt-4 text-gray-300 text-lg">
          Here’s a summary of my professional experience and roles.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col space-y-8 relative">
        {/* Vertical Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center md:justify-start relative md:w-1/2 ${
              index % 2 === 0 ? "md:left-0 md:pr-10" : "md:ml-auto md:pl-10"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg relative z-10 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-cyan-400 font-medium mb-1">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

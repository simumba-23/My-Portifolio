import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile-image.png"

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-gray-100 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <motion.div
          className="w-64  rounded-f overflow- flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImage} // replace with your profile image
            alt="Engneer Emansi Simumba"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            Hi! I’m Engneer Emansi Simumba, a passionate full-stack developer and mobile app developer with expertise in Django, React, and React Native. I enjoy building modern web applications and mobile solutions that solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I am experienced in working with PostgreSQL, REST APIs, Firebase, and Docker, and I continuously strive to learn new technologies to stay ahead in the fast-changing tech world. I aim to deliver high-quality, maintainable, and performant code.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md font-semibold text-white hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

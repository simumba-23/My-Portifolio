import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react"; // install lucide-react if not already

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white relative"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          📞 Contact Me
        </motion.h2>

        {/* Contact Info with icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg"
        >
          <a
            href="mailto:simumbaemansi20@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          >
            <Mail size={20} /> simumbaemansi20@gmail.com
          </a>

          <a
            href="https://github.com/simumba-23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          >
            <Github size={20} /> github.com/simumba-23
          </a>

          <a
            href="https://www.linkedin.com/in/emansi-simumba-3189a628a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin size={20} /> linkedin.com/in/simumba
          </a>
        </motion.div>

        {/* Call-to-action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="mailto:simumbaemansi20@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-400/50 animate-pulse-slow"
          >
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

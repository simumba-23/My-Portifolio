import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Startup XYZ",
    feedback:
      "Engneer is an outstanding developer. His work on our web and mobile applications was flawless and delivered ahead of schedule.",
  },
  {
    name: "Jane Smith",
    role: "Product Manager, Innovatech Solutions",
    feedback:
      "Working with Engneer was a pleasure. He consistently demonstrated expertise in Django and React, and his communication was excellent.",
  },
  {
    name: "Alex Johnson",
    role: "CTO, 20X Technologies",
    feedback:
      "Engneer brings creativity and technical skill to every project. His dedication and coding quality are exceptional.",
  },
];

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="py-20 bg-gray-900 text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🌟 Testimonials
        </motion.h2>
        <p className="text-gray-300 text-lg">
          Hear what clients and colleagues have to say about me.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((testi, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <p className="text-gray-300 italic mb-4">"{testi.feedback}"</p>
            <h3 className="text-white font-semibold">{testi.name}</h3>
            <p className="text-cyan-400 text-sm">{testi.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

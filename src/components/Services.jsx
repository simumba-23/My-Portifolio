import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Database, Layers,Search } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-cyan-400 mb-4" />,
    title: "Full-Stack Development",
    description:
      "I build robust and scalable web applications using Django, React, and REST APIs with clean and efficient code.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-400 mb-4" />,
    title: "Mobile App Development",
    description:
      "I develop interactive and high-performing mobile apps using React Native for both Android and iOS platforms.",
  },
  {
    icon: <Database className="w-10 h-10 text-emerald-400 mb-4" />,
    title: "Database Design & Management",
    description:
      "I design optimized databases using PostgreSQL, MySQL, and SQLite for secure and efficient data handling.",
  },
  {
    icon: <Layers className="w-10 h-10 text-purple-400 mb-4" />,
    title: "API Integration & Automation",
    description:
      "I integrate third-party APIs and automate workflows to connect systems seamlessly and improve performance.",
  },
  {
    icon: <Search className="w-10 h-10 text-yellow-400 mb-4" />,
    title: "SEO Optimization",
    description:
      "I optimize websites for search engines through performance tuning, metadata, structured content, and keyword strategy to boost visibility and ranking.",
  },
  {
    icon: <Globe className="w-10 h-10 text-orange-400 mb-4" />,
    title: "Web Deployment & Hosting",
    description:
      "I deploy web applications on platforms like Render, Netlify, and Vercel with continuous integration pipelines.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-950 text-white px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💼 My Services
        </motion.h2>
        <p className="text-gray-300 text-lg">
          I provide a range of professional software engineering services
          tailored to your needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-cyan-500/40 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

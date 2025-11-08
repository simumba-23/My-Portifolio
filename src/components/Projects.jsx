import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Example project data
const projectData = [
  {
    title: "University Super App",
    desc: "Mobile app for student accommodation, food ordering & marketplace (React Native + Django APIs).",
    github: "https://github.com/emaneo/university-super-app",
    live: "",
  },
  {
    title: "Waste Notification Management",
    desc: "Web app for waste reporting & role-based dashboards (React + Django templates).",
    github: "https://github.com/simumba-23/waste-collection-management.git",
    live: "https://waste-collection-management-k3sf.onrender.com",
  },
  {
    title: "Digital Tool Sharing Platform",
    desc: "Mobile app for lending/borrowing tools & skills (React Native + DRF).",
    github: "https://github.com/simumba-23/Finalyear-mobile-frontend.git",
    live: "https://frontearn.onrender.com",
  },
  {
    title: "Contribution & Pledge App",
    desc: "Web & mobile app for church/community contributions (React + Django REST).",
    github: "https://github.com/emaneo/contribution-pledge",
    live: "",
  },
  {
    title: "Poultry, Concrete & Truck Logistics",
    desc: "Logistics management app with inventory & delivery scheduling (React Native + Django).",
    github: "https://github.com/emaneo/logistics-app",
    live: "",
  },
  {
    title: "Pharmacy Sales & Management",
    desc: "Web app with batch-wise sales, inventory, and reports (Django templates + React).",
    github: "https://github.com/simumba-23/Pharmacy-Inventory-and-Expenses-Tracking-System.git",
    live: "https://pharmacy-inventory-and-expenses-tracking.onrender.com",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gray-50  dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12">
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12 pt-4 ">🚀 My Projects</h1>

      {/* Project Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projectData.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col justify-between"
          >
            {/* Project Info */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{proj.desc}</p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

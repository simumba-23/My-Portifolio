import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Briefcase } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white relative"
    >
      {/* Footer Section - 3 Columns */}
      <footer className="mt-20 bg-slate-950/40 py-12 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-gray-300">
          {/* Column 1 - Collaboration Info */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              I'm always interested in new opportunities, exciting projects, and
              potential collaborations. Whether you're an employer looking for
              talent, a fellow developer, or someone with an innovative idea —
              I'd love to hear from you!
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} /> simumbaemansi20@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> Dar es Salaam, Tanzania
              </p>
              <p className="flex items-center gap-2">
                <Briefcase size={16} /> Available for new opportunities
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">
              What I’m Looking For
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Full-time development opportunities</li>
              <li>• Freelance projects & consulting</li>
              <li>• Open-source collaborations</li>
              <li>• Mentoring & knowledge sharing</li>
              <li>• Tech community involvement</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {["About","Services", "Experience", "Projects", "Skills","Testimonial"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <div className="max-w-4xl mx-auto px-6 text-center">
        
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
            <Mail size={20} /> Email
          </a>

          <a
            href="https://github.com/simumba-23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          >
            <Github size={20} /> Github
          </a>

          <a
            href="https://www.linkedin.com/in/emansi-simumba-3189a628a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin size={20} />Linkedin
          </a>
        </motion.div>
      </div>

          © {new Date().getFullYear()} Emansi Simumba. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Contact;

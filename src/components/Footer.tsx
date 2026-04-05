"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/YashRohan07", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yashrohan07/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:yashrohan22@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Yash Rohan</h3>
            <p className="text-slate-400 mb-4">
              Full Stack Software Developer specializing in ASP.NET Core,
              Angular, and SQL Server.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-slate-400">
              <p>yashrohan22@gmail.com</p>
              <p>+880 1738360521</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">
            © 2024 Yash Rohan. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg shadow-blue-500/30"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

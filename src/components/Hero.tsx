"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Code, Server } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/YashRohan07",
      color: "text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yashrohan07/",
      color: "text-blue-700",
    },
    { icon: Mail, href: "mailto:yashrohan22@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl shadow-blue-500/20">
                <Image
                  src="/profile.jpg"
                  alt="Yash Rohan"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-800 text-white px-4 py-2 rounded-full shadow-lg shadow-blue-900/30">
                <span className="text-sm font-semibold">
                  Software Developer @ Devexa IT Ltd
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-blue-400 font-medium mb-4 tracking-wider uppercase text-sm">
                Assalamu Alaikum
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hi, I'm <span className="text-blue-400">Yash Rohan</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-400 mb-6">
                Full Stack Software Developer
                <br />
                <span className="text-blue-400">
                  ASP.NET Core | Angular | SQL Server
                </span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mb-8">
                I build secure, maintainable business applications with clean
                architecture, optimized database performance, and
                production-ready APIs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8"
            >
              <a
                href="/resume.pdf"
                download
                className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/30"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="border-2 border-slate-600 text-slate-300 px-8 py-3 rounded-full hover:bg-slate-800 hover:border-slate-500 transition-colors flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center md:justify-start gap-4"
            >
              <a
                href="https://github.com/YashRohan07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-600 transition-all"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yashrohan07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:yashrohan22@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-600 transition-all"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

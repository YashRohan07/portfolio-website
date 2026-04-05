"use client";

import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Layers,
  Award,
  GraduationCap,
  Building,
  Users,
  Zap,
} from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "blue",
      skills: ["Angular", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "purple",
      skills: [
        "ASP.NET Core",
        "Entity Framework Core",
        "RESTful API Design",
        "Middleware",
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "green",
      skills: [
        "SQL Server (Indexing, Stored Procedures)",
        "Query Optimization",
        "Database Design",
      ],
    },
    {
      title: "Architecture",
      icon: Layers,
      color: "orange",
      skills: [
        "Clean Architecture",
        "SOLID Principles",
        "Design Patterns",
        "Dependency Injection",
        "Layered Architecture",
      ],
    },
  ];
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-blue-400 font-medium mb-2 tracking-wider uppercase text-sm">
            About Me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Bio & Skills */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                Backend-Focused Full Stack Development
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Full Stack Developer specializing in ASP.NET Core | Angular |
                SQL Server. I build APIs, design maintainable architectures, and
                optimize database performance for real-world business
                applications.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I've worked across startup, company, and research environments,
                contributing to system design, API development, and performance
                optimization. I focus on writing scalable, testable code using
                clean architecture and SOLID principles.
              </p>
            </motion.div>

            {/* Skill Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <category.icon
                      className={`h-5 w-5 text-${category.color}-400`}
                    />
                    <h4 className="font-semibold text-white">
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Experience Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-purple-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">
                    BSc in Computer Science and Engineering
                  </h4>
                  <p className="text-sm text-slate-400">
                    American International University-Bangladesh • 2022-2025
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Major: Software Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  Key Highlights
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">
                      Current Role
                    </h4>
                    <p className="text-sm text-slate-400">
                      Software Developer at Devexa IT Ltd, developing web
                      applications using ASP.NET Core and Angular, with emphasis
                      on API design and performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">
                      Leadership
                    </h4>
                    <p className="text-sm text-slate-400">
                      Team Lead at NeuroFlight Lab, led development efforts in a
                      startup environment, contributing to system design
                      decisions and improving code quality through reviews.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">
                      Impact
                    </h4>
                    <p className="text-sm text-slate-400">
                      Built production-oriented systems with focus on
                      reliability, efficient data handling, and maintainable
                      architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

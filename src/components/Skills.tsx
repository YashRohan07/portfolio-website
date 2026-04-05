"use client";

import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Layers,
  FileCode,
  GitBranch,
  Workflow,
  Shield,
  Zap,
  Terminal,
} from "lucide-react";
import { TechIcons } from "./TechIcons";

const Skills = () => {
  const coreExpertise = [
    {
      title: "Backend Engineering",
      details: "ASP.NET Core, Entity Framework Core, RESTful API Design",
      icon: Server,
      color: "blue",
    },
    {
      title: "Database Performance Optimization",
      details: "SQL Server, Query Optimization, Indexing, Stored Procedures",
      icon: Database,
      color: "green",
    },
    {
      title: "Scalable System Design",
      details: "Clean Architecture, SOLID Principles, Dependency Injection",
      icon: Layers,
      color: "purple",
    },
    {
      title: "API Security & Access Control",
      details: "JWT Authentication, Role-Based Access Control (RBAC)",
      icon: Shield,
      color: "orange",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      skills: [
        { name: "Angular", Icon: TechIcons.Angular },
        { name: "JavaScript", Icon: TechIcons.JavaScript },
        { name: "HTML5", Icon: TechIcons.HTML5 },
        { name: "CSS3", Icon: TechIcons.CSS3 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "ASP.NET Core", Icon: TechIcons.DotNet },
        { name: "ASP.NET MVC", Icon: TechIcons.DotNet },
        { name: "Laravel", Icon: TechIcons.Laravel },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "SQL Server", Icon: TechIcons.SQLServer },
        { name: "MySQL", Icon: TechIcons.MySQL },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "C#", Icon: TechIcons.CSharp },
        { name: "Python", Icon: TechIcons.Python },
        { name: "C++", Icon: TechIcons.Cpp },
        { name: "PHP", Icon: TechIcons.PHP },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", Icon: TechIcons.Git },
        { name: "GitHub", Icon: TechIcons.GitHub },
        { name: "Postman", Icon: TechIcons.Postman },
      ],
    },
  ];

  const engineeringPractices = [
    "Design Patterns",
    "Maintainable Architecture",
    "Code Review",
    "Debugging",
    "Agile Development",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 border-y border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 font-medium mb-2 tracking-wider uppercase text-sm">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Technologies and tools I use to build scalable, production-ready
            applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Core Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Core Expertise</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {coreExpertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 bg-${item.color}-500/10 rounded-lg border border-${item.color}-500/20`}
                    >
                      <item.icon className={`h-5 w-5 text-${item.color}-400`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400">{item.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Terminal className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {techStack.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-5 rounded-xl border border-slate-700"
                >
                  <h4 className="font-semibold text-white mb-3">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-sm text-slate-300 bg-slate-900 px-2 py-1 rounded flex items-center gap-1 border border-slate-700"
                      >
                        <skill.Icon />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Engineering Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <Workflow className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Engineering Practices
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {engineeringPractices.map((practice, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700"
                >
                  {practice}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

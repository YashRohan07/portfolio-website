"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Code,
  Server,
  Database,
  Layers,
  Zap,
  Shield,
  CheckCircle,
  Award,
  TrendingUp,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Devexa IT Ltd",
      location: "Dhaka, Bangladesh",
      period: "Oct 2025 - Present",
      type: "Full-time",
      icon: Code,
      color: "blue",
      description: [
        "Develop full-stack web applications using ASP.NET Core and Angular, ensuring scalable architecture and coding standards.",
        "Design and implement RESTful APIs with proper routing, middleware, and secure authentication and authorization (JWT, RBAC).",
        "Build and optimize scalable systems using Entity Framework Core and SQL Server, focusing on performance and efficient data access.",
        "Integrate frontend interfaces with backend services, improving data flow, responsiveness, and seamless user experience.",
        "Debug and resolve issues, conduct code reviews, and collaborate in Agile teams to deliver high-quality, scalable solutions.",
      ],
      technologies: [
        { name: "ASP.NET Core", icon: Server },
        { name: "Angular", icon: Code },
        { name: "SQL Server", icon: Database },
        { name: "EF Core", icon: Layers },
        { name: "JWT", icon: Shield },
        { name: "RBAC", icon: Shield },
      ],
    },
    {
      title: "Software Developer (Team Lead)",
      company: "NeuroFlight Lab (Startup)",
      location: "Dhaka, Bangladesh",
      period: "Sep 2025 - Present",
      type: "Full-time",
      icon: Award,
      color: "purple",
      description: [
        "Lead system design and development using ASP.NET Core and Laravel, building scalable and robust architecture.",
        "Design and maintain scalable API endpoints with structured request handling and secure, high-performance data processing.",
        "Improve backend efficiency through optimized data access patterns and scalable service design.",
        "Apply SOLID principles and design patterns to build clean, reusable, and production-ready codebases.",
        "Provide technical guidance, conduct code reviews, and resolve complex system issues to ensure reliability and high code quality.",
      ],
      technologies: [
        { name: "ASP.NET Core", icon: Server },
        { name: "Laravel", icon: Code },
        { name: "PHP", icon: Code },
        { name: "SQL Server", icon: Database },
        { name: "Clean Arch", icon: Layers },
        { name: "SOLID", icon: Shield },
      ],
    },
    {
      title: "Research Engineer (Intern)",
      company: "Applied Intelligence and Informatics Lab",
      location: "Nottingham, United Kingdom",
      period: "Jul 2025 - Sep 2025",
      type: "Contract",
      icon: TrendingUp,
      color: "green",
      description: [
        "Conducted R&D on new tools and technologies while designing, implementing, and evaluating machine learning models and algorithms.",
        "Reviewed and analyzed scientific literature to support model development and research decision-making.",
        "Developed and implemented research solutions using structured experimentation and evaluation methodologies.",
        "Evaluated model performance using appropriate metrics and contributed to improving system accuracy and reliability.",
        "Collaborated with distributed research teams, participated in technical discussions, and documented research progress and findings.",
      ],
      technologies: [
        { name: "Machine Learning", icon: Zap },
        { name: "Python", icon: Code },
        { name: "Research", icon: TrendingUp },
        { name: "Data Analysis", icon: Database },
        { name: "Documentation", icon: Layers },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 font-medium mb-2 tracking-wider uppercase text-sm">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Building scalable systems and leading development teams in
            production environments.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-xl border border-slate-800 p-6 md:p-8 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 bg-${exp.color}-500/10 rounded-lg border border-${exp.color}-500/20`}
                    >
                      <exp.icon className={`h-5 w-5 text-${exp.color}-400`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-slate-300">
                    {exp.company}
                  </h4>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  Key Responsibilities:
                </h5>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-slate-400"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-${exp.color}-400`}
                      ></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-400" />
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full flex items-center gap-1 bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      <tech.icon className="h-3 w-3" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

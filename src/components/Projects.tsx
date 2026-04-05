"use client";

import { motion } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Users,
  Building,
  GraduationCap,
  Package,
  Shield,
  Database,
  Code,
  Server,
  Layers,
  Zap,
  FileText,
  Box,
  Lock,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "User Gateway",
      icon: Users,
      color: "blue",
      category: "Web API",
      year: "2024",
      description:
        "Developed a Web API-based user management system using ASP.NET Core, Entity Framework Core, and SQL Server with CRUD operations, search, filtering, and sorting. Implemented RESTful APIs with proper routing, middleware, and JWT-based secure access control. Designed clean and maintainable architecture using SOLID principles to ensure scalability and reusability.",
      tech: ["ASP.NET Core", "EF Core", "SQL Server", "JWT"],
      github: "https://github.com/YashRohan07/User-Gateway",
    },
    {
      title: "Account System",
      icon: FileText,
      color: "purple",
      category: "Financial",
      year: "2024",
      description:
        "Built a secure accounting system using ASP.NET Core and SQL Server to manage chart of accounts and voucher transactions with structured workflows. Designed secure API endpoints with role-based access control (RBAC) to ensure controlled data access. Developed reporting-ready features including CSV export and optimized database queries for performance and reliability.",
      tech: ["ASP.NET Core", "SQL Server", "RBAC", "CSV"],
      github: "https://github.com/YashRohan07/MiniAccountSystem",
    },
    {
      title: "Campus Pilot",
      icon: GraduationCap,
      color: "emerald",
      category: "Education",
      year: "2024",
      description:
        "Developed a university management system using C# to handle courses, class schedules, grades, and assignments within a unified platform. Designed modular components and structured data handling to support academic resource management and improve system maintainability. Implemented structured workflows to streamline daily campus operations and data management.",
      tech: ["C#", ".NET", "SQL Server", "WinForms"],
      github: "https://github.com/YashRohan07/Campus-Pilot",
    },
    {
      title: "Employee Tracker",
      icon: Building,
      color: "orange",
      category: "HR System",
      year: "2024",
      description:
        "Developed an employee management system using Laravel with secure authentication, CRUD operations, and advanced search and filtering features. Built and integrated backend API services to support system integration and reliable data access. Applied clean architecture principles to ensure scalable and maintainable system design.",
      tech: ["Laravel", "PHP", "MySQL", "REST API"],
      github: "https://github.com/YashRohan07/Employee-Tracker",
    },
    {
      title: "Inventory System",
      icon: Package,
      color: "rose",
      category: "Inventory",
      year: "2024",
      description:
        "Built an inventory management system using PHP following SOLID principles and Clean Architecture. Implemented secure access control using authentication and role-based permissions (RBAC) with middleware for secure system operations. Designed modules for product, supplier, and user management with efficient inventory tracking and data handling.",
      tech: ["PHP", "Clean Arch", "RBAC", "SOLID"],
      github: "https://github.com/YashRohan07/Inventory-Management-System",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 font-medium mb-2 tracking-wider uppercase text-sm">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Header with Icon */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${project.color}-500/10`}>
                    <project.icon
                      className={`h-6 w-6 text-${project.color}-400`}
                    />
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Github className="h-5 w-5" />
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

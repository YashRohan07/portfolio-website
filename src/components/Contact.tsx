"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Globe,
  User,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashrohan22@gmail.com",
      href: "mailto:yashrohan22@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1738360521",
      href: "tel:+8801738360521",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/YashRohan07",
      color: "text-slate-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yashrohan07/",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 font-medium mb-2 tracking-wider uppercase text-sm">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-400" />
              Let's Connect
            </h3>
            <p className="text-slate-400 mb-8">
              I'm open to discussing web development opportunities, creative
              projects, or potential collaborations. Feel free to contact me
              through any of the following methods:
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${info.bgColor} rounded-lg border border-slate-700 flex items-center justify-center`}
                  >
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-1">
                      <info.icon className="h-4 w-4 text-slate-500" />
                      {info.label}
                    </h4>
                    <a
                      href={info.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Github className="h-5 w-5 text-slate-400" />
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className={`h-4 w-4 ${social.color}`} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="h-6 w-6 text-blue-400" />
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2"
                  >
                    <User className="h-4 w-4 text-slate-500" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-slate-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4 text-slate-500" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

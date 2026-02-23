"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "tirumalareddi712@gmail.com",
    href: "mailto:tirumalareddi712@gmail.com",
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: "+91 8247855457",
    href: "tel:+918247855457",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Codetirumala",
    href: "https://github.com/Codetirumala",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/lakshminarasimha",
    href: "https://linkedin.com/in/lakshminarasimha",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:tirumalareddi712@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question or want to work together? Let's connect!"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Let&apos;s build something amazing together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out through any of the channels below.
              </p>

              <div className="grid gap-4 mt-8">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-all group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    >
                      <info.icon className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-foreground text-sm font-medium">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="pro-card rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Hello!"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <MagneticButton>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
                >
                  <HiOutlinePaperAirplane className="text-lg rotate-90" />
                  Send Message
                </motion.button>
              </MagneticButton>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

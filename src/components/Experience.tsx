"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    title: "Software Intern",
    company: "Tech Spot Consulting LLC",
    period: "Apr 2025 – May 2025",
    description:
      "Collaborated with developers to build scalable web applications using the MERN stack. Worked on both front-end and back-end modules including REST API integration and state management. Implemented modern UI components and optimized performance for real-time data rendering.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    color: "from-primary to-cyan-300",
  },
  {
    title: "ServiceNow Intern",
    company: "The Smartbridge",
    period: "May 2025 – Jul 2025",
    description:
      "Gained hands-on experience with ServiceNow platform administration including user roles, data schema, and ITSM modules. Practiced scripting and workflow automation using Business Rules, Client Scripts, and UI Policies. Configured forms, tables, and lists to improve usability and data management.",
    tech: ["ServiceNow", "ITSM", "Business Rules", "Client Scripts"],
    color: "from-secondary to-purple-300",
  },
  {
    title: "AI–ML Virtual Intern",
    company: "APSCHE (AWS Academy)",
    period: "Sep 2023 – Nov 2023",
    description:
      "Completed a 10-week internship focused on Artificial Intelligence and Machine Learning fundamentals. Built basic AI/ML models using Python and related libraries. Gained exposure to supervised and unsupervised learning, model evaluation techniques, and AWS-based deployment tools.",
    tech: ["Python", "ML", "AWS", "TensorFlow", "Scikit-learn"],
    color: "from-accent to-pink-300",
  },
];

export default function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Experience"
            subtitle="Professional experience and internships that shaped my career"
          />
        </AnimatedSection>

        <div className="relative" ref={timelineRef}>
          {/* Animated timeline line - grows as you scroll */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-primary origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.title + exp.company} delay={i * 0.15} direction="left">
                <div className="relative pl-8 sm:pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    className="absolute left-0 sm:left-8 top-1 -translate-x-1/2"
                  >
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  </motion.div>

                  <div className="pro-card rounded-2xl p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary">
                          <HiOutlineBriefcase className="text-sm" />
                          <span className="text-sm font-medium">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <HiOutlineCalendar className="text-sm" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

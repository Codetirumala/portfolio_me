"use client";

import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCalendar } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";

const education = [
  {
    degree: "Bachelor of Technology (CSE – AI & ML)",
    institution: "Aditya Institute of Technology and Management",
    period: "2022 – 2026",
    grade: "CGPA: 9.26",
    icon: "🎓",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Sampath Sai Junior College",
    period: "2020 – 2022",
    grade: "CGPA: 9.6",
    icon: "📚",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sri Gnana Jyothi School, Narasannapeta",
    period: "2019 – 2020",
    grade: "CGPA: 9.7",
    icon: "🏫",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Education"
            subtitle="My academic journey and achievements"
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:gap-6">
          {education.map((edu, i) => (
            <AnimatedSection key={edu.degree} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="pro-card rounded-2xl p-4 sm:p-6 md:p-8 group"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform"
                  >
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <HiOutlineAcademicCap className="text-sm" />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                        <HiOutlineCalendar className="text-sm" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>

                    {/* Grade badge */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      className="inline-flex mt-3"
                    >
                      <span
                        className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground"
                      >
                        CGPA: <AnimatedCounter end={parseFloat(edu.grade.replace(/[^\d.]/g, ''))} decimals={edu.grade.includes('.') ? (edu.grade.split('.')[1]?.replace(/[^\d]/g, '').length || 1) : 0} />
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

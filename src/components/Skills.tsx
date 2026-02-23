"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiLinux,
  SiJenkins,
  SiStreamlit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "Java", icon: FaJava, color: "#ed8b00" },
      { name: "C", icon: TbBrandCpp, color: "#00599c" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#1572b6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "VS Code", icon: VscCode, color: "#007acc" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Jenkins", icon: SiJenkins, color: "#d24939" },
    ],
  },
  {
    title: "Deployment",
    icon: "🚀",
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
      { name: "Render", icon: SiVercel, color: "#46e3b7" },
      { name: "Streamlit", icon: SiStreamlit, color: "#ff4b4b" },
      { name: "Linux", icon: SiLinux, color: "#fcc624" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies and tools I work with to bring ideas to life"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="pro-card rounded-2xl p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-foreground font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIdx * 0.05 + catIdx * 0.1 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="tag-pill cursor-default group"
                    >
                      <skill.icon
                        size={18}
                        style={{ color: skill.color }}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

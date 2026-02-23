"use client";

import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
} from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

const highlights = [
  {
    icon: HiOutlineCode,
    title: "Full Stack Dev",
    description: "Proficient in MERN stack with real-world project experience",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "AI & ML",
    description: "Hands-on experience building AI/ML models and integrations",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "9.26 CGPA",
    description: "Strong academic foundation in Computer Science (AI & ML)",
  },
  {
    icon: HiOutlineGlobe,
    title: "Cloud Ready",
    description: "Azure certified with deployment on Vercel, Render & Netlify",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="A passionate developer dedicated to creating impactful digital solutions"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About text */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <div className="code-block rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">
                    about.tsx
                  </span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                    <span className="text-primary">developer</span>{" "}
                    <span className="text-foreground">=</span>{" "}
                    <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-rose-600 dark:text-rose-400">name</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">
                      &quot;Reddi Lakshmi Narasimha&quot;
                    </span>
                    <span className="text-foreground">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-rose-600 dark:text-rose-400">role</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">
                      &quot;Full Stack Developer&quot;
                    </span>
                    <span className="text-foreground">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-rose-600 dark:text-rose-400">education</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">
                      &quot;B.Tech CSE (AI &amp; ML)&quot;
                    </span>
                    <span className="text-foreground">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-rose-600 dark:text-rose-400">passion</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">
                      &quot;Building scalable solutions&quot;
                    </span>
                    <span className="text-foreground">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-rose-600 dark:text-rose-400">motto</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">
                      &quot;Code. Create. Impact.&quot;
                    </span>
                  </p>
                  <p>
                    <span className="text-yellow-600 dark:text-yellow-400">{"}"}                    </span>
                    <span className="text-foreground">;</span>
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                I&apos;m a dynamic and detail-oriented Computer Science student
                at Aditya Institute of Technology and Management, specializing in
                AI &amp; ML. With hands-on expertise in MERN stack development,
                AI integration, and collaborative software engineering using
                GitHub, I&apos;m passionate about innovation and real-world
                problem solving with a strong commitment to continuous learning.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Highlight cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="pro-card rounded-2xl p-6 group cursor-default h-full"
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  >
                    <item.icon className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

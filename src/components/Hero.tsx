"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  HiOutlineMail,
  HiOutlineEye,
  HiOutlineArrowDown,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle decorative dots */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <AnimatedSection delay={0.1}>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm text-muted-foreground">
                  Open to opportunities
                </span>
              </motion.div>
            </AnimatedSection>

            {/* Name */}
            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                <span className="text-foreground">Hi, I&apos;m </span>
                <br className="sm:hidden" />
                <span className="text-primary">Reddi Lakshmi</span>
                <br />
                <span className="text-primary">Narasimha</span>
              </h1>
            </AnimatedSection>

            {/* Typing animation */}
            <AnimatedSection delay={0.4}>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "AI/ML Enthusiast",
                    2000,
                    "Software Engineer",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-foreground/70"
                />
              </div>
            </AnimatedSection>

            {/* Summary */}
            <AnimatedSection delay={0.5}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Dynamic Computer Science student with hands-on expertise in{" "}
                <span className="text-primary font-medium">AI integration</span>,{" "}
                <span className="text-primary font-medium">
                  MERN stack development
                </span>
                , and collaborative software engineering. Passionate about building{" "}
                <span className="text-primary font-medium">
                  scalable, user-centric solutions
                </span>{" "}
                that create measurable impact.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
                <MagneticButton>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 btn-magnetic transition-all"
                  >
                    <HiOutlineMail className="text-lg" />
                    Get in Touch
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </MagneticButton>

                <MagneticButton>
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <HiOutlineEye className="text-lg" />
                    View Projects
                  </motion.a>
                </MagneticButton>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.7}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/Codetirumala",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/reddi-lakshmi-narasimha-543a45289/",
                    label: "LinkedIn",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Profile Image */}
          <AnimatedSection delay={0.3}>
            <div className="relative flex-shrink-0">
              {/* Animated rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--primary), transparent 60%, var(--primary), transparent 80%)",
                  opacity: 0.6,
                }}
              />

              {/* Outer glow */}
              <div className="absolute -inset-2 rounded-full bg-primary/20 blur-xl" />

              {/* Hexagonal-ish clip with border */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="relative"
              >
                {/* Border ring */}
                <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary via-primary/50 to-primary/20">
                  {/* Inner container */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-background p-1">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src="/images/profile.png"
                        alt="Reddi Lakshmi Narasimha"
                        fill
                        className="object-cover object-top"
                        priority
                        sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating status badges around the image */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-2 top-8 sm:top-12 px-3 py-1.5 rounded-lg bg-card border border-border shadow-lg text-xs font-semibold text-foreground"
                >
                  <span className="text-primary">⚡</span> MERN Stack
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -left-4 bottom-12 sm:bottom-16 px-3 py-1.5 rounded-lg bg-card border border-border shadow-lg text-xs font-semibold text-foreground"
                >
                  <span className="text-primary">🤖</span> AI / ML
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute right-2 -bottom-2 sm:bottom-2 px-3 py-1.5 rounded-lg bg-card border border-border shadow-lg text-xs font-semibold text-foreground"
                >
                  <span className="text-primary">☁️</span> Azure
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <HiOutlineArrowDown className="text-lg" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "TechSpot Consultancy Portal",
    description:
      "Role-based MERN portal for Admin, Employee, and Client access with secure authentication and timesheet management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Render"],
    category: "Full Stack",
    liveUrl: "https://techspotconsultency.onrender.com",
  },
  {
    title: "Code Vault – DSA Platform",
    description:
      "Web application for tracking DSA progress and interview preparation with roadmaps and company-wise questions.",
    tech: ["React", "JavaScript", "Authentication", "Render"],
    category: "Frontend",
    liveUrl: "https://codevaultt.onrender.com",
  },
  {
    title: "Service Desk – Management System",
    description:
      "Full-stack system for raising complaints, tracking status, and role-based access with real-time updates.",
    tech: ["React", "Node.js", "Firebase Auth", "MongoDB"],
    category: "Full Stack",
    liveUrl: "https://service-3ys4.onrender.com",
  },
  {
    title: "WaitSmart — Appointment Booking",
    description:
      "MERN-based appointment booking system with SMS integration for real-time booking confirmations and notifications.",
    tech: ["React", "Node.js", "Express", "MongoDB", "SMS API"],
    category: "Full Stack",
    liveUrl: "https://waitsmart.in",
    
  },
  {
    title: "Automated Pneumonia Detection",
    description:
      "AI-based system for pneumonia detection from chest X-rays with explainable deep learning models.",
    tech: ["Python", "CNN", "Transfer Learning", "Grad-CAM", "LRP"],
    category: "AI / ML",
    liveUrl: "https://pnemonia-detection-5s44.onrender.com",
  },
  {
    title: "NeonAI — AI Image Generator",
    description:
      "Next-generation AI image generator that transforms imagination into breathtaking visuals in seconds. Features a stunning neon UI with gallery and advanced AI-powered image creation.",
    tech: ["React", "AI API", "Tailwind CSS", "Vercel"],
    category: "AI / Frontend",
    liveUrl: "https://ai-image-ten-gamma.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="A collection of projects that showcase my skills and passion"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="pro-card rounded-2xl overflow-hidden group h-full flex flex-col"
              >
                {/* Accent bar */}
                <div className="h-1 bg-primary" />

                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  {/* Category badge */}
                  <span className="inline-flex self-start px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border mb-3 sm:mb-4">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-lg bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      >
                        <FaGithub size={16} />
                        Code
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all"
                      >
                        <HiOutlineExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <span className="text-xs text-muted-foreground italic">
                        Links coming soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

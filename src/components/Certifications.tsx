"use client";

import { motion } from "framer-motion";
import {
  SiGithub,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaServicestack, FaMicrosoft } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

const certifications = [
  {
    title: "GitHub Advanced Security",
    issuer: "GitHub",
    icon: SiGithub,
    color: "#333333",
  },
  {
    title: "Certified System Administrator",
    issuer: "ServiceNow",
    icon: FaServicestack,
    color: "#81b5a1",
  },
  {
    title: "MongoDB Associate Developer (Node.js)",
    issuer: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    icon: FaMicrosoft,
    color: "#0078d4",
  },
  {
    title: "API Fundamentals Student Expert",
    issuer: "Postman",
    icon: SiPostman,
    color: "#ff6c37",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    icon: HiOutlineBadgeCheck,
    color: "#00ea64",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    icon: SiGithub,
    color: "#333333",
  },
  {
    title: "Certified Application Developer",
    issuer: "ServiceNow",
    icon: FaServicestack,
    color: "#81b5a1",
  },
  {
    title: "Certified Agentforce Specialist",
    issuer: "Salesforce",
    icon: HiOutlineBadgeCheck,
    color: "#00a1e0",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Certifications"
            subtitle="Industry-recognized certifications that validate my expertise"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="pro-card rounded-2xl p-4 sm:p-6 group cursor-default h-full"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  >
                    <cert.icon size={20} className="sm:hidden" style={{ color: cert.color }} />
                    <cert.icon size={24} className="hidden sm:block" style={{ color: cert.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-semibold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
                      <HiOutlineBadgeCheck
                        className="shrink-0"
                        style={{ color: cert.color }}
                      />
                      Issued by {cert.issuer}
                    </p>
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

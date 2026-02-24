"use client";

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold">
              <span className="text-primary font-mono text-lg">&lt;</span>
              <span className="text-foreground font-semibold">RLN</span>
              <span className="text-primary font-mono text-lg"> /&gt;</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/Codetirumala",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://linkedin.com/in/lakshminarasimha",
                label: "LinkedIn",
              },
              {
                icon: HiOutlineMail,
                href: "mailto:tirumalareddi712@gmail.com",
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-6 sm:my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Reddi Lakshmi Narasimha. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <FaHeart className="text-red-500 text-xs" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

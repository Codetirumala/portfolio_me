"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = title.split(" ");

  return (
    <div
      ref={ref}
      className={`mb-10 sm:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className={`mt-4 sm:mt-6 h-1 w-16 sm:w-20 rounded-full bg-primary origin-left ${
          align === "center" ? "mx-auto origin-center" : ""
        }`}
      />
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Particle class for the canvas background ── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

function useParticleCanvas(isActive: boolean) {
  const canvasRef = useCallback(
    (canvas: HTMLCanvasElement | null) => {
      if (!canvas || !isActive) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let animId: number;
      const particles: Particle[] = [];
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);

      const spawn = () => {
        if (particles.length < 60) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            life: 0,
            maxLife: 200 + Math.random() * 200,
          });
        }
      };

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const alpha = (1 - dist / 120) * 0.15;
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw & update particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life++;
          const fadeRatio =
            p.life < 30
              ? p.life / 30
              : p.life > p.maxLife - 30
              ? (p.maxLife - p.life) / 30
              : 1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * fadeRatio})`;
          ctx.fill();

          if (p.life > p.maxLife) particles.splice(i, 1);
        }

        spawn();
        spawn();
        animId = requestAnimationFrame(draw);
      };
      draw();
      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", resize);
      };
    },
    [isActive]
  );
  return canvasRef;
}

/* ── Code lines that type out ── */
const codeLines = [
  { text: "const developer = {", color: "text-purple-400", indent: 0 },
  { text: 'name: "Reddi Lakshmi Narasimha",', color: "text-green-400", indent: 1 },
  { text: 'role: "Full Stack Developer",', color: "text-green-400", indent: 1 },
  { text: 'stack: ["React", "Node", "AI/ML"],', color: "text-yellow-400", indent: 1 },
  { text: "};", color: "text-purple-400", indent: 0 },
];

export default function PageLoader() {
  const [phase, setPhase] = useState<"intro" | "code" | "reveal" | "done">("intro");
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const canvasRef = useParticleCanvas(phase !== "done");

  useEffect(() => {
    // Phase 1: Logo intro (0 - 800ms)
    const t1 = setTimeout(() => setPhase("code"), 800);

    // Phase 2: Code typing (800 - 2800ms)
    const lineTimers: NodeJS.Timeout[] = [];
    codeLines.forEach((_, i) => {
      lineTimers.push(
        setTimeout(() => setVisibleLines(i + 1), 1000 + i * 350)
      );
    });

    // Progress bar (runs across entire duration)
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 1.5;
      });
    }, 40);

    // Phase 3: Reveal curtain (2800ms)
    const t2 = setTimeout(() => setPhase("reveal"), 2800);

    // Phase 4: Done (3500ms)
    const t3 = setTimeout(() => setPhase("done"), 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(progressInterval);
      lineTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[#0b1120]" />

          {/* Particle canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-[1]"
          />

          {/* Radial glow behind logo */}
          <motion.div
            className="absolute z-[2] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main content */}
          <div className="relative z-[3] flex flex-col items-center gap-8 px-4">
            {/* ── Animated Logo ── */}
            <motion.div
              initial={{ scale: 0, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
              }}
              className="relative"
            >
              {/* Spinning ring around logo */}
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: "rgba(59,130,246,0.6)",
                  borderRightColor: "rgba(59,130,246,0.2)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-10 rounded-full border border-transparent"
                style={{
                  borderBottomColor: "rgba(59,130,246,0.3)",
                  borderLeftColor: "rgba(59,130,246,0.1)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="text-5xl sm:text-6xl font-bold select-none">
                <motion.span
                  className="text-blue-500 font-mono"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  &lt;
                </motion.span>
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  R
                </motion.span>
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  L
                </motion.span>
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  N
                </motion.span>
                <motion.span
                  className="text-blue-500 font-mono"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  {" />"} 
                </motion.span>
              </div>
            </motion.div>

            {/* ── Code typing block ── */}
            <AnimatePresence>
              {(phase === "code" || phase === "reveal") && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                >
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-white/40 ml-2 font-mono">
                      portfolio.ts
                    </span>
                  </div>

                  {/* Code lines */}
                  <div className="p-4 font-mono text-sm space-y-1 min-h-[140px]">
                    {codeLines.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          i < visibleLines
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.3 }}
                        style={{ paddingLeft: `${line.indent * 24}px` }}
                        className="flex items-center gap-1"
                      >
                        <span className="text-white/20 text-xs w-5 shrink-0 select-none">
                          {i + 1}
                        </span>
                        <span className={line.color}>{line.text}</span>
                        {i === visibleLines - 1 && (
                          <motion.span
                            className="inline-block w-2 h-4 bg-blue-500 ml-0.5"
                            animate={{ opacity: [1, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Progress bar ── */}
            <div className="w-64 sm:w-80">
              <div className="flex justify-between text-xs text-white/40 font-mono mb-2">
                <span>Initializing...</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* ── Tagline ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase"
            >
              Full Stack Developer &bull; AI Enthusiast
            </motion.p>
          </div>

          {/* ── Reveal curtain (splits screen) ── */}
          {phase === "reveal" && (
            <>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 z-[10] bg-[#0b1120]"
                style={{ top: 0, bottom: "50%" }}
              />
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 z-[10] bg-[#0b1120]"
                style={{ top: "50%", bottom: 0 }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

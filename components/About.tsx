"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { MapPin, GraduationCap, Globe, MessageSquareCode } from "lucide-react";

const terminalLines = [
  { prompt: "$ whoami",           output: "Femil Ranparia",               color: "text-primary" },
  { prompt: "$ cat location.txt", output: "Rajkot, Gujarat 🇮🇳" },
  { prompt: "$ cat degree.txt",   output: "B.Tech Computer Engineering @ CHARUSAT (2023 – 2027)" },
  { prompt: "$ cat cgpa.txt",     output: "8.57 / 10.00" },
  { prompt: "$ cat stack.txt",    output: "Python · FastAPI · PyTorch · Next.js · Android (Kotlin)" },
  { prompt: "$ cat status.txt",   output: "✓  Open to Opportunities — actively looking for internships & roles", color: "text-primary" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-pad" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-muted border border-border px-3 py-1 rounded-full bg-surface/50 mb-4 inline-block">
            <span className="text-primary">// </span>about me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Who am I<span className="text-primary">?</span>
          </h2>
        </motion.div>

        {/* ── TOP ROW: Photo + Bio ── */}
        <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">

          {/* LEFT: Photo + badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            {/* Photo frame */}
            <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] mx-auto md:mx-0 group shrink-0">
              <div
                className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-lg"
                style={{ background: "rgba(0,212,139,0.25)" }}
              />
              {["top-0 left-0 border-t-2 border-l-2",
                "top-0 right-0 border-t-2 border-r-2",
                "bottom-0 left-0 border-b-2 border-l-2",
                "bottom-0 right-0 border-b-2 border-r-2",
              ].map((cls, i) => (
                <span
                  key={i}
                  className={`absolute ${cls} border-primary w-5 h-5 z-10 transition-all duration-300 group-hover:w-6 group-hover:h-6`}
                />
              ))}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border-accent bg-surface">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface pointer-events-none select-none z-0">
                  <span className="font-mono text-4xl font-bold text-gradient">FR</span>
                  <span className="font-mono text-[10px] text-muted mt-2 tracking-widest">FEMIL RANPARIA</span>
                </div>
                <Image
                  src="/profile.jpg"
                  alt="Femil Ranparia"
                  fill
                  className="object-cover object-top z-10"
                  priority
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="scan-line" />
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2 border border-border-accent bg-primary/5 rounded-full px-3.5 py-1.5 mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
              <span className="font-mono text-xs text-primary">Available for Work</span>
            </div>
          </motion.div>

          {/* RIGHT: Bio + info pills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6"
          >
            <p className="text-foreground/80 leading-8 text-lg">
              {personalInfo.bio}
            </p>
            <p className="text-foreground/80 leading-8 text-lg">
              During my internship at{" "}
              <span className="text-primary font-medium">DND Software Pvt. Ltd.</span>, I
              worked hands-on with{" "}
              <span className="text-foreground font-medium">FastAPI</span> and
              production-grade ML pipelines - debugging, integration, and model deployment.
              Outside academics I enjoy competitive coding - a{" "}
              <span className="text-primary font-medium">100+ day CodeChef streak</span>{" "}
              and <span className="text-primary font-medium">70+ LeetCode problems</span> that
              keep my DSA sharp.
              Off the keyboard, I strategize over 64 squares - chess keeps my tactical thinking sharp.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <InfoPill icon={<MapPin size={12} />} text="Rajkot, Gujarat" />
              <InfoPill icon={<GraduationCap size={12} />} text="CHARUSAT 2027" />
              <InfoPill icon={<Globe size={12} />} text="Open to Remote" />
              <InfoPill icon={<MessageSquareCode size={12} />} text="Python · ML · Web" />
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM ROW: Full-width terminal ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="terminal-window w-full"
        >
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted opacity-60">
              femil@portfolio ~ % zsh
            </span>
          </div>
          <div className="p-5 grid sm:grid-cols-2 gap-x-12 gap-y-3 font-mono text-sm">
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.35 }}
              >
                <div className="text-primary/60 text-xs">{line.prompt}</div>
                <div className={`ml-2 mt-0.5 ${line.color ?? "text-foreground/85"}`}>
                  {line.output}
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-1 pt-1"
            >
              <span className="text-primary/60 text-xs">$</span>
              <span className="w-2 h-4 bg-primary animate-blink" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function InfoPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="flex items-center gap-1.5 text-xs font-medium border border-border bg-surface px-3 py-1.5 rounded-full text-muted hover:border-border-accent hover:text-primary transition-all duration-200">
      <span className="text-primary">{icon}</span>
      {text}
    </span>
  );
}

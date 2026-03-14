"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Code2, ChefHat, Download, ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Github, label: "GitHub", href: personalInfo.links.github },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.links.linkedin },
  {
    icon: Code2,
    label: "LeetCode",
    href: personalInfo.links.leetcode,
    className: "text-[#f89f1b]",
  },
  {
    icon: ChefHat,
    label: "CodeChef",
    href: personalInfo.links.codechef,
    className: "text-[#b8946b]",
  },
];

const FLOATING_SNIPPETS = [
  "def solve(n): ...",
  "import torch",
  "git commit -m",
  "npm run dev",
  "SELECT * FROM",
  "class ResNet:",
  "FastAPI()",
  "useEffect(() => {",
  "async/await",
  "O(n log n)",
  "model.fit(X)",
  "return dp[n]",
  "ssh ubuntu@",
  "docker build .",
  "yarn add framer",
];

function FloatingCode() {
  const snippets = FLOATING_SNIPPETS;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {snippets.map((snippet, i) => (
        <div
          key={i}
          className="code-rain absolute"
          style={{
            left: `${(i * 6.5) % 100}%`,
            top: `${(i * 13 + 5) % 90}%`,
            opacity: 0.06 + (i % 3) * 0.02,
            fontSize: 11 + (i % 3),
            transform: `rotate(${-5 + (i % 5) * 2}deg)`,
            animationDelay: `${i * 0.4}s`,
            fontFamily: "var(--font-jetbrains-mono)",
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
  );
}

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid fade-edges pointer-events-none" />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,212,139,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating code snippets */}
      <FloatingCode />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6"
      >
        {/* Console tag */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="font-mono text-sm text-muted border border-border px-4 py-1.5 rounded-full bg-surface/60 backdrop-blur-sm">
            <span className="text-primary">console</span>.
            <span className="text-foreground/60">log</span>
            <span className="text-muted">(</span>
            <span className="text-amber-400">&quot;Hello, World 👋&quot;</span>
            <span className="text-muted">)</span>
          </span>
        </motion.div>

        {/* Name with glitch */}
        <motion.div variants={fadeUp} className="relative mb-4">
          <h1 className="glitch-container text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="text-foreground">FEMIL</span>{" "}
            <span className="text-gradient">RANPARIA</span>
            {/* Glitch layers */}
            <span
              className="glitch-layer glitch-layer-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
              aria-hidden="true"
            >
              FEMIL RANPARIA
            </span>
            <span
              className="glitch-layer glitch-layer-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
              aria-hidden="true"
            >
              FEMIL RANPARIA
            </span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 mb-6 font-mono text-lg sm:text-xl text-muted"
        >
          <span className="text-primary">&gt;&gt;&gt;</span>
          <TypeAnimation
            sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-foreground/90"
          />
          <span className="w-0.5 h-5 bg-primary animate-blink" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-muted text-base sm:text-lg max-w-xl leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 rounded-md bg-primary text-background font-semibold text-sm hover:bg-primary/90 hover:shadow-glow-md transition-all duration-200 active:scale-95"
          >
            View My Work
          </button>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-md border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 hover:border-primary hover:shadow-glow-sm transition-all duration-200 active:scale-95"
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, label, href, className: cls }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`text-muted hover:text-primary transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,212,139,0.6)] ${cls ?? ""}`}
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-60">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

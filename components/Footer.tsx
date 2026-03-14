"use client";

import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Code2, ChefHat, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: personalInfo.links.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
  { icon: Code2, href: personalInfo.links.leetcode, label: "LeetCode" },
  { icon: ChefHat, href: personalInfo.links.codechef, label: "CodeChef" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span className="font-mono text-primary font-semibold text-base select-none">
          <span className="text-muted">&lt;</span>FR
          <span className="text-muted">/&gt;</span>
        </span>

        {/* Credit */}
        <p className="text-muted text-xs flex items-center gap-1.5">
          Designed &amp; Built by{" "}
          <span className="text-foreground font-medium">Femil Ranparia</span>
          <Heart size={12} className="text-primary fill-primary" />
          <span className="text-dim">· {new Date().getFullYear()}</span>
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-border/50 text-center">
        <p className="font-mono text-xs text-dim">
          Built with{" "}
          <span className="text-primary">Next.js</span> ·{" "}
          <span className="text-primary">Tailwind CSS</span> ·{" "}
          <span className="text-primary">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}

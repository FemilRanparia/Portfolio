"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Languages: "{ }",
  "AI / ML": "⚛",
  "Web & Backend": "⟨/⟩",
  Mobile: "📱",
  "Tools & Cloud": "☁",
  "Core CS": "∑",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-pad bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-muted border border-border px-3 py-1 rounded-full bg-surface/50 mb-4 inline-block">
            <span className="text-primary">// </span>skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted mt-2 text-sm">
            Technologies I work with regularly
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1 + 0.2, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-border-accent transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-lg text-primary opacity-70">
                  {categoryIcons[group.category] ?? "#"}
                </span>
                <h3 className="font-semibold text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  {group.category}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip text-xs font-mono px-3 py-1.5 rounded-md border border-border bg-background text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

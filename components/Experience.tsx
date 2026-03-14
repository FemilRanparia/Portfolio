"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-pad" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-muted border border-border px-3 py-1 rounded-full bg-surface/50 mb-4 inline-block">
            <span className="text-primary">// </span>work experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Where I&apos;ve <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px timeline-line" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline node */}
              <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-primary glow-dot border-2 border-background" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-border-accent hover:shadow-card-hover transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={13} className="text-primary" />
                      <span className="text-primary font-medium text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right text-xs text-muted space-y-1">
                    <div className="flex items-center gap-1.5 justify-end">
                      <Calendar size={12} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

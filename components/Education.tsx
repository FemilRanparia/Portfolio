"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/data";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-pad" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-muted border border-border px-3 py-1 rounded-full bg-surface/50 mb-4 inline-block">
            <span className="text-primary">// </span>education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px timeline-line" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-primary glow-dot border-2 border-background" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-border-accent transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                      <GraduationCap size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground">{edu.degree}</h3>
                      <p className="text-primary text-sm font-medium mt-0.5">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} /> {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold bg-primary/10 text-primary border border-primary/25 rounded-lg px-3 py-2 shrink-0">
                    <Award size={14} />
                    {edu.grade}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

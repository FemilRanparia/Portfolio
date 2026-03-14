"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { achievements, certifications, codingStats } from "@/lib/data";
import { ExternalLink, Medal, BookOpen, Trophy } from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="section-pad bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-muted border border-border px-3 py-1 rounded-full bg-surface/50 mb-4 inline-block">
            <span className="text-primary">// </span>achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Milestones &amp; <span className="text-gradient">Recognition</span>
          </h2>
        </motion.div>

        {/* Coding Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-5">
            <Trophy size={16} className="text-primary" />
            <h3 className="font-semibold text-foreground/70 text-sm uppercase tracking-wider">
              Competitive Coding
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {codingStats.map((stat, i) => (
              <motion.a
                key={stat.platform}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
                className="group flex items-center gap-5 bg-card border border-border rounded-xl p-5 hover:border-border-accent hover:shadow-card-hover transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-2xl font-bold border"
                  style={{
                    background: `rgba(${
                      stat.platform === "LeetCode" ? "248,159,27" : "212,132,74"
                    }, 0.12)`,
                    borderColor: `rgba(${
                      stat.platform === "LeetCode" ? "248,159,27" : "212,132,74"
                    }, 0.3)`,
                    color: stat.color,
                  }}
                >
                  {stat.platform === "LeetCode" ? "LC" : "CC"}
                </div>
                <div>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.stat}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                  <div className="text-xs text-muted/60 mt-0.5">{stat.platform}</div>
                </div>
                <ExternalLink
                  size={14}
                  className="ml-auto text-muted opacity-0 group-hover:opacity-70 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Hackathons & Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-5">
            <Medal size={16} className="text-primary" />
            <h3 className="font-semibold text-foreground/70 text-sm uppercase tracking-wider">
              Hackathons &amp; Activities
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-border-accent transition-all duration-300"
              >
                <div className="text-2xl mb-3">{ach.icon}</div>
                <h4 className="font-bold text-sm text-foreground mb-1">{ach.title}</h4>
                <p className="text-xs text-primary font-medium mb-1">{ach.subtitle}</p>
                <p className="text-xs text-muted">{ach.org}</p>
                <span
                  className={`inline-block mt-3 text-xs px-2.5 py-1 rounded-full border font-medium ${
                    ach.type === "hackathon"
                      ? "bg-primary/10 border-primary/25 text-primary"
                      : "bg-amber-500/10 border-amber-500/25 text-amber-400"
                  }`}
                >
                  {ach.type === "hackathon" ? "Hackathon" : "Achievement"}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-5">
            <BookOpen size={16} className="text-primary" />
            <h3 className="font-semibold text-foreground/70 text-sm uppercase tracking-wider">
              Certifications
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4 hover:border-border-accent transition-all duration-300"
              >
                <span className="text-xl shrink-0">{cert.icon}</span>
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.title}</p>
                  <p className="text-xs text-muted mt-0.5">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

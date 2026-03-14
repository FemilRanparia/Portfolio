"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Calendar, Sparkles, Zap } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-pad bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-muted border border-border px-3 py-1 rounded-full bg-surface/50 mb-4 inline-block">
            <span className="text-primary">// </span>projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Things I&apos;ve <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = {
  title: string;
  duration: string;
  description: string;
  stack: string[];
  highlight?: boolean;
  wip?: boolean;
  github: string;
};

function ProjectCard({
  project,
  i,
  inView,
}: {
  project: Project;
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.12 + 0.2, duration: 0.6 }}
      className="project-card bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-border-accent group relative overflow-hidden"
    >
      {/* Top glow on highlight projects */}
      {project.highlight && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,212,139,0.6), transparent)",
          }}
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {project.highlight && (
              <Sparkles size={13} className="text-primary shrink-0" />
            )}
            <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            {project.wip && (
              <span className="flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
                <Zap size={9} className="fill-amber-400" />
                In Progress
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Calendar size={11} />
            {project.duration}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-primary transition-colors p-1.5 rounded-md hover:bg-primary/10"
          >
            <Github size={16} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="External link"
            className="text-muted hover:text-primary transition-colors p-1.5 rounded-md hover:bg-primary/10"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed flex-1">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-background border border-border text-muted/80 group-hover:border-border-accent transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

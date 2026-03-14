"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  ChefHat,
  ArrowRight,
  Download,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: personalInfo.links.github },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.links.linkedin },
  { icon: Code2, label: "LeetCode", href: personalInfo.links.leetcode },
  { icon: ChefHat, label: "CodeChef", href: personalInfo.links.codechef },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-pad" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-muted border border-border px-3 py-1 rounded-full bg-surface/50 mb-4 inline-block">
            <span className="text-primary">// </span>contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg leading-relaxed">
            I&apos;m open to internships, project collaborations, and full-time
            opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-border-accent group transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                  <Icon size={17} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted">{label}</div>
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {value}
                  </div>
                </div>
                {href !== "#" && (
                  <ArrowRight
                    size={14}
                    className="ml-auto text-muted opacity-0 group-hover:opacity-70 group-hover:translate-x-1 transition-all"
                  />
                )}
              </a>
            ))}

            {/* Resume download */}
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-primary/90 hover:shadow-glow-md transition-all duration-200 group justify-center"
            >
              <Download size={16} />
              Download My Resume
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Social links + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Availability banner */}
            <div className="bg-primary/8 border border-primary/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-sm font-semibold">
                  Currently Available
                </span>
              </div>
              <p className="text-sm text-muted">
                Open for internships, project collaborations, and full-time
                opportunities.
              </p>
            </div>

            {/* Social grid */}
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-medium mb-4">
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border hover:border-border-accent group transition-all duration-200"
                  >
                    <Icon size={16} className="text-muted group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

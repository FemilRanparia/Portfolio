import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        card: "#161616",
        "card-hover": "#1c1c1c",
        border: "#262626",
        "border-accent": "rgba(0,212,139,0.25)",
        primary: {
          DEFAULT: "#00d48b",
          dark: "#00a06a",
          foreground: "#0a0a0a",
        },
        accent: "#f59e0b",
        foreground: "#f5f5f5",
        muted: "#737373",
        dim: "#3f3f3f",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Consolas", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,139,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,139,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, transparent 40%, #0a0a0a 100%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-md": "60px 60px",
      },
      animation: {
        glitch: "glitch 5s steps(1) infinite",
        blink: "blink 1.2s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        glitch: {
          "0%, 88%, 100%": {
            clipPath: "inset(0 0 100% 0)",
          },
          "90%": {
            clipPath: "inset(20% 0 60% 0)",
            transform: "translate(-3px, 2px)",
            filter: "hue-rotate(90deg)",
          },
          "92%": {
            clipPath: "inset(60% 0 20% 0)",
            transform: "translate(3px, -1px)",
          },
          "94%": {
            clipPath: "inset(40% 0 40% 0)",
            transform: "translate(-2px, 3px)",
          },
          "96%": {
            clipPath: "inset(10% 0 80% 0)",
            transform: "translate(2px, -2px)",
            filter: "hue-rotate(-90deg)",
          },
          "98%": {
            clipPath: "inset(80% 0 10% 0)",
            transform: "translate(-1px, 1px)",
          },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 12px rgba(0,212,139,0.25)",
        "glow-md": "0 0 24px rgba(0,212,139,0.3)",
        "glow-lg": "0 0 40px rgba(0,212,139,0.2)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,212,139,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

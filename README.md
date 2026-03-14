# 🚀 Femil Ranparia - Portfolio Website

A modern, professional portfolio website showcasing my journey as a Computer Engineering student, developer, and problem solver. Built with cutting-edge web technologies and featuring unique interactive elements.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-FF0055?style=flat&logo=framer)](https://www.framer.com/motion/)

🌐 **Live Demo:** [Your deployed URL here]

---

## ✨ Features

### 🎯 Interactive Elements
- **Custom Targeting Reticle Cursor** — Corner brackets + crosshair + live coordinate tracking (desktop only)
- **Smooth Scroll Animations** — All sections fade in using Framer Motion `useInView`
- **Terminal UI** — Interactive bash-style terminal in About section
- **Glitch Effect** — Subtle name animation in Hero section
- **Hover Effects** — Cards, buttons, and links with physics-based spring animations

### 📐 Sections
1. **Hero** — Dynamic typing animation cycling through roles, floating code snippets background
2. **About** — Profile photo with scan-line effect, bio, terminal display, info pills
3. **Skills** — 6 categorized skill groups (Languages, AI/ML, Web, Mobile, Tools, Core CS)
4. **Experience** — Timeline-based work history with DND Software internship
5. **Projects** — 6 highlighted projects with tech stacks, GitHub links, and WIP badges
6. **Education** — Academic background (B.Tech & HSC) with CGPA/grades
7. **Achievements** — LeetCode/CodeChef stats, hackathon participation, chess runner-up
8. **Certifications** — 6 course certificates from NPTEL, Google, DeepLearning.AI, Infosys
9. **Contact** — Email, phone, social links, availability badge

### 🎨 Design System
- **Color Palette:** Deep dark (#0a0a0a) + Emerald green accent (#00d48b)
- **Fonts:** Space Grotesk (headings/body) + JetBrains Mono (code/terminal)
- **Theme:** Tech-forward aesthetic — terminals, grids, glows, scan effects
- **Responsive:** Mobile-first design, adapts seamlessly across devices

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router + Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion 11 |
| **Icons** | Lucide React |
| **Fonts** | next/font/google (Space Grotesk, JetBrains Mono) |
| **Deployment** | Vercel (recommended) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v20+ (tested on v23.8.0)
- **npm** v10+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FemilRanparia/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles, animations, utilities
├── components/
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # Bio + terminal + photo
│   ├── Skills.tsx          # Tech skills grid
│   ├── Experience.tsx      # Work timeline
│   ├── Projects.tsx        # Project cards
│   ├── Education.tsx       # Academic history
│   ├── Achievements.tsx    # Coding stats + hackathons + certs
│   ├── Contact.tsx         # Contact info + socials
│   ├── Footer.tsx          # Footer with credits
│   └── CustomCursor.tsx    # Targeting reticle cursor
├── lib/
│   ├── data.ts             # All portfolio content (centralized)
│   └── utils.ts            # Utility functions
├── public/
│   └── profile.jpg         # Profile photo
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── eslint.config.mjs       # ESLint 9 flat config
```

---

## 🎨 Customization

### Update Personal Info
Edit `lib/data.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... update all fields
};
```

### Change Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#00d48b", // Change accent color
  background: "#0a0a0a", // Change bg color
  // ...
}
```

### Add Projects
Add to `lib/data.ts`:

```typescript
export const projects = [
  {
    title: "Project Name",
    duration: "Jan – Mar 2026",
    description: "Project description...",
    stack: ["Tech1", "Tech2"],
    highlight: true,
    wip: false, // Set true for "In Progress" badge
    github: "https://github.com/username/repo",
  },
  // ...
];
```

### Replace Profile Photo
- Drop your photo as `public/profile.jpg`
- Recommended: 800×800px, square crop, clear face

---

## 🌟 Key Features Breakdown

### Custom Cursor
- **Targeting reticle design** with corner brackets
- Live coordinate readout (`0392:0581`)
- `[ SELECT ]` appears on hover over clickable elements
- Click pulse ring animation
- Automatically hidden on touch devices

### Animations
- **Scroll-triggered** — All sections animate in when scrolled into view
- **Spring physics** — Smooth, organic motion via Framer Motion
- **Glitch effect** — Name has occasional RGB channel split
- **Scan line** — Profile photo gets a downward-sweeping scan on hover

### Terminal Window
- Bash-style UI with colored dots (red/yellow/green)
- Live command prompt with blinking cursor
- Displays key info (`whoami`, `cat location.txt`, etc.)

---

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size:** Optimized via Next.js Turbopack
- **Images:** Next.js Image optimization (WebP, lazy loading)
- **Fonts:** Preloaded via `next/font/google`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Connect

- **Email:** [femilranparia@gmail.com](mailto:femilranparia@gmail.com)
- **LinkedIn:** [linkedin.com/in/femilranparia](https://www.linkedin.com/in/femilranparia)
- **GitHub:** [github.com/FemilRanparia](https://github.com/FemilRanparia)
- **LeetCode:** [leetcode.com/u/FemilRanparia](https://leetcode.com/u/FemilRanparia/)
- **CodeChef:** [codechef.com/users/femil_009](https://www.codechef.com/users/femil_009)

---

## 🙏 Acknowledgments

- **Design Inspiration:** Modern developer portfolios, terminal aesthetics
- **Tech Stack:** Next.js team, Tailwind Labs, Framer
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Space Grotesk, JetBrains Mono)

---

<div align="center">

**Built with ❤️ by Femil Ranparia**

⭐ Star this repo if you found it helpful!

</div>

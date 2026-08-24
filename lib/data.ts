export interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}


// "level" is a rough proficiency estimate — the CV doesn't give numeric
// scores, so tweak these to whatever feels honest to you.
export const skillsData: Skill[] = [
  // Frontend
  { name: "React.js", icon: "⚛️", category: "Frontend", level: 92 },
  { name: "Next.js", icon: "▲", category: "Frontend", level: 90 },
  { name: "React Native", icon: "📱", category: "Frontend", level: 85 },
  { name: "JavaScript (ES6+)", icon: "🟨", category: "Frontend", level: 90 },

  // Backend & Database
  { name: "Node.js", icon: "🟢", category: "Backend", level: 90 },
  { name: "Express.js", icon: "🚂", category: "Backend", level: 88 },
  { name: "MongoDB", icon: "🍃", category: "Backend", level: 85 },
  { name: "Firebase", icon: "🔥", category: "Backend", level: 87 },
  { name: "PostgreSQL", icon: "🐘", category: "Backend", level: 78 },

  // CMS
  { name: "Payload CMS", icon: "📝", category: "CMS", level: 80 },

  // Third-Party Integrations
  { name: "Stripe & Tap", icon: "💳", category: "Payments", level: 85 },
  { name: "SendGrid API", icon: "📧", category: "Integrations", level: 80 },
  { name: "Cloudflare R2", icon: "☁️", category: "Integrations", level: 82 },
  { name: "Google Cloud Console", icon: "🔗", category: "Integrations", level: 80 },

  // Server Operations & Tools
  { name: "PM2 & SSH", icon: "🖥️", category: "Server Ops", level: 82 },
  { name: "Git & GitHub", icon: "🔧", category: "Server Ops", level: 90 },

  // UI/UX & Styling
  { name: "Tailwind CSS", icon: "🎨", category: "UI/UX", level: 92 },
  { name: "Framer Motion", icon: "🎞️", category: "UI/UX", level: 85 },
];

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "Cosmic Sandbox",
    description: "An interactive, fully procedural 3D stellar simulator and physics engine built directly in the browser.",
    tags: ["React Three Fiber", "GLSL Shaders", "Zustand", "TypeScript"],
    image: "🌌",
    liveUrl: "https://example.com/cosmic",
    githubUrl: "https://github.com/example/cosmic",
  },
  {
    id: "p2",
    title: "Nebula Dashboard",
    description: "High-performance data visualization interface showcasing real-time metrics with custom GSAP fluid animations.",
    tags: ["Next.js", "Tailwind CSS", "GSAP", "Chart.js"],
    image: "📈",
    liveUrl: "https://example.com/nebula",
    githubUrl: "https://github.com/example/nebula",
  },
  {
    id: "p3",
    title: "Quantum E-Commerce",
    description: "A frictionless 3D storefront rendering custom product geometries with advanced materials and lightning fast checkout.",
    tags: ["Next.js App Router", "Three.js", "Tailwind CSS", "Stripe"],
    image: "🛒",
    liveUrl: "https://example.com/quantum",
    githubUrl: "https://github.com/example/quantum",
  },
];

export const experienceData: Experience[] = [
  {
    id: "e1",
    role: "Senior Creative Developer",
    company: "Dimension Interactive",
    period: "2024 - Present",
    description: [
      "Lead the production of highly responsive React Three Fiber web experiences.",
      "Architected Next.js micro-frontends with integrated real-time dynamic shaders.",
      "Optimized web applications resulting in a 40% increase in rendering frame-rates."
    ],
  },
  {
    id: "e2",
    role: "Frontend & 3D Engineer",
    company: "Aether Systems",
    period: "2022 - 2024",
    description: [
      "Implemented elaborate scroll-sequenced animations using GSAP and ScrollTrigger.",
      "Engineered clean state-management flows using Zustand, syncing DOM scroll triggers with Canvas nodes.",
      "Pioneered procedural generation components to replace heavy asset load budgets, lowering bundle sizes by 80%."
    ],
  },
  {
    id: "e3",
    role: "Full Stack Web Developer",
    company: "Launchpad Labs",
    period: "2020 - 2022",
    description: [
      "Built dynamic, interactive React components combined with robust Node.js backend services.",
      "Engineered flexible custom database schemas and high-throughput GraphQL APIs.",
      "Implemented rigid accessibility policies ensuring WCAG AA standard compliance across multiple web platforms."
    ],
  },
];
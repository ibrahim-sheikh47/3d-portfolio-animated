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
  { name: "JavaScript/TypeScript", icon: "🟨", category: "Frontend", level: 90 },

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
  { name: "SSH", icon: "🔑", category: "Server Ops", level: 80 },
  { name: "PM2", icon: "🖥️", category: "Server Ops", level: 82 },
  { name: "Git & GitHub", icon: "🔧", category: "Server Ops", level: 90 },

  // UI/UX & Styling
  { name: "Tailwind CSS", icon: "🎨", category: "UI/UX", level: 92 },
  { name: "Framer Motion", icon: "🎞️", category: "UI/UX", level: 85 },
];

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "Smart Attendance Tracking System",
    description: "QR-based attendance system with admin dashboard and mobile app for real-time tracking.",
    tags: ["React", "React Native", "Firebase", "Firestore"],
    image: "📱",
    liveUrl: "https://example.com/attendance",
    githubUrl: "https://github.com/example/attendance",
  },
  {
    id: "p2",
    title: "My Wealth Translator",
    description: "Fintech co-pilot with amortization calculator, retirement readiness modeling, and real-term income calculations.",
    tags: ["Next.js", "Tailwind CSS", "Material UI", "Firebase", "Stripe"],
    image: "💰",
    liveUrl: "https://example.com/wealth",
    githubUrl: "https://github.com/example/wealth",
  },
];

export const experienceData: Experience[] = [
  {
    id: "e1",
    role: "MERN Stack Developer",
    company: "Go-Globe (Remote)",
    period: "Jan 2026 - Present",
    description: [
      "Developed and maintained full-stack company features across both frontend and backend environments.",
      "Integrated Cloudflare R2 to handle video storage and delivery, optimizing streaming workflows and reducing asset-hosting overhead.",
      "Built international payment processing logic by integrating Tap and Stripe payment gateways.",
      "Programmed communication systems using the SendGrid API and connected automated scheduling modules with the Google Calendar API through Google Cloud Console.",
      "Managed remote backend infrastructure using SSH protocols and configured PM2 to monitor live processes and maintain runtime application uptime."
    ],
  },
  {
    id: "e2",
    role: "MERN Stack Developer",
    company: "Bitforce Solutions (Lahore, Remote)",
    period: "2023 - Dec 2025",
    description: [
      "Built end-to-end web and mobile applications using React and React Native, designing and connecting REST APIs with backend services.",
      "Developed serverless backend logic using Firebase Cloud Functions and structured Firebase Firestore databases with strict security rules.",
      "Refactored full-stack application data flows and asset management in Firebase Cloud Storage, improving overall performance and reducing latency by 20%.",
      "Built functional landing pages and web apps with React and Tailwind CSS, managing deployments and live hosting setups on Vercel and Netlify."
    ],
  },
];
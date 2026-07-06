import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabbit | Animated 3D Personal Portfolio",
  description: "High-performance creative portfolio featuring Next.js 16, Three.js, React Three Fiber, GSAP, and Framer Motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#09090b] text-white antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
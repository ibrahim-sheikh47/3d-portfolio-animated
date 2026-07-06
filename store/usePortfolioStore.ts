import { create } from "zustand";

interface PortfolioState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  mousePosition: { x: number; y: number };
  setMousePosition: (x: number, y: number) => void;
  isReducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeSection: "hero",
  setActiveSection: (section) => set({ activeSection: section }),
  mousePosition: { x: 0, y: 0 },
  setMousePosition: (x, y) => set({ mousePosition: { x, y } }),
  isReducedMotion: false,
  setReducedMotion: (reduced) => set({ isReducedMotion: reduced }),
}));
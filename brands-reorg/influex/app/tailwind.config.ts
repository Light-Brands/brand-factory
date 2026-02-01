import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Client Dashboard (Hub) - The heart
        hub: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        // Platform Core
        platform: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
        },
        // Brand Engine
        brand: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
          dark: "#0891B2",
        },
        // Sales Engine
        sales: {
          DEFAULT: "#EF4444",
          light: "#F87171",
          dark: "#DC2626",
        },
        // Marketing Engine
        marketing: {
          DEFAULT: "#F43F5E",
          light: "#FB7185",
          dark: "#E11D48",
        },
        // Promo Engine
        promo: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#D97706",
        },
        // Authority Engine
        authority: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        // Operations Engine
        operations: {
          DEFAULT: "#64748B",
          light: "#94A3B8",
          dark: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-ring": "glowRing 2s ease-out forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowRing: {
          "0%": { opacity: "1", transform: "scale(0.8)" },
          "100%": { opacity: "0", transform: "scale(2)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(16, 185, 129, 0.4)",
        "glow-hub": "0 0 60px rgba(16, 185, 129, 0.5)",
        "glow-platform": "0 0 40px rgba(59, 130, 246, 0.4)",
        "glow-brand": "0 0 40px rgba(6, 182, 212, 0.4)",
        "glow-sales": "0 0 40px rgba(239, 68, 68, 0.4)",
        "glow-marketing": "0 0 40px rgba(244, 63, 94, 0.4)",
        "glow-promo": "0 0 40px rgba(245, 158, 11, 0.4)",
        "glow-authority": "0 0 40px rgba(139, 92, 246, 0.4)",
        "glow-operations": "0 0 40px rgba(100, 116, 139, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;

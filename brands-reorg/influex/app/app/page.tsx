"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { LayoutDashboard, Sparkles } from "lucide-react";

// Dynamic import to avoid SSR issues with ReactFlow
const EcosystemMap = dynamic(() => import("@/components/EcosystemMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-hub/30 border-t-hub rounded-full animate-spin" />
    </div>
  ),
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introPhase, setIntroPhase] = useState(0);

  useEffect(() => {
    // Intro animation sequence
    const timers = [
      setTimeout(() => setIntroPhase(1), 500), // Logo appears
      setTimeout(() => setIntroPhase(2), 1500), // Glow rings
      setTimeout(() => setIntroPhase(3), 2500), // Text appears
      setTimeout(() => setShowIntro(false), 4000), // Transition out
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
          >
            {/* Logo Container */}
            <div className="relative">
              {/* Glow rings */}
              {introPhase >= 2 && (
                <>
                  <motion.div
                    initial={{ opacity: 1, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-[-40px] rounded-full border-2 border-hub/50"
                  />
                  <motion.div
                    initial={{ opacity: 1, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 2.5 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute inset-[-40px] rounded-full border border-hub/30"
                  />
                </>
              )}

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  introPhase >= 1
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-hub to-hub-dark flex items-center justify-center shadow-glow-hub"
              >
                <LayoutDashboard size={48} className="text-white" />
              </motion.div>
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                introPhase >= 3
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="mt-8 text-center"
            >
              <h1 className="text-3xl font-bold text-white mb-2">
                Influex Ecosystem
              </h1>
              <p className="text-white/60 flex items-center gap-2 justify-center">
                <Sparkles size={16} className="text-hub" />
                Client First. Always.
                <Sparkles size={16} className="text-hub" />
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? -20 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-0 left-0 right-0 z-10 p-6"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hub to-hub-dark flex items-center justify-center shadow-lg">
              <LayoutDashboard size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Influex Ecosystem</h1>
              <p className="text-xs text-white/50">Client-Centric Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="glass px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-hub animate-pulse" />
              <span className="text-sm text-white/70">
                7 Engines • 21 Components • 1 Vision
              </span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content - Ecosystem Map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full h-full pt-20"
      >
        <EcosystemMap />
      </motion.div>

      {/* Footer hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <p className="text-xs text-white/40">
          Click any node to explore • Scroll to zoom • Drag to pan
        </p>
      </motion.div>
    </main>
  );
}
